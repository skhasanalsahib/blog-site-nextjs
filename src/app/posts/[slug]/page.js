import FeedbackButtons from "@/components/FeedbackButtons/FeedbackButtons";
import AuthorAvatar from "@/components/ui/AuthorAvatar";

const SinglePostPage = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <section>
      <div className="container !max-w-[800px]">
        <article>
          {/* Post Title */}
          <h1 className="mb-8">
            This is the heading of the post. Or you could say title{" "}
          </h1>

          <div className="flex flex-col-reverse md:gap-4 gap-2 md:flex-row md:items-center">
            <AuthorAvatar />
            <span className="dot-divider hidden md:block"></span>
            <p className="text-sm m-0">24 Aug 2025</p>
          </div>

          {/* Like Dislike */}
          <FeedbackButtons />
        </article>
      </div>
    </section>
  );
};

export default SinglePostPage;
