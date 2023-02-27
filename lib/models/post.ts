import mongoose, { Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  owner_pick: number;
  reason: string;
  post_image: string;
  files: string[];
  text?: string;
  texts?: string[][];
  hashtags: string[];
  createdAt: Date;
  meta: {
    likes: number;
    comments_count: number;
  };
  comments: mongoose.Schema.Types.ObjectId[];
  owner: mongoose.Schema.Types.ObjectId;
}

const postSchema = new mongoose.Schema({
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
    type: [[String]],
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
  meta: {
    likes: {
      type: Number,
      default: 0,
      required: true,
    },
    comments_count: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'comment',
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
});



const Post = mongoose.models.Post ||  mongoose.model<IPost>('Post', postSchema);

export default Post;