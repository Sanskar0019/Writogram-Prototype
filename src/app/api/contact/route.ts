import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, brand, website, message, services } = body;

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // For testing with Resend (free tier), you must send TO your verified email address.
        // Once domain is verified, you can send to any email.
        const recipientEmail = process.env.CONTACT_EMAIL || 'hello@narrativeartists.com';

        const servicesHtml = services?.length
            ? `<p><strong>Services Interested:</strong> ${services.join(', ')}</p>`
            : '';

        const data = await resend.emails.send({
            from: 'Narrative Artists Contact <onboarding@resend.dev>', // Use verified domain in prod
            to: [recipientEmail],
            subject: `New Inquiry from ${name}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${brand ? `<p><strong>Brand:</strong> ${brand}</p>` : ''}
                ${website ? `<p><strong>Website/Marketplace:</strong> ${website}</p>` : ''}
                ${servicesHtml}
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        console.log("Resend Response:", data);

        if (data.error) {
            console.error("Resend Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
