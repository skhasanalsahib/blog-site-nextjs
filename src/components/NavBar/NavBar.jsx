import { Search, SquarePenIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ProfileDropdown from "./ProfileDropdown";

const NavBar = () => {
  return (
    <header className="px-5 py-2 mx-auto w-full max-w-[1280px] sticky top-0 left-0 z-[999] bg-neutral-50 dark:bg-neutral-800 rounded-b-xl ">
      <div className="flex items-center justify-center gap-4">
        {/* Site Logo */}
        <div>
          <Link href={"/"}>
            <h3>blog</h3>
          </Link>
        </div>

        {/* Nav */}
        {/* <nav>
            ul>li
        </nav> */}

        {/* Search Bar */}
        <SearchBar />

        {/* Sign Up | sign in btn*/}
        {/* <div className="flex items-center gap-4">
          <Link href={""}>Login</Link>
          <Link href={""} className="contained">
            Signup
          </Link>
        </div> */}

        {/* Login State */}
        <div className="flex items-center gap-4">
          <Link
            className="ghost !p-0 h-9 w-9 flex items-center justify-center "
            href={"#"}
            title="Write a post"
          >
            <SquarePenIcon strokeWidth={1} className="dark:text-neutral-50" />
          </Link>

          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
