"use client";

import { BoltIcon, LayoutGrid, LogOut, SunMoonIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeChanger from "../ui/ThemeChanger";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // to close the menu when click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e) => {
      console.log(menuRef.current.contains(e.target));
      if (menuRef && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <div className="rounded-full relative h-9 w-9" ref={menuRef}>
      <button
        type="button"
        className="rounded-full focus:outline-0 border-2 border-neutral-300"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          className="rounded-full"
          src={"https://placehold.co/40"}
          alt="Default Avatar"
          height={40}
          width={40}
          unoptimized
        />
      </button>
      {isOpen && (
        <ul
          className={`profileDropdown absolute right-0 animate-scaleDownLeft ${
            isOpen ? "animate-scaleDownLeft" : "animate-scaleUpRight"
          }`}
        >
          <li className="flex gap-2 hover:font-normal hover:bg-transparent">
            <div>
              <Image
                className="rounded-full"
                src={"https://placehold.co/40"}
                alt="Default Avatar"
                height={40}
                width={40}
                unoptimized
              />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                User Name
              </p>
              <p className="text-xs text-neutral-400">Writter</p>
            </div>
          </li>
          <hr className="mb-2 text-neutral-200 dark:text-neutral-700" />
          <li className="dropdownItem">
            <Link href={"#"}>
              <LayoutGrid size={18} />
              Dashboard
            </Link>
          </li>
          <li className="dropdownItem">
            <Link href={"#"}>
              <BoltIcon size={18} />
              Settings
            </Link>
          </li>
          <li className="dropdownItem flex items-center justify-between">
            <Link href={"#"}>
              <SunMoonIcon size={18} />
              Toggle Mode
            </Link>

            <ThemeChanger />
          </li>
          <hr className="mt-2 text-neutral-200 dark:text-neutral-700" />
          <li className="dropdownItem text-red-500 hover:bg-red-50 dark:hover:bg-red-400/8">
            <Link href={"#"}>
              <LogOut size={18} />
              Log Out
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
