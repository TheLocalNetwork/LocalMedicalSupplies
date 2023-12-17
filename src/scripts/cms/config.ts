import { IPackageConfig } from '@thelocalnetwork/cms-data-tools';
import path from 'node:path';

export const CMS_KEYWORD = `Medical Suppliers & Equipment`;
export const CACHE_DIRECTORY = path.resolve(`./.cache-cms-data-tools`);
export const CMS_TOOLS_CONFIG: IPackageConfig = {
  cache: { cacheDirectory: CACHE_DIRECTORY },
  network: { simultaneousRequests: 8, pageWaitMS: 250 },
  requestConfig: { 'axios-retry': { retries: 3 } },
};
