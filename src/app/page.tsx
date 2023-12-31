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
  const urlSearchParams = createUrlSearchParamsFromFilterUrlParams(searchParams);

  // eslint-disable-next-line no-console
  console.info({ searchParams, urlSearchParams });

  return (
    <article key={urlSearchParams.toString()} className={'flex flex-col gap-12'}>
      <Card>
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <Form urlSearchParams={urlSearchParams} />
          <Results urlSearchParams={urlSearchParams} />
        </div>
      </Card>
    </article>
  );
}

const createUrlSearchParamsFromFilterUrlParams = (filterUrlParams: IFilterUrlParams) => {
  const urlSearchParams = new URLSearchParams();

  /**
   * GEO PARAMS
   *
   */

  if (isValidSimpleParam(filterUrlParams.state)) {
    urlSearchParams.set('state', filterUrlParams.state);
  }

  if (isValidSimpleParam(filterUrlParams.county)) {
    urlSearchParams.set('county', filterUrlParams.county);
  }

  if (isValidSimpleParam(filterUrlParams.city)) {
    urlSearchParams.set('city', filterUrlParams.city);
  }

  if (isValidZip(filterUrlParams.zip)) {
    urlSearchParams.set('zip', filterUrlParams.zip);
  }

  /**
   * SUPPLIER PARAMS
   *
   */

  if (isValidSimpleParam(filterUrlParams.category)) {
    urlSearchParams.set('category', filterUrlParams.category);
  }

  /**
   * PAGINATIoN PARAMS
   *
   */

  if (isValidLimit(filterUrlParams.limit)) {
    urlSearchParams.set('limit', filterUrlParams.limit);
  }

  if (isValidOffset(filterUrlParams.offset)) {
    urlSearchParams.set('offset', filterUrlParams.offset);
  }

  return urlSearchParams;
};

export function generateMetadata(props: IProps): Metadata {
  const { searchParams } = props;
  const urlSearchParams = new URLSearchParams(searchParams);
  const hasParams = urlSearchParams.size > 0;

  if (!hasParams) return {};

  return {
    title: `Browse — ${CANONICAL_SITE_NAME}`,
    description: JSON.stringify({ searchParams }),
    // alternates: {
    //   canonical: getSupplierLink(supplier, true),
    // },
  };
}
