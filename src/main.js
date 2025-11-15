import { Header } from "./components/header/header";
import { Main } from "./page/home/main/main";
import { Footer } from "./components/footer/footer";

function app() {
  let resizeTimeout;

  Header();
  Main();
  // Footer();
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
