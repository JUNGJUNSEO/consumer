import mongoose from 'mongoose';
import { IUser } from './user';

export interface IPost extends mongoose.Document {
  title: string;
  owner_pick: number;
  reason: string;
  post_image: string;
  files: string[];
  texts?: string[];
  hashtags: string[];
  createdAt: Date;
  likes: mongoose.Types.ObjectId[];
  comments: mongoose.Types.ObjectId[];
  owner: IUser['_id'];
}

const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  owner_pick: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  post_image: {
    type: String,
    required: true,
  },
  files: {
    type: [String],
    required: true,
  },
  texts: {
    type: [String],
  },
  hashtags: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  likes: {
    type: [String],
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Comment',
    },
  ],
  
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Post = mongoose.models.Post as mongoose.Model<IPost> ||  mongoose.model<IPost>('Post', postSchema);

export default Post;