import { Button } from '~/components/catalyst/button';
import { GeoCityDialog } from '~/components/form/GeoCityDialog';
import { GeoCityDialogContent } from '~/components/form/GeoCityDialogContent';
import { GeoCountyDialog } from '~/components/form/GeoCountyDialog';
import { GeoCountyDialogContent } from '~/components/form/GeoCountyDialogContent';
import { GeoStateDialog } from '~/components/form/GeoStateDialog';
import { GeoStateDialogContent } from '~/components/form/GeoStateDialogContent';
import { GeoZipDialog } from '~/components/form/GeoZipDialog';
import { GeoZipDialogContent } from '~/components/form/GeoZipDialogContent';
import { isValidSimpleParam } from '~/components/form/urlParams';
import { PaginationSelectLimit } from './PaginationSelectLimit';

export interface IFormProps {
  urlSearchParams: URLSearchParams;
}
export const Form: React.FC<IFormProps> = ({ urlSearchParams }) => {
  const urlSearchString = urlSearchParams.toString(); // must serialize before passing to a client-side component

  const state = urlSearchParams.get('state');

  return (
    <section className="flex w-full shrink-0 flex-col gap-4 md:w-3/12">
      <h1>Search Filters</h1>

      <GeoStateDialog urlSearchString={urlSearchString}>
        <GeoStateDialogContent urlSearchParams={urlSearchParams} />
      </GeoStateDialog>

      {isValidSimpleParam(state) ? (
        <GeoCountyDialog urlSearchString={urlSearchString}>
          <GeoCountyDialogContent urlSearchParams={urlSearchParams} />
        </GeoCountyDialog>
      ) : null}

      {isValidSimpleParam(state) ? (
        <GeoCityDialog urlSearchString={urlSearchString}>
          <GeoCityDialogContent urlSearchParams={urlSearchParams} />
        </GeoCityDialog>
      ) : null}

      {isValidSimpleParam(state) ? (
        <GeoZipDialog urlSearchString={urlSearchString}>
          <GeoZipDialogContent urlSearchParams={urlSearchParams} />
        </GeoZipDialog>
      ) : null}

      <PaginationSelectLimit urlSearchString={urlSearchString} />

      <Button outline href={'/'}>
        <span className="hidden sm:block">{`Remove All Filters`}</span>
        <span className="block sm:hidden">{`Clear`}</span>
      </Button>
    </section>
  );
};
