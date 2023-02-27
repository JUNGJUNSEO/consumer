import mongoose, { Model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUserDocument extends Document {
  avatarUrl?: string;
  email: string;
  socialOnly?: boolean;
  username: string;
  password?: string;
  name?: string;
  location?: string;
  posts: mongoose.Schema.Types.ObjectId[];
}

interface IUserModel extends Model<IUserDocument> {}

const userSchema: Schema<IUserDocument, IUserModel> = new mongoose.Schema({
  avatarUrl: String,
  email: { type: String, required: true, unique: true },
  socialOnly: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: String,
  name: String,
  location: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'post',
  }]
});

userSchema.pre<IUserDocument>('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 5);
  }
  next();
});

const User: IUserModel = mongoose.models.User || mongoose.model<IUserDocument, IUserModel>('User', userSchema);

export default User;