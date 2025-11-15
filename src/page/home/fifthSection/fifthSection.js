import { createEll, addClass } from "../../../utilities/createFunc";
import { AddCatalog } from "../../../components/content/catalig/addCatalog";
import "./section5.css";

function FifthSection() {
  const main = document.getElementById("globalMain");

  const sectionBest = createEll("section");
  addClass(sectionBest, "best-Gifts");
  sectionBest.setAttribute("id", "best-Gifts");
  main.appendChild(sectionBest);

  const sectionBestGift = createEll("section");
  addClass(sectionBestGift, "best-Gifts2");
  sectionBest.appendChild(sectionBestGift);

  const sectionBestTitle = createEll("section");
  addClass(sectionBestTitle, "best-gifts-title");
  sectionBestGift.appendChild(sectionBestTitle);

  const articleTitle = createEll("article");
  sectionBestTitle.appendChild(articleTitle);

  const bestTitleP = createEll("h1");
  addClass(bestTitleP, "best-p");
  bestTitleP.innerText = "Best Gifts";
  articleTitle.appendChild(bestTitleP);

  const bestTitleH2 = createEll("h2");
  addClass(bestTitleH2, "best-h2");
  bestTitleH2.innerText = "ESPECIALLY FOR YOU";
  sectionBestTitle.appendChild(bestTitleH2);

  const sectionContainerBest = createEll("section");
  addClass(sectionContainerBest, "best-Gifts-conteiner");
  sectionContainerBest.setAttribute("id", "bestGiftsConteiner");
  sectionBestGift.appendChild(sectionContainerBest);

  // место под карточки товаров
  AddCatalog();
}

export { FifthSection };
