DROP TABLE IF EXISTS PROVIDER_TYPE_FLAG;

CREATE TABLE PROVIDER_TYPE_FLAG (
  label text NOT NULL
  , num int NOT null
);

INSERT INTO PROVIDER_TYPE_FLAG
SELECT rfrg_prvdr_type_flag, count(*) 
FROM staging_provider sp 
GROUP BY sp.rfrg_prvdr_type_flag
ORDER BY sp.rfrg_prvdr_type_flag;
