import Link from 'next/link';
import ThemeSwitcher from '~/components/layout/ThemeSwitcher';
import { NavbarSearch } from './NavbarSearch';

export const Navbar = () => {
  return (
    <>
      <header className="mx-auto w-full min-w-36 max-w-6xl p-6">
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 px-2 lg:px-0">
            <div className=" flex-shrink-0">
              <Link href="/">
                <img src={'/icon.svg'} alt={'Local Medical Supplies Logo'} className="size-8 drop-shadow-md" />
              </Link>
            </div>
            <div className="hidden text-xl font-light opacity-70 md:flex md:text-2xl lg:text-3xl">
              <Link className="hover:underline" href="/">
                Local Medical Supplies
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <NavbarSearch />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};
