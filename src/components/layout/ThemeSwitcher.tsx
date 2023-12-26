'use client';

import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleToggleTheme = (fromTheme: typeof theme) => {
    setTheme(fromTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = currentTheme === 'dark';
  const Icon = isDark ? SunIcon : MoonIcon;

  return (
    <button
      onClick={() => handleToggleTheme(currentTheme)}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="cursor-pointer rounded-lg p-2 transition hover:bg-stone-950/5 dark:hover:bg-stone-50/5"
    >
      <Icon
        className={clsx('size-5', {
          'text-yellow-400': isDark,
          'text-stone-700': !isDark,
        })}
      />
    </button>
  );
};

export default ThemeSwitcher;
