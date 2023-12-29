import { type Metadata } from 'next';
import { Form } from '~/app/form';
import { Results } from '~/app/results';
import { Card } from '~/components/elements/Card';
import { CANONICAL_SITE_NAME } from '~/lib/const';
import { type IFilterParams } from '~/types/filters';

interface IProps {
  params: never;
  searchParams: IFilterParams;
}
export default function HomePage(props: IProps) {
  const { searchParams } = props;
  const urlSearchParams = new URLSearchParams(searchParams);

  return (
    <article className={'flex flex-col gap-12'}>
      <Card>
        <h1>Browse</h1>

        <div key={urlSearchParams.toString()} className="flex flex-row items-start gap-8">
          <Form urlSearchParams={urlSearchParams} />
          <Results filterParams={searchParams} />
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
