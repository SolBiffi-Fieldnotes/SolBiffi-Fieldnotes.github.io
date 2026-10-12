// Dibuja la lista de especies y cada ficha usando los datos de datos/especies.js
const contenedor = document.getElementById("contenedor-especies");

// Crea un elemento HTML con texto y clase (usar textContent evita errores con símbolos)
function crear(etiqueta, texto, clase) {
  const elemento = document.createElement(etiqueta);
  if (texto) elemento.textContent = texto;
  if (clase) elemento.className = clase;
  return elemento;
}

function bloque(titulo, etiqueta, clase, items, textoVacio) {
  const caja = crear("div", "", "bloque " + clase);
  caja.append(crear("h3", titulo));
  caja.append(crear("span", etiqueta, "etiqueta"));
  if (items.length === 0) {
    caja.append(crear("p", textoVacio, "vacio"));
    return caja;
  }
  items.forEach(function (item) {
    caja.append(crear("p", item.texto));
    if (item.fuente) {
      const linea = crear("p", "", "fuente");
      const enlace = crear("a", item.fuente.titulo);
      enlace.href = item.fuente.url;
      enlace.target = "_blank";
      enlace.rel = "noopener";
      linea.append("Fuente: ", enlace);
      caja.append(linea);
    }
  });
  return caja;
}

function mostrarLista() {
  const tarjetas = crear("div", "", "tarjetas");
  ESPECIES.forEach(function (esp) {
    const tarjeta = crear("a", "", "tarjeta");
    tarjeta.href = "#especies/" + esp.id;
    if (esp.fotos.length > 0) {
      const miniatura = document.createElement("img");
      miniatura.src = esp.fotos[0].archivo;
      miniatura.alt = esp.fotos[0].descripcion;
      miniatura.className = "miniatura";
      miniatura.loading = "lazy";
      tarjeta.append(miniatura);
    }
    tarjeta.append(crear("strong", esp.nombreComun));
    tarjeta.append(crear("span", esp.nombreCientifico, "cientifico"));
    tarjetas.append(tarjeta);
  });
  contenedor.replaceChildren(tarjetas);
}

function mostrarFicha(esp) {
  const ficha = crear("article", "", "ficha");

  const volver = crear("a", "← Volver a especies", "volver");
  volver.href = "#especies";
  ficha.append(volver);

  ficha.append(crear("h3", esp.nombreComun));
  ficha.append(crear("p", esp.nombreCientifico, "nombre-cientifico"));

  const galeria = crear("div", "", "galeria");
  esp.fotos.forEach(function (foto) {
    const figura = crear("figure");
    const imagen = document.createElement("img");
    imagen.src = foto.archivo;
    imagen.alt = foto.descripcion;
    imagen.loading = "lazy";
    figura.append(imagen, crear("figcaption", foto.descripcion));
    galeria.append(figura);
  });
  ficha.append(galeria);

  const registro = crear("div", "", "bloque propia");
  registro.append(crear("h3", "Datos del registro"));
  registro.append(crear("span", "Observación propia", "etiqueta"));
  registro.append(crear("p", "Fecha: " + esp.registro.fecha));
  registro.append(crear("p", "Lugar: " + esp.registro.lugar));
  registro.append(crear("p", "Condición: " + esp.registro.condicion));
  ficha.append(registro);

  ficha.append(bloque("Observaciones propias", "Observación propia", "propia",
    esp.observaciones, "Todavía no hay observaciones cargadas."));
  ficha.append(bloque("Hipótesis e interpretaciones", "Hipótesis", "hipotesis",
    esp.hipotesis, "Todavía no hay hipótesis cargadas."));
  ficha.append(bloque("Información publicada", "Información publicada", "publicado",
    esp.publicado, "Todavía no hay información publicada cargada."));

  contenedor.replaceChildren(ficha);
}

// Decide qué mostrar según la dirección: #especies (lista) o #especies/puma (ficha)
function actualizar() {
  const partes = location.hash.replace("#", "").split("/");
  if (partes[0] !== "especies") return;
  const esp = ESPECIES.find(function (e) { return e.id === partes[1]; });
  if (esp) {
    mostrarFicha(esp);
  } else {
    mostrarLista();
  }
}

window.addEventListener("hashchange", actualizar);
actualizar();
