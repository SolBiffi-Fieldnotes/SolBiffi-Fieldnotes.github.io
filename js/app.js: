// Muestra una sola sección según la dirección (#inicio, #territorio...)
const secciones = document.querySelectorAll(".seccion");
const enlaces = document.querySelectorAll(".menu a");

function mostrarSeccion() {
  let id = location.hash.replace("#", "");
  if (!document.getElementById(id)) id = "inicio";

  secciones.forEach(function (seccion) {
    seccion.hidden = seccion.id !== id;
  });
  enlaces.forEach(function (enlace) {
    const activa = enlace.dataset.seccion === id;
    enlace.classList.toggle("activa", activa);
    if (activa) {
      enlace.setAttribute("aria-current", "page");
    } else {
      enlace.removeAttribute("aria-current");
    }
  });
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", mostrarSeccion);
mostrarSeccion();
