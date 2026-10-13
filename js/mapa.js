// Dibuja el mapa de áreas protegidas y la ficha de cada una (datos/reservas.js).
// Va dentro de una función para no chocar con los nombres de otros archivos.
(function () {
  const contenedor = document.getElementById("contenedor-territorio");

  function crear(etiqueta, texto, clase) {
    const elemento = document.createElement(etiqueta);
    if (texto) elemento.textContent = texto;
    if (clase) elemento.className = clase;
    return elemento;
  }

  // Convierte latitud y longitud en posición (en %) sobre la imagen
  function posicion(lat, lon) {
    const rad = Math.PI / 180;
    const x = MAPA_BASE.x0 + MAPA_BASE.kx * (lon - MAPA_BASE.lon0) * Math.cos(lat * rad);
    const y = MAPA_BASE.y0 + MAPA_BASE.ky * (MAPA_BASE.lat0 - lat);
    return { izquierda: (x / MAPA_BASE.ancho) * 100, arriba: (y / MAPA_BASE.alto) * 100 };
  }

  const marco = crear("div", "", "mapa-marco");
  const imagen = document.createElement("img");
  imagen.src = MAPA_BASE.imagen;
  imagen.alt = MAPA_BASE.descripcion;
  imagen.className = "mapa-imagen";
  marco.append(imagen);

  const lista = crear("nav", "", "chips");
  lista.setAttribute("aria-label", "Áreas protegidas");
  const panel = crear("div", "", "ficha-reserva");
  const enlaces = {};

  RESERVAS.forEach(function (res) {
    const pos = posicion(res.lat, res.lon);
    const punto = crear("a", "", "punto");
    punto.href = "#territorio/" + res.id;
    punto.style.left = pos.izquierda + "%";
    punto.style.top = pos.arriba + "%";
    punto.setAttribute("aria-label", res.nombre);
    marco.append(punto);

    const chip = crear("a", res.nombre, "chip");
    chip.href = "#territorio/" + res.id;
    lista.append(chip);

    enlaces[res.id] = [punto, chip];
  });

  contenedor.append(
    marco,
    crear("p", "Los puntos marcan una ubicación aproximada de cada área protegida.", "nota-mapa"),
    lista,
    panel
  );

  function mostrarInicial() {
    panel.replaceChildren(
      crear("p", "Elegí un punto del mapa o un nombre de la lista para ver su ficha.", "vacio")
    );
  }

  function mostrarFicha(res) {
    panel.replaceChildren();
    panel.append(crear("h3", res.nombre));
    panel.append(crear("p", res.provincia + " · " + res.categoria, "nombre-cientifico"));

    const caja = crear("div", "", "bloque publicado");
    caja.append(crear("h3", "Datos oficiales"));
    caja.append(crear("span", "Información publicada", "etiqueta"));
    res.publicado.forEach(function (item) {
      caja.append(crear("p", item.texto));
      const linea = crear("p", "", "fuente");
      const enlace = crear("a", item.fuente.titulo);
      enlace.href = item.fuente.url;
      enlace.target = "_blank";
      enlace.rel = "noopener";
      linea.append("Fuente: ", enlace);
      caja.append(linea);
    });
    panel.append(caja);

    const oficial = crear("p");
    const enlaceOficial = crear("a", "Ver el sitio oficial de este parque (APN)");
    enlaceOficial.href = res.enlaceOficial;
    enlaceOficial.target = "_blank";
    enlaceOficial.rel = "noopener";
    oficial.append(enlaceOficial);
    panel.append(oficial);
  }

  // Decide qué mostrar según la dirección: #territorio o #territorio/iguazu
  function actualizar() {
    const partes = location.hash.replace("#", "").split("/");
    if (partes[0] !== "territorio") return;
    const res = RESERVAS.find(function (r) { return r.id === partes[1]; });

    Object.keys(enlaces).forEach(function (id) {
      const activo = Boolean(res) && res.id === id;
      enlaces[id].forEach(function (el) { el.classList.toggle("activo", activo); });
    });

    if (res) {
      mostrarFicha(res);
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      mostrarInicial();
    }
  }

  window.addEventListener("hashchange", actualizar);
  mostrarInicial();
  actualizar();
})();
