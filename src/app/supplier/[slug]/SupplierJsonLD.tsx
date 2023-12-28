import { getSupplierLink } from '~/lib/link/supplier';
import { type IGeoSupplier } from '~/types/Supplier';

interface IJsonLDProps {
  supplier: IGeoSupplier;
}
export const SupplierJsonLD: React.FC<IJsonLDProps> = ({ supplier }) => {
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
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};
