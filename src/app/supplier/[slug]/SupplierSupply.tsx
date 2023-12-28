import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { isNil, sortBy } from 'lodash';
import Link from 'next/link';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { getAllSupplierSupply } from '~/lib/db/supplier-supply/getAllSupplierSupply';
import { getSupplierGeo } from '~/lib/db/supplier/getSupplierGeo';
import { type ISupplier } from '~/types/Supplier';
import { type ISupply } from '~/types/tables';

export interface ISupplierSupplyProps {
  id: ISupplier['id'];
}
export default function SupplierSupply({ id }: ISupplierSupplyProps) {
  const supplier = getSupplierGeo({ id });
  const supplierSupplyCollection = getAllSupplierSupply({ provider_id: id });

  if (isNil(supplierSupplyCollection) || isNil(supplier)) return null;

  return (
    <DescriptionListSection
      title="Supply Categories"
      subtitle={
        <div>
          Following categories of medical equipment are supplied by{' '}
          <span className="whitespace-nowrap">{supplier.practice_name}</span>
        </div>
      }
    >
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        {isNil(supplierSupplyCollection) ? (
          <p>No Results</p>
        ) : (
          <SupplierSupplyList collection={supplierSupplyCollection} />
        )}
      </div>
    </DescriptionListSection>
  );
}

interface ISupplierSupplyListProps {
  collection: ISupply[];
}
export const SupplierSupplyList = ({ collection }: ISupplierSupplyListProps) => {
  const sorted = sortBy(collection, 'slug');

  return (
    <ul className="px-2 text-base sm:px-0">
      {sorted.map(({ id, name, slug }) => {
        const href = `/?category=${slug}`;

        return (
          <li key={id}>
            <Link
              href={href}
              className="flex items-center gap-4 rounded p-2 py-4 hover:bg-zinc-100 sm:gap-2 sm:p-2 dark:hover:bg-zinc-700"
            >
              <CheckCircleIcon className="size-6 shrink-0 text-green-800 opacity-80  sm:size-5" />
              <span>{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
