import axios from "axios";
import Post from "../components/Post";
export const metadata = {
  title: "posts",
};

const PostsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await res.json();


  return (
    <div className="container mx-auto mt-[50px] grid grid-cols-4 gap-10">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
