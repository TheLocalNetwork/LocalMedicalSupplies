import { type Metadata } from 'next';
import { Form } from '~/app/form';
import { Results } from '~/app/results';
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

export interface IPagination {
  limit?: number;
  offset?: number;
}

export type IGeoFilterParams = IFilterState | IFilterCity | IFilterZip;

export type IFilterParams = IGeoFilterParams & IPagination;

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
          <Results searchParams={searchParams} />
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
