import { type IManufacturer, type IProduct, type IProviderType, type ISpeciality, type ISupply } from '~/types/tables';
import { type IZipCity, type IZipCode, type IZipState } from '~/types/zip';

export interface IGeoFilters extends Record<string, string> {
  state?: IZipState['StateSlug'];
  city?: IZipCity['CitySlug'];
  zip?: IZipCode['ZIPCode'];
}

export interface ISupplierFilters extends Record<string, string> {
  category?: ISupply['slug'];
  providertype?: IProviderType['slug'];
  speciality?: ISpeciality['slug'];
  manufacturer?: IManufacturer['slug'];
  product?: IProduct['slug'];
}

export interface IPaginationFilters {
  limit?: number;
  offset?: number;
}

export type IFilterParams = IGeoFilters & IPaginationFilters & ISupplierFilters;
