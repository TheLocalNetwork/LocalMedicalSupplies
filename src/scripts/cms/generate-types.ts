import {
  generateDatasetTypeByKeyword,
  getDatasetTypeInterfaceName,
  setConfig,
  type IDataGovCatalogDataset,
} from '@thelocalnetwork/cms-data-tools';
import { outputFile } from 'fs-extra';
import path from 'node:path';
import { CMS_KEYWORD, CMS_TOOLS_CONFIG } from '~/scripts/cms/config';

export const generateTypes = async () => {
  return generateDatasetTypeByKeyword(CMS_KEYWORD).then(
    (datasetTypesByKeyword) => {
      return Promise.all(datasetTypesByKeyword.map((item) => writeType(item)));
    }
  );
};

const writeType = async (item: {
  dataset: IDataGovCatalogDataset;
  typeInterface: string;
}) => {
  const interfaceName = getDatasetTypeInterfaceName(item.dataset.title);
  const fileName = `${interfaceName}.ts`;
  const filePath = path.resolve(
    process.cwd(),
    `__generated`,
    `types`,
    fileName
  );
  const fileContent = item.typeInterface;

  console.log(`Writing generated type`, {
    id: item.dataset.id,
    title: item.dataset.title,
    interfaceName,
    filePath,
    fileContent: fileContent.length,
  });

  return outputFile(filePath, fileContent);
};

const main = async () => {
  setConfig(CMS_TOOLS_CONFIG);

  await generateTypes();
};

main();
