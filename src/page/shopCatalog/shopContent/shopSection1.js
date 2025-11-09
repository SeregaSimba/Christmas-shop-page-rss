import {
  ButtonAll,
  ButtonHarmony,
  ButtonHealth,
  ButtonWork,
} from "../../../utilities/buttonShop";
import { createEll, addClass } from "../../../utilities/createFunc";

function ShopSectionTitle() {
  const contentSection = document.getElementById("contentShop");

  const titleSection = createEll("section");
  addClass(titleSection, "hero-conteiner3");
  contentSection.appendChild(titleSection);

  const articleTitle = createEll("article");
  addClass(articleTitle, "h12");
  titleSection.appendChild(articleTitle);

  const titleH1 = createEll("h1");
  titleH1.innerText = "ACHIEVE HEALTH HARMONY, AND INNER STRENGTH";
  articleTitle.appendChild(titleH1);

  const articleLinkShop = createEll("article");
  addClass(articleLinkShop, "contacts2");
  titleSection.appendChild(articleLinkShop);

  const linkShopUl = createEll("ul");
  addClass(linkShopUl, "ul-header");
  articleLinkShop.appendChild(linkShopUl);

  const itemLi1 = createEll("li");
  addClass(itemLi1, "li-header");
  addClass(itemLi1, "none-linc2");
  linkShopUl.appendChild(itemLi1);

  const buttonAll = createEll("button");
  addClass(buttonAll, "button-all");
  buttonAll.innerText = "ALL";
  buttonAll.setAttribute("id", "buttonAll");
  buttonAll.addEventListener("click", ButtonAll);
  itemLi1.appendChild(buttonAll);

  const itemLi2 = createEll("li");
  addClass(itemLi2, "li-header2");
  addClass(itemLi2, "li-a-header2");
  linkShopUl.appendChild(itemLi2);

  const buttonWork = createEll("button");
  addClass(buttonWork, "button-work");
  buttonWork.innerText = "FOR WORK";
  buttonWork.setAttribute("id", "buttonWork");
  buttonWork.addEventListener("click", ButtonWork);
  itemLi2.appendChild(buttonWork);

  const itemLi3 = createEll("li");
  addClass(itemLi3, "li-header2");
  addClass(itemLi3, "li-a-header2");
  linkShopUl.appendChild(itemLi3);

  const buttonHealth = createEll("button");
  addClass(buttonHealth, "button-health");
  buttonHealth.innerText = "FOR HEALTH";
  buttonHealth.setAttribute("id", "buttonHealth");
  buttonHealth.addEventListener("click", ButtonHealth);
  itemLi3.appendChild(buttonHealth);

  const itemLi4 = createEll("li");
  addClass(itemLi4, "li-header2");
  addClass(itemLi4, "li-a-header2");
  linkShopUl.appendChild(itemLi4);

  const buttonHarmony = createEll("button");
  addClass(buttonHarmony, "button-harmony");
  buttonHarmony.innerText = "FOR HARMONY";
  buttonHarmony.setAttribute("id", "buttonHarmony");
  buttonHarmony.addEventListener("click", ButtonHarmony);
  itemLi4.appendChild(buttonHarmony);

  const sectionAllCatalogShop = createEll("section");
  addClass(sectionAllCatalogShop, "conteiner-dest-magasin");
  sectionAllCatalogShop.setAttribute("id", "shopItems");
  sectionAllCatalogShop.style.display = "flex";
  contentSection.appendChild(sectionAllCatalogShop);
}

export { ShopSectionTitle };
