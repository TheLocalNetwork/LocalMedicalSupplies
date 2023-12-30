import { isEmpty, isNil } from 'lodash';
import { type Metadata } from 'next';
import { Card } from '~/components/elements/Card';
import { Form } from '~/components/form/form';
import { Results } from '~/components/results/results';
import { CANONICAL_SITE_NAME } from '~/lib/const';
import { type IFilterParams } from '~/types/filters';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface IProps {
  params: never;
  searchParams: IFilterParams;
}
export default function HomePage(props: IProps) {
  const { searchParams } = props;
  const urlSearchParams: Readonly<URLSearchParams> = new URLSearchParams(searchParams);

  // eslint-disable-next-line no-console
  console.info({ urlSearchParams });

  // TODO: smarter cleanup of filter params
  for (const [key, value] of urlSearchParams.entries()) {
    if (isNil(value) || isEmpty(value)) urlSearchParams.delete(key);
  }

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
