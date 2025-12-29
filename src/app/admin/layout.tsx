import Link from "next/link";
import { LayoutDashboard, FileText, Settings, PlusCircle, LogOut } from "lucide-react";
import { signOut } from "@/auth";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white p-6 flex flex-col fixed h-full">
                <div className="mb-10">
                    <h1 className="text-2xl font-serif font-bold tracking-tight">Narrative<br />Artists.</h1>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Admin Panel</p>
                </div>

                <nav className="space-y-2 flex-1">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                        <LayoutDashboard size={20} />
                        Dashboard
                    </Link>
                    <Link href="/admin/posts" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                        <FileText size={20} />
                        All Posts
                    </Link>
                    <Link href="/admin/new" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-[#dcff0d]">
                        <PlusCircle size={20} />
                        New Post
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-gray-400">
                        <Settings size={20} />
                        Settings
                    </Link>
                </nav>

                <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                    <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors w-full">
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </form>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
