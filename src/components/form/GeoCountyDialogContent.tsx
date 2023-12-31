'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { LinkButton } from '~/components/form/LinkButton';
import { getParamsUrl, useGetCountyParams } from '~/components/form/urlParams';
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
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const GeoCountyDialogContent: React.FC<IGeoCountyDialogContentProps> = ({ immUrlSearchParams }) => {
  const results = db.prepare(countyStatementSql).all({ state: immUrlSearchParams.get('state') }) as IZipCounty[];
  const getParams = useGetCountyParams(immUrlSearchParams);

  return (
    <div className="columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
      {results.map((county) => {
        const params = getParams(county.CountySlug);
        const href = getParamsUrl(params);

        return (
          <LinkButton key={county.id} href={href}>
            <>{county.CountyName}</>
          </LinkButton>
        );
      })}
    </div>
  );
};
