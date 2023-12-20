DROP TABLE IF EXISTS GEO_COUNTRY;

CREATE TABLE
  GEO_COUNTRY (code text NOT NULL, num INT NOT NULL);

INSERT INTO
  GEO_COUNTRY
SELECT
  COUNT(*) AS num
, rfrg_prvdr_cntry AS code
FROM
  staging_provider sp
GROUP BY
  rfrg_prvdr_cntry
ORDER BY
  rfrg_prvdr_cntry RETURNING *;
