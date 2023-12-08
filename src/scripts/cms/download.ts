import {
  getDataCatalog,
  type IDataGovCatalog,
} from '@thelocalnetwork/cms-data-tools';

// const cmsDataTools = new CmsDataTools({
//   enableLocalCache: true,
// });

const main = async () => {
  const catalog: IDataGovCatalog = await getDataCatalog();
  console.log(
    `🚀 ~ file: download.ts:12 ~ main ~ catalog:`,
    catalog.dataset.length
  );

  // const typeInterface =
  //   await cmsDataTools.generateTypescriptInterfaceForDataset(
  //     `86b4807a-d63a-44be-bfdf-ffd398d5e623`,
  //     'IMedicalSupplies'
  //   );

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
