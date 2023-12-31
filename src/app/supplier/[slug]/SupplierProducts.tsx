import { ImmutableURLSearchParams } from 'immurl';
import { groupBy, sortBy } from 'lodash';
import { Link } from '~/components/catalyst/link';
import { DescriptionListItem, DescriptionListSection } from '~/components/elements/DescriptionListSection';
import { EmptyState } from '~/components/elements/EmptyState';
import {
  getParamsUrl,
  useGetCityParams,
  useGetManufacturerParams,
  useGetProductParams,
  useGetStateParams,
} from '~/components/form/urlParams';
import {
  getAllSupplierProduct,
  type IGetSupplierProductFilterResult,
} from '~/lib/db/supplier-product/getAllSupplierProduct';
import { type IGeoSupplier } from '~/types/Supplier';
import { type IManufacturer } from '~/types/tables';

interface ISupplierProductsProps {
  supplier: IGeoSupplier;
}
export const SupplierProducts: React.FC<ISupplierProductsProps> = ({ supplier }) => {
  const products = getAllSupplierProduct({ provider_id: supplier.id });

  const immUrlSearchParams = new ImmutableURLSearchParams();
  const stateUrlParams = useGetStateParams(immUrlSearchParams)(supplier.StateSlug);
  const cityUrlParams = useGetCityParams(stateUrlParams)(supplier.CitySlug);

  return (
    <DescriptionListSection id={'products'} title={`Products`}>
      <div className="mt-6 border-t border-black/10 py-6 dark:border-white/10">
        {products?.length ? (
          <SupplierProductsResults browseUrlParams={cityUrlParams} products={products} />
        ) : (
          <EmptyState>No reported products</EmptyState>
        )}
      </div>
    </DescriptionListSection>
  );
};

interface ISupplierProductsResultsProps {
  products: IGetSupplierProductFilterResult[];
  browseUrlParams: ImmutableURLSearchParams;
}
export const SupplierProductsResults: React.FC<ISupplierProductsResultsProps> = ({ products, browseUrlParams }) => {
  const sorted = sortBy(products, ['manufacturer_slug', 'slug']);
  const grouped = groupBy(sorted, 'manufacturer_slug');

  return (
    <>
      {Object.values(grouped).map((products) => {
        const sampleProduct = products[0];
        if (!sampleProduct) return null;

        return (
          <SupplierManufacturer
            key={sampleProduct.manufacturer_slug}
            manufacturer={sampleProduct}
            products={products}
            browseUrlParams={browseUrlParams}
          />
        );
      })}
    </>
  );
};

interface ISupplierManufacturerProps {
  manufacturer: Pick<IManufacturer, 'name' | 'slug'>;
  products: IGetSupplierProductFilterResult[];
  browseUrlParams: ImmutableURLSearchParams;
}
export const SupplierManufacturer: React.FC<ISupplierManufacturerProps> = ({
  manufacturer,
  products,
  browseUrlParams,
}) => {
  const manufacturerUrlParams = useGetManufacturerParams(browseUrlParams)(manufacturer.slug);
  const href = getParamsUrl(manufacturerUrlParams);

  return (
    <DescriptionListItem
      term={
        <Link className="hover:underline" href={href}>
          {manufacturer.name}
        </Link>
      }
      data={<SupplierProductsList manufacturerUrlParams={manufacturerUrlParams} products={products} />}
    />
  );
};

interface ISupplierProductsListProps {
  products: IGetSupplierProductFilterResult[];
  manufacturerUrlParams: ImmutableURLSearchParams;
}
export const SupplierProductsList: React.FC<ISupplierProductsListProps> = ({ products, manufacturerUrlParams }) => {
  return (
    <ol>
      {products.map((product) => {
        return <SupplierProductItem key={product.id} product={product} manufacturerUrlParams={manufacturerUrlParams} />;
      })}
    </ol>
  );
};

interface ISupplierProductItemProps {
  product: IGetSupplierProductFilterResult;
  manufacturerUrlParams: ImmutableURLSearchParams;
}

export const SupplierProductItem: React.FC<ISupplierProductItemProps> = ({ product, manufacturerUrlParams }) => {
  const productUrlParams = useGetProductParams(manufacturerUrlParams)(product.slug);
  const href = getParamsUrl(productUrlParams);

  return (
    <li>
      <Link className="hover:underline" href={href}>
        {product.name}
      </Link>
    </li>
  );
};
