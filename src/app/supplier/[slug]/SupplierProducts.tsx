import { groupBy, sortBy } from 'lodash';
import { Link } from '~/components/catalyst/link';
import { DescriptionListItem, DescriptionListSection } from '~/components/elements/DescriptionListSection';
import {
  getAllSupplierProduct,
  type IGetSupplierProductFilterResult,
} from '~/lib/db/supplier-product/getAllSupplierProduct';
import { getBrowseLink } from '~/lib/link/browse';
import { type IGeoSupplier } from '~/types/Supplier';
import { type IManufacturer } from '~/types/tables';

interface ISupplierProductsProps {
  supplier: IGeoSupplier;
}
export const SupplierProducts: React.FC<ISupplierProductsProps> = ({ supplier }) => {
  const products = getAllSupplierProduct({ provider_id: supplier.id });

  if (!products?.length) return null;

  return (
    <DescriptionListSection id={'products'} title={`Products`}>
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        <SupplierProductsList products={products} />
      </div>
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
        if (!manufacturer_slug) return null;

        const href = getBrowseLink({ manfacturer: manufacturer_slug });

        return (
          <DescriptionListItem
            key={key}
            term={<Link href={href}>{manufacturer_name}</Link>}
            data={<SupplierProductsListProducts manufacturer_slug={manufacturer_slug} products={products} />}
          />
        );
      })}
    </>
  );
};
interface ISupplierProductsListProductsProps {
  manufacturer_slug: IManufacturer['slug'];
  products: IGetSupplierProductFilterResult[];
}
export const SupplierProductsListProducts: React.FC<ISupplierProductsListProductsProps> = ({
  products,
  manufacturer_slug,
}) => {
  return (
    <ol>
      {products.map((product) => {
        const href = getBrowseLink({ manfacturer: manufacturer_slug, product: product.slug });

        return (
          <li key={product.id}>
            <Link href={href}>{product.name}</Link>
          </li>
        );
      })}
    </ol>
  );
};
