import {
  generateDatasetType,
  getCatalogDataSetsByKeyword,
  getDatasetTypeInterfaceName,
  getIdFromDatasetIdentifier,
  setConfig,
} from '@thelocalnetwork/cms-data-tools';
import { outputFileSync } from 'fs-extra';
import path from 'node:path';

// const cmsDataTools = new CmsDataTools({
//   enableLocalCache: true,
// });

const main = async () => {
  setConfig({
    cache: {
      cacheDirectory: path.resolve(`./.cache-cms-data-tools`),
    },
  });

  // const catalog: IDataGovCatalog = await getDataCatalog();
  // console.log(
  //   `🚀 ~ file: download.ts:12 ~ main ~ catalog:`,
  //   catalog.dataset.length
  // );

  // const datasetById = await getCatalogDataSetById(
  //   `86b4807a-d63a-44be-bfdf-ffd398d5e623`
  // );
  // console.log(`datasetById`, { datasetById });

  const datasetsByKeyword = await getCatalogDataSetsByKeyword(
    `Medical Suppliers & Equipment`
  );

  console.log(
    `datasetsByKeyword`,
    datasetsByKeyword.length,
    datasetsByKeyword.map((d) => ({
      title: d.title,
      identifier: d.identifier,
    }))
  );

  await Promise.allSettled(
    datasetsByKeyword.map(async (dataset) => {
      const id = getIdFromDatasetIdentifier(dataset.identifier);
      console.log(
        `🚀 ~ file: download.ts:37 ~ datasetsByKeyword.map ~ id:`,
        id
      );

      if (!id) return Promise.reject(`No id found in ${dataset.identifier}`);

      return generateDatasetType(id).then((typeInterface) => ({
        id,
        dataset,
        typeInterface,
      }));
    })
  ).then((settled) => {
    console.log(
      `settled`,
      settled.map((item, settledIndex) => {
        if (item.status === 'rejected') {
          const dataset = datasetsByKeyword[settledIndex];
          const id = getIdFromDatasetIdentifier(dataset?.identifier ?? '');

          return {
            status: item.status,
            reason: item.reason.message,
            id,
            dataset: dataset?.title,
          };
        }

        const name = getDatasetTypeInterfaceName(item.value.dataset.title);

        outputFileSync(
          `./_generated/${name}.ts`,
          `${item.value.typeInterface}`
        );

        return {
          status: item.status,
          id: item.value.id,
          title: item.value.dataset.title,
          typeInterface: item.value.typeInterface.length,
        };
      })
    );
  });

  // const typeInterface = await generateDatasetType(
  //   `86b4807a-d63a-44be-bfdf-ffd398d5e623`,
  //   `I${upperFirst(camelCase(datasetById?.title))}`
  // );

  // console.log(`🚀 ~ file: download.ts:11 ~ typeInterface:`, typeInterface);

  // const size = 5_000;
  // const offset = 0;
  // const dataSetResponse = await cmsDataTools.retrieveData<
  //   IDataGovDataset<{ a: string }>
  // >(
  //   `data-api/v1/dataset/86b4807a-d63a-44be-bfdf-ffd398d5e623/data-viewer?size=${size}&offset=${offset}`
  // );
  // const result = dataSetResponse.data;
  // const { data, meta } = result;

  // console.log({
  //   offset: meta.offset,
  //   total_rows: meta.total_rows,
  //   size: meta.size,
  //   data: data.length,
  // });
};

main();
