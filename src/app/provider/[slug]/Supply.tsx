import { isNil } from "lodash";
import { getSupply } from "~/lib/db/supply/get";
import { ISupply } from "~/types/Supplier";

export interface ISupplyProps {
  id: ISupply["id"];
}
export default async function Supply({ id }: ISupplyProps) {
  "use server";
  const supply = await getSupply(id);

  if (isNil(supply)) return <div>NOT FOUND: {id}</div>;

  return <div>{supply.name}</div>;
}
