import { compact, isNil, uniq } from 'lodash';
import { type Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { CANONICAL_SITE_NAME } from '~/lib/const';
import { getSupplierGeo } from '~/lib/db/supplier/getSupplierGeo';
import { getSupplierLink } from '~/lib/link/supplier';
import { SupplierHeader } from './SupplierHeader';
import { SupplierInformation } from './SupplierInformation';
import { SupplierJsonLD } from './SupplierJsonLD';
import { SupplierProducts } from './SupplierProducts';
import { SupplierProviderTypes } from './SupplierProviderTypes';
import { SupplierSpecialities } from './SupplierSpecialities';
import { SupplierSupply } from './SupplierSupply';

const providerPageRegex = /^(\d{8})(-[\w-]+)?/;
const getSupplierFromSlug = async (slug: string) => {
  const matchArray = slug.match(providerPageRegex);
  if (matchArray === null) return Promise.resolve(undefined);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_route_match, route_id, _route_practice_slug] = matchArray;
  if (!route_id) return Promise.resolve(undefined);

  const id = parseInt(route_id, 10);
  const supplier = getSupplierGeo({ id });
  if (!supplier) return Promise.resolve(undefined);

  return supplier;
};

interface IProps {
  params: { slug: string };
}
export default async function SupplierPage({ params }: IProps) {
  const { slug } = params;

  // eslint-disable-next-line no-console
  console.info({ slug });

  const supplier = await getSupplierFromSlug(slug);
  if (isNil(supplier)) return notFound();

  const supplierLink = getSupplierLink(supplier);
  const supplierSlug = supplierLink.split(`/`).pop();
  if (slug !== supplierSlug) permanentRedirect(supplierLink);

  return (
    <article className={'flex flex-col gap-12'}>
      <SupplierHeader supplier={supplier} />
      <SupplierJsonLD supplier={supplier} />
      <SupplierInformation supplier={supplier} />
      <SupplierSupply supplier={supplier} />
      <SupplierSpecialities supplier={supplier} />
      <SupplierProviderTypes supplier={supplier} />
      <SupplierProducts supplier={supplier} />
    </article>
  );
}
export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = params;

  const supplier = await getSupplierFromSlug(slug);
  if (isNil(supplier)) return {};

  const names = compact(uniq([supplier.practice_name, supplier.business_name]));
  const title = [...names, CANONICAL_SITE_NAME].join(' — ');

  return {
    title,
    description: `Learn about ${names.join(', ')}, in ${supplier.CityName}, ${supplier.StateName}`,
    alternates: {
      canonical: getSupplierLink(supplier, true),
    },
  };
}
