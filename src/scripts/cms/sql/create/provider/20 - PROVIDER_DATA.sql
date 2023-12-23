DROP TABLE IF EXISTS PROVIDER_DATA;

CREATE TABLE
  PROVIDER_DATA AS
SELECT
  CAST(rfrg_npi AS text) AS provider_id
, tot_suplrs
, tot_suplr_hcpcs_cds
, tot_suplr_benes
, tot_suplr_clms
, tot_suplr_srvcs
, suplr_sbmtd_chrgs
, suplr_mdcr_alowd_amt
, suplr_mdcr_pymt_amt
, suplr_mdcr_stdzd_pymt_amt
, CAST(dme_sprsn_ind AS text) AS dme_sprsn_ind
, dme_tot_suplrs
, dme_tot_suplr_hcpcs_cds
, dme_tot_suplr_benes
, dme_tot_suplr_clms
, dme_tot_suplr_srvcs
, dme_suplr_sbmtd_chrgs
, dme_suplr_mdcr_alowd_amt
, dme_suplr_mdcr_pymt_amt
, dme_suplr_mdcr_stdzd_pymt_amt
, CAST(pos_sprsn_ind AS text) AS pos_sprsn_ind
, pos_tot_suplrs
, pos_tot_suplr_hcpcs_cds
, pos_tot_suplr_benes
, pos_tot_suplr_clms
, pos_tot_suplr_srvcs
, pos_suplr_sbmtd_chrgs
, pos_suplr_mdcr_alowd_amt
, pos_suplr_mdcr_pymt_amt
, pos_suplr_mdcr_stdzd_pymt_amt
, CAST(drug_sprsn_ind AS text) AS drug_sprsn_ind
, drug_tot_suplrs
, drug_tot_suplr_hcpcs_cds
, drug_tot_suplr_benes
, drug_tot_suplr_clms
, drug_tot_suplr_srvcs
, drug_suplr_sbmtd_chrgs
, drug_suplr_mdcr_alowd_amt
, drug_suplr_mdcr_pymt_amt
, drug_suplr_mdcr_stdzd_pymt_amt
, bene_avg_age
, bene_age_lt_65_cnt
, bene_age_65_74_cnt
, bene_age_75_84_cnt
, bene_age_gt_84_cnt
, bene_feml_cnt
, bene_male_cnt
, bene_race_wht_cnt
, bene_race_black_cnt
, bene_race_api_cnt
, bene_race_hspnc_cnt
, bene_race_natind_cnt
, bene_race_othr_cnt
, bene_ndual_cnt
, bene_dual_cnt
, bene_cc_af_pct
, bene_cc_alzhmr_pct
, bene_cc_asthma_pct
, bene_cc_cncr_pct
, bene_cc_chf_pct
, bene_cc_ckd_pct
, bene_cc_copd_pct
, bene_cc_dprssn_pct
, bene_cc_dbts_pct
, bene_cc_hyplpdma_pct
, bene_cc_hyprtnsn_pct
, bene_cc_ihd_pct
, bene_cc_opo_pct
, bene_cc_raoa_pct
, bene_cc_sz_pct
, bene_cc_strok_pct
, bene_avg_risk_scre
FROM
  staging_provider sp;

CREATE UNIQUE INDEX UX_PROVIDER_DATA_provider_id ON PROVIDER_DATA (provider_id);
