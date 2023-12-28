import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type ISupplierSupply, type ISupply } from '~/types/tables';

export type GetSupplierSupplyResult = ISupplierSupply[] | undefined;

const lookupSupplierSupplyStatement = db.prepare<{ provider_id: number }>(
  'SELECT provider_id, supply_id FROM SUPPLIER_SUPPLY WHERE provider_id = @provider_id;'
);

export const lookupSupplierSupply = (provider_id: number) => {
  return lookupSupplierSupplyStatement.all({ provider_id }) as GetSupplierSupplyResult;
};

export const getSupplierSupply = (provider_id: number) => lookupSupplierSupply(provider_id);

export type GetSupplierSupplyCollectionResult = ISupply[] | undefined;

const lookupSupplierSupplyCollectionStatement = db.prepare<{
  provider_id: number;
}>(sql`
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

export const lookupSupplierSupplyCollection = (provider_id: number) =>
  lookupSupplierSupplyCollectionStatement.all({
    provider_id,
  }) as GetSupplierSupplyCollectionResult;

export const getSupplierSupplyCollection = (provider_id: number) => lookupSupplierSupplyCollection(provider_id);
