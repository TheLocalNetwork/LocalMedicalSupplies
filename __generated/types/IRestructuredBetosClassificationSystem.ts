/**
 * @name IRestructuredBetosClassificationSystem
 * @summary Restructured BETOS Classification System
 * @property {string} hcpcs_cd
 * @property {string} rbcs_id
 * @property {string} rbcs_cat
 * @property {string} rbcs_cat_desc
 * @property {string} rbcs_cat_subcat
 * @property {string} rbcs_subcat_desc
 * @property {string} rbcs_fam_numb
 * @property {string} rbcs_family_desc
 * @property {string} rbcs_major_ind
 * @property {string} hcpcs_cd_add_dt
 * @property {string} hcpcs_cd_end_dt
 * @property {string} rbcs_assignment_eff_dt
 * @description The Restructured BETOS Classification System (RBCS) dataset is a taxonomy that allows researchers to group healthcare service codes for Medicare Part B services (i.e., HCPCS codes) into clinically meaningful categories and subcategories. It is based on the original Berenson-Eggers Type of Service (BETOS) classification created in the 1980s, and includes notable updates such as Part B non-physician services. The RBCS will undergo annual updates by a technical expert panel of researchers and clinicians.
 * ```
 * "@type": "dcat:Dataset"
 * "accessLevel": "public"
 * "accrualPeriodicity": "R/P1Y"
 * "bureauCode": ["009:38"]
 * "contactPoint": {"@type":"vcard:Contact","fn":"PDAG Data Products - OEDA","hasEmail":"mailto:PDAG_Data_Products@cms.hhs.gov"}
 * "describedBy": "https://data.cms.gov/resources/2023-rbcs-data-dictionary"
 * "dataQuality": true
 * "description": "The Restructured BETOS Classification System (RBCS) dataset is a taxonomy that allows researchers to group healthcare service codes for Medicare Part B services (i.e., HCPCS codes) into clinically meaningful categories and subcategories. It is based on the original Berenson-Eggers Type of Service (BETOS) classification created in the 1980s, and includes notable updates such as Part B non-physician services. The RBCS will undergo annual updates by a technical expert panel of researchers and clinicians."
 * "distribution": []
 * "identifier": "https://data.cms.gov/data-api/v1/dataset/e3db6e56-149f-49ce-b374-40aecda2357b/data-viewer"
 * "keyword": ["Medicare","Original Medicare","Medicare Advantage","Hospitals & Facilities","Outpatient Facilities","Physicians & Practitioners","Medical Suppliers & Equipment"]
 * "landingPage": "https://data.cms.gov/provider-summary-by-type-of-service/provider-service-classifications/restructured-betos-classification-system"
 * "language": ["en-US"]
 * "license": "https://www.usa.gov/government-works"
 * "modified": "2023-10-16"
 * "programCode": ["009:000"]
 * "publisher": {"@type":"org:Organization","name":"Centers for Medicare & Medicaid Services"}
 * "references": ["https://data.cms.gov/sites/default/files/2023-10/RBCS%202023%20Final%20Report_2023%20V01%2010.03.2023_508.pdf"]
 * "temporal": "2023-01-01/2023-12-31"
 * "theme": ["Medicare"]
 * "title": "Restructured BETOS Classification System"
 * "id": "e3db6e56-149f-49ce-b374-40aecda2357b"
 * ```
 */
export interface IRestructuredBetosClassificationSystem {

/**
 * @name hcpcs_cd
 * @type {string}
 * @description
 * ```
 * "name": "HCPCS_Cd"
 * "title": "HCPCS_Cd"
 * "source_name": "HCPCS_Cd"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

hcpcs_cd: string;


/**
 * @name rbcs_id
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_ID"
 * "title": "RBCS_ID"
 * "source_name": "RBCS_ID"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_id: string;


/**
 * @name rbcs_cat
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Cat"
 * "title": "RBCS_Cat"
 * "source_name": "RBCS_Cat"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_cat: string;


/**
 * @name rbcs_cat_desc
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Cat_Desc"
 * "title": "RBCS_Cat_Desc"
 * "source_name": "RBCS_Cat_Desc"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_cat_desc: string;


/**
 * @name rbcs_cat_subcat
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Cat_Subcat"
 * "title": "RBCS_Cat_Subcat"
 * "source_name": "RBCS_Cat_Subcat"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_cat_subcat: string;


/**
 * @name rbcs_subcat_desc
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Subcat_Desc"
 * "title": "RBCS_Subcat_Desc"
 * "source_name": "RBCS_Subcat_Desc"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_subcat_desc: string;


/**
 * @name rbcs_fam_numb
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_FamNumb"
 * "title": "RBCS_FamNumb"
 * "source_name": "RBCS_FamNumb"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"right"}
 * ```
 */

rbcs_fam_numb: string;


/**
 * @name rbcs_family_desc
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Family_Desc"
 * "title": "RBCS_Family_Desc"
 * "source_name": "RBCS_Family_Desc"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_family_desc: string;


/**
 * @name rbcs_major_ind
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Major_Ind"
 * "title": "RBCS_Major_Ind"
 * "source_name": "RBCS_Major_Ind"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_major_ind: string;


/**
 * @name hcpcs_cd_add_dt
 * @type {string}
 * @description
 * ```
 * "name": "HCPCS_Cd_Add_Dt"
 * "title": "HCPCS_Cd_Add_Dt"
 * "source_name": "HCPCS_Cd_Add_Dt"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

hcpcs_cd_add_dt: string;


/**
 * @name hcpcs_cd_end_dt
 * @type {string}
 * @description
 * ```
 * "name": "HCPCS_Cd_End_Dt"
 * "title": "HCPCS_Cd_End_Dt"
 * "source_name": "HCPCS_Cd_End_Dt"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

hcpcs_cd_end_dt: string;


/**
 * @name rbcs_assignment_eff_dt
 * @type {string}
 * @description
 * ```
 * "name": "RBCS_Assignment_Eff_Dt"
 * "title": "RBCS_Assignment_Eff_Dt"
 * "source_name": "RBCS_Assignment_Eff_Dt"
 * "type": "string"
 * "format": "default"
 * "display_format": {"alignment":"left"}
 * ```
 */

rbcs_assignment_eff_dt: string;

}