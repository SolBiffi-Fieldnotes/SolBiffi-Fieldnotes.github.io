// Áreas protegidas del mapa de Territorio.
// lat y lon son aproximadas: alcanzan para ubicar el área en el mapa.
// Para agregar un parque: copiá un bloque { ... }, pegalo con una coma
// y cambiá los datos. Las coordenadas se sacan de Google Maps con un toque largo.

// Cómo se convierten latitud y longitud en posición sobre la imagen.
// (Si cambiás la imagen del mapa, hay que recalcular estos números.)
const MAPA_BASE = {
  imagen: "img/mapa-argentina.jpg",
  descripcion: "Imagen satelital del sur de Sudamérica con Argentina al centro.",
  ancho: 736, alto: 1348,
  lon0: -67, x0: 266, kx: 40.5,
  lat0: -36.3, y0: 585, ky: 39.4
};

// Páginas oficiales (APN) usadas como fuente.
const APN = {
  noreste: { titulo: "APN: Región Noreste", url: "https://www.argentina.gob.ar/parquesnacionales/nea" },
  noroeste: { titulo: "APN: Región Noroeste", url: "https://www.argentina.gob.ar/parquesnacionales/region-noroeste" },
  centro: { titulo: "APN: Región Centro", url: "https://www.argentina.gob.ar/parquesnacionales/centro" },
  patagonia: { titulo: "APN: Región Patagonia", url: "https://www.argentina.gob.ar/parquesnacionales/regionpatagonia" },
  austral: { titulo: "APN: Región Patagonia Austral", url: "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral" }
};

const RESERVAS = [
  {
    id: "iguazu",
    nombre: "Iguazú",
    provincia: "Misiones",
    categoria: "Parque Nacional",
    lat: -25.68, lon: -54.45,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-iguazu",
    publicado: [
      { texto: "Se ubica en la provincia de Misiones y figura como Parque Nacional en el listado de la APN.", fuente: APN.noreste }
    ]
  },
  {
    id: "el-impenetrable",
    nombre: "El Impenetrable",
    provincia: "Chaco",
    categoria: "Parque Nacional",
    lat: -25.01, lon: -61.00,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-el-impenetrable",
    publicado: [
      { texto: "Se ubica en la provincia del Chaco y figura como Parque Nacional en el listado de la APN.", fuente: APN.noreste },
      { texto: "Protege unas 130 mil hectáreas de bosque chaqueño, entre los ríos Bermejo y Bermejito.", fuente: { titulo: "APN: nota sobre el Parque Nacional El Impenetrable", url: "https://www.argentina.gob.ar/node/165745" } }
    ]
  },
  {
    id: "rio-pilcomayo",
    nombre: "Río Pilcomayo",
    provincia: "Formosa",
    categoria: "Parque Nacional",
    lat: -25.10, lon: -58.15,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-rio-pilcomayo",
    publicado: [
      { texto: "Se ubica en la provincia de Formosa y figura como Parque Nacional en el listado de la APN.", fuente: APN.noreste }
    ]
  },
  {
    id: "copo",
    nombre: "Copo",
    provincia: "Santiago del Estero",
    categoria: "Parque Nacional",
    lat: -25.90, lon: -61.80,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-copo",
    publicado: [
      { texto: "Se ubica en la provincia de Santiago del Estero y figura como Parque Nacional en el listado de la APN.", fuente: APN.noroeste }
    ]
  },
  {
    id: "el-palmar",
    nombre: "El Palmar",
    provincia: "Entre Ríos",
    categoria: "Parque Nacional",
    lat: -31.87, lon: -58.22,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-palmar",
    publicado: [
      { texto: "Se ubica en la provincia de Entre Ríos y figura como Parque Nacional en el listado de la APN.", fuente: APN.centro }
    ]
  },
  {
    id: "lanin",
    nombre: "Lanín",
    provincia: "Neuquén",
    categoria: "Parque Nacional",
    lat: -39.65, lon: -71.50,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-lanin",
    publicado: [
      { texto: "Se ubica en la provincia del Neuquén y figura como Parque Nacional en el listado de la APN.", fuente: APN.patagonia }
    ]
  },
  {
    id: "los-arrayanes",
    nombre: "Los Arrayanes",
    provincia: "Neuquén",
    categoria: "Parque Nacional",
    lat: -40.80, lon: -71.65,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-los-arrayanes",
    publicado: [
      { texto: "Se ubica en la provincia del Neuquén y figura como Parque Nacional en el listado de la APN.", fuente: APN.patagonia }
    ]
  },
  {
    id: "nahuel-huapi",
    nombre: "Nahuel Huapi",
    provincia: "Río Negro y Neuquén",
    categoria: "Parque Nacional",
    lat: -41.05, lon: -71.55,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-nahuel-huapi",
    publicado: [
      { texto: "Se ubica entre las provincias de Río Negro y Neuquén y figura como Parque Nacional en el listado de la APN.", fuente: APN.patagonia }
    ]
  },
  {
    id: "lago-puelo",
    nombre: "Lago Puelo",
    provincia: "Chubut",
    categoria: "Parque Nacional",
    lat: -42.10, lon: -71.60,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/regionpatagonia/parque-nacional-lago-puelo",
    publicado: [
      { texto: "Se ubica en la provincia del Chubut y figura como Parque Nacional en el listado de la APN.", fuente: APN.patagonia }
    ]
  },
  {
    id: "monte-leon",
    nombre: "Monte León",
    provincia: "Santa Cruz",
    categoria: "Parque Nacional",
    lat: -50.35, lon: -68.87,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-monte-leon",
    publicado: [
      { texto: "Se ubica en la provincia de Santa Cruz y figura como Parque Nacional en el listado de la APN.", fuente: APN.austral },
      { texto: "Conserva más de 62 mil hectáreas de las ecorregiones Estepa Patagónica y Mar Argentino.", fuente: { titulo: "APN: Parque Nacional Monte León", url: "https://www.argentina.gob.ar/node/153423" } },
      { texto: "Fue creado en 2004 por la Ley 25.945.", fuente: { titulo: "APN: Inventario de aves del Parque Nacional Monte León", url: "https://argentina.gob.ar/sites/default/files/inventario_aves_monte_leon_-_agosto_22.pdf" } }
    ]
  },
  {
    id: "tierra-del-fuego",
    nombre: "Tierra del Fuego",
    provincia: "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    categoria: "Parque Nacional",
    lat: -54.83, lon: -68.55,
    enlaceOficial: "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-tierra-del-fuego",
    publicado: [
      { texto: "Se ubica en la provincia de Tierra del Fuego y figura como Parque Nacional en el listado de la APN.", fuente: APN.austral },
      { texto: "Fue creado en 1960 por la Ley 15.554 y limita con Chile.", fuente: { titulo: "APN: Información al visitante, Parque Nacional Tierra del Fuego", url: "https://argentina.gob.ar/sites/default/files/2019/03/1_informacion_al_visitante_pntdf_23-05-24_espanol.pdf" } }
    ]
  }
];
