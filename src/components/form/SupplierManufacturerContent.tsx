'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl, useGetManufacturerParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IManufacturer } from '~/types/tables';
import { LinkButton } from './LinkButton';

const statementSql = sql`
  SELECT
    MANUFACTURER.id,
    MANUFACTURER.name,
    MANUFACTURER.slug
  FROM
    MANUFACTURER
  ORDER BY
    slug;
`;

const results = db.prepare(statementSql).all() as IManufacturer[];

export interface IGeoStateDialogContentProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const SupplierManufacturerDialogContent: React.FC<IGeoStateDialogContentProps> = ({ immUrlSearchParams }) => {
  const getParams = useGetManufacturerParams(immUrlSearchParams);

  return (
    <div className="columns-sm">
      {results.map((item) => {
        const params = getParams(item.slug);
        const href = getParamsUrl(params);

        return (
          <LinkButton key={item.id} href={href}>
            {item.name}
          </LinkButton>
        );
      })}
    </div>
  );
};
