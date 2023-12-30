import { Button } from '~/components/catalyst/button';
import { StatesDialog } from '~/components/form/StatesDialog';
import { StatesDialogContent } from '~/components/form/StatesDialogContent';
import { SelectLimit } from './SelectLimit';

export interface IFormProps {
  urlSearchParams: URLSearchParams;
}
export const Form: React.FC<IFormProps> = ({ urlSearchParams }) => {
  const urlSearchString = urlSearchParams.toString(); // must serialize before passing to a client-side component

  return (
    <section className="flex w-full shrink-0 flex-col gap-4 md:w-3/12">
      <h1>Search Filters</h1>

      <StatesDialog urlSearchString={urlSearchString}>
        <StatesDialogContent urlSearchParams={urlSearchParams} />
      </StatesDialog>

      <SelectLimit urlSearchString={urlSearchString} />

      <Button outline href={'/'}>
        <span className="hidden sm:block">{`Remove All Filters`}</span>
        <span className="block sm:hidden">{`Clear`}</span>
      </Button>
    </section>
  );
};
