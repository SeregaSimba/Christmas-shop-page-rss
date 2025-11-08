import { createEll, addClass } from "../../../utilities/createFunc";
import { AddCatalog } from "../catalig/addCatalog";

function FifthSection() {
  const main = document.getElementById("globalMain");

  const sectionBest = createEll("section");
  addClass(sectionBest, "best-Gifts");
  addClass(sectionBest, "conteiner");
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

  const bestTitleP = createEll("p");
  addClass(bestTitleP, "size-conteiner");
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
