import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { isNil } from 'lodash';
import Link from 'next/link';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { getSupplierSupplyCollection } from '~/lib/db/supplier-supply/get';
import { getSupplier } from '~/lib/db/supplier/get';
import { slugify } from '~/lib/string';
import { type ISupplier, type ISupply } from '~/types/Supplier';

export interface ISupplierSupplyProps {
  provider_id: ISupplier['provider_id'];
}
export default function SupplierSupply({ provider_id }: ISupplierSupplyProps) {
  const supplier = getSupplier(provider_id);
  const supplierSupplyCollection = getSupplierSupplyCollection(provider_id);

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
  const slugged = collection.map((item) => ({
    ...item,
    slug: slugify(item.name),
  }));

  const sorted = slugged.sort((a, b) => a.slug.localeCompare(b.slug));

  return (
    <ul className="px-2 text-base sm:px-0">
      {sorted.map(({ id, name, slug }) => {
        const href = `/supply-category/${slug}`;

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