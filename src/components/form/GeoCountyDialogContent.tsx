'use server';
import { Button } from '~/components/catalyst/button';
import { useGetCountyParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipCounty } from '~/types/zip';

const countyStatementSql = sql`
  SELECT
    ZIP_COUNTY.id,
    ZIP_COUNTY.CountyName,
    ZIP_COUNTY.CountySlug
  FROM
    ZIP_COUNTY
  WHERE
    ZIP_COUNTY.id IN (
      SELECT
        ZIP_ZIPCODE.CountyId
      FROM
        ZIP_ZIPCODE
        INNER JOIN SUPPLIER ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
        INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId
      WHERE
        ZIP_STATE.StateSlug = :state
    );
`;

export interface IGeoCountyDialogContentProps {
  urlSearchParams: URLSearchParams;
}
export const GeoCountyDialogContent: React.FC<IGeoCountyDialogContentProps> = ({ urlSearchParams }) => {
  const results = db.prepare(countyStatementSql).all({ state: urlSearchParams.get('state') }) as IZipCounty[];
  const getParams = useGetCountyParams(urlSearchParams);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map((county) => {
        const params = getParams(county.CountySlug);

        return (
          <Button key={county.id} outline href={`/?${params.toString()}`}>
            <>{county.CountyName}</>
          </Button>
        );
      })}
    </div>
  );
};
