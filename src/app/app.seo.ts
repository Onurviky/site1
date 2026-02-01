export const SITE = {
  domain: 'http://loscerezosamoblamientos.com/', 
  name: 'Los Cerezos Amoblamientos',
  city: 'Rosario',
  region: 'Santa Fe',
  country: 'AR',
  phone: '3415420382',
  instagram: 'https://www.instagram.com/loscerezos_amoblamientos',
  logoPath: '/logo.jpg',
  heroImage: '/HomeBarra.jpg'
};

export type CategoriaSlug =
  | 'cocinas'
  | 'placards'
  | 'banio'
  | 'lavaderos'
  | 'living'
  | 'dormitorios'
  | 'infantiles'
  | 'bibliotecas'
  | 'escaleras'
  | 'oficinas'
  | 'locales'
  | 'puertas';

export const CATEGORIA_LABEL: Record<CategoriaSlug, string> = {
  cocinas: 'Cocinas',
  placards: 'Placards',
  banio: 'Muebles de baño',
  lavaderos: 'Muebles para lavaderos',
  living: 'Living / TV',
  dormitorios: 'Dormitorios',
  infantiles: 'Infantiles',
  bibliotecas: 'Bibliotecas',
  escaleras: 'Escaleras y bajoescaleras',
  oficinas: 'Muebles para oficinas',
  locales: 'Locales comerciales',
  puertas: 'Puertas'
};

export const CATEGORIA_DESCRIPTION: Record<CategoriaSlug, string> = {
  cocinas:
    'Cocinas a medida en Rosario: diseños funcionales, melamina, laqueado, combinadas y más. Terminaciones premium y asesoramiento.',
  placards:
    'Placards a medida: frentes, interiores y correderas. Soluciones de guardado personalizadas y terminaciones a elección.',
  banio:
    'Muebles de baño a medida: vanitorys, guardado y combinaciones de materiales resistentes a la humedad.',
  lavaderos:
    'Muebles para lavaderos: soluciones prácticas y resistentes, optimizadas para espacios reducidos.',
  living:
    'Muebles para living y TV: racks, bibliotecas y módulos a medida con diseño moderno y funcional.',
  dormitorios:
    'Muebles para dormitorios a medida: placares, respaldos, mesas de luz y guardado personalizado.',
  infantiles:
    'Muebles infantiles a medida: diseño seguro, funcional y adaptable al crecimiento.',
  bibliotecas:
    'Bibliotecas a medida: estantes, módulos y soluciones de guardado con diseño a medida.',
  escaleras:
    'Aprovechá cada rincón: muebles para escaleras y bajoescaleras con diseño funcional y gran capacidad.',
  oficinas:
    'Muebles para oficinas a medida: escritorios, guardado, bibliotecas y soluciones para home office o empresa.',
  locales:
    'Muebles para locales: mostradores, exhibidores y soluciones a medida para tu negocio.',
  puertas:
    'Puertas a medida: placas, madera y terminaciones personalizadas para obra o renovación.'
};

export function schemaBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}${SITE.logoPath}`,
    image: [`${SITE.domain}${SITE.heroImage}`],
    description:
      'Fabricación de muebles a medida en Rosario: cocinas, placards, baños, oficinas, locales comerciales y puertas.',
    telephone: SITE.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country
    },
    areaServed: [{ '@type': 'City', name: SITE.city }],
    sameAs: [SITE.instagram]
  };
}

export function schemaCategoriasItemList() {
  const items = (Object.keys(CATEGORIA_LABEL) as CategoriaSlug[]).map((slug, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: CATEGORIA_LABEL[slug],
    url: `${SITE.domain}/productos/${slug}`
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Categorías de productos',
    itemListElement: items
  };
}
