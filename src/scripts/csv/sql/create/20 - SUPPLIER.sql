DROP TABLE IF EXISTS SUPPLIER;

CREATE TABLE
  SUPPLIER (
    provider_id INTEGER PRIMARY KEY
  , accepts_assignment BOOLEAN NOT NULL
  , participation_begin_date DATE NULL
  , business_name text NULL
  , business_slug text NULL
  , practice_name text NULL
  , practice_slug text NULL
  , address_1 text NULL
  , address_2 text NULL
  , zip text NOT NULL
  , zip4 text NULL
  , phone text NOT NULL
  , is_contracted_for_cba BOOLEAN NOT NULL
  );
