import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Post from '@/models/Post';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        // Basic validation could go here (Zod)

        // Check for unique slug
        if (body.slug) {
            const existing = await Post.findOne({ slug: body.slug });
            if (existing) {
                return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
            }
        }

        const post = await Post.create(body);
        return NextResponse.json({ success: true, data: post }, { status: 201 });
    } catch (error: any) {
        console.error("POST /api/posts Error:", error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Failed to create post',
            details: error.errors // Mongoose validation errors
        }, { status: 500 });
    }
}
