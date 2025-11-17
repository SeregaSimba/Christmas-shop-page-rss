import { Header } from "./components/header/header";
import { Main } from "./page/home/main/main";
import { Footer } from "./components/footer/footer";
import { OpenBarMenu } from "./utilities/openBarMenu";
import { CloseBarMenu } from "./utilities/openBarMenu";

function app() {
  let resizeTimeout;

  Header();
  Main();
  Footer();
  OpenBarMenu();
  console.log("hell");

  // window.addEventListener("resize", () => {
  //   clearTimeout(resizeTimeout);
  //   resizeTimeout = setTimeout(() => {
  //     location.reload();
  //   }, 2000);
  // });

  document.addEventListener("click", (event) => {
    const sectionBarMenu = document.getElementById("section-bar-menu");
    const buttonMenuBar = document.getElementById("sliderBar2None");

    if (
      sectionBarMenu &&
      !sectionBarMenu.contains(event.target) &&
      buttonMenuBar &&
      !buttonMenuBar.contains(event.target)
    ) {
      CloseBarMenu();
    }
  });
}

app();
// -----------------------------------------------------------
