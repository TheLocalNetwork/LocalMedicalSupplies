import { notFound, permanentRedirect } from "next/navigation";
import SupplierSupply from "~/app/provider/[slug]/SupplierSupply";

const providerPageRegex = /^(\d{8})(-[\w-]+)?/;

import { Link } from "~/components/catalyst/link";
import { getSupplier } from "~/lib/db/supplier/get";
import { SupplierInformation } from "./SupplierInformation";

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
    <article className={`flex flex-col gap-12`}>
      <header className="flex flex-col gap-2">
        <h1 className={`letter text-2xl font-semibold leading-none tracking-tight sm:text-5xl`}>
          <Link href={`/provider/${slug}`}>{supplier.practice_name}</Link>
        </h1>
        <h2 className={`text-xs font-light sm:text-base`}>{supplier.business_name}</h2>
      </header>

      <SupplierInformation supplier={supplier} />
      <SupplierSupply provider_id={supplier.provider_id} />
    </article>
  );
}
