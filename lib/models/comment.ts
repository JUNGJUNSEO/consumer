import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user";
import { IPost } from "./post";

export interface IComment extends Document {
    writer: IUser['_id'];
    post: IPost['_id'];
    text: string;
    createdAt: Date;
}

const commentSchema: Schema<IComment> = new mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    
    },
    text: { 
        type: String, 
        required: true
    },
    createdAt: { 
        type: Date, 
        required: true, 
        default: Date.now
    }
})


const Comment = mongoose.models.Comment as mongoose.Model<IComment> || mongoose.model<IComment>('Comment', commentSchema);

export default Comment;