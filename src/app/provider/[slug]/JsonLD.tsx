import { CANONICAL_DOMAIN_NAME } from "~/lib/const";
import { type IGeoSupplier } from "~/types/Supplier";

interface IJsonLDProps {
  supplier: IGeoSupplier;
  canonical: string;
}
export const JsonLD: React.FC<IJsonLDProps> = ({ supplier, canonical }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: supplier.practice_name,
    parentOrganization: supplier.business_name,
    identifier: supplier.provider_id,
    url: `${CANONICAL_DOMAIN_NAME}/provider/${canonical}`,
    telephone: supplier.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: supplier.address_1,
      addressLocality: supplier.CityName,
      addressRegion: supplier.StateName,
      postalCode: supplier.zip,
      addressCountry: "US",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};
