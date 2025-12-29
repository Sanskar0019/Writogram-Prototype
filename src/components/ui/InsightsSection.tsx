import Link from "next/link";
import { BlogCard } from "./BlogCard";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";

async function getRecentPosts() {
    await dbConnect();
    const posts = await Post.find({ status: 'published' })
        .sort({ createdAt: -1 })
        .limit(3)
        .lean();

    return posts.map((post: any) => ({
        category: post.category || "Uncategorized",
        title: post.title,
        date: new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        image: post.featuredImage || "/images/blog/store-anatomy.png",
        slug: post.slug,
        readTime: "5 min read"
    }));
}

export default async function InsightsSection() {
    const latestPosts = await getRecentPosts();

    return (
        <section className="bg-[#dcff0d] py-24 md:py-32 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <h2 className="text-6xl md:text-8xl font-serif text-black tracking-tight leading-[0.9]">
                        Insights.
                    </h2>
                    <div className="md:text-right">
                        <p className="text-xl font-medium text-black/80 max-w-md ml-auto mb-6">
                            Deep dives into Amazon strategy, brand psychology, and conversion design.
                        </p>
                        <Link href="/insights" className="inline-block border-b border-black pb-1 text-black font-bold uppercase tracking-widest text-sm hover:opacity-60 transition-opacity">
                            View all articles
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.length > 0 ? (
                        latestPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-10 opacity-50">
                            <p>No insights published yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
