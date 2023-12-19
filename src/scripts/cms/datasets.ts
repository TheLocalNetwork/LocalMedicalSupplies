import {
  getCatalogDataSetsByKeyword,
  setConfig,
} from '@thelocalnetwork/cms-data-tools';
import { outputFileSync } from 'fs-extra';
import { pick } from 'lodash';
import path from 'node:path';
import prettier from 'prettier';
import { CMS_KEYWORD, CMS_TOOLS_CONFIG } from '~/scripts/cms/config';

const main = async () => {
  setConfig(CMS_TOOLS_CONFIG);

  const outputDirectory = path.resolve(process.cwd(), `./db`);

  await getCatalogDataSetsByKeyword(CMS_KEYWORD).then(async (datasets) => {
    const datasetsPretty = await prettier.format(JSON.stringify(datasets), {
      parser: 'json',
    });

    outputFileSync(
      path.resolve(outputDirectory, 'datasets.json'),
      datasetsPretty
    );

    const summary = datasets.map((dataset) =>
      pick(dataset, ['id', 'title', 'description'])
    );
    const summaryPretty = await prettier.format(JSON.stringify(summary), {
      parser: 'json',
    });

    outputFileSync(
      path.resolve(outputDirectory, 'summary.json'),
      summaryPretty
    );
  });
};

main();
