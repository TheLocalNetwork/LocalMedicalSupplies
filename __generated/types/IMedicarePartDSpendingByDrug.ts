/**
 * @name IMedicarePartDSpendingByDrug
 * @summary Medicare Part D Spending by Drug
 * @property {string} brnd_name
 * @property {string} gnrc_name
 * @property {number} tot_mftr
 * @property {string} mftr_name
 * @property {number} tot_spndng_2017
 * @property {number} tot_dsg_unts_2017
 * @property {number} tot_clms_2017
 * @property {number} tot_benes_2017
 * @property {number} avg_spnd_per_dsg_unt_wghtd_2017
 * @property {number} avg_spnd_per_clm_2017
 * @property {number} avg_spnd_per_bene_2017
 * @property {string} outlier_flag_2017
 * @property {number} tot_spndng_2018
 * @property {number} tot_dsg_unts_2018
 * @property {number} tot_clms_2018
 * @property {number} tot_benes_2018
 * @property {number} avg_spnd_per_dsg_unt_wghtd_2018
 * @property {number} avg_spnd_per_clm_2018
 * @property {number} avg_spnd_per_bene_2018
 * @property {string} outlier_flag_2018
 * @property {number} tot_spndng_2019
 * @property {number} tot_dsg_unts_2019
 * @property {number} tot_clms_2019
 * @property {number} tot_benes_2019
 * @property {number} avg_spnd_per_dsg_unt_wghtd_2019
 * @property {number} avg_spnd_per_clm_2019
 * @property {number} avg_spnd_per_bene_2019
 * @property {string} outlier_flag_2019
 * @property {number} tot_spndng_2020
 * @property {number} tot_dsg_unts_2020
 * @property {number} tot_clms_2020
 * @property {number} tot_benes_2020
 * @property {number} avg_spnd_per_dsg_unt_wghtd_2020
 * @property {number} avg_spnd_per_clm_2020
 * @property {number} avg_spnd_per_bene_2020
 * @property {number} outlier_flag_2020
 * @property {number} tot_spndng_2021
 * @property {number} tot_dsg_unts_2021
 * @property {number} tot_clms_2021
 * @property {number} tot_benes_2021
 * @property {number} avg_spnd_per_dsg_unt_wghtd_2021
 * @property {number} avg_spnd_per_clm_2021
 * @property {number} avg_spnd_per_bene_2021
 * @property {number} outlier_flag_2021
 * @property {number} chg_avg_spnd_per_dsg_unt_20_21
 * @property {number} cagr_avg_spnd_per_dsg_unt_17_21
 * @description The Medicare Part D by Drug dataset presents information on spending for drugs prescribed to Medicare beneficiaries enrolled in Part D by physicians and other healthcare providers. Drugs prescribed in the Medicare Part D program are drugs patients generally administer themselves.

 

The dataset focuses on average spending per dosage unit and change in average spending per dosage unit over time. It also includes spending information for manufacturer(s) of the drugs as well as consumer-friendly information of drug uses and clinical indications.

 

Drug spending metrics for Part D drugs are based on the gross drug cost, which represents total spending for the prescription claim, including Medicare, plan, and beneficiary payments. The Part D spending metrics do not reflect any manufacturers’ rebates or other price concessions as CMS is prohibited from publicly disclosing such information.
 * ```
 * "@type": "dcat:Dataset"
 * "accessLevel": "public"
 * "accrualPeriodicity": "R/P1Y"
 * "bureauCode": ["009:38"]
 * "contactPoint": {"@type":"vcard:Contact","fn":"CMS Drug Spending - OEDA","hasEmail":"mailto:IPAG_Data_Products@cms.hhs.gov"}
 * "describedBy": "https://data.cms.gov/resources/medicare-part-d-spending-by-drug-data-dictionary"
 * "dataQuality": true
 * "description": "The Medicare Part D by Drug dataset presents information on spending for drugs prescribed to Medicare beneficiaries enrolled in Part D by physicians and other healthcare providers. Drugs prescribed in the Medicare Part D program are drugs patients generally administer themselves.\n\n \n\nThe dataset focuses on average spending per dosage unit and change in average spending per dosage unit over time. It also includes spending information for manufacturer(s) of the drugs as well as consumer-friendly information of drug uses and clinical indications.\n\n \n\nDrug spending metrics for Part D drugs are based on the gross drug cost, which represents total spending for the prescription claim, including Medicare, plan, and beneficiary payments. The Part D spending metrics do not reflect any manufacturers’ rebates or other price concessions as CMS is prohibited from publicly disclosing such information."
 * "distribution": []
 * "identifier": "https://data.cms.gov/data-api/v1/dataset/7e0b4365-fd63-4a29-8f5e-e0ac9f66a81b/data-viewer"
 * "keyword": ["Medicare","Medicare Prescription Drug","Medical Suppliers & Equipment","Drugs"]
 * "landingPage": "https://data.cms.gov/summary-statistics-on-use-and-payments/medicare-medicaid-spending-by-drug/medicare-part-d-spending-by-drug"
 * "language": ["en-US"]
 * "license": "https://www.usa.gov/government-works"
 * "modified": "2023-03-06"
 * "programCode": ["009:000"]
 * "publisher": {"@type":"org:Organization","name":"Centers for Medicare & Medicaid Services"}
 * "references": ["https://data.cms.gov/resources/medicare-part-d-spending-by-drug-methodology"]
 * "temporal": "2021-01-01/2021-12-31"
 * "theme": ["Medicare"]
 * "title": "Medicare Part D Spending by Drug"
 * "id": "7e0b4365-fd63-4a29-8f5e-e0ac9f66a81b"
 * ```
 */
export interface IMedicarePartDSpendingByDrug {
  /**
   * @name brnd_name
   * @type {string}
   * @description
   * ```
   * "name": "Brnd_Name"
   * "title": "Brnd_Name"
   * "source_name": "Brnd_Name"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  brnd_name: string;

  /**
   * @name gnrc_name
   * @type {string}
   * @description
   * ```
   * "name": "Gnrc_Name"
   * "title": "Gnrc_Name"
   * "source_name": "Gnrc_Name"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  gnrc_name: string;

  /**
   * @name tot_mftr
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Mftr"
   * "title": "Tot_Mftr"
   * "source_name": "Tot_Mftr"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_mftr: number;

  /**
   * @name mftr_name
   * @type {string}
   * @description
   * ```
   * "name": "Mftr_Name"
   * "title": "Mftr_Name"
   * "source_name": "Mftr_Name"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  mftr_name: string;

  /**
   * @name tot_spndng_2017
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Spndng_2017"
   * "title": "Tot_Spndng_2017"
   * "source_name": "Tot_Spndng_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  tot_spndng_2017: number;

  /**
   * @name tot_dsg_unts_2017
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Dsg_Unts_2017"
   * "title": "Tot_Dsg_Unts_2017"
   * "source_name": "Tot_Dsg_Unts_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_dsg_unts_2017: number;

  /**
   * @name tot_clms_2017
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Clms_2017"
   * "title": "Tot_Clms_2017"
   * "source_name": "Tot_Clms_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_clms_2017: number;

  /**
   * @name tot_benes_2017
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Benes_2017"
   * "title": "Tot_Benes_2017"
   * "source_name": "Tot_Benes_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_benes_2017: number;

  /**
   * @name avg_spnd_per_dsg_unt_wghtd_2017
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2017"
   * "title": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2017"
   * "source_name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_dsg_unt_wghtd_2017: number;

  /**
   * @name avg_spnd_per_clm_2017
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Clm_2017"
   * "title": "Avg_Spnd_Per_Clm_2017"
   * "source_name": "Avg_Spnd_Per_Clm_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_clm_2017: number;

  /**
   * @name avg_spnd_per_bene_2017
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Bene_2017"
   * "title": "Avg_Spnd_Per_Bene_2017"
   * "source_name": "Avg_Spnd_Per_Bene_2017"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_bene_2017: number;

  /**
   * @name outlier_flag_2017
   * @type {string}
   * @description
   * ```
   * "name": "Outlier_Flag_2017"
   * "title": "Outlier_Flag_2017"
   * "source_name": "Outlier_Flag_2017"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  outlier_flag_2017: string;

  /**
   * @name tot_spndng_2018
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Spndng_2018"
   * "title": "Tot_Spndng_2018"
   * "source_name": "Tot_Spndng_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  tot_spndng_2018: number;

  /**
   * @name tot_dsg_unts_2018
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Dsg_Unts_2018"
   * "title": "Tot_Dsg_Unts_2018"
   * "source_name": "Tot_Dsg_Unts_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_dsg_unts_2018: number;

  /**
   * @name tot_clms_2018
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Clms_2018"
   * "title": "Tot_Clms_2018"
   * "source_name": "Tot_Clms_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_clms_2018: number;

  /**
   * @name tot_benes_2018
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Benes_2018"
   * "title": "Tot_Benes_2018"
   * "source_name": "Tot_Benes_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_benes_2018: number;

  /**
   * @name avg_spnd_per_dsg_unt_wghtd_2018
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2018"
   * "title": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2018"
   * "source_name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_dsg_unt_wghtd_2018: number;

  /**
   * @name avg_spnd_per_clm_2018
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Clm_2018"
   * "title": "Avg_Spnd_Per_Clm_2018"
   * "source_name": "Avg_Spnd_Per_Clm_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_clm_2018: number;

  /**
   * @name avg_spnd_per_bene_2018
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Bene_2018"
   * "title": "Avg_Spnd_Per_Bene_2018"
   * "source_name": "Avg_Spnd_Per_Bene_2018"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_bene_2018: number;

  /**
   * @name outlier_flag_2018
   * @type {string}
   * @description
   * ```
   * "name": "Outlier_Flag_2018"
   * "title": "Outlier_Flag_2018"
   * "source_name": "Outlier_Flag_2018"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  outlier_flag_2018: string;

  /**
   * @name tot_spndng_2019
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Spndng_2019"
   * "title": "Tot_Spndng_2019"
   * "source_name": "Tot_Spndng_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  tot_spndng_2019: number;

  /**
   * @name tot_dsg_unts_2019
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Dsg_Unts_2019"
   * "title": "Tot_Dsg_Unts_2019"
   * "source_name": "Tot_Dsg_Unts_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_dsg_unts_2019: number;

  /**
   * @name tot_clms_2019
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Clms_2019"
   * "title": "Tot_Clms_2019"
   * "source_name": "Tot_Clms_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_clms_2019: number;

  /**
   * @name tot_benes_2019
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Benes_2019"
   * "title": "Tot_Benes_2019"
   * "source_name": "Tot_Benes_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_benes_2019: number;

  /**
   * @name avg_spnd_per_dsg_unt_wghtd_2019
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2019"
   * "title": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2019"
   * "source_name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_dsg_unt_wghtd_2019: number;

  /**
   * @name avg_spnd_per_clm_2019
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Clm_2019"
   * "title": "Avg_Spnd_Per_Clm_2019"
   * "source_name": "Avg_Spnd_Per_Clm_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_clm_2019: number;

  /**
   * @name avg_spnd_per_bene_2019
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Bene_2019"
   * "title": "Avg_Spnd_Per_Bene_2019"
   * "source_name": "Avg_Spnd_Per_Bene_2019"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_bene_2019: number;

  /**
   * @name outlier_flag_2019
   * @type {string}
   * @description
   * ```
   * "name": "Outlier_Flag_2019"
   * "title": "Outlier_Flag_2019"
   * "source_name": "Outlier_Flag_2019"
   * "type": "string"
   * "format": "default"
   * "display_format": {"alignment":"left"}
   * ```
   */

  outlier_flag_2019: string;

  /**
   * @name tot_spndng_2020
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Spndng_2020"
   * "title": "Tot_Spndng_2020"
   * "source_name": "Tot_Spndng_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  tot_spndng_2020: number;

  /**
   * @name tot_dsg_unts_2020
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Dsg_Unts_2020"
   * "title": "Tot_Dsg_Unts_2020"
   * "source_name": "Tot_Dsg_Unts_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_dsg_unts_2020: number;

  /**
   * @name tot_clms_2020
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Clms_2020"
   * "title": "Tot_Clms_2020"
   * "source_name": "Tot_Clms_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_clms_2020: number;

  /**
   * @name tot_benes_2020
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Benes_2020"
   * "title": "Tot_Benes_2020"
   * "source_name": "Tot_Benes_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_benes_2020: number;

  /**
   * @name avg_spnd_per_dsg_unt_wghtd_2020
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2020"
   * "title": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2020"
   * "source_name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_dsg_unt_wghtd_2020: number;

  /**
   * @name avg_spnd_per_clm_2020
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Clm_2020"
   * "title": "Avg_Spnd_Per_Clm_2020"
   * "source_name": "Avg_Spnd_Per_Clm_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_clm_2020: number;

  /**
   * @name avg_spnd_per_bene_2020
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Bene_2020"
   * "title": "Avg_Spnd_Per_Bene_2020"
   * "source_name": "Avg_Spnd_Per_Bene_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_bene_2020: number;

  /**
   * @name outlier_flag_2020
   * @type {number}
   * @description
   * ```
   * "name": "Outlier_Flag_2020"
   * "title": "Outlier_Flag_2020"
   * "source_name": "Outlier_Flag_2020"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  outlier_flag_2020: number;

  /**
   * @name tot_spndng_2021
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Spndng_2021"
   * "title": "Tot_Spndng_2021"
   * "source_name": "Tot_Spndng_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  tot_spndng_2021: number;

  /**
   * @name tot_dsg_unts_2021
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Dsg_Unts_2021"
   * "title": "Tot_Dsg_Unts_2021"
   * "source_name": "Tot_Dsg_Unts_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_dsg_unts_2021: number;

  /**
   * @name tot_clms_2021
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Clms_2021"
   * "title": "Tot_Clms_2021"
   * "source_name": "Tot_Clms_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_clms_2021: number;

  /**
   * @name tot_benes_2021
   * @type {number}
   * @description
   * ```
   * "name": "Tot_Benes_2021"
   * "title": "Tot_Benes_2021"
   * "source_name": "Tot_Benes_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  tot_benes_2021: number;

  /**
   * @name avg_spnd_per_dsg_unt_wghtd_2021
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2021"
   * "title": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2021"
   * "source_name": "Avg_Spnd_Per_Dsg_Unt_Wghtd_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_dsg_unt_wghtd_2021: number;

  /**
   * @name avg_spnd_per_clm_2021
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Clm_2021"
   * "title": "Avg_Spnd_Per_Clm_2021"
   * "source_name": "Avg_Spnd_Per_Clm_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_clm_2021: number;

  /**
   * @name avg_spnd_per_bene_2021
   * @type {number}
   * @description
   * ```
   * "name": "Avg_Spnd_Per_Bene_2021"
   * "title": "Avg_Spnd_Per_Bene_2021"
   * "source_name": "Avg_Spnd_Per_Bene_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"currency","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  avg_spnd_per_bene_2021: number;

  /**
   * @name outlier_flag_2021
   * @type {number}
   * @description
   * ```
   * "name": "Outlier_Flag_2021"
   * "title": "Outlier_Flag_2021"
   * "source_name": "Outlier_Flag_2021"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"standard","decimal_places":null,"thousand_separator":"comma"}
   * ```
   */

  outlier_flag_2021: number;

  /**
   * @name chg_avg_spnd_per_dsg_unt_20_21
   * @type {number}
   * @description
   * ```
   * "name": "Chg_Avg_Spnd_Per_Dsg_Unt_20_21"
   * "title": "Chg_Avg_Spnd_Per_Dsg_Unt_20_21"
   * "source_name": "Chg_Avg_Spnd_Per_Dsg_Unt_20_21"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  chg_avg_spnd_per_dsg_unt_20_21: number;

  /**
   * @name cagr_avg_spnd_per_dsg_unt_17_21
   * @type {number}
   * @description
   * ```
   * "name": "CAGR_Avg_Spnd_Per_Dsg_Unt_17_21"
   * "title": "CAGR_Avg_Spnd_Per_Dsg_Unt_17_21"
   * "source_name": "CAGR_Avg_Spnd_Per_Dsg_Unt_17_21"
   * "type": "number"
   * "format": "default"
   * "display_format": {"alignment":"right","formatting":"percentage","decimal_places":2,"thousand_separator":"comma"}
   * ```
   */

  cagr_avg_spnd_per_dsg_unt_17_21: number;
}
