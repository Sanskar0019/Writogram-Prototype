import Link from "next/link";
import dbConnect from "@/lib/db";
import Post from "@/models/Post";
import { PenTool, Eye, Trash2, MoreHorizontal } from "lucide-react";

async function getPosts() {
    await dbConnect();
    // Sort by newest first
    const posts = await Post.find({}).sort({ createdAt: -1 }).limit(50);
    return posts;
}

export const dynamic = 'force-dynamic';

export default async function AdminPostsPage() {
    const posts = await getPosts();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif font-bold text-gray-900">All Posts</h1>
                <Link
                    href="/admin/new"
                    className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-[#dcff0d] hover:text-black transition-colors"
                >
                    Create New Post
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-500">
                            <th className="p-6">Title</th>
                            <th className="p-6">Status</th>
                            <th className="p-6">Date</th>
                            <th className="p-6 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {posts.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="p-12 text-center text-gray-500">
                                    No posts found. Start writing!
                                </td>
                            </tr>
                        ) : (
                            posts.map((post: any) => (
                                <tr key={post._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="p-6">
                                        <div className="font-bold text-gray-900 mb-1">{post.title}</div>
                                        <div className="text-xs text-blue-600 font-mono">/{post.slug}</div>
                                    </td>
                                    <td className="p-6">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                    ${post.status === 'published' ? 'bg-[#dcff0d]/20 text-black' : 'bg-gray-100 text-gray-600'}`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="p-6 text-sm text-gray-500">
                                        {new Date(post.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-6 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link href={`/admin/edit/${post._id}`} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                                                <PenTool size={16} />
                                            </Link>
                                            <a href={`/insights/${post.slug}`} target="_blank" className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
                                                <Eye size={16} />
                                            </a>
                                            <button className="p-2 hover:bg-red-50 hover:text-red-600 rounded-full text-gray-400">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
