import Link from 'next/link';
import { DEFAULT_LIMIT } from '~/app/results';
import { StatesListbox } from '~/components/form/StatesListbox';
import { StatesListboxOptions } from '~/components/form/StatesListboxOptions';

export interface IFormProps {
  urlSearchParams: URLSearchParams;
}
export const Form: React.FC<IFormProps> = ({ urlSearchParams }) => {
  return (
    <section className="w-3/12 shrink-0">
      <StatesListbox>
        <StatesListboxOptions />
      </StatesListbox>
      <div>
        <ul>
          {[10, 20, 50, 100].map((limit) => {
            const proposedSearchParams = new URLSearchParams(urlSearchParams);
            proposedSearchParams.delete('offset');

            if (limit === DEFAULT_LIMIT) {
              proposedSearchParams.delete('limit');
            } else {
              proposedSearchParams.set('limit', limit.toString());
            }

            return (
              <li key={limit}>
                <Link href={`/?${proposedSearchParams.toString()}`}>{limit}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
