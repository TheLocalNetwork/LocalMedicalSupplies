'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl, useGetProviderTypeParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type IProviderType } from '~/types/tables';
import { LinkButton } from './LinkButton';

const statementSql = sql`
  SELECT
    PROVIDERTYPE.id,
    PROVIDERTYPE.name,
    PROVIDERTYPE.slug
  FROM
    PROVIDERTYPE
  ORDER BY
    PROVIDERTYPE.slug;
`;
const results = db.prepare(statementSql).all() as IProviderType[];

interface ISupplierProviderTypeDialogContentProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const SupplierProviderTypeDialogContent: React.FC<ISupplierProviderTypeDialogContentProps> = ({
  immUrlSearchParams,
}) => {
  const getParams = useGetProviderTypeParams(immUrlSearchParams);

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
