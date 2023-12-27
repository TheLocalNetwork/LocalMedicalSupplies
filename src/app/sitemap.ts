import { type MetadataRoute } from 'next';
import { CANONICAL_DOMAIN_NAME } from '~/lib/const';
import { db } from '~/lib/db/db';
import { type ISupplier } from '~/types/Supplier';
import { type IZipState } from '~/types/zip';

const supplierStatesStatement = db.prepare(`SELECT StateAbbr FROM ZIP_STATE`);

export function generateSitemaps() {
  const supplierStates = supplierStatesStatement.all() as IZipState[];
  const supplierStatesPages = supplierStates.map(({ StateAbbr }) => ({
    id: `suppliers-${StateAbbr}`,
  }));

  return [{ id: 'general' }, ...supplierStatesPages];
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  if (id === 'general') return getGeneral();

  if (id.startsWith('suppliers-')) return getSuppliers(id);

  return [];
}

const getGeneral = () => {
  return [
    {
      url: CANONICAL_DOMAIN_NAME,
      priority: 1,
    },
  ];
};

const suppliersStatement = db.prepare(`
  SELECT provider_id, practice_slug 
  FROM SUPPLIER
    INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    INNER JOIN ZIP_STATE ON ZIP_ZIPCODE.StateID = ZIP_STATE.id
  WHERE ZIP_STATE.StateAbbr = @state
  ORDER BY provider_id
`);
const getSuppliers = (id: string) => {
  const state = id.split('-')[1];

  const suppliers = suppliersStatement.all({ state }) as ISupplier[];
  return suppliers.map(({ provider_id, practice_slug }) => ({
    url: `/provider/${provider_id}-${practice_slug}`,
    priority: 0.8,
  }));
};
