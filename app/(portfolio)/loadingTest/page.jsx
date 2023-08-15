import React, { Suspense } from "react";
import Post from "../../../components/post";
import Loading from "../../loading";
export default function Page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Post />
      </Suspense>
    </div>
  );
}
