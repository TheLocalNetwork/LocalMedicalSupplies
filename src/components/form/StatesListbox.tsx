'use client';
import { Field, Label } from '~/components/catalyst/fieldset';
import { Listbox } from '~/components/catalyst/listbox';
import { useSetState } from '~/components/form/urlParamsRouting';

export interface IStatesListboxProps extends React.PropsWithChildren {
  urlSearchString: string;
}
export const StatesListbox: React.FC<IStatesListboxProps> = ({ urlSearchString, children }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const defaultValue = urlSearchParams.get('state');
  const handleSetState = useSetState(urlSearchParams);

  return (
    <Field>
      <Label>States</Label>
      <Listbox
        name="state"
        defaultValue={defaultValue}
        placeholder="Select state&hellip;"
        className="max-w-xs"
        onChange={handleSetState}
      >
        {children}
      </Listbox>
    </Field>
  );
};
