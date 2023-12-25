import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import icon from "~/app/icon.svg";
import { Button } from "~/components/catalyst/button";
import { Link } from "~/components/catalyst/link";
import ThemeSwitcher from "~/components/layout/ThemeSwitcher";
import { NavbarSearch } from "./NavbarSearch";

export const Navbar = () => {
  return (
    <>
      <header className="mx-auto w-full min-w-36 p-6">
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 px-2 lg:px-0">
            <div className=" flex-shrink-0">
              <Link href="/">
                <Image src={icon} alt={"Local Medical Supplies Logo"} className="size-8 drop-shadow-md" />
              </Link>
            </div>
            <div className="hidden text-xl font-light opacity-70 md:flex md:text-2xl lg:text-3xl">
              <Link href="/">Local Medical Supplies</Link>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div>
              <Button href="/browse" outline className="shadow-sm">
                <AdjustmentsHorizontalIcon className="size-8" />
                Browse
              </Button>
            </div>
            <NavbarSearch />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};
