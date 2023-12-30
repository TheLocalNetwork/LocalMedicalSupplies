'use client';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from '~/components/catalyst/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '~/components/catalyst/dialog';
import { Field, Label } from '~/components/catalyst/fieldset';
import { getParamsUrl, useGetCountyParams } from '~/components/form/urlParams';

export interface ICountyDialogProps extends React.PropsWithChildren {
  urlSearchString: string;
}
export const GeoCountyDialog: React.FC<ICountyDialogProps> = ({ urlSearchString, children }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const county = urlSearchParams.get('county');

  const noCountyParams = useGetCountyParams(urlSearchParams)(null);
  const noCountyHref = getParamsUrl(noCountyParams);

  const [isOpen, setIsOpen] = useState(false);

  const fakedName = (county ?? '').split('-').join(' ');

  return (
    <Field>
      <Label>County</Label>
      <div data-slot="control">
        <div className="flex w-full items-center justify-between gap-1">
          <Button
            type="button"
            className="w-full max-w-full cursor-pointer justify-between overflow-hidden  capitalize"
            outline
            onClick={() => setIsOpen(true)}
            title="Select a County"
          >
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
              {county ? <>{fakedName}</> : <>Select a County</>}
            </div>
            <ArrowTopRightOnSquareIcon />
          </Button>
          {county ? (
            <Button type="button" outline href={noCountyHref} title="Remove county selection">
              <XMarkIcon />
            </Button>
          ) : null}
        </div>
        <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
          <DialogTitle>Select a County</DialogTitle>
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
