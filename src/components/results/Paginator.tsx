import { type ImmutableURLSearchParams } from 'immurl';
import { uniq } from 'lodash';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '~/components/catalyst/pagination';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '~/components/form/consts';
import { getParamsUrl, useGetOffsetParams } from '~/components/form/urlParams';

interface Paginator {
  immUrlSearchParams: ImmutableURLSearchParams;
  numResults: number;
}
export const Paginator: React.FC<Paginator> = ({ numResults, immUrlSearchParams }) => {
  const offset = Number(immUrlSearchParams.get('offset') ?? DEFAULT_OFFSET);
  const limit = Number(immUrlSearchParams.get('limit') ?? DEFAULT_LIMIT);
  const getOffsetParams = useGetOffsetParams(immUrlSearchParams);

  const getHref = (offset: number) => {
    const proposedUrlSearchParams = getOffsetParams(offset.toString());
    return getParamsUrl(proposedUrlSearchParams);
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
