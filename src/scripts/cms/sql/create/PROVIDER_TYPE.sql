DROP TABLE IF EXISTS PROVIDER_TYPE;

CREATE TABLE
  PROVIDER_TYPE (label text NOT NULL, num INT NOT NULL);

INSERT INTO
  PROVIDER_TYPE
SELECT
  sp.rfrg_prvdr_type AS label
, COUNT(*) AS num
FROM
  staging_provider sp
GROUP BY
  sp.rfrg_prvdr_type
ORDER BY
  sp.rfrg_prvdr_type RETURNING *;
