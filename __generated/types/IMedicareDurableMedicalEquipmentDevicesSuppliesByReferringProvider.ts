/**
 * @name IMedicareDurableMedicalEquipmentDevicesSuppliesByReferringProvider
 * @summary Medicare Durable Medical Equipment, Devices & Supplies - by Referring Provider
 * @property {string} rfrg_npi
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
 * @property {string} rfrg_prvdr_zip_5
 * @property {string} rfrg_prvdr_ruca
 * @property {string} rfrg_prvdr_ruca_desc
 * @property {string} rfrg_prvdr_cntry
 * @property {string} rfrg_prvdr_type
 * @property {string} rfrg_prvdr_type_flag
 * @property {number} tot_suplrs
 * @property {number} tot_suplr_hcpcs_cds
 * @property {number} tot_suplr_benes
 * @property {number} tot_suplr_clms
 * @property {number} tot_suplr_srvcs
 * @property {number} suplr_sbmtd_chrgs
 * @property {number} suplr_mdcr_alowd_amt
 * @property {number} suplr_mdcr_pymt_amt
 * @property {number} suplr_mdcr_stdzd_pymt_amt
 * @property {string} dme_sprsn_ind
 * @property {number} dme_tot_suplrs
 * @property {number} dme_tot_suplr_hcpcs_cds
 * @property {number} dme_tot_suplr_benes
 * @property {number} dme_tot_suplr_clms
 * @property {number} dme_tot_suplr_srvcs
 * @property {number} dme_suplr_sbmtd_chrgs
 * @property {number} dme_suplr_mdcr_alowd_amt
 * @property {number} dme_suplr_mdcr_pymt_amt
 * @property {number} dme_suplr_mdcr_stdzd_pymt_amt
 * @property {string} pos_sprsn_ind
 * @property {number} pos_tot_suplrs
 * @property {number} pos_tot_suplr_hcpcs_cds
 * @property {number} pos_tot_suplr_benes
 * @property {number} pos_tot_suplr_clms
 * @property {number} pos_tot_suplr_srvcs
 * @property {number} pos_suplr_sbmtd_chrgs
 * @property {number} pos_suplr_mdcr_alowd_amt
 * @property {number} pos_suplr_mdcr_pymt_amt
 * @property {number} pos_suplr_mdcr_stdzd_pymt_amt
 * @property {string} drug_sprsn_ind
 * @property {number} drug_tot_suplrs
 * @property {number} drug_tot_suplr_hcpcs_cds
 * @property {number} drug_tot_suplr_benes
 * @property {number} drug_tot_suplr_clms
 * @property {number} drug_tot_suplr_srvcs
 * @property {number} drug_suplr_sbmtd_chrgs
 * @property {number} drug_suplr_mdcr_alowd_amt
 * @property {number} drug_suplr_mdcr_pymt_amt
 * @property {number} drug_suplr_mdcr_stdzd_pymt_amt
 * @property {number} bene_avg_age
 * @property {number} bene_age_lt_65_cnt
 * @property {number} bene_age_65_74_cnt
 * @property {number} bene_age_75_84_cnt
 * @property {number} bene_age_gt_84_cnt
 * @property {number} bene_feml_cnt
 * @property {number} bene_male_cnt
 * @property {number} bene_race_wht_cnt
 * @property {number} bene_race_black_cnt
 * @property {number} bene_race_api_cnt
 * @property {number} bene_race_hspnc_cnt
 * @property {number} bene_race_natind_cnt
 * @property {number} bene_race_othr_cnt
 * @property {number} bene_ndual_cnt
 * @property {number} bene_dual_cnt
 * @property {number} bene_cc_af_pct
 * @property {number} bene_cc_alzhmr_pct
 * @property {number} bene_cc_asthma_pct
 * @property {number} bene_cc_cncr_pct
 * @property {number} bene_cc_chf_pct
 * @property {number} bene_cc_ckd_pct
 * @property {number} bene_cc_copd_pct
 * @property {number} bene_cc_dprssn_pct
 * @property {number} bene_cc_dbts_pct
 * @property {number} bene_cc_hyplpdma_pct
 * @property {number} bene_cc_hyprtnsn_pct
 * @property {number} bene_cc_ihd_pct
 * @property {number} bene_cc_opo_pct
 * @property {number} bene_cc_raoa_pct
 * @property {number} bene_cc_sz_pct
 * @property {number} bene_cc_strok_pct
 * @property {number} bene_avg_risk_scre
 * @description The Medicare Durable Medical Equipment, Devices & Supplies by Referring Provider dataset contains information on usage, payments, submitted charges and beneficiary demographic and health characteristics organized by National Provider Identifier (NPI).
 * ```
 * "@type": "dcat:Dataset"
 * "accessLevel": "public"
 * "accrualPeriodicity": "R/P1Y"
 * "bureauCode": ["009:38"]
 * "contactPoint": {"@type":"vcard:Contact","fn":"Medicare Provider Data - OEDA","hasEmail":"mailto:IPAG_Data_Products@cms.hhs.gov"}
 * "describedBy": "https://data.cms.gov/resources/medicare-durable-medical-equipment-devices-supplies-by-referring-provider-data-dictionary"
 * "dataQuality": true
 * "description": "The Medicare Durable Medical Equipment, Devices & Supplies by Referring Provider dataset contains information on usage, payments, submitted charges and beneficiary demographic and health characteristics organized by National Provider Identifier (NPI)."
 * "distribution": []
 * "identifier": "https://data.cms.gov/data-api/v1/dataset/f8603e5b-9c47-4c52-9b47-a4ef92dfada4/data-viewer"
 * "keyword": ["Medicare","Original Medicare","Physicians & Practitioners","Medical Suppliers & Equipment","Health Care Use & Payments","Health Equity"]
 * "landingPage": "https://data.cms.gov/provider-summary-by-type-of-service/medicare-durable-medical-equipment-devices-supplies/medicare-durable-medical-equipment-devices-supplies-by-referring-provider"
 * "language": ["en-US"]
 * "license": "https://www.usa.gov/government-works"
 * "modified": "2023-05-10"
 * "programCode": ["009:000"]
 * "publisher": {"@type":"org:Organization","name":"Centers for Medicare & Medicaid Services"}
 * "references": ["https://data.cms.gov/resources/medicare-durable-medical-equipment-devices-supplies-methodology"]
 * "temporal": "2013-01-01/2021-12-31"
 * "theme": ["Medicare"]
 * "title": "Medicare Durable Medical Equipment, Devices & Supplies - by Referring Provider "
 * "id": "f8603e5b-9c47-4c52-9b47-a4ef92dfada4"
 * ```
 */
export interface IMedicareDurableMedicalEquipmentDevicesSuppliesByReferringProvider {
  /**
   * @name rfrg_npi
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_NPI"
   * "title": "Rfrg_NPI"
   * "source_name": "Rfrg_NPI"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_npi: string;

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
   * "display_format": {"alignment":"left"}
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
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  rfrg_prvdr_state_fips: number;

  /**
   * @name rfrg_prvdr_zip_5
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_Zip5"
   * "title": "Rfrg_Prvdr_Zip5"
   * "source_name": "Rfrg_Prvdr_Zip5"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_zip_5: string;

  /**
   * @name rfrg_prvdr_ruca
   * @type {string}
   * @description
   * ```
   * "name": "Rfrg_Prvdr_RUCA"
   * "title": "Rfrg_Prvdr_RUCA"
   * "source_name": "Rfrg_Prvdr_RUCA"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  rfrg_prvdr_ruca: string;

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
   * "display_format": {"alignment":"left"}
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
   * @name tot_suplr_hcpcs_cds
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Suplr_HCPCS_Cds"
   * "title": "Tot_Suplr_HCPCS_Cds"
   * "source_name": "Tot_Suplr_HCPCS_Cds"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_suplr_hcpcs_cds: number;

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
   * @name suplr_sbmtd_chrgs
   * @type {number}
   * @description
   * ```
   * "name": "Suplr_Sbmtd_Chrgs"
   * "title": "Suplr_Sbmtd_Chrgs"
   * "source_name": "Suplr_Sbmtd_Chrgs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  suplr_sbmtd_chrgs: number;

  /**
   * @name suplr_mdcr_alowd_amt
   * @type {number}
   * @description
   * ```
   * "name": "Suplr_Mdcr_Alowd_Amt"
   * "title": "Suplr_Mdcr_Alowd_Amt"
   * "source_name": "Suplr_Mdcr_Alowd_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  suplr_mdcr_alowd_amt: number;

  /**
   * @name suplr_mdcr_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "Suplr_Mdcr_Pymt_Amt"
   * "title": "Suplr_Mdcr_Pymt_Amt"
   * "source_name": "Suplr_Mdcr_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  suplr_mdcr_pymt_amt: number;

  /**
   * @name suplr_mdcr_stdzd_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "title": "Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "source_name": "Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  suplr_mdcr_stdzd_pymt_amt: number;

  /**
   * @name dme_sprsn_ind
   * @type {string}
   * @description
   * ```
   * "name": "DME_Sprsn_Ind"
   * "title": "DME_Sprsn_Ind"
   * "source_name": "DME_Sprsn_Ind"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  dme_sprsn_ind: string;

  /**
   * @name dme_tot_suplrs
   * @type {number}
   * @description
   * ```
   * "name": "DME_Tot_Suplrs"
   * "title": "DME_Tot_Suplrs"
   * "source_name": "DME_Tot_Suplrs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  dme_tot_suplrs: number;

  /**
   * @name dme_tot_suplr_hcpcs_cds
   * @type {number}
   * @description
   * ```
   * "name": "DME_Tot_Suplr_HCPCS_Cds"
   * "title": "DME_Tot_Suplr_HCPCS_Cds"
   * "source_name": "DME_Tot_Suplr_HCPCS_Cds"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  dme_tot_suplr_hcpcs_cds: number;

  /**
   * @name dme_tot_suplr_benes
   * @type {number}
   * @description
   * ```
   * "name": "DME_Tot_Suplr_Benes"
   * "title": "DME_Tot_Suplr_Benes"
   * "source_name": "DME_Tot_Suplr_Benes"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  dme_tot_suplr_benes: number;

  /**
   * @name dme_tot_suplr_clms
   * @type {number}
   * @description
   * ```
   * "name": "DME_Tot_Suplr_Clms"
   * "title": "DME_Tot_Suplr_Clms"
   * "source_name": "DME_Tot_Suplr_Clms"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  dme_tot_suplr_clms: number;

  /**
   * @name dme_tot_suplr_srvcs
   * @type {number}
   * @description
   * ```
   * "name": "DME_Tot_Suplr_Srvcs"
   * "title": "DME_Tot_Suplr_Srvcs"
   * "source_name": "DME_Tot_Suplr_Srvcs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  dme_tot_suplr_srvcs: number;

  /**
   * @name dme_suplr_sbmtd_chrgs
   * @type {number}
   * @description
   * ```
   * "name": "DME_Suplr_Sbmtd_Chrgs"
   * "title": "DME_Suplr_Sbmtd_Chrgs"
   * "source_name": "DME_Suplr_Sbmtd_Chrgs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  dme_suplr_sbmtd_chrgs: number;

  /**
   * @name dme_suplr_mdcr_alowd_amt
   * @type {number}
   * @description
   * ```
   * "name": "DME_Suplr_Mdcr_Alowd_Amt"
   * "title": "DME_Suplr_Mdcr_Alowd_Amt"
   * "source_name": "DME_Suplr_Mdcr_Alowd_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  dme_suplr_mdcr_alowd_amt: number;

  /**
   * @name dme_suplr_mdcr_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "DME_Suplr_Mdcr_Pymt_Amt"
   * "title": "DME_Suplr_Mdcr_Pymt_Amt"
   * "source_name": "DME_Suplr_Mdcr_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  dme_suplr_mdcr_pymt_amt: number;

  /**
   * @name dme_suplr_mdcr_stdzd_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "DME_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "title": "DME_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "source_name": "DME_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  dme_suplr_mdcr_stdzd_pymt_amt: number;

  /**
   * @name pos_sprsn_ind
   * @type {string}
   * @description
   * ```
   * "name": "POS_Sprsn_Ind"
   * "title": "POS_Sprsn_Ind"
   * "source_name": "POS_Sprsn_Ind"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  pos_sprsn_ind: string;

  /**
   * @name pos_tot_suplrs
   * @type {number}
   * @description
   * ```
   * "name": "POS_Tot_Suplrs"
   * "title": "POS_Tot_Suplrs"
   * "source_name": "POS_Tot_Suplrs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  pos_tot_suplrs: number;

  /**
   * @name pos_tot_suplr_hcpcs_cds
   * @type {number}
   * @description
   * ```
   * "name": "POS_Tot_Suplr_HCPCS_Cds"
   * "title": "POS_Tot_Suplr_HCPCS_Cds"
   * "source_name": "POS_Tot_Suplr_HCPCS_Cds"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  pos_tot_suplr_hcpcs_cds: number;

  /**
   * @name pos_tot_suplr_benes
   * @type {number}
   * @description
   * ```
   * "name": "POS_Tot_Suplr_Benes"
   * "title": "POS_Tot_Suplr_Benes"
   * "source_name": "POS_Tot_Suplr_Benes"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  pos_tot_suplr_benes: number;

  /**
   * @name pos_tot_suplr_clms
   * @type {number}
   * @description
   * ```
   * "name": "POS_Tot_Suplr_Clms"
   * "title": "POS_Tot_Suplr_Clms"
   * "source_name": "POS_Tot_Suplr_Clms"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  pos_tot_suplr_clms: number;

  /**
   * @name pos_tot_suplr_srvcs
   * @type {number}
   * @description
   * ```
   * "name": "POS_Tot_Suplr_Srvcs"
   * "title": "POS_Tot_Suplr_Srvcs"
   * "source_name": "POS_Tot_Suplr_Srvcs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  pos_tot_suplr_srvcs: number;

  /**
   * @name pos_suplr_sbmtd_chrgs
   * @type {number}
   * @description
   * ```
   * "name": "POS_Suplr_Sbmtd_Chrgs"
   * "title": "POS_Suplr_Sbmtd_Chrgs"
   * "source_name": "POS_Suplr_Sbmtd_Chrgs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  pos_suplr_sbmtd_chrgs: number;

  /**
   * @name pos_suplr_mdcr_alowd_amt
   * @type {number}
   * @description
   * ```
   * "name": "POS_Suplr_Mdcr_Alowd_Amt"
   * "title": "POS_Suplr_Mdcr_Alowd_Amt"
   * "source_name": "POS_Suplr_Mdcr_Alowd_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  pos_suplr_mdcr_alowd_amt: number;

  /**
   * @name pos_suplr_mdcr_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "POS_Suplr_Mdcr_Pymt_Amt"
   * "title": "POS_Suplr_Mdcr_Pymt_Amt"
   * "source_name": "POS_Suplr_Mdcr_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  pos_suplr_mdcr_pymt_amt: number;

  /**
   * @name pos_suplr_mdcr_stdzd_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "POS_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "title": "POS_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "source_name": "POS_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  pos_suplr_mdcr_stdzd_pymt_amt: number;

  /**
   * @name drug_sprsn_ind
   * @type {string}
   * @description
   * ```
   * "name": "Drug_Sprsn_Ind"
   * "title": "Drug_Sprsn_Ind"
   * "source_name": "Drug_Sprsn_Ind"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  drug_sprsn_ind: string;

  /**
   * @name drug_tot_suplrs
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Tot_Suplrs"
   * "title": "Drug_Tot_Suplrs"
   * "source_name": "Drug_Tot_Suplrs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  drug_tot_suplrs: number;

  /**
   * @name drug_tot_suplr_hcpcs_cds
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Tot_Suplr_HCPCS_Cds"
   * "title": "Drug_Tot_Suplr_HCPCS_Cds"
   * "source_name": "Drug_Tot_Suplr_HCPCS_Cds"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  drug_tot_suplr_hcpcs_cds: number;

  /**
   * @name drug_tot_suplr_benes
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Tot_Suplr_Benes"
   * "title": "Drug_Tot_Suplr_Benes"
   * "source_name": "Drug_Tot_Suplr_Benes"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  drug_tot_suplr_benes: number;

  /**
   * @name drug_tot_suplr_clms
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Tot_Suplr_Clms"
   * "title": "Drug_Tot_Suplr_Clms"
   * "source_name": "Drug_Tot_Suplr_Clms"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"_none"}
   * ```
   */

  drug_tot_suplr_clms: number;

  /**
   * @name drug_tot_suplr_srvcs
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Tot_Suplr_Srvcs"
   * "title": "Drug_Tot_Suplr_Srvcs"
   * "source_name": "Drug_Tot_Suplr_Srvcs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  drug_tot_suplr_srvcs: number;

  /**
   * @name drug_suplr_sbmtd_chrgs
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Suplr_Sbmtd_Chrgs"
   * "title": "Drug_Suplr_Sbmtd_Chrgs"
   * "source_name": "Drug_Suplr_Sbmtd_Chrgs"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  drug_suplr_sbmtd_chrgs: number;

  /**
   * @name drug_suplr_mdcr_alowd_amt
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Suplr_Mdcr_Alowd_Amt"
   * "title": "Drug_Suplr_Mdcr_Alowd_Amt"
   * "source_name": "Drug_Suplr_Mdcr_Alowd_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  drug_suplr_mdcr_alowd_amt: number;

  /**
   * @name drug_suplr_mdcr_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Suplr_Mdcr_Pymt_Amt"
   * "title": "Drug_Suplr_Mdcr_Pymt_Amt"
   * "source_name": "Drug_Suplr_Mdcr_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  drug_suplr_mdcr_pymt_amt: number;

  /**
   * @name drug_suplr_mdcr_stdzd_pymt_amt
   * @type {number}
   * @description
   * ```
   * "name": "Drug_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "title": "Drug_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "source_name": "Drug_Suplr_Mdcr_Stdzd_Pymt_Amt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  drug_suplr_mdcr_stdzd_pymt_amt: number;

  /**
   * @name bene_avg_age
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Avg_Age"
   * "title": "Bene_Avg_Age"
   * "source_name": "Bene_Avg_Age"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"_none"}
   * ```
   */

  bene_avg_age: number;

  /**
   * @name bene_age_lt_65_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Age_LT_65_Cnt"
   * "title": "Bene_Age_LT_65_Cnt"
   * "source_name": "Bene_Age_LT_65_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_age_lt_65_cnt: number;

  /**
   * @name bene_age_65_74_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Age_65_74_Cnt"
   * "title": "Bene_Age_65_74_Cnt"
   * "source_name": "Bene_Age_65_74_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_age_65_74_cnt: number;

  /**
   * @name bene_age_75_84_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Age_75_84_Cnt"
   * "title": "Bene_Age_75_84_Cnt"
   * "source_name": "Bene_Age_75_84_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_age_75_84_cnt: number;

  /**
   * @name bene_age_gt_84_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Age_GT_84_Cnt"
   * "title": "Bene_Age_GT_84_Cnt"
   * "source_name": "Bene_Age_GT_84_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_age_gt_84_cnt: number;

  /**
   * @name bene_feml_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Feml_Cnt"
   * "title": "Bene_Feml_Cnt"
   * "source_name": "Bene_Feml_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_feml_cnt: number;

  /**
   * @name bene_male_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Male_Cnt"
   * "title": "Bene_Male_Cnt"
   * "source_name": "Bene_Male_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_male_cnt: number;

  /**
   * @name bene_race_wht_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Race_Wht_Cnt"
   * "title": "Bene_Race_Wht_Cnt"
   * "source_name": "Bene_Race_Wht_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_race_wht_cnt: number;

  /**
   * @name bene_race_black_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Race_Black_Cnt"
   * "title": "Bene_Race_Black_Cnt"
   * "source_name": "Bene_Race_Black_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_race_black_cnt: number;

  /**
   * @name bene_race_api_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Race_Api_Cnt"
   * "title": "Bene_Race_Api_Cnt"
   * "source_name": "Bene_Race_Api_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_race_api_cnt: number;

  /**
   * @name bene_race_hspnc_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Race_Hspnc_Cnt"
   * "title": "Bene_Race_Hspnc_Cnt"
   * "source_name": "Bene_Race_Hspnc_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_race_hspnc_cnt: number;

  /**
   * @name bene_race_natind_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Race_Natind_Cnt"
   * "title": "Bene_Race_Natind_Cnt"
   * "source_name": "Bene_Race_Natind_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_race_natind_cnt: number;

  /**
   * @name bene_race_othr_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Race_Othr_Cnt"
   * "title": "Bene_Race_Othr_Cnt"
   * "source_name": "Bene_Race_Othr_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_race_othr_cnt: number;

  /**
   * @name bene_ndual_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Ndual_Cnt"
   * "title": "Bene_Ndual_Cnt"
   * "source_name": "Bene_Ndual_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_ndual_cnt: number;

  /**
   * @name bene_dual_cnt
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Dual_Cnt"
   * "title": "Bene_Dual_Cnt"
   * "source_name": "Bene_Dual_Cnt"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":0,"thousand_separator":"comma"}
   * ```
   */

  bene_dual_cnt: number;

  /**
   * @name bene_cc_af_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_AF_Pct"
   * "title": "Bene_CC_AF_Pct"
   * "source_name": "Bene_CC_AF_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_af_pct: number;

  /**
   * @name bene_cc_alzhmr_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Alzhmr_Pct"
   * "title": "Bene_CC_Alzhmr_Pct"
   * "source_name": "Bene_CC_Alzhmr_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_alzhmr_pct: number;

  /**
   * @name bene_cc_asthma_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Asthma_Pct"
   * "title": "Bene_CC_Asthma_Pct"
   * "source_name": "Bene_CC_Asthma_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_asthma_pct: number;

  /**
   * @name bene_cc_cncr_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Cncr_Pct"
   * "title": "Bene_CC_Cncr_Pct"
   * "source_name": "Bene_CC_Cncr_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_cncr_pct: number;

  /**
   * @name bene_cc_chf_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_CHF_Pct"
   * "title": "Bene_CC_CHF_Pct"
   * "source_name": "Bene_CC_CHF_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_chf_pct: number;

  /**
   * @name bene_cc_ckd_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_CKD_Pct"
   * "title": "Bene_CC_CKD_Pct"
   * "source_name": "Bene_CC_CKD_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_ckd_pct: number;

  /**
   * @name bene_cc_copd_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_COPD_Pct"
   * "title": "Bene_CC_COPD_Pct"
   * "source_name": "Bene_CC_COPD_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_copd_pct: number;

  /**
   * @name bene_cc_dprssn_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Dprssn_Pct"
   * "title": "Bene_CC_Dprssn_Pct"
   * "source_name": "Bene_CC_Dprssn_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_dprssn_pct: number;

  /**
   * @name bene_cc_dbts_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Dbts_Pct"
   * "title": "Bene_CC_Dbts_Pct"
   * "source_name": "Bene_CC_Dbts_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_dbts_pct: number;

  /**
   * @name bene_cc_hyplpdma_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Hyplpdma_Pct"
   * "title": "Bene_CC_Hyplpdma_Pct"
   * "source_name": "Bene_CC_Hyplpdma_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_hyplpdma_pct: number;

  /**
   * @name bene_cc_hyprtnsn_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Hyprtnsn_Pct"
   * "title": "Bene_CC_Hyprtnsn_Pct"
   * "source_name": "Bene_CC_Hyprtnsn_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_hyprtnsn_pct: number;

  /**
   * @name bene_cc_ihd_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_IHD_Pct"
   * "title": "Bene_CC_IHD_Pct"
   * "source_name": "Bene_CC_IHD_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_ihd_pct: number;

  /**
   * @name bene_cc_opo_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Opo_Pct"
   * "title": "Bene_CC_Opo_Pct"
   * "source_name": "Bene_CC_Opo_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_opo_pct: number;

  /**
   * @name bene_cc_raoa_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_RAOA_Pct"
   * "title": "Bene_CC_RAOA_Pct"
   * "source_name": "Bene_CC_RAOA_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_raoa_pct: number;

  /**
   * @name bene_cc_sz_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Sz_Pct"
   * "title": "Bene_CC_Sz_Pct"
   * "source_name": "Bene_CC_Sz_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_sz_pct: number;

  /**
   * @name bene_cc_strok_pct
   * @type {number}
   * @description
   * ```
   * "name": "Bene_CC_Strok_Pct"
   * "title": "Bene_CC_Strok_Pct"
   * "source_name": "Bene_CC_Strok_Pct"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage_multiply","decimal_places":null,"thousand_separator":"_none"}
   * ```
   */

  bene_cc_strok_pct: number;

  /**
   * @name bene_avg_risk_scre
   * @type {number}
   * @description
   * ```
   * "name": "Bene_Avg_Risk_Scre"
   * "title": "Bene_Avg_Risk_Scre"
   * "source_name": "Bene_Avg_Risk_Scre"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":3,"thousand_separator":"comma"}
   * ```
   */

  bene_avg_risk_scre: number;
}
