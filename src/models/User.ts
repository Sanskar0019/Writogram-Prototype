import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    email: string;
    passwordHash: string;
    role: 'admin' | 'editor';
    name?: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'editor'], default: 'admin' },
    name: { type: String },
}, { timestamps: true });

// Prevent overwrite on hot reload
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
