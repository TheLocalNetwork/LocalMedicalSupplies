'use server';
import clsx from 'clsx';
import Link from 'next/link';
import { type PropsWithChildren } from 'react';

interface ILinkButtonProps extends PropsWithChildren {
  href: string;
}
export const LinkButton: React.FC<ILinkButtonProps> = ({ href, children }: ILinkButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx([
        'block max-w-full overflow-hidden text-ellipsis whitespace-nowrap',
        'rounded-xl hover:bg-zinc-200/10 hover:underline dark:hover:bg-zinc-700/10',
        'p-4 sm:py-2',
      ])}
    >
      {children}
    </Link>
  );
};
