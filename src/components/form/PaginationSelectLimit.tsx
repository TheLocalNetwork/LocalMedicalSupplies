'use client';
import { ImmutableURLSearchParams } from 'immurl';
import { Field, Label } from '~/components/catalyst/fieldset';
import { DEFAULT_LIMIT, LIMIT_OPTIONS } from '~/components/form/consts';
import { getParamsUrl, useGetLimitParams } from '~/components/form/urlParams';
import { FilterButtonGroup, FilterButtonGroupItem } from '../elements/FilterButtonGroup';

export interface IPaginationSelectLimitProps {
  urlSearchString: string;
}
export const PaginationSelectLimit: React.FC<IPaginationSelectLimitProps> = ({ urlSearchString }) => {
  const immUrlSearchParams = new ImmutableURLSearchParams(urlSearchString);
  const urlValue = immUrlSearchParams.get('limit');
  const getLimitParams = useGetLimitParams(immUrlSearchParams);

  return (
    <>
      <Field>
        <Label>Page Size</Label>
        <FilterButtonGroup>
          {LIMIT_OPTIONS.map((limit) => {
            const href = getParamsUrl(getLimitParams(limit.toString()));
            const isSelected = limit.toString() === urlValue || (urlValue === null && limit === DEFAULT_LIMIT);

            return (
              <FilterButtonGroupItem key={limit} href={href} isSelected={isSelected} rel="noindex nofollow">
                {limit}
              </FilterButtonGroupItem>
            );
          })}
        </FilterButtonGroup>
      </Field>
    </>
  );
};
