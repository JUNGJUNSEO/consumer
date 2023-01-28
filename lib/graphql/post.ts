export type PartialPost = {
    id: string;
    title: string;
    author: string;
    tags: string[];
    post_image: string;
    author_image:string
    updated_at: string;
    comments_count: number;
    likes: number;
    is_private: boolean;
}