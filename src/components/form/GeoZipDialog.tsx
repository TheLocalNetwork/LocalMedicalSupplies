'use client';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from '~/components/catalyst/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '~/components/catalyst/dialog';
import { Field, Label } from '~/components/catalyst/fieldset';
import { getParamsUrl, useGetZipParams } from '~/components/form/urlParams';

export interface IZipDialogProps extends React.PropsWithChildren {
  urlSearchString: string;
}
export const GeoZipDialog: React.FC<IZipDialogProps> = ({ urlSearchString, children }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const zip = urlSearchParams.get('zip');

  const noZipParams = useGetZipParams(urlSearchParams)(null);
  const noZipHref = getParamsUrl(noZipParams);

  const [isOpen, setIsOpen] = useState(false);

  const fakedName = (zip ?? '').split('-').join(' ');

  return (
    <Field>
      <Label>Zip</Label>
      <div data-slot="control">
        <div className="flex w-full items-center justify-between gap-1">
          <Button
            type="button"
            className="w-full max-w-full cursor-pointer justify-between overflow-hidden  capitalize"
            outline
            onClick={() => setIsOpen(true)}
            title="Select a zip code"
          >
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
              {zip ? <>{fakedName}</> : <>Select a Zip</>}
            </div>
            <ArrowTopRightOnSquareIcon />
          </Button>
          {zip ? (
            <Button type="button" outline href={noZipHref} title="Remove zip code selection">
              <XMarkIcon />
            </Button>
          ) : null}
        </div>
        <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
          <DialogTitle>Select a Zip Code</DialogTitle>
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
