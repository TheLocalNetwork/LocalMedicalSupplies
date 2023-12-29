export type TISODate = string;

export interface ISupplier {
  id: number;
  accepts_assignment: boolean | null;
  participation_begin_date: TISODate;
  business_name: string | null;
  business_slug: string | null;
  practice_name: string | null;
  practice_slug: string | null;
  address_1: string | null;
  address_2: string | null;
  zip: string;
  zip4: string | null;
  phone: string | null;
  is_contracted_for_cba: boolean | null;
}
export interface IGeoSupplier extends ISupplier {
  CityName: string;
  CitySlug: string;
  CountyName: string;
  CountySlug: string;
  StateName: string;
  StateAbbr: string;
  StateSlug: string;
}
