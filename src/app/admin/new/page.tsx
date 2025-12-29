"use client";
import React, { useState } from "react";
import Tiptap from "@/components/admin/editor/Tiptap";
import { ArrowLeft, Save, Eye, Rocket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function NewPostPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState({});
    const [status, setStatus] = useState("draft");
    const [isSaving, setIsSaving] = useState(false);

    // SEO Data State
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDesc, setSeoDesc] = useState("");

    const handleSave = async (newStatus = "draft") => {
        if (!title.trim()) {
            toast.warning("Please add a title before saving.");
            return;
        }

        setIsSaving(true);
        setStatus(newStatus);

        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    slug: slug || title.toLowerCase().replace(/ /g, "-"),
                    content,
                    status: newStatus,
                    seo: { title: seoTitle, description: seoDesc }
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to save");
            }

            toast.success(`Post ${newStatus === 'published' ? 'Published' : 'Saved'}!`);
            router.push("/admin/posts");
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "Failed to save post. Please try again.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
            {/* Main Column: Editor */}
            <div className="lg:col-span-2 space-y-6">
                {/* Header / Actions */}
                <div className="flex items-center justify-between">
                    <Link href="/admin" className="text-gray-500 hover:text-black flex items-center gap-2">
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => handleSave("draft")}
                            disabled={isSaving}
                            className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 flex items-center gap-2"
                        >
                            {isSaving ? "Saving..." : <><Save size={16} /> Save Draft</>}
                        </button>
                        <button
                            onClick={() => handleSave("published")}
                            disabled={isSaving}
                            className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-[#dcff0d] hover:text-black transition-colors flex items-center gap-2 shadow-sm"
                        >
                            <Rocket size={16} />
                            Publish
                        </button>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-4xl font-serif font-bold placeholder-gray-300 border-none focus:ring-0 bg-transparent p-0"
                />

                <Tiptap content={content} onChange={setContent} />
            </div>

            {/* Right Sidebar: Settings & SEO */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
                    <h3 className="font-bold text-gray-900 mb-4">Publishing Settings</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                placeholder="my-awesome-post"
                                className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                            />
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
                                <Eye size={14} className="text-[#dcff0d]" />
                                SEO Preview
                            </h4>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
                                <div className="text-blue-700 text-lg leading-tight truncate overflow-hidden cursor-pointer hover:underline mb-1">
                                    {seoTitle || title || "Post Title Preview"}
                                </div>
                                <div className="text-green-700 text-xs mb-1">
                                    https://narrativeartists.com/insights/{slug || "slug"}
                                </div>
                                <div className="text-gray-600 line-clamp-2 text-xs">
                                    {seoDesc || "Meta description preview... written to attract clicks from search engines."}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                            <input
                                type="text"
                                value={seoTitle}
                                onChange={(e) => setSeoTitle(e.target.value)}
                                className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                            <textarea
                                value={seoDesc}
                                onChange={(e) => setSeoDesc(e.target.value)}
                                className="w-full p-2 border border-gray-200 rounded-lg text-sm h-24 resize-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
