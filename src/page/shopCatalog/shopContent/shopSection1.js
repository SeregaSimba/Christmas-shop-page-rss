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
  itemLi1.innerText = "ALL";
  linkShopUl.appendChild(itemLi1);

  const itemLi2 = createEll("li");
  addClass(itemLi2, "li-header2");
  addClass(itemLi2, "li-a-header2");
  itemLi2.innerText = "FOR WORK";
  linkShopUl.appendChild(itemLi2);

  const itemLi3 = createEll("li");
  addClass(itemLi3, "li-header2");
  addClass(itemLi3, "li-a-header2");
  itemLi3.innerText = "FOR HEALTH";
  linkShopUl.appendChild(itemLi3);

  const itemLi4 = createEll("li");
  addClass(itemLi4, "li-header2");
  addClass(itemLi4, "li-a-header2");
  itemLi4.innerText = "FOR HARMONY";
  linkShopUl.appendChild(itemLi4);

  const sectionAllCatalogShop = createEll("section");
  addClass(sectionAllCatalogShop, "conteiner-dest-magasin");
  sectionAllCatalogShop.setAttribute("id", "shopItems");
  contentSection.appendChild(sectionAllCatalogShop);
}

export { ShopSectionTitle };
