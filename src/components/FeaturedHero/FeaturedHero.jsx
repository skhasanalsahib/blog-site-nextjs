import Image from "next/image";

const FeaturedHero = ({ post }) => {
  post = {
    title: "Post Title Is Going To Be Here",
    body: "This is a small excerpt of the post body. Multiple line would look good. I think we could use css or maybe JS",
    tag: "featured",
  };

  return (
    <section className="w-full">
      <div className="px-5">
        <div className="bg-neutral-100 h-[400px] lg:h-[480px] rounded-2xl px-4 py-2 relative">
          <Image
            src={
              "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg"
            }
            fill
            alt="Featured"
            unoptimized
            className="absolute top-0 left-0 rounded-2xl h-full w-full object-cover z-0"
          />
          <div
            className="absolute left-0 bottom-0 w-full h-2/3 rounded-2xl pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          ></div>

          {/* Details */}
          <div className="w-full max-w-[1280px] absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-8 text-neutral-100 z-10">
            <h5 className="font-poppins text-base md:text-2xl capitalize">
              {post.tag}
            </h5>
            <h3 className="md:text-[3rem] capitalize">{post.title}</h3>
            <p className="text-neutral-100">{post.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHero;
