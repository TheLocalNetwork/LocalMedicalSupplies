/**
 * @name IMedicareDurableMedicalEquipmentDevicesSuppliesByReferringProviderAndService
 * @summary Medicare Durable Medical Equipment, Devices & Supplies - by Referring Provider and Service
 * @property {number} rfrg_npi
 * @property {string} rfrg_prvdr_last_name_org
 * @property {string} rfrg_prvdr_first_name
 * @property {string} rfrg_prvdr_mi
 * @property {string} rfrg_prvdr_crdntls
 * @property {string} rfrg_prvdr_gndr
 * @property {string} rfrg_prvdr_ent_cd
 * @property {string} rfrg_prvdr_st_1
 * @property {string} rfrg_prvdr_st_2
 * @property {string} rfrg_prvdr_city
 * @property {string} rfrg_prvdr_state_abrvtn
 * @property {number} rfrg_prvdr_state_fips
 * @property {number} rfrg_prvdr_zip_5
 * @property {string} rfrg_prvdr_ruca_cat
 * @property {number} rfrg_prvdr_ruca
 * @property {string} rfrg_prvdr_ruca_desc
 * @property {string} rfrg_prvdr_cntry
 * @property {string} rfrg_prvdr_type_cd
 * @property {string} rfrg_prvdr_type
 * @property {string} rfrg_prvdr_type_flag
 * @property {string} betos_lvl
 * @property {string} betos_cd
 * @property {string} betos_desc
 * @property {string} hcpcs_cd
 * @property {string} hcpcs_desc
 * @property {string} suplr_rentl_ind
 * @property {number} tot_suplrs
 * @property {number} tot_suplr_benes
 * @property {number} tot_suplr_clms
 * @property {number} tot_suplr_srvcs
 * @property {number} avg_suplr_sbmtd_chrg
 * @property {number} avg_suplr_mdcr_alowd_amt
 * @property {number} avg_suplr_mdcr_pymt_amt
 * @property {number} avg_suplr_mdcr_stdzd_amt
 * @description The Medicare Durable Medical Equipment, Devices & Supplies by Referring Provider and Service dataset contains information on usage, payments and submitted charges organized by National Provider Identifier (NPI), Healthcare Common Procedure Coding System (HCPCS) code, and supplier rental indicator.

 

Note: This full dataset contains more records than most spreadsheet programs can handle, which will result in an incomplete load of data. Use of a database or statistical software is required.
 * ```
 * "@type": "dcat:Dataset"
 * "accessLevel": "public"
 * "accrualPeriodicity": "R/P1Y"
 * "bureauCode": ["009:38"]
 * "contactPoint": {"@type":"vcard:Contact","fn":"Medicare Provider Data - OEDA","hasEmail":"mailto:IPAG_Data_Products@cms.hhs.gov"}
 * "describedBy": "https://data.cms.gov/resources/medicare-durable-medical-equipment-devices-supplies-by-referring-provider-and-service-data-dictionary"
 * "dataQuality": true
 * "description": "The Medicare Durable Medical Equipment, Devices & Supplies by Referring Provider and Service dataset contains information on usage, payments and submitted charges organized by National Provider Identifier (NPI), Healthcare Common Procedure Coding System (HCPCS) code, and supplier rental indicator.\n\n \n\nNote: This full dataset contains more records than most spreadsheet programs can handle, which will result in an incomplete load of data. Use of a database or statistical software is required."
 * "distribution": []
 * "identifier": "https://data.cms.gov/data-api/v1/dataset/86b4807a-d63a-44be-bfdf-ffd398d5e623/data-viewer"
 * "keyword": ["Medicare","Original Medicare","Physicians & Practitioners","Medical Suppliers & Equipment","Health Care Use & Payments","Health Equity"]
 * "landingPage": "https://data.cms.gov/provider-summary-by-type-of-service/medicare-durable-medical-equipment-devices-supplies/medicare-durable-medical-equipment-devices-supplies-by-referring-provider-and-service"
 * "language": ["en-US"]
 * "license": "https://www.usa.gov/government-works"
 * "modified": "2023-10-25"
 * "programCode": ["009:000"]
 * "publisher": {"@type":"org:Organization","name":"Centers for Medicare & Medicaid Services"}
 * "references": ["https://data.cms.gov/resources/medicare-durable-medical-equipment-devices-supplies-methodology"]
 * "temporal": "2013-01-01/2021-12-31"
 * "theme": ["Medicare"]
 * "title": "Medicare Durable Medical Equipment, Devices & Supplies - by Referring Provider and Service"
 * "id": "86b4807a-d63a-44be-bfdf-ffd398d5e623"
 * ```
 */
export interface IMedicareDurableMedicalEquipmentDevicesSuppliesByReferringProviderAndService {
  /**
   * @name rfrg_npi
   * @type {number}
   * @description
   * ```
   * "name": "Rfrg_NPI"
   * "title": "Rfrg_NPI"
   * "source_name": "Rfrg_NPI"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"left","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  rfrg_npi: number;

  /**
   * @name rfrg_prvdr_last_name_org
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Last_Name_Org"
   * "title": "Rfrg_Prvdr_Last_Name_Org"
   * "source_name": "Rfrg_Prvdr_Last_Name_Org"
   * "type": "string"
   * "format": "default"
   * ```
   */

  rfrg_prvdr_last_name_org: string;

  /**
   * @name rfrg_prvdr_first_name
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_First_Name"
   * "title": "Rfrg_Prvdr_First_Name"
   * "source_name": "Rfrg_Prvdr_First_Name"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_first_name: string;

  /**
   * @name rfrg_prvdr_mi
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_MI"
   * "title": "Rfrg_Prvdr_MI"
   * "source_name": "Rfrg_Prvdr_MI"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_mi: string;

  /**
   * @name rfrg_prvdr_crdntls
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Crdntls"
   * "title": "Rfrg_Prvdr_Crdntls"
   * "source_name": "Rfrg_Prvdr_Crdntls"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_crdntls: string;

  /**
   * @name rfrg_prvdr_gndr
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Gndr"
   * "title": "Rfrg_Prvdr_Gndr"
   * "source_name": "Rfrg_Prvdr_Gndr"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_gndr: string;

  /**
   * @name rfrg_prvdr_ent_cd
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Ent_Cd"
   * "title": "Rfrg_Prvdr_Ent_Cd"
   * "source_name": "Rfrg_Prvdr_Ent_Cd"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_ent_cd: string;

  /**
   * @name rfrg_prvdr_st_1
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_St1"
   * "title": "Rfrg_Prvdr_St1"
   * "source_name": "Rfrg_Prvdr_St1"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_st_1: string;

  /**
   * @name rfrg_prvdr_st_2
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_St2"
   * "title": "Rfrg_Prvdr_St2"
   * "source_name": "Rfrg_Prvdr_St2"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_st_2: string;

  /**
   * @name rfrg_prvdr_city
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_City"
   * "title": "Rfrg_Prvdr_City"
   * "source_name": "Rfrg_Prvdr_City"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_city: string;

  /**
   * @name rfrg_prvdr_state_abrvtn
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_State_Abrvtn"
   * "title": "Rfrg_Prvdr_State_Abrvtn"
   * "source_name": "Rfrg_Prvdr_State_Abrvtn"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_state_abrvtn: string;

  /**
   * @name rfrg_prvdr_state_fips
   * @type {number}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_State_FIPS"
   * "title": "Rfrg_Prvdr_State_FIPS"
   * "source_name": "Rfrg_Prvdr_State_FIPS"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"left","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  rfrg_prvdr_state_fips: number;

  /**
   * @name rfrg_prvdr_zip_5
   * @type {number}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Zip5"
   * "title": "Rfrg_Prvdr_Zip5"
   * "source_name": "Rfrg_Prvdr_Zip5"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"left","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  rfrg_prvdr_zip_5: number;

  /**
   * @name rfrg_prvdr_ruca_cat
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_RUCA_CAT"
   * "title": "Rfrg_Prvdr_RUCA_CAT"
   * "source_name": "Rfrg_Prvdr_RUCA_CAT"
   * "type": "string"
   * "format": "default"
   * ```
   */

  rfrg_prvdr_ruca_cat: string;

  /**
   * @name rfrg_prvdr_ruca
   * @type {number}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_RUCA"
   * "title": "Rfrg_Prvdr_RUCA"
   * "source_name": "Rfrg_Prvdr_RUCA"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right"}
   * ```
   */

  rfrg_prvdr_ruca: number;

  /**
   * @name rfrg_prvdr_ruca_desc
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_RUCA_Desc"
   * "title": "Rfrg_Prvdr_RUCA_Desc"
   * "source_name": "Rfrg_Prvdr_RUCA_Desc"
   * "type": "string"
   * "format": "default"
   * ```
   */

  rfrg_prvdr_ruca_desc: string;

  /**
   * @name rfrg_prvdr_cntry
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Cntry"
   * "title": "Rfrg_Prvdr_Cntry"
   * "source_name": "Rfrg_Prvdr_Cntry"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_cntry: string;

  /**
   * @name rfrg_prvdr_type_cd
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Type_cd"
   * "title": "Rfrg_Prvdr_Type_cd"
   * "source_name": "Rfrg_Prvdr_Type_cd"
   * "type": "string"
   * "format": "default"
   * ```
   */

  rfrg_prvdr_type_cd: string;

  /**
   * @name rfrg_prvdr_type
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Type"
   * "title": "Rfrg_Prvdr_Type"
   * "source_name": "Rfrg_Prvdr_Type"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_type: string;

  /**
   * @name rfrg_prvdr_type_flag
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Type_Flag"
   * "title": "Rfrg_Prvdr_Type_Flag"
   * "source_name": "Rfrg_Prvdr_Type_Flag"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_type_flag: string;

  /**
   * @name betos_lvl
   * @type {string}
   * @description
   * ```
   * "name": "BETOS_Lvl"
   * "title": "BETOS_Lvl"
   * "source_name": "BETOS_Lvl"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  betos_lvl: string;

  /**
   * @name betos_cd
   * @type {string}
   * @description
   * ```
   * "name": "BETOS_Cd"
   * "title": "BETOS_Cd"
   * "source_name": "BETOS_Cd"
   * "type": "string"
   * "format": "default"
   * ```
   */

  betos_cd: string;

  /**
   * @name betos_desc
   * @type {string}
   * @description
   * ```
   * "name": "BETOS_Desc"
   * "title": "BETOS_Desc"
   * "source_name": "BETOS_Desc"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  betos_desc: string;

  /**
   * @name hcpcs_cd
   * @type {string}
   * @description
   * ```
   * "name": "HCPCS_CD"
   * "title": "HCPCS_CD"
   * "source_name": "HCPCS_CD"
   * "type": "string"
   * "format": "default"
   * ```
   */

  hcpcs_cd: string;

  /**
   * @name hcpcs_desc
   * @type {string}
   * @description
   * ```
   * "name": "HCPCS_Desc"
   * "title": "HCPCS_Desc"
   * "source_name": "HCPCS_Desc"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  hcpcs_desc: string;

  /**
   * @name suplr_rentl_ind
   * @type {string}
   * @description
   * ```
   * "name": "Suplr_Rentl_Ind"
   * "title": "Suplr_Rentl_Ind"
   * "source_name": "Suplr_Rentl_Ind"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  suplr_rentl_ind: string;

  /**
   * @name tot_suplrs
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Suplrs"
   * "title": "Tot_Suplrs"
   * "source_name": "Tot_Suplrs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_suplrs: number;

  /**
   * @name tot_suplr_benes
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Suplr_Benes"
   * "title": "Tot_Suplr_Benes"
   * "source_name": "Tot_Suplr_Benes"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_suplr_benes: number;

  /**
   * @name tot_suplr_clms
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Suplr_Clms"
   * "title": "Tot_Suplr_Clms"
   * "source_name": "Tot_Suplr_Clms"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_suplr_clms: number;

  /**
   * @name tot_suplr_srvcs
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Suplr_Srvcs"
   * "title": "Tot_Suplr_Srvcs"
   * "source_name": "Tot_Suplr_Srvcs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_suplr_srvcs: number;

  /**
   * @name avg_suplr_sbmtd_chrg
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Suplr_Sbmtd_Chrg"
   * "title": "Avg_Suplr_Sbmtd_Chrg"
   * "source_name": "Avg_Suplr_Sbmtd_Chrg"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_suplr_sbmtd_chrg: number;

  /**
   * @name avg_suplr_mdcr_alowd_amt
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Suplr_Mdcr_Alowd_Amt"
   * "title": "Avg_Suplr_Mdcr_Alowd_Amt"
   * "source_name": "Avg_Suplr_Mdcr_Alowd_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_suplr_mdcr_alowd_amt: number;

  /**
   * @name avg_suplr_mdcr_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Suplr_Mdcr_Pymt_Amt"
   * "title": "Avg_Suplr_Mdcr_Pymt_Amt"
   * "source_name": "Avg_Suplr_Mdcr_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_suplr_mdcr_pymt_amt: number;

  /**
   * @name avg_suplr_mdcr_stdzd_amt
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Suplr_Mdcr_Stdzd_Amt"
   * "title": "Avg_Suplr_Mdcr_Stdzd_Amt"
   * "source_name": "Avg_Suplr_Mdcr_Stdzd_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_suplr_mdcr_stdzd_amt: number;
}
