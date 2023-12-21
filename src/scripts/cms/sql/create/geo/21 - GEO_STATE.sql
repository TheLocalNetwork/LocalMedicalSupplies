UPDATE "f8603e5b-9c47-4c52-9b47-a4ef92dfada4"
SET
  geo_state_id = (
    SELECT
      GEO_STATE.id
    FROM
      GEO_STATE
    WHERE
      geo_country_id = GEO_STATE.geo_country_id
      AND rfrg_prvdr_state_abrvtn = GEO_STATE.state_abbr
  )
WHERE
  geo_state_id IS NULL;
