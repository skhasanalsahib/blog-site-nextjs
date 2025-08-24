"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className=" border border-neutral-400 h-7 w-7 rounded-full flex items-center justify-center"
    >
      {isDark ? (
        <SunIcon strokeWidth={1} size={20} />
      ) : (
        <MoonIcon strokeWidth={1} size={20} />
      )}
    </button>
  );
};

export default ThemeChanger;
