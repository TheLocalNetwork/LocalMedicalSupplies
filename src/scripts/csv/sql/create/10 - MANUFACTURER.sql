DROP TABLE IF EXISTS MANUFACTURER;

CREATE TABLE
  MANUFACTURER (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , name text NOT NULL
  , slug text NULL
  , num_products INT NOT NULL
  , num_suppliers INT NOT NULL
  );

INSERT INTO
  MANUFACTURER (name, num_products, num_suppliers)
SELECT
  manufacturer AS name
, COUNT(DISTINCT product_name) AS num_products
, COUNT(DISTINCT provider_id) AS num_suppliers
FROM
  staging_products
GROUP BY
  manufacturer;
