import Link from 'next/link';
import { getBrowseLink } from '~/lib/link/browse';
import { getSupplierLink } from '~/lib/link/supplier';
import { type IGeoSupplierResults } from './lookupSuppliers';


export interface ISupplierResultProps {
  supplier: IGeoSupplierResults;
}
export const SupplierResult: React.FC<ISupplierResultProps> = ({ supplier }) => {
  const supplierLink = getSupplierLink(supplier);
  const stateLink = getBrowseLink({ state: supplier.StateSlug });
  const cityLink = getBrowseLink({ state: supplier.StateSlug, city: supplier.CitySlug });
  const zipLink = getBrowseLink({ zip: supplier.zip });

  return (
    <li key={supplier.id} className="p-4">
      <div className="text-xl">
        <Link href={supplierLink}>{supplier.practice_name}</Link>
      </div>

      <div className="py-1 text-sm">
        {supplier.practice_slug !== supplier.business_slug ? (
          <div>
            <Link href={supplierLink}>{supplier.business_name}</Link>
          </div>
        ) : null}

        <div>
          <Link href={cityLink}>{supplier.CityName}</Link>
          {', '}
          <Link href={stateLink}>{supplier.StateAbbr}</Link>
          {` `}
          <Link href={zipLink}>{supplier.zip}</Link>
        </div>
      </div>
    </li>
  );
};
