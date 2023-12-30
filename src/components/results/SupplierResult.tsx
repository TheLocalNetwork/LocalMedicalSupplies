import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { Badge } from '~/components/catalyst/badge';
import { getParamsUrl, useGetStateParams } from '~/components/form/urlParams';
import { getBrowseLink } from '~/lib/link/browse';
import { getSupplierLink } from '~/lib/link/supplier';
import { type IGeoSupplierResults } from './lookupSuppliers';

export interface ISupplierResultProps {
  supplier: IGeoSupplierResults;
  urlSearchParams: URLSearchParams;
}
export const SupplierResult: React.FC<ISupplierResultProps> = ({ supplier, urlSearchParams }) => {
  const supplierLink = getSupplierLink(supplier);

  return (
    <li key={supplier.id} className="flex  w-full max-w-full flex-row items-center gap-6 overflow-auto px-2 py-6 ">
      <div className="hidden shrink lg:block">
        <Link href={supplierLink}>
          <InformationCircleIcon className="size-6 text-emerald-600 opacity-50 sm:size-16 dark:text-emerald-300" />
        </Link>
      </div>
      <div className="flex w-full max-w-full flex-col justify-between gap-3 overflow-hidden ">
        <Link
          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xl hover:underline"
          href={supplierLink}
        >
          {supplier.practice_name}
        </Link>

        <SupplierAddress supplier={supplier} urlSearchParams={urlSearchParams} className="" />
        <SupplierBadges supplier={supplier} className="" />
      </div>
      <div className="hidden shrink sm:block">
        <Link className="hover:underline" href={supplierLink}>
          <ChevronRightIcon className="size-8 opacity-50 hover:opacity-100" />
        </Link>
      </div>
    </li>
  );
};

interface ISupplierAddressProps extends React.ComponentPropsWithoutRef<'div'> {
  supplier: IGeoSupplierResults;
  urlSearchParams: URLSearchParams;
}
const SupplierAddress: React.FC<ISupplierAddressProps> = ({ supplier, urlSearchParams, className, ...attrs }) => {
  const supplierLink = getSupplierLink(supplier);
  const stateLink = getParamsUrl(useGetStateParams(urlSearchParams)(supplier.StateSlug));
  const cityLink = getBrowseLink({ state: supplier.StateSlug, city: supplier.CitySlug });
  const zipLink = getBrowseLink({ state: supplier.StateSlug, city: supplier.CitySlug, zip: supplier.zip });

  return (
    <div {...attrs} className={clsx('flex flex-col gap-2 px-2 text-xs italic leading-none opacity-70', className)}>
      {supplier.practice_slug !== supplier.business_slug ? (
        <div>
          <Link className="font-bold hover:underline" href={supplierLink}>
            {supplier.business_name}
          </Link>
        </div>
      ) : null}
      <div>
        <Link className="hover:underline" href={cityLink}>
          {supplier.CityName}
        </Link>
        {', '}
        <Link className="hover:underline" href={stateLink}>
          {supplier.StateAbbr}
        </Link>
        {` `}
        <Link className="hover:underline" href={zipLink}>
          {supplier.zip}
        </Link>
      </div>
    </div>
  );
};
interface ISupplierBadgesProps extends React.ComponentPropsWithoutRef<'div'> {
  supplier: IGeoSupplierResults;
}
const SupplierBadges: React.FC<ISupplierBadgesProps> = ({ supplier, className, ...attrs }) => {
  return (
    <div {...attrs} className={clsx('flex gap-2', className)}>
      <Badge
        color={supplier.accepts_assignment ? 'green' : 'red'}
        className={clsx({
          'opacity-50': !supplier.accepts_assignment,
        })}
      >
        <span className="hidden sm:block">{`Accepts Medicare Assignment`}</span>
        <abbr className="block cursor-help sm:hidden" title={`Accepts Assignment`}>{`Assignment`}</abbr>
      </Badge>
      <Badge
        color={supplier.is_contracted_for_cba ? 'green' : 'red'}
        className={clsx({
          'opacity-50': !supplier.is_contracted_for_cba,
        })}
      >
        <span className="hidden sm:block">{`Competitive Bidding Area`}</span>
        <abbr className="block cursor-help sm:hidden " title={`Competitive Bidding Area`}>{`CBA`}</abbr>
      </Badge>
    </div>
  );
};
