import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { sortBy } from 'lodash';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { List } from '~/components/elements/List';
import { getAllSupplierProviderType } from '~/lib/db/supplier-providertype/getAllSupplierProviderType';
import { getBrowseLink } from '~/lib/link/browse';
import { type IGeoSupplier } from '~/types/Supplier';

export const SupplierProviderTypes = ({ supplier }: { supplier: IGeoSupplier }) => {
  const providerTypes = getAllSupplierProviderType({ provider_id: supplier.id });

  if (!providerTypes?.length) return null;

  const listItems = sortBy(providerTypes, 'slug').map((item) => ({
    key: item.id,
    href: getBrowseLink({ providertype: item.slug }),
    content: (
      <>
        <CheckCircleIcon className="size-6 shrink-0 text-green-800 opacity-80  sm:size-5" />
        <span>{item.name}</span>
      </>
    ),
  }));
  return (
    <DescriptionListSection id={'provider_types'} title={`Provider Types`}>
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        <List items={listItems} />
      </div>
    </DescriptionListSection>
  );
};
