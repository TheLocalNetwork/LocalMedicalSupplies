import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type ISupply } from '~/types/tables';

export type GetSupplyResult = ISupply | undefined;

const lookupSupplyStatement = db.prepare<{ id: ISupply['id'] }>(sql`
  SELECT
    id,
    name,
    num
  FROM
    SUPPLY
  WHERE
    id = :id;
`);

export const lookupSupply = async (id: ISupply['id']) => (await lookupSupplyStatement.get({ id })) as GetSupplyResult;

export const getSupply = async (id: ISupply['id']) => lookupSupply(id);
