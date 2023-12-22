export interface IZipState {
  id: number;
  StateName: string;
  StateAbbr: string;
  StateSlug: string;
}

export interface IZipCounty {
  id: number;
  StateId: number;
  CountyName: string;
  CountySlug: string;
}

export interface IZipCity {
  id: number;
  StateId: number;
  CityName: string;
  CitySlug: string;
}

export interface IZipCode {
  ZIPCode: string;
  CityId: number;
  CountyId: number;
  StateId: number;
}
