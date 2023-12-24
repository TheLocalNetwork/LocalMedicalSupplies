"use client";

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="h-8 w-8 flex-shrink-0 text-yellow-500" role="button" onClick={() => setTheme("light")} />
      );
    } else {
      return (
        <MoonIcon className="h-8 w-8 flex-shrink-0 text-gray-900" role="button" onClick={() => setTheme("dark")} />
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
