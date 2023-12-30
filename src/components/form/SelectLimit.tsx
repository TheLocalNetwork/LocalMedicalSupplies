'use client';
import { Field, Label } from '~/components/catalyst/fieldset';
import { Listbox, ListboxLabel, ListboxOption } from '~/components/catalyst/listbox';
import { DEFAULT_LIMIT } from '~/components/form/consts';
import { useSetLimit } from '~/components/form/urlParamsRouting';

const selectLimitOptions = [10, 20, 50];
export interface ISelectLimitProps {
  urlSearchString: string;
}
export const SelectLimit: React.FC<ISelectLimitProps> = ({ urlSearchString }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const urlValue = urlSearchParams.get('limit');
  const defaultValue = urlValue ? urlValue : DEFAULT_LIMIT.toString();
  const setLimit = useSetLimit(urlSearchParams);

  return (
    <>
      <Field>
        <Label>Page Size</Label>
        <Listbox name="limit" defaultValue={defaultValue} onChange={setLimit}>
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
