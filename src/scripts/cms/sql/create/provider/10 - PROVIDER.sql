DROP TABLE IF EXISTS PROVIDER;

CREATE TABLE
  PROVIDER (
    provider_id text PRIMARY KEY
  , entity_id number NOT NULL
  , type_id number NOT NULL
  , type_flag_id number NOT NULL
  , ruca_id number NOT NULL
  , organization_name string NULL
  , first_name string NULL
  , middle_initial string NULL
  , last_name string NULL
  , credentials string NULL
  , gender string NULL
  , street_1 string NULL
  , street_2 string NULL
  );

INSERT INTO
  PROVIDER (
    provider_id
  , entity_id
  , type_id
  , type_flag_id
  , ruca_id
  , organization_name
  , first_name
  , middle_initial
  , last_name
  , credentials
  , gender
  , street_1
  , street_2
  )
SELECT
  rfrg_npi AS provider_id
, PROVIDER_ENTITY.id AS entity_id
, PROVIDER_TYPE.id AS type_id
, PROVIDER_TYPE_FLAG.id AS type_flag_id
, PROVIDER_RUCA.id AS ruca_id
, CASE rfrg_prvdr_ent_cd
    WHEN 'O' THEN NULLIF(rfrg_prvdr_last_name_org, '')
  END AS organization_name
, CASE rfrg_prvdr_ent_cd
    WHEN 'I' THEN NULLIF(rfrg_prvdr_first_name, '')
  END AS first_name
, CASE rfrg_prvdr_ent_cd
    WHEN 'I' THEN NULLIF(rfrg_prvdr_mi, '')
  END AS middle_initial
, CASE rfrg_prvdr_ent_cd
    WHEN 'I' THEN NULLIF(rfrg_prvdr_last_name_org, '')
  END AS last_name
, CASE rfrg_prvdr_ent_cd
    WHEN 'I' THEN NULLIF(rfrg_prvdr_crdntls, '')
  END AS credentials
, CASE rfrg_prvdr_ent_cd
    WHEN 'I' THEN NULLIF(rfrg_prvdr_gndr, '')
  END AS gender
, NULLIF(rfrg_prvdr_st_1, '') AS street_1
, NULLIF(rfrg_prvdr_st_2, '') AS street_2
FROM
  staging_provider sp
  INNER JOIN ZIP_ZIPCODE ON sp.rfrg_prvdr_zip_5 = ZIP_ZIPCODE.ZIPCode
  INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
  INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_CITY.StateId
  INNER JOIN PROVIDER_ENTITY ON sp.rfrg_prvdr_ent_cd = PROVIDER_ENTITY.code
  INNER JOIN PROVIDER_TYPE ON sp.rfrg_prvdr_type = PROVIDER_TYPE.label
  INNER JOIN PROVIDER_TYPE_FLAG ON sp.rfrg_prvdr_type_flag = PROVIDER_TYPE_FLAG.code
  INNER JOIN PROVIDER_RUCA ON sp.rfrg_prvdr_ruca = PROVIDER_RUCA.code
WHERE
  rfrg_prvdr_cntry = 'US'
