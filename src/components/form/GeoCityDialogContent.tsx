'use server';
import { LinkButton } from '~/components/form/LinkButton';
import { getParamsUrl, useGetCityParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipCity } from '~/types/zip';

export interface IGeoCityDialogContentProps {
  urlSearchParams: URLSearchParams;
}
export const GeoCityDialogContent: React.FC<IGeoCityDialogContentProps> = ({ urlSearchParams }) => {
  const state = urlSearchParams.get('state');
  const county = urlSearchParams.get('county');
  const binding = { state, county };

  const cityStatementSql = sql`
    SELECT
      ZIP_CITY.id,
      ZIP_CITY.CityName,
      ZIP_CITY.CitySlug
    FROM
      ZIP_CITY
    WHERE
      ZIP_CITY.id IN (
        SELECT
          ZIP_ZIPCODE.CityId
        FROM
          ZIP_ZIPCODE
          INNER JOIN SUPPLIER ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
          INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
          INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId
        WHERE
          ZIP_STATE.StateSlug = :state ${county ? 'AND ZIP_COUNTY.CountySlug = :county' : ''}
      );
  `;

  const results = db.prepare(cityStatementSql).all(binding) as IZipCity[];
  const getParams = useGetCityParams(urlSearchParams);

  return (
    <div className="columns-1 gap-2 sm:columns-2 md:columns-3 lg:columns-4">
      {results.map((city) => {
        const params = getParams(city.CitySlug);
        const href = getParamsUrl(params);

        return (
          <LinkButton key={city.id} href={href}>
            <>{city.CityName}</>
          </LinkButton>
        );
      })}
    </div>
  );
};
