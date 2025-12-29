const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const MONGODB_URI = 'mongodb+srv://tsanskar400:Tiwari564@cluster0.c5y7s.mongodb.net/narrative_artists_db?retryWrites=true&w=majority';

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: 'admin' },
    name: { type: String },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seed() {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');

    const email = 'admin@narrativeartists.com';
    const password = 'password123'; // CHANGE THIS

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log('Admin user already exists');
        process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        email,
        passwordHash: hashedPassword,
        name: 'Admin',
        role: 'admin'
    });

    console.log('Admin user created');
    console.log('Email:', email);
    console.log('Password:', password);
    process.exit(0);
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});
