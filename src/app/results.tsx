import { compact, isEmpty, uniq } from 'lodash';
import Link from 'next/link';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '~/components/catalyst/pagination';
import { db } from '~/lib/db/db';
import { getSupplierLink } from '~/lib/link/supplier';
import { sql } from '~/lib/string';
import { type IGeoSupplier } from '~/types/Supplier';
import { type IFilterParams } from '~/types/filters';

export const DEFAULT_OFFSET = 0;
export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 50;

interface IResultsProps {
  filterParams: IFilterParams;
}
export const Results: React.FC<IResultsProps> = ({ filterParams }) => {
  const urlSearchParams = new URLSearchParams(filterParams);

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

      <Paginator filterParams={filterParams} numResults={numResults} limit={limit} offset={offset} />

      <ol key={urlSearchParams.toString()} start={suppliers?.[0]?.rowNumber} className="list-decimal">
        {(suppliers ?? []).map((supplier) => (
          <li key={supplier.id} className="">
            <Link href={getSupplierLink(supplier)}>
              <div>{supplier.practice_name}</div>
              <div>{supplier.business_name}</div>
            </Link>
          </li>
        ))}
      </ol>

      <pre>{JSON.stringify({ filterParams }, null, 2)}</pre>
    </section>
  );
};

interface IGeoSupplierResults extends IGeoSupplier {
  numResults: number;
  rowNumber: number;
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

  const filters = compact([
    state && !isEmpty(state) ? `ZIP_STATE.StateSlug = :state` : null,
    city && !isEmpty(city) ? `ZIP_City.CitySlug = :city` : null,
    zip && !isEmpty(zip) ? `SUPPLIER.zip = :zip` : null,
  ]);

  const whereClause = filters.length > 0 ? [`\nWHERE`, filters.join('\nAND\n')].join(`\n`) : '';

  const statement = db.prepare(sql`
    SELECT
      ROW_NUMBER() OVER (
        ORDER BY
          practice_name
      ) rowNumber,
      COUNT() OVER () AS numResults,
      SUPPLIER.id,
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
      INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId ${whereClause}
    ORDER BY
      practice_name ASC
    LIMIT
      :limit
    OFFSET
      :offset;
  `);

  // console.info(statement.source);

  return statement.all(searchParams) as LookupResults;
};

interface Paginator extends IResultsProps {
  numResults: number;
  limit: number;
  offset: number;
}
export const Paginator: React.FC<Paginator> = ({ limit, offset, numResults, filterParams }) => {
  const getHref = (offset: number) => {
    const proposedUrlSearchParams = new URLSearchParams(filterParams);

    if (offset === 0) {
      proposedUrlSearchParams.delete('offset');
    } else {
      proposedUrlSearchParams.set('offset', offset.toString());
    }

    return compact([`/`, proposedUrlSearchParams.toString()]).join(`?`);
  };

  const { pageNumbers, currentPage } = generatePagesList(offset, limit, numResults);

  return (
    <Pagination>
      <PaginationPrevious href={offset > 0 ? getHref(offset - limit) : null} />
      <PaginationList>
        <div className="flex items-center justify-between gap-2">
          {pageNumbers.map((page, ixPage) => {
            if (page === undefined) {
              return <PaginationGap key={ixPage} />;
            }

            return (
              <PaginationPage key={ixPage} href={getHref((page - 1) * limit)} current={currentPage === page}>
                {page.toLocaleString()}
              </PaginationPage>
            );
          })}
        </div>
      </PaginationList>
      <PaginationNext href={offset + limit < numResults ? getHref(offset + limit) : null} />
    </Pagination>
  );
};

const generatePagesList = (offset: number, limit: number, numResults: number) => {
  const firstPage = 1;
  const lastPage = Math.ceil(numResults / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const potentials = [firstPage, prevPage, currentPage, nextPage, lastPage].filter((p) => p > 0 && p <= lastPage);

  const uniqPages: number[] = uniq(potentials).sort((a, b) => a - b);

  let prev;
  const withGaps: (number | undefined)[] = [];
  for (const page of uniqPages) {
    if (prev !== undefined && page - prev > 1) withGaps.push(undefined);
    withGaps.push(page);
    prev = page;
  }

  return { pageNumbers: withGaps, currentPage };
};
