DROP TABLE IF EXISTS ZIP_ZIPCODE;

CREATE TABLE
  IF NOT EXISTS ZIP_ZIPCODE (
    ZIPCode text PRIMARY KEY NOT NULL
  , CityId INT NOT NULL
  , CountyId INT NOT NULL
  , StateId INT NOT NULL
  );

INSERT INTO
  ZIP_ZIPCODE (ZIPCode, CityId, CountyId, StateId)
SELECT
  zip_staging.ZIPCode
, ZIP_CITY.rowid AS CityId
, ZIP_COUNTY.rowid AS CountyId
, ZIP_STATE.rowid AS StateId
FROM
  zip_staging
  LEFT JOIN ZIP_STATE ON zip_staging.StateName = ZIP_STATE.StateName
  LEFT JOIN ZIP_COUNTY ON zip_staging.CountyName = ZIP_COUNTY.CountyName
  AND ZIP_COUNTY.StateId = ZIP_STATE.rowid
  LEFT JOIN ZIP_CITY ON zip_staging.CityName = ZIP_CITY.CityName
  AND ZIP_CITY.StateId = ZIP_STATE.rowid
WHERE
  zip_staging.CityType = 'D'
GROUP BY
  zip_staging.ZIPCode
, ZIP_CITY.rowid
, ZIP_COUNTY.rowid
, ZIP_STATE.rowid
ORDER BY
  zip_staging.ZIPCode
, ZIP_CITY.rowid
, ZIP_COUNTY.rowid
, ZIP_STATE.rowid RETURNING *;
