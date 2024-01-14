import { ImmutableURLSearchParams } from 'immurl';
import { getParamsUrl } from '~/components/form/urlParams';
import { getSupplierLink } from '~/lib/link/supplier';
import { type IGeoSupplier } from '~/types/Supplier';

interface IJsonLDProps {
  supplier: IGeoSupplier;
}
export const SupplierJsonLD: React.FC<IJsonLDProps> = ({ supplier }) => {
  const structuredData = [getOrgranizationJsonLD(supplier), getBreadcrumbJsonLD(supplier)];

  return (
    <>
      {structuredData.map((jsonLd) => (
        <script
          key={jsonLd['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
    </>
  );
};

const getBreadcrumbJsonLD = (supplier: IGeoSupplier) => {
  const immUrlSearchParams = new ImmutableURLSearchParams();
  const stateUrlSearchParams = immUrlSearchParams.set('state', supplier.StateSlug);
  const cityUrlSearchParams = stateUrlSearchParams.set('city', supplier.CitySlug);
  const zipUrlSearchParams = cityUrlSearchParams.set('zip', supplier.zip);

  const stateLink = getParamsUrl(stateUrlSearchParams, true);
  const cityLink = getParamsUrl(cityUrlSearchParams, true);
  const zipLink = getParamsUrl(zipUrlSearchParams, true);

  const items = [
    {
      item: {
        '@type': 'State',
        '@id': stateLink,
        'name': supplier.StateName,
      },
    },
    {
      item: {
        '@type': 'City',
        '@id': cityLink,
        'name': supplier.CityName,
      },
    },
    {
      item: {
        '@type': 'Place',
        '@id': zipLink,
        'name': supplier.zip,
      },
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'name': 'Location',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      ...item,
    })),
  };
};

const getOrgranizationJsonLD = (supplier: IGeoSupplier) => {
  // const offerCatalog = getOfferCatalog(supplier);

  return {
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
