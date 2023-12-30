import {
  type IFilterUrlParams,
  type IGeoUrlParams,
  type IPaginationUrlParams,
  type ISupplierUrlParams,
} from '~/types/filters';

export const DEFAULT_OFFSET = 0 as const;
export const DEFAULT_LIMIT = 10 as const;
export const LIMIT_OPTIONS: number[] = [DEFAULT_LIMIT, DEFAULT_LIMIT * 2, DEFAULT_LIMIT * 5] as const;

export const MAX_LIMIT = 50 as const;

export const emptyGeoUrlParams: IGeoUrlParams = {
  state: '',
  city: '',
  county: '',
  zip: '',
};

export const emptySupplierUrlParams: ISupplierUrlParams = {
  category: '',
  providertype: '',
  speciality: '',
  manufacturer: '',
  product: '',
  cba: '',
  assignment: '',
};

export const emptyPaginationUrlParams: IPaginationUrlParams = {
  limit: '',
  offset: '',
};

export const emptyFilterUrlParams: IFilterUrlParams = {
  ...emptyGeoUrlParams,
  ...emptySupplierUrlParams,
  ...emptyPaginationUrlParams,
};
