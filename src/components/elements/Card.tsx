import clsx from "clsx";

export const Card = ({ className, ...props }: React.ComponentPropsWithoutRef<"section">) => {
  const { children, ...rest } = props;
  return (
    <section {...rest} className={clsx(className, "mx-auto w-full max-w-6xl px-0 sm:px-6")}>
      <div className={clsx(`overflow-hidden bg-white px-2 py-6 sm:p-6 sm:rounded-lg shadow dark:bg-zinc-800`)}>
        {children}
      </div>
    </section>
  );
};
