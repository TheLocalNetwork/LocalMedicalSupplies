import { compact, isEmpty } from 'lodash';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IGeoSupplier } from '~/types/Supplier';

export type ILookupResults = undefined | IGeoSupplierResults[];

export interface IGeoSupplierResults extends IGeoSupplier {
  numResults: number;
  rowNumber: number;
}
export const lookupSuppliers = (searchParams: {
  offset: number;
  limit: number;
  state: string | null;
  city: string | null;
  zip: string | null;
}): ILookupResults => {
  const { state, city, zip } = searchParams;

  const filters = compact([
    state && !isEmpty(state) ? `ZIP_STATE.StateSlug = :state` : null,
    city && !isEmpty(city) ? `ZIP_City.CitySlug = :city` : null,
    zip && !isEmpty(zip) ? `SUPPLIER.zip = :zip` : null,
  ]);

  const whereClause = filters.length > 0 ? [`\nWHERE`, filters.join('\nAND\n')].join(`\n`) : '';

  const statement = db.prepare(sql`
    SELECT
      ROW_NUMBER() OVER (
        ORDER BY
          practice_name
      ) rowNumber,
      COUNT() OVER () AS numResults,
      SUPPLIER.id,
      accepts_assignment,
      participation_begin_date,
      business_name,
      business_slug,
      practice_name,
      practice_slug,
      address_1,
      address_2,
      zip,
      zip4,
      phone,
      is_contracted_for_cba,
      ZIP_CITY.CityName,
      ZIP_CITY.CitySlug,
      ZIP_COUNTY.CountyName,
      ZIP_COUNTY.CountySlug,
      ZIP_STATE.StateName,
      ZIP_STATE.StateAbbr,
      ZIP_STATE.StateSlug
    FROM
      SUPPLIER
      INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
      INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
      INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
      INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId ${whereClause}
    ORDER BY
      practice_name ASC
    LIMIT
      :limit
    OFFSET
      :offset;
  `);

  // console.info(statement.source);
  return statement.all(searchParams) as ILookupResults;
};
