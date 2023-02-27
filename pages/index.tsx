import PostCardGrid from "@/components/common/PostCardGrid";
import ProductsComparisonTable from "@/components/post/ProductsComparisonTable";
import dbConnect from "@/lib/dbConnect";
import { PartialPost } from "@/lib/graphql/post";
import { middleware } from "@/lib/middleware";
import Post, { IPost } from "@/lib/models/post";
import { GetServerSideProps } from "next";



const posts = [
  {
    id: "m1",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    tags: ["삼성", "LG"],
    post_image: "https://codyhouse.co/app/assets/img/article-preview-img-1.jpg",
    author_image: "https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg",
    updated_at: "2023-01-26",
    comments_count: 10,
    likes: 10,
    is_private: false,
    author: "Olivia Gribben"
  },

  {
    id: "m2",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    tags: ["삼성", "LG"],
    post_image: "https://codyhouse.co/app/assets/img/article-preview-img-1.jpg",
    author_image: "https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg",
    updated_at: "2023-01-26",
    comments_count: 10,
    likes: 10,
    is_private: false,
    author: "Olivia Gribben"
  },

  {
    id: "m3",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    tags: ["삼성", "LG"],
    post_image: "https://codyhouse.co/app/assets/img/article-preview-img-1.jpg",
    author_image: "https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg",
    updated_at: "2023-01-26",
    comments_count: 10,
    likes: 10,
    is_private: false,
    author: "Olivia Gribben"
  },

  {
    id: "m4",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    tags: ["samsung", "LG"],
    post_image: "https://codyhouse.co/app/assets/img/article-preview-img-1.jpg",
    author_image: "https://codyhouse.co/app/assets/img/article-preview-img-author-1.svg",
    updated_at: "2023-01-26",
    comments_count: 10,
    likes: 10,
    is_private: false,
    author: "Olivia Gribben"
  },

];


export type PostCardProps = {
  posts : IPost[]
}


function Homepage({posts} : PostCardProps){
  return (
    <>
      <PostCardGrid posts={posts}/>
    </>
      
  )
}


export const getServerSideProps: GetServerSideProps = async(context) => {

  try {
    await dbConnect()
    const posts: IPost[] = await Post.find({})

    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error){
    console.log(error)
  }


}


export default Homepage