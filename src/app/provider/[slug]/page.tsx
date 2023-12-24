import { isNil } from "lodash";
import { notFound, permanentRedirect } from "next/navigation";
import SupplierSupply from "~/app/provider/[slug]/SupplierSupply";

const providerPageRegex = /^(\d{8})(-[\w-]+)?/;

import { getSupplier } from "~/lib/db/supplier/get";
import { IGeoSupplier } from "~/types/Supplier";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const matchArray = slug.match(providerPageRegex);
  if (matchArray === null) return notFound();

  const [_route_match, route_provider_id, _route_practice_slug] = matchArray;
  if (!route_provider_id) return notFound();

  const supplier = await getSupplier(parseInt(route_provider_id, 10));
  if (!supplier) return notFound();

  const canonicalPath = `${route_provider_id}-${supplier.practice_slug}`;
  if (slug !== canonicalPath) return permanentRedirect(canonicalPath);

  return (
    <article className={`m-12 flex flex-col gap-8`}>
      <header>
        <h1 className={`text-6xl font-light`}>{supplier.practice_name}</h1>
        <h2 className={`text-xl font-light`}>{supplier.business_name}</h2>
      </header>

      <SupplierAddress supplier={supplier} />
      <SupplierSupply provider_id={supplier.provider_id} />
    </article>
  );
}

export const SupplierAddress = ({ supplier }: { supplier: IGeoSupplier }) => {
  const items = [
    { term: "Practice Name", data: supplier.practice_name },
    { term: "Business Name", data: supplier.business_name },
    { term: "Street Address", data: supplier.address_1 },
    { term: "Street Address Line 2", data: supplier.address_2 },
    { term: "Provider ID", data: supplier.provider_id },
    { term: "Phone Number", data: supplier.phone },
    { term: "City", data: supplier.CityName },
    { term: "County", data: supplier.CountyName },
    { term: "State", data: supplier.StateName },
    { term: "Zip Code", data: supplier.zip },
    {
      term: "Is Contracted For CBA",
      data: supplier.is_contracted_for_cba ? "Yes" : "No",
    },
    {
      term: "Participation Begin Date",
      data: supplier.participation_begin_date ? new Date(supplier.participation_begin_date).toLocaleDateString() : null,
    },
    {
      term: "Accepts Assignment",
      data: supplier.accepts_assignment ? "Yes" : "No",
    },
  ];

  return (
    <section>
      <div className="px-4 sm:px-0">
        <h3 className="text-3xl font-semibold leading-7 ">Supplier Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 opacity-60">Location details and contact information</p>
      </div>
      <DescriptionList>
        {items.map(({ term, data }) => {
          return <DescriptionListItem key={term} term={term} data={data} />;
        })}
      </DescriptionList>
    </section>
  );
};

export const DescriptionList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-6 border-t border-black/10 dark:border-white/10">
      <dl className="divide-y divide-black/10 dark:divide-white/10">{children}</dl>
    </div>
  );
};

interface IDescriptionListItemProps {
  term: string;
  data?: string | number | null;
}
export const DescriptionListItem = ({ term, data }: IDescriptionListItemProps) => {
  if (isNil(data)) return null;

  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <DescriptionListItemTerm term={term} />
      <DescriptionListItemData data={data} />
    </div>
  );
};

interface IDescriptionListItemTermProps {
  term: string;
}
export const DescriptionListItemTerm = ({ term }: IDescriptionListItemTermProps) => {
  return <dt className="text-sm font-medium leading-6 ">{term}</dt>;
};

interface IDescriptionListItemDataProps {
  data: string | number;
}
export const DescriptionListItemData = ({ data }: IDescriptionListItemDataProps) => {
  return <dd className="mt-1 text-sm leading-6 opacity-50 sm:col-span-2 sm:mt-0">{data}</dd>;
};
