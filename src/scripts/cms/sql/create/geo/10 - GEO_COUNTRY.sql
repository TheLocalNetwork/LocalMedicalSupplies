DROP TABLE IF EXISTS GEO_COUNTRY;

CREATE TABLE
  GEO_COUNTRY (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , country_abbr text NOT NULL
  , num INT NOT NULL
  );

INSERT INTO
  GEO_COUNTRY (country_abbr, num)
SELECT
  rfrg_prvdr_cntry AS country_abbr
, COUNT(*) AS num
FROM
  staging_provider sp
GROUP BY
  rfrg_prvdr_cntry
ORDER BY
  rfrg_prvdr_cntry RETURNING *;

UPDATE "f8603e5b-9c47-4c52-9b47-a4ef92dfada4"
SET
  geo_country_id = (
    SELECT
      GEO_COUNTRY.id
    FROM
      GEO_COUNTRY
    WHERE
      rfrg_prvdr_cntry = GEO_COUNTRY.country_abbr
  );
