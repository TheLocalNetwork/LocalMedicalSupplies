DROP TABLE IF EXISTS ZIP_COUNTY;

CREATE TABLE
  IF NOT EXISTS ZIP_COUNTY (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , StateId INT NOT NULL
  , CountyName text NOT NULL
  , CountySlug text NULL
  );

INSERT INTO
  ZIP_COUNTY (StateId, CountyName)
SELECT
  ZIP_STATE.rowid AS StateId
, zip_staging.CountyName
FROM
  zip_staging
  LEFT JOIN ZIP_STATE ON zip_staging.StateName = ZIP_STATE.StateName
GROUP BY
  ZIP_STATE.rowid
, zip_staging.CountyName RETURNING *;
