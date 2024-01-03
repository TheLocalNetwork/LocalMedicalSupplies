import { type ImmutableURLSearchParams } from 'immurl';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '~/components/form/consts';
import { Paginator } from './Paginator';
import { SupplierResult } from './SupplierResult';
import { lookupSuppliers } from './lookupSuppliers';

export interface IResultsProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const Results: React.FC<IResultsProps> = ({ immUrlSearchParams }) => {
  const suppliers = lookupSuppliers(immUrlSearchParams);

  const firstRecord = suppliers?.[0] ?? { numResults: 0, rowNumber: 0 };
  const numResults = firstRecord.numResults;
  const startRow = firstRecord.rowNumber;

  return (
    <section className="order-2 flex w-full flex-col gap-6 md:w-9/12">
      <ResultsHeader immUrlSearchParams={immUrlSearchParams} numResults={numResults} />

      <Paginator immUrlSearchParams={immUrlSearchParams} numResults={numResults} />

      <div className="border-y border-black/10 dark:border-white/10">
        <ol
          key={immUrlSearchParams.toString()}
          start={startRow}
          className="divide-y divide-black/10 dark:divide-white/10"
        >
          {suppliers?.length ? (
            <>
              {suppliers.map((supplier) => (
                <SupplierResult key={supplier.id} supplier={supplier} immUrlSearchParams={immUrlSearchParams} />
              ))}
            </>
          ) : (
            <h1 className="my-8 p-4 text-5xl">No results</h1>
          )}
        </ol>
      </div>

      <Paginator immUrlSearchParams={immUrlSearchParams} numResults={numResults} />
    </section>
  );
};

interface IResultsHeaderProps {
  immUrlSearchParams: ImmutableURLSearchParams;
  numResults: number;
}
const ResultsHeader: React.FC<IResultsHeaderProps> = ({ immUrlSearchParams, numResults }) => {
  const page = Number(immUrlSearchParams.get('page') ?? DEFAULT_PAGE);
  const limit = Number(immUrlSearchParams.get('limit') ?? DEFAULT_LIMIT);
  const offset = (page - 1) * limit;

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
