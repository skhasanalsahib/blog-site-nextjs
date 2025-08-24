import Link from "next/link";
import PostCard from "../PostCard/PostCard";
import { Suspense } from "react";

const RecentPosts = () => {
  const posts = fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json())
    .then((posts) =>
      posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })
    );

  return (
    <section>
      <div className="container">
        <h3 className="font-poppins text-2xl mb-4">Recent Posts</h3>

        {/* 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {posts}
        </div>
        <Link
          className="block w-max mx-auto contained !font-normal mt-6"
          href={""}
        >
          See more
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
