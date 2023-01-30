import PostCardGrid from "@/components/common/PostCardGrid";
import Post from "@/components/post/Post";



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





function Homepage(){
  return (
    <>
      <PostCardGrid posts={posts}/>
      <Post/>
    </>
    
  )
}


export default Homepage