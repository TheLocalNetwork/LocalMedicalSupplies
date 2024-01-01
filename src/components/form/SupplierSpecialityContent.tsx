'use server';
import { type ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl, useGetSpecialityParams } from '~/components/form/urlParams';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import { type ISpeciality } from '~/types/tables';
import { LinkButton } from './LinkButton';

const statementSql = sql`
  SELECT
    SPECIALITY.id,
    SPECIALITY.name,
    SPECIALITY.slug
  FROM
    SPECIALITY
  ORDER BY
    SPECIALITY.slug;
`;
const results = db.prepare(statementSql).all() as ISpeciality[];

interface ISupplierSpecialityDialogContentProps {
  immUrlSearchParams: ImmutableURLSearchParams;
}
export const SupplierSpecialityDialogContent: React.FC<ISupplierSpecialityDialogContentProps> = ({
  immUrlSearchParams,
}) => {
  const getParams = useGetSpecialityParams(immUrlSearchParams);

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
