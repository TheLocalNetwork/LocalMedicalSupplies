'use client';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from '~/components/catalyst/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '~/components/catalyst/dialog';
import { Field, Label } from '~/components/catalyst/fieldset';

export interface IFormDialogContainer extends React.PropsWithChildren {
  label: string;
  unsetHref: string;
  currentValue: string | null;
}
export const FormDialogContainer: React.FC<IFormDialogContainer> = ({ label, currentValue, unsetHref, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fakedName = (currentValue ?? '').split('-').join(' ');

  return (
    <Field>
      <Label>{label}</Label>
      <div data-slot="control">
        <div className="flex w-full items-center justify-between gap-1">
          <Button
            type="button"
            className="w-full max-w-full cursor-pointer justify-between overflow-hidden"
            outline
            onClick={() => setIsOpen(true)}
            title={`Select a ${label}`}
          >
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
              {currentValue ? <span className="capitalize">{fakedName}</span> : <>Select a {label}</>}
            </div>
            <ArrowTopRightOnSquareIcon />
          </Button>

          {currentValue ? (
            <Button type="button" outline href={unsetHref} title={`Remove ${label} Selection`}>
              <XMarkIcon />
            </Button>
          ) : null}
        </div>

        <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
          <DialogTitle>Select a {label}</DialogTitle>
          <DialogBody>{children}</DialogBody>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Field>
  );
};
