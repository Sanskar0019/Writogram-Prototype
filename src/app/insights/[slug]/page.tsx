import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import TiptapImage from '@tiptap/extension-image';
import TiptapLink from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';

interface Props {
    params: Promise<{
        slug: string;
    }>
}

async function getPost(slug: string) {
    const conn = await dbConnect();
    if (!conn) return null;
    try {
        const post = await Post.findOne({ slug, status: 'published' }).lean();
        if (!post) return null;
        return JSON.parse(JSON.stringify(post)); // Serialize
    } catch {
        return null;
    }
}

// Generate SEO Metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: "Article Not Found | Narrative Artists",
        };
    }

    return {
        title: `${post.seo?.title || post.title} | Insights`,
        description: post.seo?.description || post.excerpt,
        openGraph: {
            title: post.seo?.title || post.title,
            description: post.seo?.description || post.excerpt,
            type: "article",
            publishedTime: post.publishedAt || post.createdAt,
            images: post.featuredImage ? [{ url: post.featuredImage }] : [],
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Generate HTML from Tiptap JSON
    let htmlContent = "";
    try {
        if (post.content && typeof post.content === 'object') {
            htmlContent = generateHTML(post.content, [
                StarterKit,
                TiptapImage,
                TiptapLink,
                Youtube
            ]);
        }
    } catch (e) {
        console.error("Error generating HTML", e);
        htmlContent = "<p>Error loading content.</p>";
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <article className="pt-32 pb-24">
                {/* Hero Section */}
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black mb-12 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Insights
                    </Link>

                    <div className="mb-6 flex items-center gap-4 text-sm font-medium">
                        <span className="px-3 py-1 bg-[#dcff0d] text-black rounded-full uppercase tracking-wider text-xs font-bold">
                            {post.category || "Article"}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500">
                            <Clock className="w-4 h-4" />
                            5 min read
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight mb-8">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                        {post.excerpt || post.seo?.description}
                    </p>
                </div>

                {/* Hero Image */}
                {post.featuredImage && (
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-16">
                        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-gray-100">
                            <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                    <div
                        className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-[#dcff0d] prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />

                    <div className="mt-20 pt-12 border-t border-gray-100">
                        <h3 className="text-2xl font-serif mb-6">Share this article</h3>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all font-medium text-sm">
                                LinkedIn
                            </button>
                            <button className="px-6 py-2 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all font-medium text-sm">
                                Twitter
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
