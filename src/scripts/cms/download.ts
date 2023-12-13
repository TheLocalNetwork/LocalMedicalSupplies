import {
  IPackageConfig,
  generateDatasetTypeByKeyword,
  getDatasetData,
  getDatasetMeta,
  getDatasetTypeInterfaceName,
  setConfig,
  type IDataGovCatalogDataset,
} from '@thelocalnetwork/cms-data-tools';
import { outputFile, outputJson } from 'fs-extra';
import path from 'node:path';
import pLimit from 'p-limit';

// const cmsDataTools = new CmsDataTools({
//   enableLocalCache: true,
// });

const CMS_KEYWORD = `Medical Suppliers & Equipment`;
const CACHE_DIRECTORY = path.resolve(`./.cache-cms-data-tools`);
const CMS_TOOLS_CONFIG: IPackageConfig = {
  cache: { cacheDirectory: CACHE_DIRECTORY },
};

export const sleep = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

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
  const filePath = path.resolve(process.cwd(), `__generated`, fileName);
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

  const id = 'f8603e5b-9c47-4c52-9b47-a4ef92dfada4';
  const size = 5_000;
  // const offset = 0;

  const dataSetMeta = await getDatasetMeta(id);

  const numRequests = Math.ceil(dataSetMeta.total_rows / size);
  const offsets = Array.from({ length: numRequests }, (_, i) => i).map(
    (i) => i * size
  );

  console.log({
    offset: dataSetMeta.offset,
    total_rows: dataSetMeta.total_rows,
    size: dataSetMeta.size,
    numRequests,
    offsets,
  });

  const limit = pLimit(4);

  await Promise.allSettled(
    offsets.map((offset) =>
      limit(() => getDatasetData(id, offset, size)).then((data) =>
        outputJson(`./.data/${id}_${offset}.json`, data)
      )
    )
  );
};

main();
