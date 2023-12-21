DROP TABLE IF EXISTS PROVIDER_ENTITY;

CREATE TABLE
  PROVIDER_ENTITY (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , code text NOT NULL
  , label text NOT NULL
  , num INT NOT NULL
  );

INSERT INTO
  PROVIDER_ENTITY (code, label, num)
SELECT
  sp.rfrg_prvdr_ent_cd AS code
, CASE sp.rfrg_prvdr_ent_cd
    WHEN 'I' THEN 'Individual'
    WHEN 'O' THEN 'Organization'
  END AS label
, COUNT(*) AS num
FROM
  staging_provider sp
GROUP BY
  sp.rfrg_prvdr_ent_cd
ORDER BY
  label RETURNING *;
