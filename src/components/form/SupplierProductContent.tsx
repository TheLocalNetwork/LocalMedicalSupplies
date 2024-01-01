'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl, useGetProductParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IProduct } from '~/types/tables';
import { LinkButton } from './LinkButton';

const statementSql = sql`
  SELECT
    PRODUCT.id,
    PRODUCT.name,
    PRODUCT.slug
  FROM
    PRODUCT
    INNER JOIN MANUFACTURER ON MANUFACTURER.id = PRODUCT.manufacturer_id
  WHERE MANUFACTURER.slug = :manufacturer
  ORDER BY
    PRODUCT.slug;
`;
export interface IGeoStateDialogContentProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const SupplierProductDialogContent: React.FC<IGeoStateDialogContentProps> = ({ immUrlSearchParams }) => {
  const manufacturer = immUrlSearchParams.get('manufacturer');
  const results = db.prepare(statementSql).all({ manufacturer }) as IProduct[];
  const getParams = useGetProductParams(immUrlSearchParams);

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
