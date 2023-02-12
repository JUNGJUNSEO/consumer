import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    avatarUrl: String,
    email: { type: String, required: true, unique: true },
    socialOnly: { type: Boolean, default: false },
    username: { type: String, required: true, unique: true },
    password: { type: String },
    name: { type: String },
    location: String,
})


export default mongoose.model<typeof userSchema>('User', userSchema)