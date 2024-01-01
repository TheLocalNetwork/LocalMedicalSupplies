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
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '~/components/form/consts';
import { getParamsUrl, useGetPageParams } from '~/components/form/urlParams';

interface Paginator {
  immUrlSearchParams: ImmutableURLSearchParams;
  numResults: number;
}
export const Paginator: React.FC<Paginator> = ({ numResults, immUrlSearchParams }) => {
  const currentPage = Number(immUrlSearchParams.get('page') ?? DEFAULT_PAGE);
  const limit = Number(immUrlSearchParams.get('limit') ?? DEFAULT_LIMIT);

  const getPageParams = useGetPageParams(immUrlSearchParams);

  const getHref = (p: number) => {
    const proposedUrlSearchParams = getPageParams(p !== DEFAULT_PAGE ? p.toString() : null);
    return getParamsUrl(proposedUrlSearchParams);
  };

  const lastPage = Math.ceil(numResults / limit);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pageNumbers = generatePagesList(currentPage, prevPage, nextPage, lastPage);

  const prevPageHref = prevPage > 0 ? getHref(prevPage) : null;
  const nextPageHref = nextPage <= lastPage ? getHref(nextPage) : null;

  return (
    <Pagination>
      <PaginationPrevious href={prevPageHref} />
      <PaginationList>
        <div className="flex items-center justify-between gap-2">
          {pageNumbers.map((page, ixPage) => {
            if (page === undefined) return <PaginationGap key={ixPage} />;

            const pageHref = getHref(page);
            const isCurrent = currentPage === page;

            return (
              <PaginationPage key={ixPage} href={pageHref} current={isCurrent}>
                {page.toLocaleString()}
              </PaginationPage>
            );
          })}
        </div>
      </PaginationList>
      <PaginationNext href={nextPageHref} />
    </Pagination>
  );
};

const generatePagesList = (currentPage: number, prevPage: number, nextPage: number, lastPage: number) => {
  const potentials = [DEFAULT_PAGE, prevPage, currentPage, nextPage, lastPage].filter((p) => p > 0 && p <= lastPage);

  const uniqPages: number[] = uniq(potentials).sort((a, b) => a - b);

  let prev;
  const withGaps: (number | undefined)[] = [];
  for (const page of uniqPages) {
    if (prev !== undefined && page - prev > 1) withGaps.push(undefined);
    withGaps.push(page);
    prev = page;
  }

  return withGaps;
};
