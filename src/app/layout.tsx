import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Footer } from '~/components/layout/Footer';
import { Navbar } from '~/components/layout/Navbar';
import Provider from '~/components/layout/Provider';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Local Medical Supplies',
  description: 'Local Medical Supplies',
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
        <Script
          async
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2680194687384513"
        ></Script>
      </head>
      <body
        className={clsx([
          inter.className,
          ' mx-auto flex min-h-screen flex-col gap-6',
          'bg-zinc-50 dark:bg-zinc-900',
          'text-zinc-600 dark:text-zinc-300',
          'text-base/6 sm:text-sm/6',
        ])}
      >
        <Provider>
          <Navbar />
          <main className={clsx('flex flex-col')}>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
