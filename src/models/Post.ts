import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPost extends Document {
    slug: string;
    title: string;
    content: object; // Tiptap JSON
    excerpt: string;
    status: 'draft' | 'published' | 'archived';
    publishedAt?: Date;
    seo: {
        title: string;
        description: string;
        keywords: string[];
    };
    featuredImage?: string;
    category: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema: Schema = new Schema({
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    content: { type: Object, required: true },
    excerpt: { type: String },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },
    publishedAt: { type: Date },
    seo: {
        title: { type: String },
        description: { type: String },
        keywords: [{ type: String }]
    },
    featuredImage: { type: String },
    category: { type: String },
    tags: [{ type: String }]
}, { timestamps: true });

// Prevent overwrite on hot reload
const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;
