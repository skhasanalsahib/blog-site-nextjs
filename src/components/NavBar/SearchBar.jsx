"use client";
import { Search } from "lucide-react";
import { useRef } from "react";

const SearchBar = () => {
  const inputRef = useRef(null);

  return (
    <form className="bg-neutral-100 border border-neutral-200 inline-flex gap-2 px-2.5 py-1 rounded-full w-full">
      {/* TODO: change color on click */}
      <Search
        className="text-neutral-500"
        size={24}
        strokeWidth={1}
        absoluteStrokeWidth={true}
        onClick={() => inputRef.current && inputRef.current.focus()}
      />
      <input
        ref={inputRef}
        className="w-full border-0 focus:outline-0"
        type="search"
      />
    </form>
  );
};

export default SearchBar;
