import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type TDatabaseRecordset } from '~/types/database';
import { type IManufacturer, type ISupply } from '~/types/tables';

export interface IGetSupplierProductFilter {
  provider_id: number;
}
export interface IGetSupplierProductFilterResult extends ISupply {
  manufacturer_name: IManufacturer['name'];
  manufacturer_slug: IManufacturer['slug'];
}
const getAllSupplierProductStatement = db.prepare<IGetSupplierProductFilter>(sql`
  SELECT
    PRODUCT.id,
    PRODUCT.name,
    PRODUCT.slug,
    MANUFACTURER.name AS manufacturer_name,
    MANUFACTURER.slug AS manufacturer_slug
  FROM
    SUPPLIER_PRODUCT
    INNER JOIN PRODUCT ON PRODUCT.id = SUPPLIER_PRODUCT.product_id
    INNER JOIN MANUFACTURER ON MANUFACTURER.id = PRODUCT.manufacturer_id
  WHERE
    SUPPLIER_PRODUCT.provider_id = :provider_id;
`);

export const getAllSupplierProduct = (filter: IGetSupplierProductFilter) =>
  getAllSupplierProductStatement.all(filter) as TDatabaseRecordset<IGetSupplierProductFilterResult>;
