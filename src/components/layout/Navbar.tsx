import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import icon from "~/app/icon.svg";
import { Link } from "~/components/catalyst/link";
import ThemeSwitcher from "~/components/layout/ThemeSwitcher";

export const Navbar = () => {
  return (
    <>
      <header className="min-w-36 p-6">
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 px-2 lg:px-0">
            <div className=" flex-shrink-0">
              <Link href="/">
                <Image src={icon} alt={"Local Medical Supplies Logo"} className="size-8 drop-shadow-md" />
              </Link>
            </div>
            <div className="hidden text-xl font-light opacity-70 md:flex">
              <Link href="/">Local Medical Supplies</Link>
            </div>
          </div>

          <div className="flex items-center justify-end gap-6 px-2">
            <form action="/search" className="">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="focus:ring-teal-600-600 block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};
