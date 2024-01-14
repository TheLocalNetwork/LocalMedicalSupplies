import ThemeSwitcher from '~/components/layout/ThemeSwitcher';

export const Navbar = () => {
  return (
    <>
      <header className="mx-auto w-full min-w-36 max-w-6xl p-6">
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 px-2 lg:px-0">
            <div className=" flex-shrink-0">
              <a href="/" target="_top">
                <img src={'/icon.svg'} alt={'Local Medical Supplies Logo'} className="size-8 drop-shadow-md" />
              </a>
            </div>
            <div className="text-center text-sm font-light opacity-70 sm:flex sm:text-2xl lg:text-3xl">
              <a className="hover:underline" href="/" target="_top">
                Local Medical Supplies
              </a>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            {/* <NavbarSearch /> */}
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};
