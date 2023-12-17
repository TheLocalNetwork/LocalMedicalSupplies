import {
  downloadDatasetDataByKeyword,
  setConfig,
} from '@thelocalnetwork/cms-data-tools';
import path from 'node:path';
import { CMS_KEYWORD, CMS_TOOLS_CONFIG } from '~/scripts/cms/config';

const main = async () => {
  setConfig(CMS_TOOLS_CONFIG);

  const outputDirectory = path.resolve(process.cwd(), `./.data`);

  await downloadDatasetDataByKeyword(CMS_KEYWORD, outputDirectory);
};

main();
