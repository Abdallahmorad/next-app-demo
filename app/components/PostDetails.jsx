import React from "react";

const PostDetails = async ({postId}) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await res.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
