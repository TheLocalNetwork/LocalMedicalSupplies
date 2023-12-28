DROP TABLE IF EXISTS PRODUCT;

CREATE TABLE
  PRODUCT (
    id INTEGER PRIMARY KEY AUTOINCREMENT
  , manufacturer_id INT NOT NULL
  , name text NOT NULL
  , slug text NULL
  , num_suppliers INT NOT NULL
  );

INSERT INTO
  PRODUCT (manufacturer_id, name, num_suppliers)
SELECT
  m.id AS manufacturer_id
, product_name AS name
, COUNT(DISTINCT provider_id) AS num_suppliers
FROM
  staging_products sp
  INNER JOIN manufacturer m ON sp.manufacturer = m.name
GROUP BY
  product_name;

DROP TABLE IF EXISTS SUPPLIER_PRODUCT;

CREATE TABLE
  SUPPLIER_PRODUCT (provider_id INT NOT NULL, product_id INT NOT NULL);

INSERT INTO
  SUPPLIER_PRODUCT (provider_id, product_id)
SELECT
  sp.provider_id
, PRODUCT.id AS product_id
FROM
  staging_products sp
  INNER JOIN PRODUCT ON PRODUCT.name = sp.product_name
