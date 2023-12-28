'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Field, Label } from '~/components/catalyst/fieldset';
import { Listbox } from '~/components/catalyst/listbox';

export const StatesListbox: React.FC<React.PropsWithChildren> = ({ children }) => {
  const initialUrlSearchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (value: string | null) => {
    const proposedSearchParams = new URLSearchParams(initialUrlSearchParams);

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
        defaultValue={initialUrlSearchParams.get('state')}
        placeholder="Select state&hellip;"
        className="max-w-xs"
        onChange={handleChange}
      >
        {children}
      </Listbox>
    </Field>
  );
};
