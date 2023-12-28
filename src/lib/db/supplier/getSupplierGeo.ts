import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IGeoSupplier, type ISupplier } from '~/types/Supplier';
import { type TDatabaseRecord } from '~/types/database';

export interface IGetSupplierGeoFilter {
  id: ISupplier['id'];
}
const getSupplierGeoStatement = db.prepare<IGetSupplierGeoFilter>(sql`
  SELECT
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
    ZIP_STATE.StateSlug
  FROM
    SUPPLIER
    INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
    INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
    INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId
  WHERE
    SUPPLIER.id = :id;
`);

export const getSupplierGeo = (filter: IGetSupplierGeoFilter) =>
  getSupplierGeoStatement.get(filter) as TDatabaseRecord<IGeoSupplier>;
