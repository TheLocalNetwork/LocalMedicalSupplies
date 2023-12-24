import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/16/solid";
import { Badge } from "~/components/catalyst/badge";
import { booleanToYesNo } from "~/lib/string";

export const BooleanBadge = ({ value }: { value: boolean; }) => {
  return (
    <Badge color={value ? "green" : "red"}>
      {value ? <HandThumbUpIcon className="size-4" /> : <HandThumbDownIcon className="size-4" />}
      {booleanToYesNo(value)}
    </Badge>
  );
};
