import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-2">
      <div className="container bg-neutral-800 rounded-2xl flex items-center gap-12">
        <div>
          <Link href={"/"}>
            <h3 className="text-white">blog</h3>
          </Link>
        </div>

        <ul className="text-sm text-white flex gap-8">
          <li>Home</li>
          <li>Signup</li>
          <li>Login</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
