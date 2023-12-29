import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type TDatabaseRecordset } from '~/types/database';
import { type IManufacturer, type ISupply } from '~/types/tables';

export interface IGetSupplierSpecialityFilter {
  provider_id: number;
}
export interface IGetSupplierSpecialityFilterResult extends ISupply {
  manufacturer_name: IManufacturer['name'];
  manufacturer_slug: IManufacturer['slug'];
}
const getAllSupplierSpecialityStatement = db.prepare<IGetSupplierSpecialityFilter>(sql`
  SELECT
    SPECIALITY.id,
    SPECIALITY.name,
    SPECIALITY.slug
  FROM
    SUPPLIER_SPECIALITY
    INNER JOIN SPECIALITY ON SPECIALITY.id = SUPPLIER_SPECIALITY.speciality_id
  WHERE
    SUPPLIER_SPECIALITY.provider_id = :provider_id;
`);

export const getAllSupplierSpeciality = (filter: IGetSupplierSpecialityFilter) =>
  getAllSupplierSpecialityStatement.all(filter) as TDatabaseRecordset<IGetSupplierSpecialityFilterResult>;
