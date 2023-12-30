import Link from 'next/link';

export interface IListItem {
  key: string | number;
  href: string;
  content: React.ReactNode;
}
export interface IListProps {
  items: IListItem[];
}
export const List = ({ items }: IListProps) => {
  return (
    <ul className="px-2 text-base sm:px-0">
      {items.map(({ key, href, content }) => {
        return (
          <li key={key}>
            <Link
              href={href}
              className="flex items-center gap-4 rounded p-2 py-4 hover:bg-zinc-100 hover:underline sm:gap-2 sm:p-2 dark:hover:bg-zinc-700"
            >
              {content}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
