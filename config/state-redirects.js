const stateSlugs = [
  'alabama',
  'alaska',
  'american-samoa',
  'arizona',
  'arkansas',
  'armed-forces-americas',
  'armed-forces-europe-africa-canada',
  'armed-forces-pacific',
  'california',
  'colorado',
  'connecticut',
  'delaware',
  'district-of-columbia',
  'federated-states-of-micronesia',
  'florida',
  'georgia',
  'guam',
  'hawaii',
  'idaho',
  'illinois',
  'indiana',
  'iowa',
  'kansas',
  'kentucky',
  'louisiana',
  'maine',
  'marshall-islands',
  'maryland',
  'massachusetts',
  'michigan',
  'minnesota',
  'mississippi',
  'missouri',
  'montana',
  'nebraska',
  'nevada',
  'new-hampshire',
  'new-jersey',
  'new-mexico',
  'new-york',
  'north-carolina',
  'north-dakota',
  'northern-mariana-islands',
  'ohio',
  'oklahoma',
  'oregon',
  'palau',
  'pennsylvania',
  'puerto-rico',
  'rhode-island',
  'south-carolina',
  'south-dakota',
  'tennessee',
  'texas',
  'utah',
  'vermont',
  'virgin-islands',
  'virginia',
  'washington',
  'west-virginia',
  'wisconsin',
  'wyoming',
];

const states = stateSlugs.reduce((acc, slug) => {
  let redirects = [
    {
      source: `/${slug}`,
      destination: `/?state=${slug}`,
      permanent: true,
    },
    {
      source: `/${slug}/:city`,
      destination: `/?state=${slug}&city=:city`,
      permanent: true,
    },
  ];

  if (slug.indexOf('+')) {
    const escapedSlug = encodeURIComponent(slug.replaceAll('-', '+'));
    redirects = redirects.concat([
      {
        source: `/${escapedSlug}`,
        destination: `/?state=${slug}`,
        permanent: true,
      },
      {
        source: `/${escapedSlug}/:city`,
        destination: `/?state=${slug}&city=:city`,
        permanent: true,
      },
    ]);
  }

  return acc.concat(redirects);
}, []);

module.exports = [...states];
