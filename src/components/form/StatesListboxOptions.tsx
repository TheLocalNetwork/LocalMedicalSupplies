'use server';
import { ListboxLabel, ListboxOption } from '~/components/catalyst/listbox';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipState } from '~/types/zip';

const statesStatementSql = sql`
  SELECT
    StateName,
    StateAbbr,
    StateSlug
  FROM
    ZIP_STATE
  WHERE
    ZIP_STATE.id IN (
      SELECT
        ZIP_ZIPCODE.StateId
      FROM
        ZIP_ZIPCODE
        INNER JOIN SUPPLIER ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    );
`;

const states = db.prepare(statesStatementSql).all() as IZipState[];

export const StatesListboxOptions: React.FC = () => {
  return (
    <>
      {states.map((state) => (
        <ListboxOption key={state.StateAbbr} value={state.StateSlug}>
          <ListboxLabel>{state.StateName}</ListboxLabel>
        </ListboxOption>
      ))}
    </>
  );
};
