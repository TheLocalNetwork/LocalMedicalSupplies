import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Input } from '~/components/catalyst/input';

export const NavbarSearch = () => {
  return (
    <form action="/search" className="">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <Input id="search" name="search" className="" placeholder="Search" type="search" />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon className="size-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </form>
  );
};
