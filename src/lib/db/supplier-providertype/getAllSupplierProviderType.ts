import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type TDatabaseRecordset } from '~/types/database';
import { type IManufacturer, type ISupply } from '~/types/tables';

export interface IGetSupplierProviderTypeFilter {
  provider_id: number;
}
export interface IGetSupplierProviderTypeFilterResult extends ISupply {
  manufacturer_name: IManufacturer['name'];
  manufacturer_slug: IManufacturer['slug'];
}
const getAllSupplierProviderTypeStatement = db.prepare<IGetSupplierProviderTypeFilter>(sql`
  SELECT
    PROVIDERTYPE.id,
    PROVIDERTYPE.name,
    PROVIDERTYPE.slug
  FROM
    SUPPLIER_PROVIDERTYPE
    INNER JOIN PROVIDERTYPE ON PROVIDERTYPE.id = SUPPLIER_PROVIDERTYPE.providertype_id
  WHERE
    SUPPLIER_PROVIDERTYPE.provider_id = :provider_id;
`);

export const getAllSupplierProviderType = (filter: IGetSupplierProviderTypeFilter) =>
  getAllSupplierProviderTypeStatement.all(filter) as TDatabaseRecordset<IGetSupplierProviderTypeFilterResult>;
