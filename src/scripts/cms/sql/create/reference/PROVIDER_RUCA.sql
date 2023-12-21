DROP TABLE IF EXISTS PROVIDER_RUCA;

CREATE TABLE
  PROVIDER_RUCA (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , code text NOT NULL
  , description text NOT NULL
  , num INT NOT NULL
  );

INSERT INTO
  PROVIDER_RUCA (code, description, num)
SELECT
  sp.rfrg_prvdr_ruca
, sp.rfrg_prvdr_ruca_desc
, COUNT(*) AS num
FROM
  staging_provider sp
WHERE
  rfrg_prvdr_ruca <> ''
GROUP BY
  sp.rfrg_prvdr_ruca
, sp.rfrg_prvdr_ruca_desc
ORDER BY
  sp.rfrg_prvdr_ruca
, sp.rfrg_prvdr_ruca_desc RETURNING *;
