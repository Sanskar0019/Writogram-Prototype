import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/ui/BlogCard";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";

async function getPosts() {
    const conn = await dbConnect();
    if (!conn) return [];
    try {
        const posts = await Post.find({ status: 'published' })
            .sort({ createdAt: -1 })
            .lean();

        return posts.map((post: any) => ({
            category: post.category || "Uncategorized",
            title: post.title,
            date: new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            image: post.featuredImage || "/images/blog/store-anatomy.png", // Fallback
            slug: post.slug,
            readTime: "5 min read" // Placeholder calculation
        }));
    } catch {
        return [];
    }
}

export const dynamic = 'force-dynamic';

export default async function InsightsPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-serif text-black mb-8 tracking-tight">
                        Insights.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mb-16 leading-relaxed">
                        Thoughts on Amazon strategy, brand psychology, and the art of digital flagship design.
                    </p>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {posts.length > 0 ? (
                            posts.map((post: any, index: number) => (
                                <BlogCard key={index} {...post} />
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-20 bg-gray-50 rounded-2xl">
                                <p className="text-gray-400">No interesting thoughts yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
