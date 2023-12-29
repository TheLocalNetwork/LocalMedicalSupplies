'use client';
import { useRouter } from 'next/navigation';
import { Field, Label } from '~/components/catalyst/fieldset';
import { Listbox } from '~/components/catalyst/listbox';

export interface IStatesListboxProps extends React.PropsWithChildren {
  urlSearchString: string;
}
export const StatesListbox: React.FC<IStatesListboxProps> = ({ urlSearchString, children }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const router = useRouter();
  const defaultValue = urlSearchParams.get('state');

  const handleChange = (value: string | null) => {
    const proposedSearchParams = new URLSearchParams(urlSearchParams.toString());

    if (value) {
      proposedSearchParams.set('state', value);
    } else {
      proposedSearchParams.delete('state');
    }
    proposedSearchParams.delete('city');
    proposedSearchParams.delete('county');
    proposedSearchParams.delete('zip');
    proposedSearchParams.delete('offset');

    const toUrl = [`/`, proposedSearchParams.toString()].join(`?`);
    router.push(toUrl);
  };

  return (
    <Field>
      <Label>States</Label>
      <Listbox
        name="state"
        defaultValue={defaultValue}
        placeholder="Select state&hellip;"
        className="max-w-xs"
        onChange={handleChange}
      >
        {children}
      </Listbox>
    </Field>
  );
};
