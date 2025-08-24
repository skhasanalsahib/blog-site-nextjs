import getSlug from "@/lib/getSlug";
import { MessageSquareIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthorAvatar from "../ui/AuthorAvatar";

const PostCard = ({ post }) => {
  const slug = getSlug(post.title);
  return (
    <Link
      href={`/posts/${slug}`}
      className="block bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-2xl"
    >
      <article className=" rounded-2xl">
        {/* post image */}
        <div className="bg-neutral-500 relative h-[285px] w-full rounded-2xl overflow-hidden">
          <Image
            src={"https://placehold.co/350x250"}
            alt="post image"
            fill
            unoptimized
            className="w-full object-cover"
          />
        </div>

        <div className="px-4 pb-4">
          {/* User Info */}
          <AuthorAvatar />

          {/* Post Data */}
          <h4 className="mb-2 capitalize">
            {post.title || "Post Title Will be here"}
          </h4>
          <p className="">
            {post.body.slice(1, 100) + "..." ||
              "Post body excerpt. 2 lines would look the best maybe. So let's try to make it 2 Line."}
          </p>

          {/* Date and other details */}
          <div className="mt-4 flex gap-8 items-center">
            <p className="text-xs text-neutral-400">24 Aug 2025</p>

            {/* Likes Report */}
            <div className=" flex gap-1 items-center">
              <ThumbsUpIcon className="text-neutral-400" size={16} />
              <p className="text-xs text-neutral-400">5</p>
            </div>

            {/* Comments Report */}
            <div className=" flex gap-1 items-center">
              <MessageSquareIcon className="text-neutral-400" size={16} />
              <p className="text-xs text-neutral-400">5</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
