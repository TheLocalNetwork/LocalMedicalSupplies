'use client';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from '~/components/catalyst/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '~/components/catalyst/dialog';
import { Field, Label } from '~/components/catalyst/fieldset';
import { getParamsUrl, useGetStateParams } from '~/components/form/urlParams';

export interface IGeoStateDialogProps extends React.PropsWithChildren {
  urlSearchString: string;
}
export const GeoStateDialog: React.FC<IGeoStateDialogProps> = ({ urlSearchString, children }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const state = urlSearchParams.get('state');

  const noStateParams = useGetStateParams(urlSearchParams)(null);
  const noStateHref = getParamsUrl(noStateParams);

  const [isOpen, setIsOpen] = useState(false);

  const fakedName = (state ?? '').split('-').join(' ');

  return (
    <Field>
      <Label>State</Label>
      <div data-slot="control">
        <div className="flex w-full items-center justify-between gap-1">
          <Button
            type="button"
            className="w-full max-w-full cursor-pointer justify-between overflow-hidden  capitalize"
            outline
            onClick={() => setIsOpen(true)}
            title="Select a state"
          >
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
              {state ? <>{fakedName}</> : <>Select a State</>}
            </div>
            <ArrowTopRightOnSquareIcon />
          </Button>
          {state ? (
            <Button type="button" outline href={noStateHref} title="Remove state selection">
              <XMarkIcon />
            </Button>
          ) : null}
        </div>
        <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
          <DialogTitle>Select a State</DialogTitle>
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
