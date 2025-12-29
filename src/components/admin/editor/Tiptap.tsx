"use client";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Youtube from "@tiptap/extension-youtube";
import { Bold, Italic, Link as LinkIcon, Image as ImageIcon, Heading1, Heading2, Quote, List, ListOrdered, Check, X } from "lucide-react";
import { useState, useCallback } from "react";

interface EditorProps {
    content: any;
    onChange: (content: any) => void;
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
    const [isLinkOpen, setIsLinkOpen] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [url, setUrl] = useState("");

    const setLink = useCallback(() => {
        if (url) {
            // If the URL doesn't start with http/https, maybe prepend it or just let it be.
            // Tiptap usually handles this well, but let's be safe.
            const validUrl = /^https?:\/\//.test(url) ? url : `https://${url}`;

            editor?.chain().focus().extendMarkRange('link').setLink({ href: validUrl }).run();
        } else {
            editor?.chain().focus().extendMarkRange('link').unsetLink().run();
        }
        setIsLinkOpen(false);
        setUrl("");
    }, [editor, url]);

    const setImage = useCallback(() => {
        if (url) {
            editor?.chain().focus().setImage({ src: url }).run();
        }
        setIsImageOpen(false);
        setUrl("");
    }, [editor, url]);

    if (!editor) {
        return null;
    }

    return (
        <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2 sticky top-0 bg-white z-10 items-center">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("bold") ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <Bold size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("italic") ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <Italic size={18} />
            </button>

            <div className="w-px h-6 bg-gray-200 mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <Heading1 size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("heading", { level: 3 }) ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <Heading2 size={18} />
            </button>

            <div className="w-px h-6 bg-gray-200 mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("bulletList") ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <List size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("orderedList") ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <ListOrdered size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("blockquote") ? "bg-gray-100 text-black" : "text-gray-500"}`}
            >
                <Quote size={18} />
            </button>

            <div className="w-px h-6 bg-gray-200 mx-1 self-center" />

            {/* Link Button & Popover */}
            <div className="relative">
                <button
                    onClick={() => {
                        setIsLinkOpen(!isLinkOpen);
                        setIsImageOpen(false);
                        setUrl(editor.getAttributes('link').href || "");
                    }}
                    className={`p-2 rounded hover:bg-gray-100 ${editor.isActive("link") ? "bg-gray-100 text-black" : "text-gray-500"}`}
                >
                    <LinkIcon size={18} />
                </button>

                {isLinkOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-2 flex gap-2 w-64 z-50">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com"
                            className="flex-1 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-black"
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && setLink()}
                        />
                        <button onClick={setLink} className="p-1 hover:bg-gray-100 rounded text-green-600">
                            <Check size={16} />
                        </button>
                    </div>
                )}
            </div>

            {/* Image Button & Popover */}
            <div className="relative">
                <button
                    onClick={() => {
                        setIsImageOpen(!isImageOpen);
                        setIsLinkOpen(false);
                        setUrl("");
                    }}
                    className={`p-2 rounded hover:bg-gray-100 ${isImageOpen ? "bg-gray-100 text-black" : "text-gray-500"}`}
                >
                    <ImageIcon size={18} />
                </button>

                {isImageOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-2 flex gap-2 w-64 z-50">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Image URL..."
                            className="flex-1 text-sm border border-gray-200 rounded px-2 py-1 outline-none focus:border-black"
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && setImage()}
                        />
                        <button onClick={setImage} className="p-1 hover:bg-gray-100 rounded text-green-600">
                            <Check size={16} />
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

const Tiptap = ({ content, onChange }: EditorProps) => {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-500 underline',
                }
            }),
            Youtube,
            Placeholder.configure({
                placeholder: "Write something amazing...",
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: "prose prose-lg max-w-none focus:outline-none min-h-[500px] p-8",
            },
        },
        onUpdate: ({ editor }: { editor: Editor }) => {
            onChange(editor.getJSON());
        },
    });

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-visible shadow-sm min-h-[600px] flex flex-col z-0 relative">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className="flex-1" />
        </div>
    );
};

export default Tiptap;
