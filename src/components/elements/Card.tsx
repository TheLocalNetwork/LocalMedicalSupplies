import clsx from "clsx";


export const Card = ({ className, ...props }: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      {...props}
      className={clsx(className, "overflow-hidden bg-white px-2 py-6 shadow sm:rounded-lg sm:p-6 dark:bg-zinc-800")} />
  );
};
