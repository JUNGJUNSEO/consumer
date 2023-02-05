import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true},
    name: {type: String}
})


export default mongoose.model<typeof userSchema>('User', userSchema)