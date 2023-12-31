import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { sortBy } from 'lodash';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { EmptyState } from '~/components/elements/EmptyState';
import { getAllSupplierSupply } from '~/lib/db/supplier-supply/getAllSupplierSupply';
import { getBrowseLink } from '~/lib/link/browse';
import { type ISupplier } from '~/types/Supplier';
import { List } from '../../../components/elements/List';

export interface ISupplierSupplyProps {
  supplier: ISupplier;
}
export const SupplierSupply: React.FC<ISupplierSupplyProps> = ({ supplier }) => {
  const supplies = getAllSupplierSupply({ provider_id: supplier.id });

  const listItems = sortBy(supplies, 'slug').map((item) => ({
    key: item.id,
    href: getBrowseLink({ category: item.slug }),
    content: (
      <>
        <CheckCircleIcon className="size-6 shrink-0 text-green-800 opacity-80  sm:size-5" />
        <span>{item.name}</span>
      </>
    ),
  }));

  return (
    <DescriptionListSection
      id="categories"
      title="Equipment Categories"
      subtitle={
        <div>
          <span>
            This supplier is licensed to carry the following equipment. Contact the supplier to confirm which products
            are currently in stock.
          </span>
        </div>
      }
    >
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        {supplies?.length ? <List items={listItems} /> : <EmptyState>No reported equipment categories</EmptyState>}
      </div>
    </DescriptionListSection>
  );
};
