import Image from "next/image";

const AuthorAvatar = () => {
  return (
    <div className="flex gap-2 items-center mt-2 mb-2">
      <Image
        src={"https://placehold.co/40"}
        alt="avatar"
        height={40}
        width={40}
        unoptimized
        className="rounded-full"
      />
      <div>
        <p className="text-neutral-900 dark:text-neutral-50">User Name</p>
      </div>
    </div>
  );
};

export default AuthorAvatar;
