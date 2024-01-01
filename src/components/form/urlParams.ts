import { type ImmutableURLSearchParams } from 'immurl';
import { isEmpty, isNaN, isNil } from 'lodash';
import { DEFAULT_LIMIT, LIMIT_OPTIONS } from '~/components/form/consts';

export type TFnSetUrlParam = (input: string | null) => ImmutableURLSearchParams;
export type TFnGetUrlParamHook = (inSearchParams: ImmutableURLSearchParams) => TFnSetUrlParam;

export const getParamsUrl = (immUrlSearchParams: ImmutableURLSearchParams) => {
  return [`/`, immUrlSearchParams.sort().toString()].join(`?`);
};

export const useGetSimpleParams = (key: string, immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidSimpleParam(value)) {
      immUrlSearchParams = immUrlSearchParams.set(key, value);
    } else {
      immUrlSearchParams = immUrlSearchParams.delete(key);
    }

    return immUrlSearchParams.delete('page').sort();
  };

  return fn;
};

/**
 * GEO Params
 *
 */

export const isValidSimpleParam = (value: string | null | undefined): value is string => {
  return !(isNil(value) || isEmpty(value));
};

export const useGetStateParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidSimpleParam(value)) {
      immUrlSearchParams = immUrlSearchParams.set('state', value);
    } else {
      immUrlSearchParams = immUrlSearchParams.delete('state');
    }

    return immUrlSearchParams.delete('county').delete('city').delete('zip').delete('page').sort();
  };

  return fn;
};

export const useGetCountyParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidSimpleParam(value)) {
      immUrlSearchParams = immUrlSearchParams.set('county', value).delete('city').delete('zip');
    } else {
      immUrlSearchParams = immUrlSearchParams.delete('county');
    }

    return immUrlSearchParams.delete('page').sort();
  };

  return fn;
};

export const useGetCityParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidSimpleParam(value)) {
      immUrlSearchParams = immUrlSearchParams.set('city', value).delete('zip');
    } else {
      immUrlSearchParams = immUrlSearchParams.delete('city');
    }

    return immUrlSearchParams.delete('offset').sort();
  };

  return fn;
};

export const zipRegex = /^\d{5}$/;
export const isValidZip = (value: string | null | undefined): value is string => {
  if (!isValidSimpleParam(value)) return false;

  return zipRegex.test(value);
};

export const useGetZipParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidZip(value)) {
      immUrlSearchParams = immUrlSearchParams.set('zip', value);
    } else {
      immUrlSearchParams = immUrlSearchParams.delete('zip');
    }

    return immUrlSearchParams.delete('page').sort();
  };

  return fn;
};

/**
 * SUPPLIER Params
 *
 */

export const useGetCategoryParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('category', immUrlSearchParams);

export const useGetManufacturerParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = useGetSimpleParams('manufacturer', immUrlSearchParams);

  const extendFn = (value: string | null) => {
    return fn(value).delete('category');
  };

  return extendFn;
};

export const useGetProductParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('product', immUrlSearchParams);

export const useGetBrandParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('brand', immUrlSearchParams);

export const useGetSpecialityParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('speciality', immUrlSearchParams);

export const useGetProviderTypeParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('providertype', immUrlSearchParams);

export const useGetCbaParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('cba', immUrlSearchParams);

export const useGetAssignmentParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useGetSimpleParams('assignment', immUrlSearchParams);

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

export const useGetLimitParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidLimit(value)) {
      immUrlSearchParams = immUrlSearchParams.set('limit', value);
    } else {
      immUrlSearchParams = immUrlSearchParams.delete('limit');
    }

    return immUrlSearchParams.delete('page').sort();
  };

  return fn;
};

export const isValidNumber = (value: string | null | undefined): value is string => {
  if (!isValidSimpleParam(value)) return false;

  const num = parseInt(value, 10);
  if (isNaN(value) || value !== `${num}`) return false;

  return num > 0;
};

export const useGetPageParams: TFnGetUrlParamHook = (immUrlSearchParams: ImmutableURLSearchParams) => {
  const fn = (value: string | null) => {
    if (isValidNumber(value)) {
      immUrlSearchParams = immUrlSearchParams.set('page', value);
    } else {
      immUrlSearchParams = immUrlSearchParams.delete('page');
    }

    return immUrlSearchParams.sort();
  };

  return fn;
};
