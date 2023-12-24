"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "~/components/catalyst/button";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => setMounted(true), []);

  const handleToggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button plain onClick={handleToggleTheme} className="cursor-pointer">
      {currentTheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
