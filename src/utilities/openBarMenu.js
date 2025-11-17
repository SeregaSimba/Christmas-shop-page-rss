function OpenBarMenu() {
  const windowWidth = window.innerWidth;
  const barMenu = document.getElementById("openBar");
  const windowMenu = document.getElementById("openWindowMenu");

  if (windowWidth > 760) {
    barMenu.classList.add("open");
    windowMenu.classList.remove("open");
  } else {
    windowMenu.classList.add("open");
    barMenu.classList.remove("open");
  }
}

function CloseBarMenu() {
  const span1 = document.getElementById("span1");
  const span2 = document.getElementById("span2");
  const sectionBarMenu = document.getElementById("section-bar-menu");

  span1.classList.remove("span-bar-menu-click");
  span2.classList.remove("span-bar-menu2-click");
  sectionBarMenu.classList.add("section-bar-menu-none");
  document.body.classList.remove("bodyOverflow");
}
export { OpenBarMenu, CloseBarMenu };
