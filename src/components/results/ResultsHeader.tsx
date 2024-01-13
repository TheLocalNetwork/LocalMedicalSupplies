import { XMarkIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';
import { type ImmutableURLSearchParams } from 'immurl';
import { Badge } from '~/components/catalyst/badge';
import { Link } from '~/components/catalyst/link';
import { DEFAULT_LIMIT, DEFAULT_PAGE, emptyGeoUrlParams, emptySupplierUrlParams } from '~/components/form/consts';
import { getParamsUrl, useGetParamByParamName } from '~/components/form/urlParams';

interface IResultsHeaderProps {
  immUrlSearchParams: ImmutableURLSearchParams;
  numResults: number;
}
export const ResultsHeader: React.FC<IResultsHeaderProps> = ({ immUrlSearchParams, numResults }) => {
  const page = Number(immUrlSearchParams.get('page') ?? DEFAULT_PAGE);
  const limit = Number(immUrlSearchParams.get('limit') ?? DEFAULT_LIMIT);
  const offset = (page - 1) * limit;

  const geoParamKeys = Object.keys(emptyGeoUrlParams).filter((key) => immUrlSearchParams.has(key));
  const supplierParamKeys = Object.keys(emptySupplierUrlParams).filter((key) => immUrlSearchParams.has(key));

  return (
    <header className="flex flex-col gap-3">
      {numResults ? (
        <h1 className="text-xl">
          {`Displaying`}
          {` `}
          <code>{(offset + 1).toLocaleString()}</code>
          {` – `}
          <code>{Math.min(numResults, offset + limit).toLocaleString()}</code>
          {` of `}
          <code>{numResults.toLocaleString()}</code>
          {` `}
          {`results`}
        </h1>
      ) : (
        <h1>No Results</h1>
      )}

      {geoParamKeys.length || supplierParamKeys.length ? (
        <div className="flex flex-col gap-2">
          <ParamBadgeSection
            title="Location Filters"
            paramKeys={geoParamKeys}
            immUrlSearchParams={immUrlSearchParams}
          />
          <ParamBadgeSection
            title="Supplier Filters"
            paramKeys={supplierParamKeys}
            immUrlSearchParams={immUrlSearchParams}
          />
        </div>
      ) : null}
    </header>
  );
};

const ParamBadgeSection: React.FC<{
  title: string;
  paramKeys: string[];
  immUrlSearchParams: ImmutableURLSearchParams;
}> = ({ title, paramKeys, immUrlSearchParams }) => {
  if (!paramKeys.length) return null;

  return (
    <p className={clsx('flex flex-wrap items-center gap-2 capitalize')}>
      <span className="text-xs opacity-75">{title}:</span>
      {paramKeys.map((key) => (
        <ParamBadge key={key} immUrlSearchParams={immUrlSearchParams} paramKey={key} />
      ))}
    </p>
  );
};

interface IParamBadgeProps {
  immUrlSearchParams: ImmutableURLSearchParams;
  paramKey: string;
}
const ParamBadge: React.FC<IParamBadgeProps> = ({ immUrlSearchParams, paramKey }) => {
  const setParam = useGetParamByParamName(paramKey, immUrlSearchParams);
  const value = immUrlSearchParams.get(paramKey) ?? '';

  const label = paramKey.split('-').join(' ');
  const prettyValue = value.split('-').join(' ');
  const unsetParams = setParam(null);
  const unsetHref = getParamsUrl(unsetParams);

  return (
    <Badge className={clsx('flex items-center gap-4')}>
      <span>{label}:</span>
      <span>{prettyValue}</span>
      <Link href={unsetHref} title={`Remove ${label}`}>
        <XMarkIcon className="size-3" />
      </Link>
    </Badge>
  );
};
