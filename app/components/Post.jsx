"use client";

import Link from "next/link";

const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="border rounded-md p-3">
        <h1>title: {post.title}</h1>
        <p> body :{post.body}</p>
      </div>
    </Link>
  );
};

export default Post;
