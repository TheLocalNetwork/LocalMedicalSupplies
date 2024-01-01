'use client';
import { HandThumbDownIcon, HandThumbUpIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { ImmutableURLSearchParams } from 'immurl';
import { Field, Label } from '~/components/catalyst/fieldset';
import { getParamsUrl, useGetCbaParams } from '~/components/form/urlParams';
import { FilterButtonGroup, FilterButtonGroupItem } from '../elements/FilterButtonGroup';

export interface ISupplierSelectCbaProps {
  urlSearchString: string;
}
export const SupplierSelectCba: React.FC<ISupplierSelectCbaProps> = ({ urlSearchString }) => {
  const immUrlSearchParams = new ImmutableURLSearchParams(urlSearchString);
  const urlValue = immUrlSearchParams.get('cba');
  const getCbaParams = useGetCbaParams(immUrlSearchParams);

  const yesHref = getParamsUrl(getCbaParams('yes'));
  const noHref = getParamsUrl(getCbaParams('no'));
  const unsetHref = getParamsUrl(getCbaParams(null));

  return (
    <>
      <Field>
        <Label>Is Contracted for CBA</Label>
        <FilterButtonGroup>
          <FilterButtonGroupItem href={yesHref} isSelected={urlValue === 'yes'}>
            <HandThumbUpIcon className="size-4" />
            <div>Yes</div>
          </FilterButtonGroupItem>
          <FilterButtonGroupItem href={noHref} isSelected={urlValue === 'no'}>
            <HandThumbDownIcon className="size-4" />
            <div>No</div>
          </FilterButtonGroupItem>
          <FilterButtonGroupItem href={unsetHref} isSelected={urlValue === null}>
            <XCircleIcon className="size-4" />
            <div>Any</div>
          </FilterButtonGroupItem>
        </FilterButtonGroup>
      </Field>
    </>
  );
};
