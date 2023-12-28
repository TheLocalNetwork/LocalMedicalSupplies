import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type TDatabaseRecordset } from '~/types/database';
import { type ISupply } from '~/types/tables';

export interface IGetSupplierSupplyFilter {
  provider_id: number;
}
const getAllSupplierSupplyStatement = db.prepare<IGetSupplierSupplyFilter>(sql`
  SELECT
    SUPPLY.id,
    SUPPLY.name,
    SUPPLY.slug,
    SUPPLY.num
  FROM
    SUPPLIER_SUPPLY
    INNER JOIN SUPPLY ON SUPPLY.id = SUPPLIER_SUPPLY.supply_id
  WHERE
    SUPPLIER_SUPPLY.provider_id = :provider_id;
`);

export const getAllSupplierSupply = (filter: IGetSupplierSupplyFilter) =>
  getAllSupplierSupplyStatement.all(filter) as TDatabaseRecordset<ISupply>;
