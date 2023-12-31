import { InformationCircleIcon } from '@heroicons/react/16/solid';
import { type PropsWithChildren } from 'react';

export const EmptyState: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="flex items-center gap-2 px-2  opacity-50">
    <InformationCircleIcon className="inline-block size-5" />
    <span>{children}</span>
  </p>
);
