import { createEll, addClass } from "../../utilities/createFunc";

function BestGiftsPage() {
  const main = document.getElementById("main-pag");

  const sectionBestGifts = createEll("section");
  addClass(sectionBestGifts, "best-gifts-page");
  sectionBestGifts.setAttribute("id", "bestGiftsPage");
  sectionBestGifts.style.display = "none";
  main.appendChild(sectionBestGifts);
}

export { BestGiftsPage };
