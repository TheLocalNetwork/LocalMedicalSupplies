import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "~/components/layout/Navbar";
import Provider from "~/components/layout/Provider";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local Medical Supplies",
  description: "Local Medical Supplies",
};

const themeLoaderScript = `
  try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } catch (_) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <script dangerouslySetInnerHTML={{ __html: themeLoaderScript }} />
      </head>
      <body
        className={clsx(
          inter.className,
          "mx-auto flex min-h-screen flex-col",
          "bg-white dark:bg-stone-800",
          "text-stone-900 dark:text-stone-100"
        )}
      >
        <Provider>
          <Navbar />
          <main className={clsx("mx-auto flex max-w-7xl flex-col sm:px-6 lg:px-8")}>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
