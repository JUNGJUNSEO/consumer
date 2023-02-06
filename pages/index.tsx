import PostCardGrid from "@/components/common/PostCardGrid";
import ProductsComparisonTable from "@/components/post/ProductsComparisonTable";
import { PartialPost } from "@/lib/graphql/post";



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
  posts : PartialPost[]
}


function Homepage({posts} : PostCardProps){
  return (
    <>
      <PostCardGrid posts={posts}/>
      <ProductsComparisonTable/>
    </>
      
  )
}


export async function getStaticProps(){
    return  {
      props: {
        posts
      },
      revalidate: 3600
    }
}

export default Homepage