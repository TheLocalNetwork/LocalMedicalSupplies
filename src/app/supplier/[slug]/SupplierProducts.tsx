import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { type IGeoSupplier } from '~/types/Supplier';

export const SupplierProducts = ({ supplier }: { supplier: IGeoSupplier }) => {
  return (
    <DescriptionListSection
      title={
        <div className="flex items-center gap-2">
          <div>Supplier Products</div>
        </div>
      }
      subtitle={<div>TODO: Describe products at {supplier.practice_name}</div>}
      id={'products'}
    >
      {/* <DescriptionList>
        {supplierAddressListItems.map(({ term, Icon, data }) => (
          <DescriptionListItem key={term} term={term} Icon={Icon} data={data} />
        ))}
      </DescriptionList> */}
    </DescriptionListSection>
  );
};
