CREATE INDEX IX_SUPPLIER_SUPPLY_provider_id__supply_id ON SUPPLIER_SUPPLY (provider_id, supply_id);

CREATE INDEX IX_SUPPLIER_zip ON SUPPLIER (zip);

CREATE INDEX IX_SUPPLIER_zip__practice_name ON SUPPLIER (zip, practice_name);

CREATE INDEX IX_ZIP_CITY_CitySlug ON ZIP_CITY (CitySlug);

CREATE INDEX IX_ZIP_COUNTY_CountySlug ON ZIP_COUNTY (CountySlug);

CREATE INDEX IX_ZIP_STATE_StateSlug ON ZIP_STATE (StateSlug);

CREATE INDEX IX_ZIP_ZIPCODE_CityId ON ZIP_ZIPCODE (CityId);

CREATE INDEX IX_ZIP_ZIPCODE_CityId_CountyId_StateId_ZIPCode ON ZIP_ZIPCODE (CityId, CountyId, StateId, ZIPCode);

CREATE INDEX IX_ZIP_ZIPCODE_CountyId ON ZIP_ZIPCODE (CountyId);

CREATE INDEX IX_ZIP_ZIPCODE_StateId ON ZIP_ZIPCODE (StateId);
