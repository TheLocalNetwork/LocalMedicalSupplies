import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { sortBy } from 'lodash';
import { List } from '~/app/supplier/[slug]/List';
import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { getAllSupplierSpeciality } from '~/lib/db/supplier-speciality/getAllSupplierSpeciality';
import { type IGeoSupplier } from '~/types/Supplier';

export const SupplierSpecialities = ({ supplier }: { supplier: IGeoSupplier }) => {
  const specialities = getAllSupplierSpeciality({ provider_id: supplier.id });

  if (!specialities?.length) return null;

  const listItems = sortBy(specialities, 'slug').map((item) => ({
    key: item.id,
    href: `/?speciality=${item.slug}`,
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
        <List items={listItems} />
      </div>
    </DescriptionListSection>
  );
};
