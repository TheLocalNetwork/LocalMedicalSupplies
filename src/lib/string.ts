import { deburr, kebabCase } from 'lodash';

export const slugify = (str: string): string => {
  return kebabCase(deburr(str));
};

export const booleanToYesNo = (value: boolean) => {
  return value ? 'Yes' : 'No';
};

export const isoDateToLocaleDate = (value: string) => {
  return value ? new Date(value).toLocaleDateString() : null;
};
