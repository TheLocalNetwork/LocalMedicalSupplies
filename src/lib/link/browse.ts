import { compact } from 'lodash';
import { type IFilterUrlParams } from '~/types/filters';

export const getBrowseLink = (filters: IFilterUrlParams) => {
  const urlSearchParams = new URLSearchParams(filters);

  for (const [key, value] of urlSearchParams.entries()) {
    if (value === ``) {
      urlSearchParams.delete(key);
    }
  }

  const queryString = urlSearchParams.toString();
  const href = compact([`/`, queryString]).join(`?`);
  return href;
};
