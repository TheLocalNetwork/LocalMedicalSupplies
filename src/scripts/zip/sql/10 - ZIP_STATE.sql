DROP TABLE IF EXISTS ZIP_STATE;

CREATE TABLE
  IF NOT EXISTS ZIP_STATE (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , StateName text NOT NULL
  , StateAbbr text NOT NULL
  , StateSlug text NULL
  );

INSERT INTO
  ZIP_STATE (StateName, StateAbbr)
SELECT
  StateName
, StateAbbr
FROM
  zip_staging
GROUP BY
  StateName
, StateAbbr RETURNING *;
