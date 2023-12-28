import {
  CalendarIcon,
  FlagIcon,
  IdentificationIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
  PhoneIcon,
} from '@heroicons/react/16/solid';
import { compact } from 'lodash';
import Link from 'next/link';
import { Button } from '~/components/catalyst/button';
import { BooleanBadge } from '~/components/elements/BooleanBadge';
import {
  DescriptionList,
  DescriptionListItem,
  DescriptionListSection,
} from '~/components/elements/DescriptionListSection';
import { getSupplierLink } from '~/lib/link/supplier';
import { isoDateToLocaleDate } from '~/lib/string';
import { type IGeoSupplier } from '~/types/Supplier';

export const generateSupplierInformationListItems = (supplier: IGeoSupplier) => {
  return compact([
    { term: 'Provider ID', Icon: IdentificationIcon, data: supplier.id },
    { term: 'Practice Name', Icon: IdentificationIcon, data: supplier.practice_name },
    supplier.practice_slug !== supplier.business_slug
      ? { term: 'Business Name', Icon: IdentificationIcon, data: supplier.business_name }
      : undefined,
    { term: 'Address', Icon: MapPinIcon, data: <SupplierAddress supplier={supplier} /> },
    { term: 'Phone Number', Icon: PhoneIcon, data: <SupplierPhone supplier={supplier} /> },
    {
      term: 'Participation Begin Date',
      Icon: CalendarIcon,
      data: supplier.participation_begin_date ? isoDateToLocaleDate(supplier.participation_begin_date) : undefined,
    },
    { term: 'Is Contracted For CBA', Icon: FlagIcon, data: <BooleanBadge value={!!supplier.is_contracted_for_cba} /> },
    { term: 'Accepts Assignment', Icon: FlagIcon, data: <BooleanBadge value={!!supplier.accepts_assignment} /> },
    // { term: "Street Address", Icon: MapPinIcon, data: supplier.address_1 },
    // { term: "Street Address Line 2", Icon: IdentificationIcon, data: supplier.address_2 },
    // { term: "City", Icon: MapPinIcon, data: supplier.CityName },
    // { term: "State", Icon: MapPinIcon, data: supplier.StateName },
    // { term: "Zip Code", Icon: MapPinIcon, data: supplier.zip },
    // { term: "County/Parish", Icon: MapPinIcon, data: supplier.CountyName },
  ]);
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
      id={'SupplierInformation'}
    >
      <DescriptionList>
        {supplierAddressListItems.map(({ term, Icon, data }) => (
          <DescriptionListItem key={term} term={term} Icon={Icon} data={data} />
        ))}
      </DescriptionList>
    </DescriptionListSection>
  );
};

const SupplierAddress: React.FC<{ supplier: IGeoSupplier }> = ({ supplier }) => {
  return (
    <address>
      <div>
        <Link href={getSupplierLink(supplier)}>
          <strong>{supplier.practice_name}</strong>
        </Link>
      </div>
      <div>{supplier.address_1}</div>
      <div>{supplier.address_2}</div>
      <div>
        <Link href={`/?state=${supplier.StateSlug}&city=${supplier.CitySlug}`}>{supplier.CityName}</Link>
        {', '}
        <Link href={`/?state=${supplier.StateSlug}`}>{supplier.StateName}</Link>{' '}
        <Link href={`/?zip=${supplier.zip}`}>{supplier.zip}</Link>
      </div>
    </address>
  );
};

const SupplierPhone: React.FC<{ supplier: IGeoSupplier }> = ({ supplier }) => {
  return (
    <Button outline href={'tel:{supplier.phone}'}>
      <PhoneArrowUpRightIcon />
      {supplier.phone}
    </Button>
  );
};
