export type TISODate = string;

export interface ISupplier {
  provider_id: number;
  accepts_assignment: boolean;
  participation_begin_date: TISODate;
  business_name: string;
  business_slug: string;
  practice_name: string;
  practice_slug: string;
  address_1: string;
  address_2: string;
  zip: string;
  zip4: string;
  phone: string;
  is_contracted_for_cba: boolean;
}
export interface IGeoSupplier extends ISupplier {
  CityName: string;
  CitySlug: string;
  CountyName: string;
  CountySlug: string;
  StateName: string;
  StateSlug: string;
}

export interface ISupply {
  id: number;
  name: string;
  num: number;
}

export interface ISupplierSupply {
  provider_id: ISupplier['provider_id'];
  supply_id: ISupply['id'];
}
