'use client';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { Button } from '~/components/catalyst/button';
import { Dialog, DialogActions, DialogBody, DialogTitle } from '~/components/catalyst/dialog';
import { Field, Label } from '~/components/catalyst/fieldset';
import { getParamsUrl, useGetCityParams } from '~/components/form/urlParams';

export interface ICityDialogProps extends React.PropsWithChildren {
  urlSearchString: string;
}
export const GeoCityDialog: React.FC<ICityDialogProps> = ({ urlSearchString, children }) => {
  const urlSearchParams = new URLSearchParams(urlSearchString);
  const city = urlSearchParams.get('city');

  const noCityParams = useGetCityParams(urlSearchParams)(null);
  const noCityHref = getParamsUrl(noCityParams);

  const [isOpen, setIsOpen] = useState(false);

  const fakedName = (city ?? '').split('-').join(' ');

  return (
    <Field>
      <Label>City</Label>
      <div data-slot="control">
        <div className="flex w-full items-center justify-between gap-1">
          <Button
            type="button"
            className="w-full max-w-full cursor-pointer justify-between overflow-hidden  capitalize"
            outline
            onClick={() => setIsOpen(true)}
            title="Select a city"
          >
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left">
              {city ? <>{fakedName}</> : <>Select a City</>}
            </div>
            <ArrowTopRightOnSquareIcon />
          </Button>
          {city ? (
            <Button type="button" outline href={noCityHref} title="Remove city selection">
              <XMarkIcon />
            </Button>
          ) : null}
        </div>
        <Dialog open={isOpen} onClose={setIsOpen} size="5xl">
          <DialogTitle>Select a City</DialogTitle>
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
