import {
  type IFilterUrlParams,
  type IGeoUrlParams,
  type IPaginationUrlParams,
  type ISupplierUrlParams,
} from '~/types/filters';

export const DEFAULT_PAGE = 1 as const;

export const DEFAULT_LIMIT = 50 as const;
export const LIMIT_OPTIONS: number[] = [10, 20, 50, 100] as const;
export const MAX_LIMIT = 100 as const;

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
  page: '',
};

export const emptyFilterUrlParams: IFilterUrlParams = {
  ...emptyGeoUrlParams,
  ...emptySupplierUrlParams,
  ...emptyPaginationUrlParams,
};
