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
export { OpenBarMenu };
