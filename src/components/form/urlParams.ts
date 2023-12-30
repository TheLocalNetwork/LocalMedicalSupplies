import { isEmpty, isNaN, isNil } from 'lodash';
import { DEFAULT_LIMIT, LIMIT_OPTIONS } from '~/components/form/consts';

export type TFnSetUrlParam = (input: string | null) => URLSearchParams;

export const getParamsUrl = (urlSearchParams: URLSearchParams) => {
  return [`/`, urlSearchParams.toString()].join(`?`);
};

/**
 * GEO Params
 *
 */

export const isValidSimpleParam = (value: string | null | undefined): value is string => {
  return !(isNil(value) || isEmpty(value));
};

export const useGetStateParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    const outSearchParams = new URLSearchParams(inSearchParams);

    if (isValidSimpleParam(value)) {
      outSearchParams.set('state', value);
    } else {
      outSearchParams.delete('state');
    }

    outSearchParams.delete('county');
    outSearchParams.delete('city');
    outSearchParams.delete('zip');
    outSearchParams.delete('offset');

    outSearchParams.sort();
    return outSearchParams;
  };

  return fn;
};

export const useGetCountyParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    const outSearchParams = new URLSearchParams(inSearchParams);

    if (isValidSimpleParam(value)) {
      outSearchParams.set('county', value);
      outSearchParams.delete('city');
      outSearchParams.delete('zip');
    } else {
      outSearchParams.delete('county');
    }

    outSearchParams.delete('offset');

    outSearchParams.sort();
    return outSearchParams;
  };

  return fn;
};

export const useGetCityParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    const outSearchParams = new URLSearchParams(inSearchParams);

    if (isValidSimpleParam(value)) {
      outSearchParams.set('city', value);
      outSearchParams.delete('zip');
    } else {
      outSearchParams.delete('city');
    }

    outSearchParams.delete('offset');

    outSearchParams.sort();
    return outSearchParams;
  };

  return fn;
};

export const zipRegex = /^\d{5}$/;
export const isValidZip = (value: string | null | undefined): value is string => {
  if (!isValidSimpleParam(value)) return false;

  return zipRegex.test(value);
};

export const useGetZipParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    const outSearchParams = new URLSearchParams(inSearchParams);

    if (isValidZip(value)) {
      outSearchParams.set('zip', value);
    } else {
      outSearchParams.delete('zip');
    }

    outSearchParams.delete('offset');

    outSearchParams.sort();
    return outSearchParams;
  };

  return fn;
};

/**
 * SUPPLIER Params
 *
 */

/**
 * PAGINATION Params
 *
 */

export const isValidLimit = (value: string | null | undefined): value is string => {
  if (!isValidSimpleParam(value)) return false;
  if (value === `${DEFAULT_LIMIT}`) return false;

  const num = parseInt(value, 10);
  if (isNaN(value) || value !== `${num}`) return false;

  return LIMIT_OPTIONS.includes(num);
};

export const useGetLimitParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    const outSearchParams = new URLSearchParams(inSearchParams);

    if (isValidLimit(value)) {
      outSearchParams.set('limit', value);
    } else {
      outSearchParams.delete('limit');
    }

    outSearchParams.delete('offset');

    outSearchParams.sort();
    return outSearchParams;
  };

  return fn;
};

export const isValidOffset = (value: string | null | undefined): value is string => {
  if (!isValidSimpleParam(value)) return false;

  const num = parseInt(value, 10);
  if (isNaN(value) || value !== `${num}`) return false;

  return num > 0;
};

export const useGetOffsetParams = (inSearchParams: URLSearchParams): TFnSetUrlParam => {
  const fn = (value: string | null) => {
    const outSearchParams = new URLSearchParams(inSearchParams);

    if (isValidOffset(value)) {
      outSearchParams.set('limit', value);
    } else {
      outSearchParams.delete('limit');
    }

    outSearchParams.sort();
    return outSearchParams;
  };

  return fn;
};
