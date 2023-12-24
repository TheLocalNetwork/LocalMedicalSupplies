import { isNil } from "lodash";
import { getSupplierSupplyCollection } from "~/lib/db/supplier-supply/get";
import { getSupplier } from "~/lib/db/supplier/get";
import { slugify } from "~/lib/string";
import { ISupplier, ISupply } from "~/types/Supplier";

export interface ISupplierSupplyProps {
  provider_id: ISupplier["provider_id"];
}
export default async function SupplierSupply({ provider_id }: ISupplierSupplyProps) {
  "use server";
  const supplier = await getSupplier(provider_id);
  const supplierSupplyCollection = await getSupplierSupplyCollection(provider_id);

  if (isNil(supplierSupplyCollection) || isNil(supplier)) return null;

  return (
    <section>
      <header>
        <h1 className={`text-3xl`}>Supplies available at {supplier?.practice_name}</h1>
      </header>

      {isNil(supplierSupplyCollection) ? (
        <p>No Results</p>
      ) : (
        <SupplierSupplyList collection={supplierSupplyCollection} />
      )}
    </section>
  );
}

interface ISupplierSupplyListProps {
  collection: ISupply[];
}
export const SupplierSupplyList = ({ collection }: ISupplierSupplyListProps) => {
  const slugged = collection.map((item) => ({
    ...item,
    slug: slugify(item.name),
  }));

  const sorted = slugged.sort((a, b) => a.slug.localeCompare(b.slug));

  return (
    <ul>
      {sorted.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};
