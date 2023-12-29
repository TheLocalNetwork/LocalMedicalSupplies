import { db } from '~/lib/db/db';
import { slugify } from '~/lib/string';
import { type ISupplierCSV } from '~/scripts/csv/types/Supplier';
import { boolTrueFalse } from '~/scripts/sql';
import { type ISupplier } from '~/types/Supplier';

export const loadSuppliers = () => {
  const suppliersStaging = db
    .prepare(
      `
SELECT
	provider_id
	, acceptsassignement
	, participationbegindate
	, businessname
	, practicename
	, practiceaddress1
	, practiceaddress2
	, practicecity
	, practicestate
	, practicezip9code
	, telephonenumber
	, specialitieslist
	, providertypelist
	, supplieslist
	, latitude
	, longitude
	, is_contracted_for_cba
FROM
	staging_suppliers;`
    )
    .all() as ISupplierCSV[];

  const specialities = new Map<string, Set<number>>();
  const providerTypes = new Map<string, Set<number>>();
  const supplies = new Map<string, Set<number>>();

  const addToMap = (mapObject: Map<string, Set<number>>, string: string, provider_id: number) => {
    if (!string.length) return;
    if (string.includes('|')) {
      string.split('|').map((s) => addToMap(mapObject, s, provider_id));
      return;
    }

    string = string.replace('â\x80\x93', '-');

    const set = mapObject.get(string) ?? new Set<number>();
    set.add(provider_id);
    mapObject.set(string, set);
  };

  suppliersStaging.forEach((supplier) => {
    const { provider_id, specialitieslist, providertypelist, supplieslist } = supplier;

    const id = parseInt(provider_id, 10);

    addToMap(specialities, specialitieslist, id);
    addToMap(providerTypes, providertypelist, id);
    addToMap(supplies, supplieslist, id);
  });

  // console.log({
  //   specialities: specialities.entries(),
  //   types: types.keys(),
  //   supplies: supplies.keys(),
  //   suppliers: suppliers.length,
  // });

  db.transaction(() => {
    const insertSpeciality = db.prepare('INSERT INTO SPECIALITY (id, name, num) VALUES (?,?,?);');
    const insertSupplierSpeciality = db.prepare(
      'INSERT INTO SUPPLIER_SPECIALITY (provider_id, speciality_id) VALUES (?,?);'
    );
    Array.from(specialities.entries()).forEach(([name, provider_ids], index) => {
      const speciality_id = index + 1;
      insertSpeciality.run(speciality_id, name, provider_ids.size);
      for (const provider_id of provider_ids) {
        insertSupplierSpeciality.run(provider_id, speciality_id);
      }
    });
  })();

  db.transaction(() => {
    const insertProviderType = db.prepare('INSERT INTO PROVIDERTYPE (id, name, num) VALUES (?,?,?);');
    const insertSupplierProviderType = db.prepare(
      'INSERT INTO SUPPLIER_PROVIDERTYPE (provider_id, providertype_id) VALUES (?,?);'
    );
    Array.from(providerTypes.entries()).forEach(([name, provider_ids], index) => {
      const providertype_id = index + 1;
      insertProviderType.run(providertype_id, name, provider_ids.size);
      for (const provider_id of provider_ids) {
        insertSupplierProviderType.run(provider_id, providertype_id);
      }
    });
  })();

  db.transaction(() => {
    const insertSupplies = db.prepare('INSERT INTO SUPPLY (id, name, num) VALUES (?,?,?);');
    const insertSupplierSupply = db.prepare('INSERT INTO SUPPLIER_SUPPLY (provider_id, supply_id) VALUES (?,?);');
    Array.from(supplies.entries()).forEach(([name, provider_ids], index) => {
      const supply_id = index + 1;
      insertSupplies.run(supply_id, name, provider_ids.size);
      for (const provider_id of provider_ids) {
        insertSupplierSupply.run(provider_id, supply_id);
      }
    });
  })();

  db.transaction(() => {
    const fields = [
      'id',
      'accepts_assignment',
      'participation_begin_date',
      'business_name',
      'business_slug',
      'practice_name',
      'practice_slug',
      'address_1',
      'address_2',
      'zip',
      'zip4',
      'phone',
      'is_contracted_for_cba',
    ];
    const params = fields.map((field) => `@${field}`);
    const insertSupplier = db.prepare(`INSERT INTO SUPPLIER (${fields.join()}) VALUES (${params.join(',')});`);

    for (const supplier of suppliersStaging) {
      const zip = supplier.practicezip9code.substring(0, 5);
      const zip4 = supplier.practicezip9code.substring(5);
      const business_slug = slugify(supplier.businessname);
      const practice_slug = slugify(supplier.practicename);

      const binding: ISupplierSQL = {
        id: parseInt(supplier.provider_id, 10),
        accepts_assignment: boolTrueFalse(supplier.acceptsassignement),
        participation_begin_date: supplier.participationbegindate,
        business_name: supplier.businessname.length ? supplier.businessname : null,
        business_slug: business_slug.length ? business_slug : null,
        practice_name: supplier.practicename.length ? supplier.practicename : null,
        practice_slug: practice_slug.length ? practice_slug : null,
        address_1: supplier.practiceaddress1.length ? supplier.practiceaddress1 : null,
        address_2: supplier.practiceaddress2.length ? supplier.practiceaddress2 : null,
        zip: zip.length === 5 ? zip : null,
        zip4: zip4.length === 4 ? zip4 : null,
        phone: supplier.telephonenumber.length ? supplier.telephonenumber : null,
        is_contracted_for_cba: boolTrueFalse(supplier.is_contracted_for_cba),
      };

      insertSupplier.run(binding);
    }
  })();
};

interface ISupplierSQL extends Omit<ISupplier, 'accepts_assignment' | 'is_contracted_for_cba'> {
  accepts_assignment: number | null;
  is_contracted_for_cba: number | null;
}
