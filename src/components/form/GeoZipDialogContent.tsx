'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { compact } from 'lodash';
import { LinkButton } from '~/components/form/LinkButton';
import { getParamsUrl, useGetZipParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipCode } from '~/types/zip';

export interface IGeoZipDialogContentProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const GeoZipDialogContent: React.FC<IGeoZipDialogContentProps> = ({ immUrlSearchParams }) => {
  const state = immUrlSearchParams.get('state');
  const county = immUrlSearchParams.get('county');
  const city = immUrlSearchParams.get('city');
  const binding = { state, county, city };

  const geoFilters = compact([
    `ZIP_STATE.StateSlug = :state`,
    county ? `ZIP_COUNTY.CountySlug = :county` : undefined,
    city ? `ZIP_CITY.CitySlug = :city` : undefined,
  ]).join(`\nAND\n`);

  const zipStatementSql = sql`
    SELECT DISTINCT
      ZIP_ZIPCODE.ZIPCode
    FROM
      ZIP_ZIPCODE
      INNER JOIN SUPPLIER ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
      INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId
      INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
      INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
    WHERE
      ${geoFilters};
  `;

  const results = db.prepare(zipStatementSql).all(binding) as IZipCode[];
  const getParams = useGetZipParams(immUrlSearchParams);

  return (
    <div className="columns-[7em]">
      {results.map((zip) => {
        const params = getParams(zip.ZIPCode);
        const href = getParamsUrl(params);

        return (
          <LinkButton key={zip.ZIPCode} href={href}>
            <>{zip.ZIPCode}</>
          </LinkButton>
        );
      })}
    </div>
  );
};
