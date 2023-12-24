import { deburr, kebabCase } from 'lodash';

export const slugify = (str: string): string => {
  return kebabCase(deburr(str));
};
