import { DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { type IGeoSupplier } from '~/types/Supplier';

export const SupplierProviderTypes = ({ supplier }: { supplier: IGeoSupplier }) => {
  return (
    <DescriptionListSection
      title={
        <div className="flex items-center gap-2">
          <div>Supplier Provider Types</div>
        </div>
      }
      subtitle={<div>TODO: Describe provider types at {supplier.practice_name}</div>}
      id={'provider_types'}
    >
      {/* <DescriptionList>
        {supplierAddressListItems.map(({ term, Icon, data }) => (
          <DescriptionListItem key={term} term={term} Icon={Icon} data={data} />
        ))}
      </DescriptionList> */}
    </DescriptionListSection>
  );
};
