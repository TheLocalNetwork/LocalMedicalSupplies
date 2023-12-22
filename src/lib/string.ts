import { chain } from 'lodash';

export const slugify = (str: string): string => {
  return chain(str).deburr().kebabCase().value();
};
