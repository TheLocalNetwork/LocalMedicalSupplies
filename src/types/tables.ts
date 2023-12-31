import { type ISupplier } from '~/types/Supplier';

export interface IStandardTable {
  id: number;
  name: string;
  slug: string;
  num: number;
}

export interface IManufacturer extends Omit<IStandardTable, 'num'> {
  num_products: number;
  num_suppliers: number;
}

export interface IProduct extends Omit<IStandardTable, 'num'> {
  manufacturer_id: IManufacturer['id'];
  num_suppliers: number;
}

export type IProviderType = IStandardTable;
export type ISpeciality = IStandardTable;
export type ISupply = IStandardTable;

export interface ISupplierProduct {
  provider_id: ISupplier['id'];
  product_id: IProduct['id'];
}

export interface ISupplierProviderType {
  provider_id: ISupplier['id'];
  providertype_id: IProviderType['id'];
}

export interface ISupplierSpeciality {
  provider_id: ISupplier['id'];
  speciality_id: ISpeciality['id'];
}

export interface ISupplierSupply {
  provider_id: ISupplier['id'];
  supply_id: ISupply['id'];
}
