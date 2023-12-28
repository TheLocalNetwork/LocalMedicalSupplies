import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type TDatabaseRecord } from '~/types/database';
import { type ISupply } from '~/types/tables';

export interface IGetSupplyFilter {
  id: ISupply['id'];
}

const getSupplyStatement = db.prepare<IGetSupplyFilter>(sql`
  SELECT
    id,
    name,
    slug,
    num
  FROM
    SUPPLY
  WHERE
    id = :id;
`);

export const getSupply = (filter: IGetSupplyFilter) => getSupplyStatement.get(filter) as TDatabaseRecord<ISupply>;
