import { type Metadata } from 'next';
import { Card } from '~/components/elements/Card';
import { CANONICAL_SITE_NAME } from '~/lib/const';

interface IProps {
  params: never;
  searchParams: Record<string, string>;
}
export default function BrowsePage(props: IProps) {
  const { searchParams } = props;
  return (
    <article className={'flex flex-col gap-12'}>
      <Card>
        <h1>Browse</h1>
        <pre>{JSON.stringify({ props, searchParams }, null, 2)}</pre>
      </Card>
    </article>
  );
}
export function generateMetadata(props: IProps): Metadata {
  const { searchParams } = props;

  return {
    title: `Browse — ${CANONICAL_SITE_NAME}`,
    description: JSON.stringify({ searchParams }),
    // alternates: {
    //   canonical: getSupplierLink(supplier, true),
    // },
  };
}
