'use server';
import { compact } from 'lodash';
import { Button } from '~/components/catalyst/button';
import { useGetZipParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipCode } from '~/types/zip';

export interface IGeoZipDialogContentProps {
  urlSearchParams: URLSearchParams;
}
export const GeoZipDialogContent: React.FC<IGeoZipDialogContentProps> = ({ urlSearchParams }) => {
  const state = urlSearchParams.get('state');
  const county = urlSearchParams.get('county');
  const city = urlSearchParams.get('city');
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
  const getParams = useGetZipParams(urlSearchParams);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map((zip) => {
        const params = getParams(zip.ZIPCode);

        return (
          <Button key={zip.ZIPCode} outline href={`/?${params.toString()}`}>
            <>{zip.ZIPCode}</>
          </Button>
        );
      })}
    </div>
  );
};
