import { type ImmutableURLSearchParams } from 'immurl';
import { useRouter } from 'next/navigation';
import { getParamsUrl, useGetLimitParams, useGetStateParams, type TFnSetUrlParam } from '~/components/form/urlParams';

const useSetParams = (
  immUrlSearchParams: ImmutableURLSearchParams,
  useGetParams: (immUrlSearchParams: ImmutableURLSearchParams) => TFnSetUrlParam
) => {
  const router = useRouter();
  const getParams = useGetParams(immUrlSearchParams);

  const fn = (value: string | null) => {
    const params = getParams(value);
    return router.push(getParamsUrl(params));
  };

  return fn;
};

export const useSetState = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useSetParams(immUrlSearchParams, useGetStateParams);
export const useSetLimit = (immUrlSearchParams: ImmutableURLSearchParams) =>
  useSetParams(immUrlSearchParams, useGetLimitParams);
