DROP TABLE IF EXISTS PROVIDER_TYPE_FLAG;

CREATE TABLE
  PROVIDER_TYPE_FLAG (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , code text NOT NULL
  , label text NOT NULL
  , num INT NOT NULL
  );

INSERT INTO
  PROVIDER_TYPE_FLAG (code, label, num)
SELECT
  COUNT(*) AS num
, sp.rfrg_prvdr_type_flag AS code
, CASE sp.rfrg_prvdr_type_flag
    WHEN 'S' THEN 'Medicare Specialty Code'
    WHEN 'T' THEN 'Taxonomy Code Classification'
  END AS label
FROM
  staging_provider sp
GROUP BY
  sp.rfrg_prvdr_type_flag
ORDER BY
  sp.rfrg_prvdr_type_flag RETURNING *;
