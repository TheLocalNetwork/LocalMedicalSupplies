DROP TABLE IF EXISTS GEO_STATE;

CREATE TABLE
  GEO_STATE (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , geo_country_id INT NOT NULL
  , state_abbr text NOT NULL
  , num INT NOT NULL
  );

INSERT INTO
  GEO_STATE (geo_country_id, state_abbr, num)
SELECT
  GEO_COUNTRY.id AS geo_country_id
, sp.rfrg_prvdr_state_abrvtn AS state_abbr
, COUNT(*) AS num
FROM
  staging_provider sp
  LEFT JOIN GEO_COUNTRY ON sp.rfrg_prvdr_cntry = GEO_COUNTRY.country_abbr
GROUP BY
  GEO_COUNTRY.id
, sp.rfrg_prvdr_state_abrvtn
ORDER BY
  sp.rfrg_prvdr_state_abrvtn
, GEO_COUNTRY.id RETURNING *;

CREATE INDEX IX_GEO_STATE_country_id ON GEO_STATE (geo_country_id);
