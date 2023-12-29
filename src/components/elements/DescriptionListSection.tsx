import { type InformationCircleIcon } from '@heroicons/react/24/solid';
import { isNil } from 'lodash';
import { Card } from './Card';

interface IDescriptionListSectionProps
  extends React.PropsWithChildren,
    Omit<React.ComponentPropsWithoutRef<'section'>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}
export const DescriptionListSection: React.FC<IDescriptionListSectionProps> = ({
  title,
  subtitle,
  children,
  ...props
}) => {
  return (
    <Card {...props}>
      <div className="flex flex-col gap-1 px-4 sm:gap-2 sm:px-0">
        <h1 className="text-xl font-semibold leading-7 sm:text-3xl ">{title}</h1>
        <h2 className="max-w-2xl text-sm sm:text-base">{subtitle}</h2>
      </div>
      {children}
    </Card>
  );
};

export const DescriptionList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-6 border-t border-black/10 dark:border-white/10">
      <dl className="divide-y divide-black/10 dark:divide-white/10">{children}</dl>
    </div>
  );
};
interface IDescriptionListItemProps {
  term: React.ReactNode;
  Icon?: typeof InformationCircleIcon | undefined;
  data?: React.ReactNode;
}
export const DescriptionListItem = ({ Icon, term, data }: IDescriptionListItemProps) => {
  if (isNil(data)) return null;

  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4">
      <DescriptionListItemTerm Icon={Icon} term={term} />
      <DescriptionListItemData data={data} />
    </div>
  );
};
interface IDescriptionListItemTermProps {
  term: React.ReactNode;
  Icon?: typeof InformationCircleIcon | undefined;
}
export const DescriptionListItemTerm = ({ Icon, term }: IDescriptionListItemTermProps) => {
  return (
    <dt className="flex items-start gap-2 text-base font-bold leading-6 sm:gap-2 sm:text-sm">
      {Icon ? <Icon className="size-5 opacity-70" /> : null}
      <div>{term}</div>
    </dt>
  );
};
interface IDescriptionListItemDataProps {
  data: React.ReactNode;
}
export const DescriptionListItemData = ({ data }: IDescriptionListItemDataProps) => {
  return <dd className="mt-1 sm:col-span-2 sm:mt-0">{data}</dd>;
};
