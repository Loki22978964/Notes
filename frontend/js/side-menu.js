export function initSideMenu() {
  document.addEventListener("click", (event) => {
    const menuButton = event.target.closest(".navbar__menu");

    if (!menuButton) return;

    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;

    sidebar.classList.toggle("sidebar--open");
  });
}

initSideMenu();