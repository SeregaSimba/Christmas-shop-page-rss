import { Header } from "./components/header/header";
import { Main } from "./page/home/main/main";
import { Footer } from "./components/footer/footer";
import { OpenBarMenu } from "./utilities/openBarMenu";

function app() {
  let resizeTimeout;

  Header();
  Main();
  Footer();
  OpenBarMenu();
  console.log("hell");

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      location.reload();
    }, 2000);
  });
}

app();
// -----------------------------------------------------------
