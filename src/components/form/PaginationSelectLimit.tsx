'use client';
import { ImmutableURLSearchParams } from 'immurl';
import { Field, Label } from '~/components/catalyst/fieldset';
import { Listbox, ListboxLabel, ListboxOption } from '~/components/catalyst/listbox';
import { DEFAULT_LIMIT, LIMIT_OPTIONS } from '~/components/form/consts';
import { useSetLimit } from '~/components/form/urlParamsRouting';

export interface IPaginationSelectLimitProps {
  urlSearchString: string;
}
export const PaginationSelectLimit: React.FC<IPaginationSelectLimitProps> = ({ urlSearchString }) => {
  const immUrlSearchParams = new ImmutableURLSearchParams(urlSearchString);
  const urlValue = immUrlSearchParams.get('limit');
  const defaultValue = urlValue ? urlValue : DEFAULT_LIMIT.toString();
  const setLimit = useSetLimit(immUrlSearchParams);

  return (
    <>
      <Field>
        <Label>Page Size</Label>
        <Listbox name="limit" defaultValue={defaultValue} onChange={setLimit}>
          {LIMIT_OPTIONS.map((limit) => (
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
