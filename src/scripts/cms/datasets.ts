import {
  getCatalogDataSetsByKeyword,
  setConfig,
} from '@thelocalnetwork/cms-data-tools';
import { outputFile } from 'fs-extra';
import { pick } from 'lodash';
import path from 'node:path';
import prettier from 'prettier';
import { CMS_KEYWORD, CMS_TOOLS_CONFIG } from '~/scripts/cms/config';

const prettyJson = async (data: any) =>
  prettier.format(JSON.stringify(data), { parser: 'json' });

const outputJsonPretty = async (data: any, filePath: string) => {
  return prettyJson(data).then((prettyJson) =>
    outputFile(filePath, prettyJson)
  );
};

const main = async () => {
  setConfig(CMS_TOOLS_CONFIG);

  const outputDirectory = path.resolve(process.cwd(), `./db`);

  await getCatalogDataSetsByKeyword(CMS_KEYWORD).then(async (datasets) => {
    const summary = datasets.map((dataset) =>
      pick(dataset, ['id', 'title', 'description'])
    );

    await outputJsonPretty(
      datasets,
      path.resolve(outputDirectory, 'datasets.json')
    );

    await outputJsonPretty(
      summary,
      path.resolve(outputDirectory, 'summary.json')
    );
  });
};

main();
