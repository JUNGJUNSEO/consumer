import { IPost } from "@/lib/models/post";
import { IUser } from "@/lib/models/user";

export interface ModelProps {
    user: IUser;
    post: IPost;
  }