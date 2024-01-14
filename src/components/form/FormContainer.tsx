'use client';

import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState, type PropsWithChildren } from 'react';

export const FormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={clsx(['order-1 flex shrink-0 flex-col gap-4', 'md:w-3/12'])}>
      <div className={clsx(['hidden', 'max-md:mb-3 max-md:flex'])}>
        <ToggleButton setShowForm={setShowForm} showForm={showForm} />
      </div>

      <div
        className={clsx({
          'max-md:hidden': !showForm,
          'max-md:block': showForm,
        })}
      >
        {children}
      </div>

      {showForm ? (
        <div className={clsx(['hidden', 'max-md:my-3 max-md:flex'])}>
          <ToggleButton setShowForm={setShowForm} showForm={showForm} />
        </div>
      ) : null}
    </div>
  );
};

interface IToggleButtonProps {
  showForm: boolean;
  setShowForm: (v: boolean) => void;
}
const ToggleButton: React.FC<IToggleButtonProps> = ({ showForm, setShowForm }) => {
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <button
      className={clsx([
        'flex w-full cursor-pointer items-center justify-between gap-3',
        'rounded-md px-5 py-3 text-sm font-semibold',
        ' bg-white text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50',
        ' dark:bg-white/10 dark:text-white dark:shadow-sm dark:ring-zinc-800 dark:hover:bg-white/20',
      ])}
      onClick={toggleShowForm}
    >
      <span>{showForm ? `Hide` : `Show`} Filter Options</span>
      <ChevronDoubleDownIcon
        className={clsx([
          'size-4',
          ' transition-all duration-75',
          {
            '-scale-y-100 ': showForm,
            'scale-y-100 ': !showForm,
          },
        ])}
      />
    </button>
  );
};
