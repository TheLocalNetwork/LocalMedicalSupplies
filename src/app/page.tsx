import { ImmutableURLSearchParams } from 'immurl';
import { type Metadata } from 'next';
import { Card } from '~/components/elements/Card';
import { Form } from '~/components/form/form';
import { isValidLimit, isValidOffset, isValidSimpleParam, isValidZip } from '~/components/form/urlParams';
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
  console.info({ searchParams, immUrlSearchParams });

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

  /**
   * PAGINATIoN PARAMS
   *
   */

  if (isValidLimit(filterUrlParams.limit)) {
    immUrlSearchParams = immUrlSearchParams.set('limit', filterUrlParams.limit);
  }

  if (isValidOffset(filterUrlParams.offset)) {
    immUrlSearchParams = immUrlSearchParams.set('offset', filterUrlParams.offset);
  }

  return immUrlSearchParams;
};

export function generateMetadata(props: IProps): Metadata {
  const { searchParams } = props;
  const immUrlSearchParams = createUrlSearchParamsFromFilterUrlParams(searchParams);
  const hasParams = immUrlSearchParams.toString() !== '';

  if (!hasParams) return {};

  return {
    title: `Browse — ${CANONICAL_SITE_NAME}`,
    description: JSON.stringify({ searchParams }),
    // alternates: {
    //   canonical: getSupplierLink(supplier, true),
    // },
  };
}
