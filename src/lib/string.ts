import { deburr, kebabCase } from 'lodash';

// export const sql = (strings: TemplateStringsArray): string => String.raw({ raw: strings });

export const slugify = (str: string): string => {
  return kebabCase(deburr(str));
};

export const booleanToYesNo = (value: boolean) => {
  return value ? 'Yes' : 'No';
};

export const isoDateToLocaleDate = (value: string) => {
  return value ? new Date(value).toLocaleDateString() : null;
};

export type Primitive = string | number | boolean | undefined | null;

// custom tag function
export function sql(strings: TemplateStringsArray, ...values: Primitive[]): string {
  let result = strings[0] ?? '';
  for (let i = 1; i < strings.length; i++) {
    const fragment = strings[i];
    const value = values[i - 1];
    result += `${value}${fragment}`;
  }
  return result;
}

// // the `sql` function uses the `sqlTemplate` function. It returns a parametrized query, which is safe from SQL injection attacks.
// export async function sql<O extends QueryResultRow>(
//   strings: TemplateStringsArray,
//   ...values: Primitive[]
// ): Promise<QueryResult<O>> {
//   const [query, params] = sqlTemplate(strings, ...values);
//   return this.query(query, params);
// }
