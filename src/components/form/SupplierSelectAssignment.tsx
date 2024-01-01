'use client';
import { HandThumbDownIcon, HandThumbUpIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { ImmutableURLSearchParams } from 'immurl';
import { Field, Label } from '~/components/catalyst/fieldset';
import { getParamsUrl, useGetAssignmentParams } from '~/components/form/urlParams';
import { FilterButtonGroup, FilterButtonGroupItem } from '../elements/FilterButtonGroup';

export interface ISupplierSelectAssignmentProps {
  urlSearchString: string;
}
export const SupplierSelectAssignment: React.FC<ISupplierSelectAssignmentProps> = ({ urlSearchString }) => {
  const immUrlSearchParams = new ImmutableURLSearchParams(urlSearchString);
  const urlValue = immUrlSearchParams.get('assignment');
  const getAssignmentParams = useGetAssignmentParams(immUrlSearchParams);

  const yesHref = getParamsUrl(getAssignmentParams('yes'));
  const noHref = getParamsUrl(getAssignmentParams('no'));
  const unsetHref = getParamsUrl(getAssignmentParams(null));

  return (
    <>
      <Field>
        <Label>Accepts Assignment</Label>
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
