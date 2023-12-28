import { db } from '~/lib/db/db';
import { type IGeoSupplier } from '~/types/Supplier';

export type GetSupplierResult = IGeoSupplier | undefined;

const lookupSupplierStatement = db.prepare<{
  id: IGeoSupplier['id'];
}>(`
SELECT 
  SUPPLIER.id
  , accepts_assignment
  , participation_begin_date
  , business_name
  , business_slug
  , practice_name
  , practice_slug
  , address_1
  , address_2
  , zip
  , zip4
  , phone
  , is_contracted_for_cba
  , ZIP_CITY.CityName
  , ZIP_CITY.CitySlug
  , ZIP_COUNTY.CountyName
  , ZIP_COUNTY.CountySlug
  , ZIP_STATE.StateName
  , ZIP_STATE.StateSlug
FROM SUPPLIER
  INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
  INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
  INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
  INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId
WHERE SUPPLIER.id = @id;
`);

export const lookupSupplier = (id: IGeoSupplier['id']) => lookupSupplierStatement.get({ id }) as GetSupplierResult;

export const getSupplier = (id: IGeoSupplier['id']) => lookupSupplier(id);
