import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { IPost } from './post';
import { IComment } from './comment';

export interface IUser extends Document {
  avatarUrl?: string;
  email: string;
  socialOnly?: boolean;
  username: string;
  password: string;
  name?: string;
  location?: string;
  introduction? : string
  posts: IPost['_id'][];
  readPosts: IPost['_id'][];
  comments: IComment["_id"][];
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  avatarUrl: String,
  email: { type: String, required: true, unique: true },
  socialOnly: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  name: { type: String, required: true},
  location: String,
  introduction: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  readPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId,
  }],
   
});

userSchema.pre<IUser>('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 5);
  }
  next();
});

const User = mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>('User', userSchema);

export default User;