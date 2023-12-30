import { isNil } from 'lodash';
import { DEFAULT_LIMIT, MAX_LIMIT } from '~/components/form/consts';

export type TFnSetUrlParam = (input: string | null) => URLSearchParams;

export const getParamsUrl = (urlSearchParams: URLSearchParams) => {
  return [`/`, urlSearchParams.toString()].join(`?`);
};


export const useGetStateParams = (urlSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    if (value) {
      urlSearchParams.set('state', value);
    } else {
      urlSearchParams.delete('state');
    }

    urlSearchParams.delete('city');
    urlSearchParams.delete('county');
    urlSearchParams.delete('zip');
    urlSearchParams.delete('offset');

    return urlSearchParams;
  };

  return fn;
};

export const useGetLimitParams = (urlSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (proposedLimit: string | null) => {
    if (isNil(proposedLimit)) return urlSearchParams;

    const numLimit = parseInt(proposedLimit, 10);

    if (numLimit > MAX_LIMIT) proposedLimit = `${MAX_LIMIT}`;
    if (numLimit < 10) proposedLimit = `10`;

    if (numLimit === DEFAULT_LIMIT) {
      urlSearchParams.delete('limit');
    } else {
      urlSearchParams.set('limit', proposedLimit);
    }

    urlSearchParams.delete('offset');

    return urlSearchParams;
  };

  return fn;
};
