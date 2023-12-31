import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { sortBy } from 'lodash';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { EmptyState } from '~/components/elements/EmptyState';
import { List } from '~/components/elements/List';
import { getAllSupplierSpeciality } from '~/lib/db/supplier-speciality/getAllSupplierSpeciality';
import { getBrowseLink } from '~/lib/link/browse';
import { type IGeoSupplier } from '~/types/Supplier';

export const SupplierSpecialities = ({ supplier }: { supplier: IGeoSupplier }) => {
  const specialities = getAllSupplierSpeciality({ provider_id: supplier.id });

  const listItems = sortBy(specialities, 'slug').map((item) => ({
    key: item.id,
    href: getBrowseLink({ speciality: item.slug }),
    content: (
      <>
        <CheckCircleIcon className="size-6 shrink-0 text-green-800 opacity-80  sm:size-5" />
        <span>{item.name}</span>
      </>
    ),
  }));

  return (
    <DescriptionListSection id={'specialities'} title={`Specialities`}>
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        {specialities?.length ? <List items={listItems} /> : <EmptyState>No reported specialities</EmptyState>}
      </div>
    </DescriptionListSection>
  );
};
