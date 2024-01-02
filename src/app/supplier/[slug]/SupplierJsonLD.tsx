import { getSupplierLink } from '~/lib/link/supplier';
import { type IGeoSupplier } from '~/types/Supplier';

interface IJsonLDProps {
  supplier: IGeoSupplier;
}
export const SupplierJsonLD: React.FC<IJsonLDProps> = ({ supplier }) => {
  // const offerCatalog = getOfferCatalog(supplier);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': supplier.practice_name,
    'parentOrganization': supplier.business_name,
    'identifier': supplier.id,
    'url': getSupplierLink(supplier, true),
    'telephone': supplier.phone,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': supplier.address_1,
      'addressLocality': supplier.CityName,
      'addressRegion': supplier.StateName,
      'postalCode': supplier.zip,
      'addressCountry': 'US',
    },
    // 'hasOfferCatalog': offerCatalog,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

// export const getOfferCatalog = (supplier: ISupplier) => {
//   const categories = getAllSupplierSupply({ provider_id: supplier.id });
//   const categoryOffers = {
//     '@type': 'OfferCatalog',
//     'name': 'Equipment Category',
//     'itemListElement': map(categories, (item) => {
//       const url = getParamsUrl(new ImmutableURLSearchParams({ equipment: item.slug }), true);
//       return {
//         '@type': 'Offer',
//         'itemOffered': {
//           '@type': 'Equipment Category',
//           '@id': url,
//           'name': item.name,
//         },
//       };
//     }),
//   };

//   const specialities = getAllSupplierSpeciality({ provider_id: supplier.id });
//   const specialityOffers = {
//     '@type': 'OfferCatalog',
//     'name': 'Speciality',
//     'itemListElement': map(specialities, (item) => {
//       const url = getParamsUrl(new ImmutableURLSearchParams({ speciality: item.slug }), true);
//       return {
//         '@type': 'Offer',
//         'itemOffered': {
//           '@type': 'Speciality',
//           '@id': url,
//           'name': item.name,
//         },
//       };
//     }),
//   };

//   const providertypes = getAllSupplierProviderType({ provider_id: supplier.id });
//   const providertypesOffers = {
//     '@type': 'OfferCatalog',
//     'name': 'Provider Type',
//     'itemListElement': map(providertypes, (item) => {
//       const url = getParamsUrl(new ImmutableURLSearchParams({ providertype: item.slug }), true);
//       return {
//         '@type': 'Offer',
//         'itemOffered': {
//           '@type': 'Provider Type',
//           '@id': url,
//           'name': item.name,
//         },
//       };
//     }),
//   };

//   const products = getAllSupplierProduct({ provider_id: supplier.id });
//   const productOffers = {
//     '@type': 'OfferCatalog',
//     'name': 'Product',
//     'itemListElement': map(products, (product) => {
//       const url = getParamsUrl(
//         new ImmutableURLSearchParams({ product: product.slug, manufacturer: product.manufacturer_slug }),
//         true
//       );
//       return {
//         '@type': 'Offer',
//         'itemOffered': {
//           '@type': 'Product',
//           '@id': url,
//           'name': product.name,
//           'manufacturer': product.manufacturer_name,
//         },
//       };
//     }),
//   };

//   return [categoryOffers, specialityOffers, providertypesOffers, productOffers];
// };
