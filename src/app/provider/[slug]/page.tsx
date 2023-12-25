import { isNil } from "lodash";
import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { JsonLD } from "~/app/provider/[slug]/JsonLD";
import SupplierSupply from "~/app/provider/[slug]/SupplierSupply";
import { Link } from "~/components/catalyst/link";
import { CANONICAL_DOMAIN_NAME, CANONICAL_SITE_NAME } from "~/lib/const";
import { getSupplier } from "~/lib/db/supplier/get";
import { SupplierInformation } from "./SupplierInformation";

const providerPageRegex = /^(\d{8})(-[\w-]+)?/;

const getSupplierFromSlug = async (slug: string) => {
  const matchArray = slug.match(providerPageRegex);
  if (matchArray === null) return Promise.resolve(undefined);

  const [_route_match, route_provider_id, _route_practice_slug] = matchArray;
  if (!route_provider_id) return Promise.resolve(undefined);

  const supplier = await getSupplier(parseInt(route_provider_id, 10));
  if (!supplier) return Promise.resolve(undefined);

  const canonical = `${route_provider_id}-${supplier.practice_slug}`;

  return {
    supplier,
    canonical,
  };
};

interface IProps {
  params: { slug: string };
}
export const runtime = "nodejs";
export default async function Page({ params }: IProps) {
  const { slug } = params;

  const providerMeta = await getSupplierFromSlug(slug);
  if (isNil(providerMeta?.supplier)) return notFound();
  const { supplier, canonical } = providerMeta;
  if (slug !== canonical) return permanentRedirect(canonical);

  return (
    <>
      <article className={`flex flex-col gap-12`}>
        <header className="flex flex-col gap-2">
          <h1 className={`letter text-2xl font-semibold leading-none tracking-tight sm:text-5xl`}>
            <Link href={`/provider/${slug}`}>{supplier.practice_name}</Link>
          </h1>
          <h2 className={`text-xs font-light sm:text-base`}>{supplier.business_name}</h2>
        </header>

        <JsonLD supplier={supplier} canonical={canonical} />
        <SupplierInformation supplier={supplier} />
        <SupplierSupply provider_id={supplier.provider_id} />
      </article>
    </>
  );
}
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = params;

  const providerMeta = await getSupplierFromSlug(slug);
  if (isNil(providerMeta?.supplier)) return {};
  const { supplier, canonical } = providerMeta;

  return {
    title: `${supplier.practice_name} — ${CANONICAL_SITE_NAME}`,
    description: `Learn about ${supplier.practice_name} in ${supplier.CityName}, ${supplier.StateName}, at ${CANONICAL_DOMAIN_NAME}`,
    alternates: {
      canonical: `${CANONICAL_DOMAIN_NAME}/provider/${canonical}`,
    },
  };
}
