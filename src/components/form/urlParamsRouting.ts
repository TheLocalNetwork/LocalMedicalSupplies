import { useRouter } from 'next/navigation';
import { getParamsUrl, useGetLimitParams, useGetStateParams, type TFnSetUrlParam } from '~/components/form/urlParams';

const useSetParams = (
  urlSearchParams: URLSearchParams,
  useGetParams: (urlSearchParams: URLSearchParams) => TFnSetUrlParam
) => {
  const router = useRouter();
  const getParams = useGetParams(urlSearchParams);

  const fn = (value: string | null) => {
    const params = getParams(value);
    return router.push(getParamsUrl(params));
  };

  return fn;
};

export const useSetState = (urlSearchParams: URLSearchParams) => useSetParams(urlSearchParams, useGetStateParams);
export const useSetLimit = (urlSearchParams: URLSearchParams) => useSetParams(urlSearchParams, useGetLimitParams);
