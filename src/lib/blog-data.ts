export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    category: string;
    date: string;
    image: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "brand-store-anatomy",
        title: "The Anatomy of a High-Converting Brand Store",
        description: "How to structure your Amazon Storefront to guide discovery and drive basket size.",
        category: "Strategy",
        date: "Dec 12, 2024",
        image: "/images/blog/store-anatomy.png",
        readTime: "5 min read",
        content: `
            <p class="lead text-xl md:text-2xl font-medium text-gray-500 mb-8">
                Your Amazon Brand Store is the only place on the platform where you control the entire narrative. It’s not just a collection of products; it’s a digital flagship. Unlike Product Detail Pages (PDPs), which are optimized for conversion on a specific SKU, the Brand Store is optimized for <strong>brand equity</strong> and <strong>cross-selling</strong>.
            </p>
            
            <h2>1. The Navigation Strategy</h2>
            <p>Don't just replicate your website’s navigation. Amazon shoppers behave differently. They are often in "search mode" or "browse mode." Your navigation should reflect high-intent categories while also offering lifestyle-based grouping.</p>
            <ul>
                <li><strong>Simplify Hierarchy:</strong> Limit top-level tabs to 5-7 items.</li>
                <li><strong>Shop by Solution:</strong> Instead of just "T-Shirts," try "Work from Home Edit" or "Performance Gear."</li>
                <li><strong>Featured Deals:</strong> Always have a dedicated tab for sales to drive traffic during events like Prime Day.</li>
            </ul>

            <h2>2. The Hero Header</h2>
            <p>This is your billboard. It needs to do three things in 3 seconds: establish your vibe, show your best range, and tell the user they are in the right place. Avoid text-heavy banners; let the imagery do the heavy lifting.</p>
            <p>We typically recommend a <strong>video background</strong> for the hero section. Motion captures attention 40% faster than static images in a scrolling feed.</p>
            
            <h2>3. The "Bestseller" Anchor</h2>
            <p>Always anchor your homepage with your bestsellers. New users need social proof. Seeing what others are buying validates their decision to explore further.</p>

            <blockquote class="italic border-l-4 border-[#dcff0d] pl-6 my-12 py-2 text-2xl font-serif text-gray-800 bg-gray-50 rounded-r-lg">
                "A Brand Store is not a catalog. It's a guided tour of your product ecosystem. Every click should feel like a step deeper into your world."
            </blockquote>

            <h2>4. The Power of "Shoppable Images"</h2>
            <p>One of the most underutilized modules is the Shoppable Image. This allows you to place products in a lifestyle context—on a kitchen counter, in a gym, worn by a model—and tag them with "Add to Cart" buttons directly on the image.</p>
            <p>This reduces friction. The customer sees the look, wants the look, and buys the look without navigating away.</p>

            <h3>Key Takeaway</h3>
            <p>Treat your Brand Store as a living entity. Update it for seasons, launches, and traffic spikes. It's the highest ROI asset for retaining customers in the Amazon ecosystem.</p>
        `
    },
    {
        slug: "visual-hierarchy-guide",
        title: "Visual Hierarchy in A+ Content: A Guide",
        description: "Techniques to stop the scroll and communicate value in milliseconds.",
        category: "Design",
        date: "Dec 08, 2024",
        image: "/images/blog/store-anatomy.png",
        readTime: "4 min read",
        content: `
            <h2>Stop the Scroll</h2>
            <p>Mobile traffic on Amazon is over 70%. If your A+ content isn't legible on a 6-inch screen, it’s failing. Visual hierarchy is the tool we use to guide the eye through the chaos.</p>
            
            <h3>Contrast is King</h3>
            <p>Use scale and weight to differentiate sections. Your headline should be 3x the size of your body copy. Don't be afraid of whitespace. In a crowded marketplace, whitespace is a luxury signal.</p>
            
            <h3>Z-Pattern Layouts</h3>
            <p>For standard copy-image modules, alternate alignment (Left-Right, Right-Left) to create a natural reading rhythm (Z-Pattern). This prevents eye fatigue and keeps the user scrolling down.</p>
        `
    },
    {
        slug: "amazon-2025-trends",
        title: "Amazon 2025: The Shift to Premium Storytelling",
        description: "Why generic templates are dying and what's replacing them.",
        category: "Trends",
        date: "Nov 28, 2024",
        image: "/images/blog/store-anatomy.png",
        readTime: "6 min read",
        content: `
            <h2>The End of "Template" Culture</h2>
            <p>For years, brands got away with drag-and-drop modules. But as the marketplace matures, customers are becoming sophisticated. They can smell a template from a mile away.</p>
            
            <h3>Premium A+ is the New Standard</h3>
            <p>With Premium A+ (previously A++), brands have access to full-width video, interactive hotspots, and carousel modules. This isn't just a "nice to have" anymore; it's becoming the baseline for category leaders.</p>
            
            <h3>Video First</h3>
            <p>Static images are being replaced by motion. Background videos in Brand Stores and GIF-like auto-play videos in A+ content are driving significantly higher engagement rates.</p>
        `
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
    return blogPosts;
}
