import { compact, isEmpty } from 'lodash';
import { type IFilterParams } from '~/app/page';
import { db } from '~/lib/db/db';
import { type IGeoSupplier } from '~/types/Supplier';

export const DEFAULT_OFFSET = 0;
export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 50;

interface IResultsProps {
  searchParams: IFilterParams;
}
export const Results: React.FC<IResultsProps> = ({ searchParams }) => {
  const urlSearchParams = new URLSearchParams(searchParams);

  const urlLimit = urlSearchParams.get('limit');
  const limit = urlLimit ? Math.min(parseInt(urlLimit, 10), MAX_LIMIT) : DEFAULT_LIMIT;

  const urlOffset = urlSearchParams.get('offset');
  const offset = urlOffset ? parseInt(urlOffset, 10) : DEFAULT_OFFSET;

  const state = urlSearchParams.get('state');
  const city = urlSearchParams.get('city');
  const zip = urlSearchParams.get('zip');

  const suppliers = lookupSuppliers({
    offset,
    limit,
    state,
    city,
    zip,
  });

  const numResults = suppliers?.[0]?.numResults ?? 0;

  return (
    <section className="flex w-8/12 flex-col gap-6">
      <h1>
        {numResults ? (
          <>
            Results {(offset + 1).toLocaleString()} - {Math.min(numResults, offset + limit).toLocaleString()} of{' '}
            {numResults.toLocaleString()}
          </>
        ) : (
          <>No Results</>
        )}
      </h1>

      <Paginator searchParams={searchParams} numResults={numResults} limit={limit} offset={offset} />

      <ul key={urlSearchParams.toString()}>
        {(suppliers ?? []).map((supplier) => (
          <li key={supplier.provider_id} className="p-2">
            <Link href={getSupplierLink(supplier)}>
              <div>{supplier.practice_name}</div>
              <div>{supplier.business_name}</div>
            </Link>
          </li>
        ))}
      </ul>

      <pre>{JSON.stringify({ searchParams }, null, 2)}</pre>
    </section>
  );
};

interface IGeoSupplierResults extends IGeoSupplier {
  numResults: number;
}
type LookupResults = undefined | IGeoSupplierResults[];
export const lookupSuppliers = (searchParams: {
  offset: number;
  limit: number;
  state: string | null;
  city: string | null;
  zip: string | null;
}): LookupResults => {
  const { state, city, zip } = searchParams;

  const filterClauses = compact([
    state && !isEmpty(state) ? `ZIP_STATE.StateSlug = @state` : null,
    city && !isEmpty(city) ? `ZIP_City.CitySlug = @city` : null,
    zip && !isEmpty(zip) ? `SUPPLIER.zip = @zip` : null,
  ]);

  const where = filterClauses.length > 0 ? `WHERE ${filterClauses.join(' AND ')}` : '';

  const statement = db.prepare(`
    WITH results as (      
      SELECT
        provider_id,
        accepts_assignment,
        participation_begin_date,
        business_name,
        business_slug,
        practice_name,
        practice_slug,
        address_1,
        address_2,
        zip,
        zip4,
        phone,
        is_contracted_for_cba,
        ZIP_CITY.CityName,
        ZIP_CITY.CitySlug,
        ZIP_COUNTY.CountyName,
        ZIP_COUNTY.CountySlug,
        ZIP_STATE.StateName,
        ZIP_STATE.StateSlug
      FROM
        SUPPLIER
        INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
        INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
        INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
        INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId ${where}
    )
    SELECT *, (SELECT COUNT(*) FROM results) as numResults
    FROM results
    ORDER BY
      practice_name ASC
    LIMIT
      @limit
    OFFSET
      @offset;
  `);

  return statement.all(searchParams) as LookupResults;
};

import Link from 'next/link';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '~/components/catalyst/pagination';
import { getSupplierLink } from '~/lib/link/supplier';

interface Paginator extends IResultsProps {
  numResults: number;
  limit: number;
  offset: number;
}
export const Paginator: React.FC<Paginator> = ({ limit, offset, numResults, searchParams }) => {
  const getParams = (offset: number) => {
    const proposedUrlSearchParams = new URLSearchParams(searchParams);
    proposedUrlSearchParams.set('offset', offset.toString());
    return proposedUrlSearchParams.toString();
  };

  return (
    <Pagination>
      <PaginationPrevious href={offset > 0 ? `/?${getParams(offset - limit)}` : null} />
      <PaginationList>
        <PaginationPage href={`/?${getParams(offset)}`} current>
          {(Math.floor(offset / limit) + 1).toString()}
        </PaginationPage>
        <PaginationGap />
      </PaginationList>
      <PaginationNext href={offset + limit < numResults ? `/?${getParams(offset + limit)}` : null} />
    </Pagination>
  );
};
