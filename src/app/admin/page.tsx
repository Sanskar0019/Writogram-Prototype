export default function AdminDashboard() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Stats Cards */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-sm font-medium mb-1">Total Posts</div>
                    <div className="text-4xl font-bold text-gray-900">12</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-sm font-medium mb-1">Drafts</div>
                    <div className="text-4xl font-bold text-gray-900 text-orange-500">3</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-sm font-medium mb-1">published</div>
                    <div className="text-4xl font-bold text-gray-900 text-[#a2bd00]">9</div>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                    <button className="text-sm text-gray-500 hover:text-black">View all</button>
                </div>
                <div className="p-6 text-center py-20 bg-gray-50/50">
                    <p className="text-gray-400 mb-4">No recent activity found.</p>
                    <button className="px-6 py-2 bg-black text-white rounded-full font-medium text-sm hover:bg-[#dcff0d] hover:text-black transition-all">
                        Write your first post
                    </button>
                </div>
            </div>
        </div>
    );
}
