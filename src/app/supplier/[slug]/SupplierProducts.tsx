import { groupBy, sortBy } from 'lodash';
import { Link } from '~/components/catalyst/link';
import { DescriptionListItem, DescriptionListSection } from '~/components/elements/DescriptionListSection';
import {
  getAllSupplierProduct,
  type IGetSupplierProductFilterResult,
} from '~/lib/db/supplier-product/getAllSupplierProduct';
import { type IGeoSupplier } from '~/types/Supplier';

interface ISupplierProductsProps {
  supplier: IGeoSupplier;
}
export const SupplierProducts: React.FC<ISupplierProductsProps> = ({ supplier }) => {
  const products = getAllSupplierProduct({ provider_id: supplier.id });

  return (
    <DescriptionListSection
      title={
        <div className="flex items-center gap-2">
          <div>Supplier Products</div>
        </div>
      }
      subtitle={<div>A list of product brands carried at {supplier.practice_name}</div>}
      id={'products'}
    >
      {products && products.length > 0 ? <SupplierProductsList products={products} /> : <p>No Results</p>}
    </DescriptionListSection>
  );
};

interface ISupplierProductsListProps {
  products: IGetSupplierProductFilterResult[];
}
export const SupplierProductsList: React.FC<ISupplierProductsListProps> = ({ products }) => {
  const sorted = sortBy(products, ['manufacturer_slug', 'slug']);
  const grouped = groupBy(sorted, 'manufacturer_slug');

  return (
    <>
      {Object.entries(grouped).map(([key, products]) => {
        const { manufacturer_name, manufacturer_slug } = products[0] ?? {};

        return (
          <DescriptionListItem
            key={key}
            term={<Link href={`/?manfacturer=${manufacturer_slug}`}>{manufacturer_name}</Link>}
            data={
              <ol>
                {products.map((product) => {
                  return (
                    <li key={product.id}>
                      <Link href={`/?manfacturer=${manufacturer_slug}&product=${product.slug}`}>{product.name}</Link>
                    </li>
                  );
                })}
              </ol>
            }
          />
        );
      })}
    </>
  );
};
