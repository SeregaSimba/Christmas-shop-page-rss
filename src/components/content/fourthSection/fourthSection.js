import { createEll, addClass } from "../../../utilities/createFunc";

function FourthSection() {
  const main = document.getElementById("globalMain");

  const sectionCatalog = createEll("section");
  addClass(sectionCatalog, "bar-window-menu2");
  addClass(sectionCatalog, "barWindowMenu2None");
  sectionCatalog.setAttribute("id", "barWindowMenu2None");
  main.appendChild(sectionCatalog);

  const catalogUl = createEll("ul");
  addClass(catalogUl, "ul-header");
  addClass(catalogUl, "bar-menu");
  sectionCatalog.appendChild(catalogUl);

  const catalogLi1 = createEll("li");
  addClass(catalogLi1, "li-header");
  catalogUl.appendChild(catalogLi1);

  const catalogA1 = createEll("a");
  catalogA1.setAttribute("id", "ulWindow");
  catalogA1.setAttribute("href", "index-thu.html");
  addClass(catalogA1, "li-a-header");
  catalogA1.innerText = "GIFTS";
  catalogLi1.appendChild(catalogA1);

  const catalogLi2 = createEll("li");
  addClass(catalogLi2, "li-header");
  catalogUl.appendChild(catalogLi2);

  const catalogA2 = createEll("a");
  catalogA2.setAttribute("id", "ulWindow2");
  catalogA2.setAttribute("href", "index.html#about");
  addClass(catalogA2, "li-a-header");
  catalogA2.innerText = "ABOUT";
  catalogLi2.appendChild(catalogA2);

  const catalogLi3 = createEll("li");
  addClass(catalogLi3, "li-header");
  catalogUl.appendChild(catalogLi3);

  const catalogA3 = createEll("a");
  catalogA3.setAttribute("id", "ulWindow3");
  catalogA3.setAttribute("href", "index.html#best-Gifts");
  addClass(catalogA3, "li-a-header");
  catalogA3.innerText = "BEST";
  catalogLi3.appendChild(catalogA3);

  const catalogLi4 = createEll("li");
  addClass(catalogLi4, "li-header");
  catalogUl.appendChild(catalogLi4);

  const catalogA4 = createEll("a");
  catalogA4.setAttribute("id", "ulWindow4");
  catalogA4.setAttribute("href", "#contacts-footer");
  addClass(catalogA4, "li-a-header");
  catalogA4.innerText = "CONTACTS";
  catalogLi4.appendChild(catalogA4);
}

export { FourthSection };
