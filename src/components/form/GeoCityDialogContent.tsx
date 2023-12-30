'use server';
import { Button } from '~/components/catalyst/button';
import { useGetCityParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IZipCity } from '~/types/zip';

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
        INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateId
      WHERE
        ZIP_STATE.StateSlug = :state
    );
`;

export interface IGeoCityDialogContentProps {
  urlSearchParams: URLSearchParams;
}
export const GeoCityDialogContent: React.FC<IGeoCityDialogContentProps> = ({ urlSearchParams }) => {
  const results = db.prepare(cityStatementSql).all({ state: urlSearchParams.get('state') }) as IZipCity[];
  const getParams = useGetCityParams(urlSearchParams);

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map((city) => {
        const params = getParams(city.CitySlug);

        return (
          <Button key={city.id} outline href={`/?${params.toString()}`}>
            <>{city.CityName}</>
          </Button>
        );
      })}
    </div>
  );
};
