import { ImmutableURLSearchParams } from 'immurl';
import { capitalize, compact, isNil } from 'lodash';
import { type Metadata } from 'next';
import { Card } from '~/components/elements/Card';
import { Form } from '~/components/form/form';
import { isValidLimit, isValidNumber, isValidSimpleParam, isValidZip } from '~/components/form/urlParams';
import { Results } from '~/components/results/results';
import { CANONICAL_SITE_NAME } from '~/lib/const';
import { type IFilterUrlParams } from '~/types/filters';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface IProps {
  params: never;
  searchParams: IFilterUrlParams;
}
export default function HomePage(props: IProps) {
  const { searchParams } = props;
  const immUrlSearchParams = createUrlSearchParamsFromFilterUrlParams(searchParams);

  // eslint-disable-next-line no-console
  console.info(immUrlSearchParams.toString());

  // // eslint-disable-next-line no-console
  // console.info({ searchParams, immUrlSearchParams });

  return (
    <article key={immUrlSearchParams.toString()} className={'flex flex-col gap-12'}>
      <Card>
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <Form immUrlSearchParams={immUrlSearchParams} />
          <Results immUrlSearchParams={immUrlSearchParams} />
        </div>
      </Card>
    </article>
  );
}

const createUrlSearchParamsFromFilterUrlParams = (filterUrlParams: IFilterUrlParams) => {
  let immUrlSearchParams = new ImmutableURLSearchParams();

  /**
   * GEO PARAMS
   *
   */

  if (isValidSimpleParam(filterUrlParams.state)) {
    immUrlSearchParams = immUrlSearchParams.set('state', filterUrlParams.state);
  }

  if (isValidSimpleParam(filterUrlParams.county)) {
    immUrlSearchParams = immUrlSearchParams.set('county', filterUrlParams.county);
  }

  if (isValidSimpleParam(filterUrlParams.city)) {
    immUrlSearchParams = immUrlSearchParams.set('city', filterUrlParams.city);
  }

  if (isValidZip(filterUrlParams.zip)) {
    immUrlSearchParams = immUrlSearchParams.set('zip', filterUrlParams.zip);
  }

  /**
   * SUPPLIER PARAMS
   *
   */

  if (isValidSimpleParam(filterUrlParams.category)) {
    immUrlSearchParams = immUrlSearchParams.set('category', filterUrlParams.category);
  }

  if (isValidSimpleParam(filterUrlParams.manufacturer)) {
    immUrlSearchParams = immUrlSearchParams.set('manufacturer', filterUrlParams.manufacturer);
  }

  if (isValidSimpleParam(filterUrlParams.product)) {
    immUrlSearchParams = immUrlSearchParams.set('product', filterUrlParams.product);
  }

  if (isValidSimpleParam(filterUrlParams.providertype)) {
    immUrlSearchParams = immUrlSearchParams.set('providertype', filterUrlParams.providertype);
  }

  if (isValidSimpleParam(filterUrlParams.speciality)) {
    immUrlSearchParams = immUrlSearchParams.set('speciality', filterUrlParams.speciality);
  }

  if (isValidSimpleParam(filterUrlParams.cba)) {
    immUrlSearchParams = immUrlSearchParams.set('cba', filterUrlParams.cba);
  }

  if (isValidSimpleParam(filterUrlParams.assignment)) {
    immUrlSearchParams = immUrlSearchParams.set('assignment', filterUrlParams.assignment);
  }

  /**
   * PAGINATION PARAMS
   *
   */

  if (isValidLimit(filterUrlParams.limit)) {
    immUrlSearchParams = immUrlSearchParams.set('limit', filterUrlParams.limit);
  }

  if (isValidNumber(filterUrlParams.page)) {
    immUrlSearchParams = immUrlSearchParams.set('page', filterUrlParams.page);
  }

  return immUrlSearchParams;
};

const getFakeName = (val: string) => val.split('-').map(capitalize).join(' ');

export function generateMetadata(props: IProps): Metadata {
  const { searchParams } = props;
  const immUrlSearchParams = createUrlSearchParamsFromFilterUrlParams(searchParams);
  const hasParams = immUrlSearchParams.toString() !== '';

  if (!hasParams) {
    return {
      title: CANONICAL_SITE_NAME,
      description: `Our directory contains durable and reusable medical equipment such as walkers, wheelchairs, hospital beds and more. We can help you find the medical equipment you need for your home care.`,
    };
  }

  const descriptionList = compact(
    Array.from(immUrlSearchParams.entries()).map(([key, value]) => {
      if (isNil(value)) return null;
      if (key === 'page') return null;
      if (key === 'limit') return null;

      if (key === 'cba') return value === 'yes' ? 'Competitive Bid Area' : 'Not Competitive Bid Area';
      if (key === 'assignment') return value === 'yes' ? 'Accepts Assignment' : 'Does Not Accept Assignment';

      return getFakeName(value);
    })
  ).join(', ');

  return {
    title: `Directory — ${descriptionList} — ${CANONICAL_SITE_NAME}`,
    description: `We can help you find the medical equipment you need for your home care: ${descriptionList}`,
  };
}
