CREATE INDEX IX_SUPPLIER_SUPPLY_provider_id__supply_id ON SUPPLIER_SUPPLY (provider_id, supply_id);

CREATE INDEX IX_SUPPLIER_zip ON SUPPLIER(zip);

CREATE INDEX IX_SUPPLIER_zip__practice_name ON SUPPLIER(zip, practice_name);
