import { DEFAULT_LIMIT, DEFAULT_OFFSET, MAX_LIMIT } from '~/components/form/consts';
import { type IFilterParams } from '~/types/filters';
import { Paginator } from './Paginator';
import { SupplierResult } from './SupplierResult';
import { lookupSuppliers } from './lookupSuppliers';

export interface IResultsProps {
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

  const firstRecord = suppliers?.[0] ?? { numResults: 0, rowNumber: 0 };
  const numResults = firstRecord.numResults;
  const startRow = firstRecord.rowNumber;

  return (
    <section className="flex w-full flex-col gap-6 md:w-8/12">
      <ResultsHeader numResults={numResults} offset={offset} limit={limit} />

      <Paginator filterParams={filterParams} numResults={numResults} limit={limit} offset={offset} />

      <div className="border-y border-black/10 dark:border-white/10">
        <ol key={urlSearchParams.toString()} start={startRow} className="divide-y divide-black/10 dark:divide-white/10">
          {(suppliers ?? []).map((supplier) => (
            <SupplierResult key={supplier.id} supplier={supplier} />
          ))}
        </ol>
      </div>

      <Paginator filterParams={filterParams} numResults={numResults} limit={limit} offset={offset} />
    </section>
  );
};

interface IResultsHeaderProps {
  numResults: number;
  offset: number;
  limit: number;
}
const ResultsHeader: React.FC<IResultsHeaderProps> = ({ numResults, offset, limit }) => {
  return (
    <header>
      {numResults ? (
        <h1>
          {`Displaying`}
          {` `}
          <code>{(offset + 1).toLocaleString()}</code>
          {` – `}
          <code>{Math.min(numResults, offset + limit).toLocaleString()}</code>
          {` of `}
          <code>{numResults.toLocaleString()}</code>
          {` `}
          {`results`}
        </h1>
      ) : (
        <h1>No Results</h1>
      )}
    </header>
  );
};
