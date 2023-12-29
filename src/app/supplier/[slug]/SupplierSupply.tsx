import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { sortBy } from 'lodash';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { getAllSupplierSupply } from '~/lib/db/supplier-supply/getAllSupplierSupply';
import { type ISupplier } from '~/types/Supplier';
import { List } from './List';

export interface ISupplierSupplyProps {
  supplier: ISupplier;
}
export const SupplierSupply: React.FC<ISupplierSupplyProps> = ({ supplier }) => {
  const supplies = getAllSupplierSupply({ provider_id: supplier.id });
  const listItems = sortBy(supplies ?? [], 'slug').map((item) => ({
    key: item.id,
    href: `/?category=${item.slug}`,
    content: (
      <>
        <CheckCircleIcon className="size-6 shrink-0 text-green-800 opacity-80  sm:size-5" />
        <span>{item.name}</span>
      </>
    ),
  }));

  return (
    <DescriptionListSection
      title="Supply Categories"
      id="categories"
      subtitle={
        <div>
          Following categories of medical equipment are supplied by{' '}
          <span className="whitespace-nowrap">{supplier.practice_name}</span>
        </div>
      }
    >
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        {listItems.length ? <List items={listItems} /> : <p>No Results</p>}
      </div>
    </DescriptionListSection>
  );
};
