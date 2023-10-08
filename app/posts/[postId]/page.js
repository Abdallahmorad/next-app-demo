import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";
const PostDetailsPage = async ({ params }) => {


  return (
    <div className=" container mx-auto">
      <div>PostDetailsPage</div>
      <Suspense>
        <PostDetails postId={params.postId} />
      </Suspense>
    </div>
  );
};

export default PostDetailsPage;
