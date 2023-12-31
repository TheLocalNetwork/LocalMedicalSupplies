import clsx from 'clsx';
import { type ImmutableURLSearchParams } from 'immurl';
import { type ComponentPropsWithoutRef, type PropsWithChildren } from 'react';
import { Button } from '~/components/catalyst/button';
import { FormDialogContainer } from '~/components/form/FormDialogContainer';
import { GeoCityDialogContent } from '~/components/form/GeoCityDialogContent';
import { GeoCountyDialogContent } from '~/components/form/GeoCountyDialogContent';
import { GeoStateDialogContent } from '~/components/form/GeoStateDialogContent';
import { GeoZipDialogContent } from '~/components/form/GeoZipDialogContent';
import { SupplierCategoryDialogContent } from '~/components/form/SupplierCategoryContent';
import {
  getParamsUrl,
  isValidSimpleParam,
  useGetCategoryParams,
  useGetCityParams,
  useGetCountyParams,
  useGetStateParams,
  useGetZipParams,
} from '~/components/form/urlParams';
import { PaginationSelectLimit } from './PaginationSelectLimit';

export interface IFormProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const Form: React.FC<IFormProps> = ({ immUrlSearchParams }) => {
  const urlSearchString = immUrlSearchParams.toString(); // must serialize before passing to a client-side component

  const state = immUrlSearchParams.get('state');
  const county = immUrlSearchParams.get('county');
  const city = immUrlSearchParams.get('city');
  const zip = immUrlSearchParams.get('zip');
  const category = immUrlSearchParams.get('category');

  const unsetStateHref = getParamsUrl(useGetStateParams(immUrlSearchParams)(null));
  const unsetCountyHref = getParamsUrl(useGetCountyParams(immUrlSearchParams)(null));
  const unsetCityHref = getParamsUrl(useGetCityParams(immUrlSearchParams)(null));
  const unsetZipHref = getParamsUrl(useGetZipParams(immUrlSearchParams)(null));
  const unsetCategoryHref = getParamsUrl(useGetCategoryParams(immUrlSearchParams)(null));

  return (
    <section className="flex w-full shrink-0 flex-col gap-4 md:w-3/12">
      <header>
        <h1 className="font-semibold">Filter Options</h1>
      </header>

      <FormSection title={`Location Filters`}>
        <FormDialogContainer label={'State'} currentValue={immUrlSearchParams.get('state')} unsetHref={unsetStateHref}>
          <GeoStateDialogContent immUrlSearchParams={immUrlSearchParams} />
        </FormDialogContainer>

        {isValidSimpleParam(state) ? (
          <FormDialogContainer label={'County or Parish'} currentValue={county} unsetHref={unsetCountyHref}>
            <GeoCountyDialogContent immUrlSearchParams={immUrlSearchParams} />
          </FormDialogContainer>
        ) : null}

        {isValidSimpleParam(state) ? (
          <FormDialogContainer label={'City'} currentValue={city} unsetHref={unsetCityHref}>
            <GeoCityDialogContent immUrlSearchParams={immUrlSearchParams} />
          </FormDialogContainer>
        ) : null}

        {isValidSimpleParam(state) ? (
          <FormDialogContainer label={'Zip Code'} currentValue={zip} unsetHref={unsetZipHref}>
            <GeoZipDialogContent immUrlSearchParams={immUrlSearchParams} />
          </FormDialogContainer>
        ) : null}
      </FormSection>

      <FormSection title={`Supplier Characteristics`}>
        <FormDialogContainer label={'Supply Category'} currentValue={category} unsetHref={unsetCategoryHref}>
          <SupplierCategoryDialogContent immUrlSearchParams={immUrlSearchParams} />
        </FormDialogContainer>
      </FormSection>

      <FormSection title={`Result Options`}>
        <PaginationSelectLimit urlSearchString={urlSearchString} />
      </FormSection>

      <Button outline href={'/'}>
        <span className="hidden sm:block">{`Remove All Filters`}</span>
        <span className="block sm:hidden">{`Clear`}</span>
      </Button>
    </section>
  );
};

interface ISectionHeaderProps extends PropsWithChildren, Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  title: React.ReactNode;
}
const FormSection: React.FC<ISectionHeaderProps> = ({ title, className, children, ...attrs }) => {
  return (
    <div {...attrs} className={clsx('my-3 flex flex-col gap-3', className)}>
      <header>
        <h1 className="text-xs font-bold opacity-60">{title}</h1>
      </header>

      {children}
    </div>
  );
};
