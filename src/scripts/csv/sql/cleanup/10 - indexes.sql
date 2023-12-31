CREATE INDEX IX_MANUFACTURER_slug ON MANUFACTURER (slug);

CREATE INDEX IX_PRODUCT_manufacturer_id ON PRODUCT (manufacturer_id);

CREATE INDEX IX_PRODUCT_slug__manufacturer_id ON PRODUCT (slug, manufacturer_id);

CREATE INDEX IX_PROVIDERTYPE_idx_slug ON PROVIDERTYPE (slug);

CREATE INDEX IX_SPECIALITY_slug ON SPECIALITY (slug);

CREATE INDEX IX_SUPPLIER_accepts_assignment__zip ON SUPPLIER (accepts_assignment, zip);

CREATE INDEX IX_SUPPLIER_is_contracted_for_cba ON SUPPLIER (is_contracted_for_cba);

CREATE INDEX IX_SUPPLIER_is_contracted_for_cba__accepts_assignment ON SUPPLIER (is_contracted_for_cba, accepts_assignment);

CREATE INDEX IX_SUPPLIER_PRODUCT_product_id ON SUPPLIER_PRODUCT (product_id);

CREATE INDEX IX_SUPPLIER_PROVIDERTYPE_providertype_id ON SUPPLIER_PROVIDERTYPE (providertype_id);

CREATE INDEX IX_SUPPLIER_SPECIALITY_speciality_id ON SUPPLIER_SPECIALITY (speciality_id);

CREATE INDEX IX_SUPPLIER_SUPPLY_provider_id__supply_id ON SUPPLIER_SUPPLY (provider_id, supply_id);

CREATE INDEX IX_SUPPLIER_SUPPLY_supply_id ON SUPPLIER_SUPPLY (supply_id);

CREATE INDEX IX_SUPPLIER_zip ON SUPPLIER (zip);

CREATE INDEX IX_SUPPLIER_zip__is_contracted_for_cba__accepts_assignment ON SUPPLIER (zip, is_contracted_for_cba, accepts_assignment);

CREATE INDEX IX_SUPPLIER_zip__practice_name ON SUPPLIER (zip, practice_name);

CREATE INDEX IX_SUPPLY_idx_slug ON SUPPLY (slug);

CREATE INDEX IX_ZIP_CITY_CitySlug ON ZIP_CITY (CitySlug);

CREATE INDEX IX_ZIP_COUNTY_CountySlug ON ZIP_COUNTY (CountySlug);

CREATE INDEX IX_ZIP_STATE_StateSlug ON ZIP_STATE (StateSlug);

CREATE INDEX IX_ZIP_ZIPCODE_CityId ON ZIP_ZIPCODE (CityId);

CREATE INDEX IX_ZIP_ZIPCODE_CityId__CountyId__StateId__ZIPCode ON ZIP_ZIPCODE (CityId, CountyId, StateId, ZIPCode);

CREATE INDEX IX_ZIP_ZIPCODE_CountyId ON ZIP_ZIPCODE (CountyId);

CREATE INDEX IX_ZIP_ZIPCODE_StateId ON ZIP_ZIPCODE (StateId);
