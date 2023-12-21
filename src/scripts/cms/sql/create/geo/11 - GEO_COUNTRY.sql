UPDATE "f8603e5b-9c47-4c52-9b47-a4ef92dfada4"
SET
  geo_country_id = (
    SELECT
      GEO_COUNTRY.id
    FROM
      GEO_COUNTRY
    WHERE
      rfrg_prvdr_cntry = GEO_COUNTRY.country_abbr
  )
WHERE
  geo_country_id IS NULL;
