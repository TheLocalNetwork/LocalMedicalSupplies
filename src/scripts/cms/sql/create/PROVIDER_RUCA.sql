
DROP TABLE IF EXISTS PROVIDER_RUCA;

CREATE TABLE PROVIDER_RUCA (
  code text NOT NULL
  , description text NOT NULL
  , num int NOT NULL
);

INSERT INTO PROVIDER_RUCA
SELECT sp.rfrg_prvdr_ruca, sp.rfrg_prvdr_ruca_desc, count(*) AS num
FROM staging_provider sp
WHERE rfrg_prvdr_ruca <> ''
GROUP BY sp.rfrg_prvdr_ruca, sp.rfrg_prvdr_ruca_desc
ORDER BY sp.rfrg_prvdr_ruca, sp.rfrg_prvdr_ruca_desc;
