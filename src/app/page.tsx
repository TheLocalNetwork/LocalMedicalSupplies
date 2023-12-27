import { type Metadata } from 'next';
import { Card } from '~/components/elements/Card';
import { CANONICAL_SITE_NAME } from '~/lib/const';
import { type IZipCity, type IZipCode, type IZipState } from '~/types/zip';

export interface IFilterParamsFull extends Record<string, string> {
  state?: IZipState['StateSlug'];
  city?: IZipCity['CitySlug'];
  zip?: IZipCode['ZIPCode'];
}
export interface IFilterState extends Record<string, string> {
  state: IZipState['StateSlug'];
  city: never;
  zip: never;
}
export interface IFilterCity extends Record<string, string> {
  state: IZipState['StateSlug'];
  city: IZipCity['CitySlug'];
  zip: never;
}
export interface IFilterZip extends Record<string, string> {
  zip: IZipCode['ZIPCode'];
  state: never;
  city: never;
}

type IFilterParams = IFilterState | IFilterCity | IFilterZip;

interface IProps {
  params: never;
  searchParams: IFilterParams;
}
export default function HomePage(props: IProps) {
  const { searchParams } = props;
  const urlSearchParams = new URLSearchParams(searchParams);
  const hasParams = urlSearchParams.size > 0;

  if (!hasParams) {
    return (
      <article className="flex min-h-screen flex-col items-center justify-center gap-12">
        <img src={'/icon.svg'} alt={'logo'} width={256} height={256} />
        <h1 className="text-center text-4xl font-thin">Local Medical Supplies</h1>
      </article>
    );
  }

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
