DROP TABLE IF EXISTS ZIP_CITY;

CREATE TABLE
  IF NOT EXISTS ZIP_CITY (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , StateId INT NOT NULL
  , CityName text NOT NULL
  , CitySlug text NULL
  );

CREATE UNIQUE INDEX IF NOT EXISTS UX_ZIP_CITY_CountyName ON ZIP_CITY (StateId, CityName);

CREATE UNIQUE INDEX IF NOT EXISTS UX_ZIP_CITY_CountySlug ON ZIP_CITY (StateId, CitySlug);

INSERT INTO
  ZIP_CITY (StateId, CityName)
SELECT
  ZIP_STATE.rowid AS StateId
, zip_staging.CityName
FROM
  zip_staging
  LEFT JOIN ZIP_STATE ON zip_staging.StateName = ZIP_STATE.StateName
WHERE
  zip_staging.CityType = 'D'
GROUP BY
  ZIP_STATE.rowid
, zip_staging.CityName RETURNING *;
