import { type IManufacturer, type IProduct, type IProviderType, type ISpeciality, type ISupply } from '~/types/tables';
import { type IZipCity, type IZipCode, type IZipCounty, type IZipState } from '~/types/zip';

export type Nullable<T> = T | null | undefined;

export interface IGeoUrlParams extends Record<string, string> {
  state?: IZipState['StateSlug'];
  city?: IZipCity['CitySlug'];
  county?: IZipCounty['CountySlug'];
  zip?: IZipCode['ZIPCode'];
}

export type IGeoUrlParamsKey = keyof IGeoUrlParams;

export interface ISupplierUrlParams extends Record<string, string> {
  category?: ISupply['slug'];
  providertype?: IProviderType['slug'];
  speciality?: ISpeciality['slug'];
  manufacturer?: IManufacturer['slug'];
  product?: IProduct['slug'];
  cba?: string;
  assignment?: string;
}
export type ISupplierUrlParamsKey = keyof ISupplierUrlParams;

export interface IPaginationUrlParams extends Record<string, string> {
  limit?: string;
  page?: string;
}
export type IPaginationUrlParamsKey = keyof IPaginationUrlParams;

export type IFilterUrlParams = IGeoUrlParams & IPaginationUrlParams & ISupplierUrlParams;
export type IFilterUrlParamsKey = IGeoUrlParamsKey | ISupplierUrlParamsKey | IPaginationUrlParamsKey;
