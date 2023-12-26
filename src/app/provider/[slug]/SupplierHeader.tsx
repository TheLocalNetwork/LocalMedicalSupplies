import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "~/components/catalyst/link";
import { IGeoSupplier } from "~/types/Supplier";

export interface ISupplierHeaderProps {
  supplier: IGeoSupplier;
  canonical: string;
}
export const SupplierHeaderOld: React.FC<ISupplierHeaderProps> = ({ supplier, canonical }) => {
  return (
    <header className="flex flex-col gap-2">
      <h1 className={`letter text-2xl font-semibold leading-none tracking-tight sm:text-5xl`}>
        <Link href={`/provider/${canonical}`}>{supplier.practice_name}</Link>
      </h1>
      <h2 className={`text-xs font-light sm:text-base`}>{supplier.business_name}</h2>
    </header>
  );
};

const links = [
  { name: "Location", href: "#SupplierInformation" },
  { name: "Supplies", href: "#SuppliesAvailable" },
  { name: "Specialites", href: "#ProviderSpecialites" },
  { name: "Provider Type", href: "#ProviderType" },
];

export const SupplierHeader: React.FC<ISupplierHeaderProps> = ({ supplier, canonical }) => {
  return (
    <div className="relative isolate overflow-hidden  bg-zinc-500 py-24 text-zinc-50 sm:py-24">
      <img
        src="/bg/pawel-czerwinski-ERcQ81KaX9g-unsplash.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-50 md:object-center"
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 drop-shadow-lg sm:text-5xl">
            <Link href={`/provider/${canonical}`}>{supplier.practice_name}</Link>
          </h2>

          <p className="mt-6 text-base leading-8 drop-shadow-lg sm:text-lg">
            {`Learn about medical supplies available at ${supplier.practice_name}, located in ${supplier.CityName}, ${supplier.StateName}.`}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-2xl font-semibold leading-7 drop-shadow-lg sm:grid-cols-2 md:flex md:text-base lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center gap-2 whitespace-nowrap">
                <span>{link.name}</span>
                <span aria-hidden="true">
                  <ArrowRightCircleIcon className="size-5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
