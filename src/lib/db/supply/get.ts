import { cache } from 'react';
import { db } from '~/lib/db/db';
import { type ISupply } from '~/types/Supplier';

export type GetSupplyResult = ISupply | undefined;

const lookupSupplyStatement = db.prepare<{ id: ISupply['id'] }>('SELECT id, name, num FROM SUPPLY WHERE id = @id;');

export const lookupSupply = async (id: ISupply['id']) => (await lookupSupplyStatement.get({ id })) as GetSupplyResult;

export const getSupply = cache(async (id: ISupply['id']) => lookupSupply(id));
