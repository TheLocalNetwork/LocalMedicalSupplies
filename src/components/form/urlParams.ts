import { isNil } from 'lodash';
import { DEFAULT_LIMIT, MAX_LIMIT } from '~/components/form/consts';

export type TFnSetUrlParam = (input: string | null) => URLSearchParams;

export const getParamsUrl = (urlSearchParams: URLSearchParams) => {
  return [`/`, urlSearchParams.toString()].join(`?`);
};

export const useGetStateParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const outSearchParams = new URLSearchParams(inSearchParams);

  const fn = (value: string | null) => {
    if (value) {
      outSearchParams.set('state', value);
    } else {
      outSearchParams.delete('state');
    }

    outSearchParams.delete('city');
    outSearchParams.delete('county');
    outSearchParams.delete('zip');
    outSearchParams.delete('offset');

    return outSearchParams;
  };

  return fn;
};

export const useGetLimitParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const outSearchParams = new URLSearchParams(inSearchParams);

  const fn = (proposedLimit: string | null) => {
    if (isNil(proposedLimit)) return outSearchParams;

    const numLimit = parseInt(proposedLimit, 10);

    if (numLimit > MAX_LIMIT) proposedLimit = `${MAX_LIMIT}`;
    if (numLimit < 10) proposedLimit = `10`;

    if (numLimit === DEFAULT_LIMIT) {
      outSearchParams.delete('limit');
    } else {
      outSearchParams.set('limit', proposedLimit);
    }

    outSearchParams.delete('offset');

    return outSearchParams;
  };

  return fn;
};
