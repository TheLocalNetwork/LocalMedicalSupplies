import { cache } from "react";
import { db } from "~/lib/db/db";
import { ISupplierSupply, ISupply } from "~/types/Supplier";

export type GetSupplierSupplyResult = ISupplierSupply[] | undefined;

const lookupSupplierSupplyStatement = db.prepare<{ provider_id: number }>(
  `SELECT provider_id, supply_id FROM SUPPLIER_SUPPLY WHERE provider_id = @provider_id;`
);

export const lookupSupplierSupply = async (provider_id: number) =>
  lookupSupplierSupplyStatement.all({ provider_id }) as GetSupplierSupplyResult;

export const getSupplierSupply = cache(async (provider_id: number) => lookupSupplierSupply(provider_id));

export type GetSupplierSupplyCollectionResult = ISupply[] | undefined;

const lookupSupplierSupplyCollectionStatement = db.prepare<{
  provider_id: number;
}>(`
  SELECT SUPPLY.id, SUPPLY.name
  FROM SUPPLIER_SUPPLY 
    INNER JOIN SUPPLY ON SUPPLIER_SUPPLY.supply_id = SUPPLY.id
  WHERE SUPPLIER_SUPPLY.provider_id = @provider_id;
`);

export const lookupSupplierSupplyCollection = async (provider_id: number) =>
  lookupSupplierSupplyCollectionStatement.all({
    provider_id,
  }) as GetSupplierSupplyCollectionResult;

export const getSupplierSupplyCollection = cache(async (provider_id: number) =>
  lookupSupplierSupplyCollection(provider_id)
);
