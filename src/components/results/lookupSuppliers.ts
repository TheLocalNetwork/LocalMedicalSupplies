import { type ImmutableURLSearchParams } from 'immurl';
import { compact, isEmpty } from 'lodash';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '~/components/form/consts';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IGeoSupplier } from '~/types/Supplier';

export type ILookupResults = undefined | IGeoSupplierResults[];

export interface IGeoSupplierResults extends IGeoSupplier {
  numResults: number;
  rowNumber: number;
}
export const lookupSuppliers = (immUrlSearchParams: ImmutableURLSearchParams): ILookupResults => {
  const offset = Number(immUrlSearchParams.get('offset') ?? DEFAULT_OFFSET);
  const limit = Number(immUrlSearchParams.get('limit') ?? DEFAULT_LIMIT);
  const state = immUrlSearchParams.get('state');
  const county = immUrlSearchParams.get('county');
  const city = immUrlSearchParams.get('city');
  const zip = immUrlSearchParams.get('zip');

  const binding = {
    limit,
    offset,
    state,
    county,
    city,
    zip,
  };

  const filters = compact([
    state && !isEmpty(state) ? `ZIP_STATE.StateSlug = :state` : null,
    county && !isEmpty(county) ? `ZIP_COUNTY.CountySlug = :county` : null,
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

  // eslint-disable-next-line no-console
  console.info(statement.source);
  // eslint-disable-next-line no-console
  console.info(binding);

  return statement.all(binding) as ILookupResults;
};
