DROP TABLE IF EXISTS PROVIDER_TYPE;

CREATE TABLE
  PROVIDER_TYPE (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , label text NOT NULL
  , num INT NOT NULL
  );

INSERT INTO
  PROVIDER_TYPE (label, num)
SELECT
  sp.rfrg_prvdr_type AS label
, COUNT(*) AS num
FROM
  staging_provider sp
GROUP BY
  sp.rfrg_prvdr_type
ORDER BY
  sp.rfrg_prvdr_type RETURNING *;
