'use client';
import clsx from 'clsx';
import { type LinkProps } from 'next/link';
import { type PropsWithChildren } from 'react';
import { Link } from '~/components/catalyst/link';

export const FilterButtonGroup: React.FC<PropsWithChildren> = ({ children }) => (
  <div data-slot="control">
    <span className="isolate inline-flex rounded-md shadow-sm">{children}</span>
  </div>
);
interface IFilterButtonGroupItemProps
  extends PropsWithChildren,
    LinkProps,
    Omit<React.ComponentPropsWithoutRef<'a'>, 'title'> {
  href: string;
  isSelected: boolean;
}
export const FilterButtonGroupItem: React.FC<IFilterButtonGroupItemProps> = ({
  href,
  isSelected,
  className,
  children,
  ...attrs
}) => (
  <Link
    {...attrs}
    href={href}
    className={clsx(
      'relative flex items-center gap-1 focus:z-10',
      'bg-white ring-zinc-200 hover:bg-zinc-50 hover:ring-zinc-300',
      'dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 hover:dark:ring-zinc-600',
      'px-3 py-2',
      'text-sm font-semibold ',
      'ring-1 ring-inset',
      'first:rounded-l-md last:rounded-r-md',
      {
        'opacity-50': isSelected,
      },
      className
    )}
  >
    {children}
  </Link>
);
