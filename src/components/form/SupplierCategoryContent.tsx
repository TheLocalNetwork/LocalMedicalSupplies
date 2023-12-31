'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl, useGetCategoryParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type ISupply } from '~/types/tables';
import { LinkButton } from './LinkButton';

const statementSql = sql`
  SELECT
    SUPPLY.id,
    SUPPLY.name,
    SUPPLY.slug
  FROM
    SUPPLY
  ORDER BY
    slug;
`;

const results = db.prepare(statementSql).all() as ISupply[];

export interface IGeoStateDialogContentProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const SupplierCategoryDialogContent: React.FC<IGeoStateDialogContentProps> = ({ immUrlSearchParams }) => {
  const getParams = useGetCategoryParams(immUrlSearchParams);

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
