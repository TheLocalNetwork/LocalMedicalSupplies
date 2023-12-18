/**
 * @name IMedicareProviderAndSupplierTaxonomyCrosswalk
 * @summary Medicare Provider and Supplier Taxonomy Crosswalk
 * @property {string} medicare_specialty_code
 * @property {string} medicare_provider_supplier_type
 * @property {string} provider_taxonomy_code
 * @property {string} provider_taxonomy_description_type_classification_specialization
 * @description The Medicare Provider and Supplier Taxonomy Crosswalk dataset lists the providers and suppliers eligible to enroll in Medicare programs with the proper healthcare provider taxonomy code. This data includes the Medicare speciality codes, if available, provider/supplier type description, taxonomy code, and the taxonomy description.
 * ```
 * "@type": "dcat:Dataset"
 * "accessLevel": "public"
 * "accrualPeriodicity": "R/P1Y"
 * "bureauCode": ["009:38"]
 * "contactPoint": {"@type":"vcard:Contact","fn":"Provider Enrollment Data Requests - CPI","hasEmail":"mailto:ProviderEnrollmentDataRequests@cms.hhs.gov"}
 * "describedBy": "https://data.cms.gov/resources/medicare-provider-and-supplier-taxonomy-crosswalk-data-dictionary"
 * "dataQuality": true
 * "description": "The Medicare Provider and Supplier Taxonomy Crosswalk dataset lists the providers and suppliers eligible to enroll in Medicare programs with the proper healthcare provider taxonomy code. This data includes the Medicare speciality codes, if available, provider/supplier type description, taxonomy code, and the taxonomy description."
 * "distribution": []
 * "identifier": "https://data.cms.gov/data-api/v1/dataset/113eb0bc-0c9a-4d91-9f93-3f6b28c0bf6b/data-viewer"
 * "keyword": ["Medicare","Original Medicare","Medicare Advantage","Medical Suppliers & Equipment","Provider Enrollment"]
 * "landingPage": "https://data.cms.gov/provider-characteristics/medicare-provider-supplier-enrollment/medicare-provider-and-supplier-taxonomy-crosswalk"
 * "language": ["en-US"]
 * "license": "https://www.usa.gov/government-works"
 * "modified": "2023-09-27"
 * "programCode": ["009:000"]
 * "publisher": {"@type":"org:Organization","name":"Centers for Medicare & Medicaid Services"}
 * "references": ["https://data.cms.gov/resources/medicare-provider-and-supplier-taxonomy-crosswalk-methodology"]
 * "temporal": "2021-01-01/2023-12-31"
 * "theme": ["Medicare"]
 * "title": "Medicare Provider and Supplier Taxonomy Crosswalk"
 * "id": "113eb0bc-0c9a-4d91-9f93-3f6b28c0bf6b"
 * ```
 */
export interface IMedicareProviderAndSupplierTaxonomyCrosswalk {
  /**
   * @name medicare_specialty_code
   * @type {string}
   * @description
   * ```
   * "name": "MEDICARE SPECIALTY CODE"
   * "title": "MEDICARE SPECIALTY CODE"
   * "source_name": "MEDICARE SPECIALTY CODE"
   * "type": "string"
   * "format": "default"
   * ```
   */

  medicare_specialty_code: string;

  /**
   * @name medicare_provider_supplier_type
   * @type {string}
   * @description
   * ```
   * "name": "MEDICARE PROVIDER/SUPPLIER TYPE"
   * "title": "MEDICARE PROVIDER/SUPPLIER TYPE"
   * "source_name": "MEDICARE PROVIDER/SUPPLIER TYPE"
   * "type": "string"
   * "format": "default"
   * ```
   */

  medicare_provider_supplier_type: string;

  /**
   * @name provider_taxonomy_code
   * @type {string}
   * @description
   * ```
   * "name": "PROVIDER TAXONOMY CODE"
   * "title": "PROVIDER TAXONOMY CODE"
   * "source_name": "PROVIDER TAXONOMY CODE"
   * "type": "string"
   * "format": "default"
   * ```
   */

  provider_taxonomy_code: string;

  /**
   * @name provider_taxonomy_description_type_classification_specialization
   * @type {string}
   * @description
   * ```
   * "name": "PROVIDER TAXONOMY DESCRIPTION: TYPE CLASSIFICATION SPECIALIZATION"
   * "title": "PROVIDER TAXONOMY DESCRIPTION: TYPE CLASSIFICATION SPECIALIZATION"
   * "source_name": "PROVIDER TAXONOMY DESCRIPTION: TYPE CLASSIFICATION SPECIALIZATION"
   * "type": "string"
   * "format": "default"
   * ```
   */

  provider_taxonomy_description_type_classification_specialization: string;
}
