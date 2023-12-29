import { Button } from '~/components/catalyst/button';
import { StatesListbox } from '~/components/form/StatesListbox';
import { StatesListboxOptions } from '~/components/form/StatesListboxOptions';
import { SelectLimit } from './SelectLimit';

export interface IFormProps {
  urlSearchParams: URLSearchParams;
}
export const Form: React.FC<IFormProps> = ({ urlSearchParams }) => {
  const urlSearchString = urlSearchParams.toString(); // must serialize before passing to a client-side component

  return (
    <section className="flex w-3/12 shrink-0 flex-col gap-4">
      <h1>Search Filters</h1>
      <StatesListbox urlSearchString={urlSearchString}>
        <StatesListboxOptions />
      </StatesListbox>

      <SelectLimit urlSearchString={urlSearchString} />

      <Button outline href={'/'}>
        Clear Filters
      </Button>
    </section>
  );
};
