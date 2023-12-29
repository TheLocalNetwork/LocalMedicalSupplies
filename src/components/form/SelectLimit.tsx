'use client';
import { isNil } from 'lodash';
import { useRouter } from 'next/navigation';
import { Field, Label } from '~/components/catalyst/fieldset';
import { Listbox, ListboxLabel, ListboxOption } from '~/components/catalyst/listbox';
import { DEFAULT_LIMIT, MAX_LIMIT } from '~/components/form/consts';

const selectLimitOptions = [10, 20, 50];
export interface ISelectLimitProps {
  urlSearchString: string;
}
export const SelectLimit: React.FC<ISelectLimitProps> = ({ urlSearchString }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const urlValue = urlSearchParams.get('limit');
  const defaultValue = urlValue ? urlValue : DEFAULT_LIMIT.toString();
  const router = useRouter();

  const handleChange = (proposedLimit: string | null) => {
    if (isNil(proposedLimit)) return;

    const numLimit = parseInt(proposedLimit, 10);

    if (numLimit > MAX_LIMIT) proposedLimit = `${MAX_LIMIT}`;
    if (numLimit < 10) proposedLimit = `10`;

    const proposedSearchParams = new URLSearchParams(urlSearchParams);

    if (numLimit === DEFAULT_LIMIT) {
      proposedSearchParams.delete('limit');
    } else {
      proposedSearchParams.set('limit', proposedLimit);
    }

    proposedSearchParams.delete('offset');

    const toUrl = [`/`, proposedSearchParams.toString()].join(`?`);
    return router.push(toUrl);
  };

  return (
    <>
      <Field>
        <Label>Page Size</Label>
        <Listbox name="limit" defaultValue={defaultValue} onChange={handleChange}>
          {selectLimitOptions.map((limit) => (
            <ListboxOption key={limit} value={limit.toString()}>
              <ListboxLabel>{limit}</ListboxLabel>
            </ListboxOption>
          ))}
        </Listbox>
      </Field>
      <ul></ul>
    </>
  );
};
