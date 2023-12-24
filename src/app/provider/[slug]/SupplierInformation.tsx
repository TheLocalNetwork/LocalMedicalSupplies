import {
  CalendarIcon,
  FlagIcon,
  IdentificationIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { Button } from "~/components/catalyst/button";
import {
  DescriptionList,
  DescriptionListItem,
  DescriptionListSection,
} from "~/components/elements/DescriptionListSection";
import { isoDateToLocaleDate } from "~/lib/string";
import { type IGeoSupplier } from "~/types/Supplier";
import { BooleanBadge } from "../../../components/elements/BooleanBadge";

export const generateSupplierInformationListItems = (supplier: IGeoSupplier) => {
  return [
    {
      term: `Practice Name`,
      Icon: IdentificationIcon,
      data: supplier.practice_name,
    },
    { term: "Business Name", Icon: IdentificationIcon, data: supplier.business_name },
    { term: "Provider ID", Icon: IdentificationIcon, data: supplier.provider_id },
    {
      term: "Phone Number",
      Icon: PhoneIcon,
      data: (
        <Button outline href={`tel:{supplier.phone}`}>
          <PhoneArrowUpRightIcon />
          {supplier.phone}
        </Button>
      ),
    },
    { term: "Street Address", Icon: MapPinIcon, data: supplier.address_1 },
    { term: "Street Address Line 2", Icon: IdentificationIcon, data: supplier.address_2 },
    { term: "City", Icon: MapPinIcon, data: supplier.CityName },
    { term: "County/Parish", Icon: MapPinIcon, data: supplier.CountyName },
    { term: "State", Icon: MapPinIcon, data: supplier.StateName },
    { term: "Zip Code", Icon: MapPinIcon, data: supplier.zip },
    {
      term: "Participation Begin Date",
      Icon: CalendarIcon,
      data: isoDateToLocaleDate(supplier.participation_begin_date),
    },
    { term: "Is Contracted For CBA", Icon: FlagIcon, data: <BooleanBadge value={supplier.is_contracted_for_cba} /> },
    { term: "Accepts Assignment", Icon: FlagIcon, data: <BooleanBadge value={supplier.accepts_assignment} /> },
  ];
};

export const SupplierInformation = ({ supplier }: { supplier: IGeoSupplier }) => {
  const supplierAddressListItems = generateSupplierInformationListItems(supplier);

  return (
    <DescriptionListSection
      title={
        <div className="flex items-center gap-2">
          <IdentificationIcon className="size-6 sm:size-8" />
          <div>Supplier Information</div>
        </div>
      }
      subtitle={<div>Location details and contact information</div>}
    >
      <DescriptionList>
        {supplierAddressListItems.map(({ term, Icon, data }) => (
          <DescriptionListItem key={term} term={term} Icon={Icon} data={data} />
        ))}
      </DescriptionList>
    </DescriptionListSection>
  );
};
