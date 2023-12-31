import clsx from 'clsx';
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
  urlSearchParams: URLSearchParams;
}
export const Form: React.FC<IFormProps> = ({ urlSearchParams }) => {
  const urlSearchString = urlSearchParams.toString(); // must serialize before passing to a client-side component

  const state = urlSearchParams.get('state');
  const county = urlSearchParams.get('county');
  const city = urlSearchParams.get('city');
  const zip = urlSearchParams.get('zip');
  const category = urlSearchParams.get('category');

  const unsetStateHref = getParamsUrl(useGetStateParams(urlSearchParams)(null));
  const unsetCountyHref = getParamsUrl(useGetCountyParams(urlSearchParams)(null));
  const unsetCityHref = getParamsUrl(useGetCityParams(urlSearchParams)(null));
  const unsetZipHref = getParamsUrl(useGetZipParams(urlSearchParams)(null));
  const unsetCategoryHref = getParamsUrl(useGetCategoryParams(urlSearchParams)(null));

  return (
    <section className="flex w-full shrink-0 flex-col gap-4 md:w-3/12">
      <header>
        <h1 className="font-semibold">Filter Options</h1>
      </header>

      <FormSection title={`Location Filters`}>
        <FormDialogContainer label={'State'} currentValue={urlSearchParams.get('state')} unsetHref={unsetStateHref}>
          <GeoStateDialogContent urlSearchParams={urlSearchParams} />
        </FormDialogContainer>

        {isValidSimpleParam(state) ? (
          <FormDialogContainer label={'County or Parish'} currentValue={county} unsetHref={unsetCountyHref}>
            <GeoCountyDialogContent urlSearchParams={urlSearchParams} />
          </FormDialogContainer>
        ) : null}

        {isValidSimpleParam(state) ? (
          <FormDialogContainer label={'City'} currentValue={city} unsetHref={unsetCityHref}>
            <GeoCityDialogContent urlSearchParams={urlSearchParams} />
          </FormDialogContainer>
        ) : null}

        {isValidSimpleParam(state) ? (
          <FormDialogContainer label={'Zip Code'} currentValue={zip} unsetHref={unsetZipHref}>
            <GeoZipDialogContent urlSearchParams={urlSearchParams} />
          </FormDialogContainer>
        ) : null}
      </FormSection>

      <FormSection title={`Supplier Characteristics`}>
        <FormDialogContainer label={'Supply Category'} currentValue={category} unsetHref={unsetCategoryHref}>
          <SupplierCategoryDialogContent urlSearchParams={urlSearchParams} />
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
