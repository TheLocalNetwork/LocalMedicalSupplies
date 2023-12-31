import { ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl } from '~/components/form/urlParams';
import { type IFilterUrlParams } from '~/types/filters';

export const getBrowseLink = (filters: IFilterUrlParams) => {
  let immUrlSearchParams = new ImmutableURLSearchParams(filters);

  for (const [key, value] of immUrlSearchParams.entries()) {
    if (value === ``) {
      immUrlSearchParams = immUrlSearchParams.delete(key);
    }
  }

  return getParamsUrl(immUrlSearchParams);
};
