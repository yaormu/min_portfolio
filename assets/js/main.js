/************ Filtros Tabs *************/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      // tc = tabcontent
      tc.classList.remove("filters__active");
    });
    target.classList.add("filters__active");

    tabs.forEach((t) => {
      // t = tab
      t.classList.remove("filter-tab-active");
    });

    tab.classList.add("filter-tab-active");
  });
});

/************ Modo Oscuro & Claro *************/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

// Tema previamente seleccionado (si se ha seleccionado)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "ligth";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-fill" : "ri-sun-fill";

// Validamos si usuario eligió previamente un tema
if (selectedTheme) {
  // Si la validación se cumple, preguntamos cuál fue el problema para saber si activamos o desactivamos la oscuridad
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-fill" ? "add" : "remove"](
    iconTheme
  );
}

// Activar/desactivar el tema manualmente con el botón
themeButton.addEventListener("click", () => {
  // Agregar o eliminar el tema oscuro / icono
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Guardamos el tema y el icono actual que eligió usuario
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/************ Scroll animación *************/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, { delay: 500 });
sr.reveal(`.profile__profession`, { delay: 600 });
sr.reveal(`.profile__social`, { delay: 700 });
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
sr.reveal(`.profile__buttons`, { delay: 800 });
sr.reveal(`.filters__content`, { delay: 900 });
sr.reveal(`.filters`, { delay: 1000 });
