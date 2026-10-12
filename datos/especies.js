// Datos de las especies registradas.
// Para agregar una especie: copiá un bloque entre llaves { ... }, pegalo
// después de una coma, y cambiá los datos.
// El "id" va en minúsculas, sin espacios ni tildes.

const ESPECIES = [
  {
    id: "puma",
    nombreComun: "Puma",
    nombreCientifico: "Puma concolor",

    registro: {
      fecha: "Marzo de 2026",
      lugar: "Güirá Oga, Puerto Iguazú, Misiones",
      condicion: "Animal en un centro de conservación (no es un registro de vida silvestre)"
    },

    fotos: [
      {
        archivo: "img/puma-01.jpg",
        descripcion: "Puma de pie sobre un tronco, con la cabeza levantada y la boca entreabierta."
      },
      {
        archivo: "img/puma-02.jpg",
        descripcion: "Retrato: cabeza y parte del cuerpo vistos desde arriba, sobre hojarasca."
      }
    ],

    // Lo que observaste vos. Para agregar una, sacá las // de la línea de abajo.
    observaciones: [
      // { texto: "Escribí acá lo que observaste." }
    ],

    // Tus interpretaciones o ideas que todavía no están comprobadas.
    hipotesis: [],

    // Información de fuentes. Cada ítem lleva su fuente.
    publicado: [
      {
        texto: "Clasificación: clase Mammalia, orden Carnivora, familia Felidae, género Puma. Fue descrito por Linnaeus en 1771 con el nombre Felis concolor.",
        fuente: {
          titulo: "Mammal Diversity Database: Puma concolor",
          url: "https://mammaldiversity.org/taxon/1006017"
        }
      },
      {
        texto: "Distribución: ocupa gran parte de América, desde Canadá hasta el sur de Sudamérica, e incluye a la Argentina.",
        fuente: {
          titulo: "Mammal Diversity Database: Puma concolor",
          url: "https://mammaldiversity.org/taxon/1006017"
        }
      },
      {
        texto: "Estado de conservación global: Preocupación Menor (LC) en la Lista Roja de la UICN.",
        fuente: {
          titulo: "Mammal Diversity Database: Puma concolor",
          url: "https://mammaldiversity.org/taxon/1006017"
        }
      },
      {
        texto: "Estado de conservación en Argentina: Preocupación Menor (LC) según la categorización SAREM 2019. La ficha señala que el puma puede estar sufriendo retracciones puntuales en algunas regiones por persecución directa.",
        fuente: {
          titulo: "SAREM (2019). Categorización de los mamíferos de Argentina: Puma concolor",
          url: "https://cma.sarem.org.ar/sites/default/files/pdf_fichas/Puma%20concolor.pdf"
        }
      },
      {
        texto: "Hábitos: es más activo al amanecer y al atardecer. Es solitario y se alimenta sobre todo de ungulados, que caza al acecho y por emboscada.",
        fuente: {
          titulo: "World Land Trust: Puma (Cougar)",
          url: "https://www.worldlandtrust.org/species/puma-cougar/"
        }
      }
    ]
  }
];
