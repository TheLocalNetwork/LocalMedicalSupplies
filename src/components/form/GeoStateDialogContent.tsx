'use server';
import { Button } from '~/components/catalyst/button';
import { useGetStateParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipState } from '~/types/zip';

const statesStatementSql = sql`
  SELECT
    ZIP_STATE.id,
    ZIP_STATE.StateName,
    ZIP_STATE.StateAbbr,
    ZIP_STATE.StateSlug
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

const results = db.prepare(statesStatementSql).all() as IZipState[];

export interface IGeoStateDialogContentProps {
  urlSearchParams: URLSearchParams;
}
export const GeoStateDialogContent: React.FC<IGeoStateDialogContentProps> = ({ urlSearchParams }) => {
  const getParams = useGetStateParams(urlSearchParams);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map((state) => {
        const params = getParams(state.StateSlug);

        return (
          <Button key={state.id} outline href={`/?${params.toString()}`}>
            <>{state.StateName}</>
          </Button>
        );
      })}
    </div>
  );
};
