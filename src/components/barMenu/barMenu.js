import { createEll, addClass } from "../../utilities/createFunc";
import {
  ButtonHeaderBestGifts,
  ButtonHeaderAbout,
  ButtonHeaderContacts,
  ButtonHeaderGifts,
  buttonBarMenOpen,
} from "../../utilities/buttonHeader";
import "./barMenu.css";

function BarMenu() {
  const main = document.getElementById("main-pag");

  const sectionBarMenu = createEll("section");
  sectionBarMenu.setAttribute("id", "section-bar-menu");
  addClass(sectionBarMenu, "section-bar-menu");
  addClass(sectionBarMenu, "section-bar-menu-none");
  main.appendChild(sectionBarMenu);

  const ulHeaderMenu = createEll("ul");
  addClass(ulHeaderMenu, "bar-menu");
  sectionBarMenu.appendChild(ulHeaderMenu);

  const li1 = createEll("li");
  addClass(li1, "li-header");
  const li2 = createEll("li");
  addClass(li2, "li-header");
  const li3 = createEll("li");
  addClass(li3, "li-header");
  const li4 = createEll("li");
  addClass(li4, "li-header");
  ulHeaderMenu.append(li1, li2, li3, li4);

  const aLiHeader1 = createEll("button");
  addClass(aLiHeader1, "li-a-header");
  aLiHeader1.innerText = "GIFTS";
  aLiHeader1.addEventListener("click", () => {
    ButtonHeaderGifts();
    buttonBarMenOpen();
  });
  li1.appendChild(aLiHeader1);

  const aLiHeader2 = createEll("button");
  addClass(aLiHeader2, "li-a-header");
  aLiHeader2.innerText = "ABOUT";
  aLiHeader2.addEventListener("click", () => {
    ButtonHeaderAbout();
    buttonBarMenOpen();
  });
  li2.appendChild(aLiHeader2);

  const aLiHeader3 = createEll("button");
  addClass(aLiHeader3, "li-a-header");
  aLiHeader3.innerText = "BEST";
  aLiHeader3.addEventListener("click", () => {
    ButtonHeaderBestGifts();
    buttonBarMenOpen();
  });
  li3.appendChild(aLiHeader3);

  const aLiHeader4 = createEll("button");
  addClass(aLiHeader4, "li-a-header");
  aLiHeader4.innerText = "CONTACTS";
  aLiHeader4.addEventListener("click", () => {
    ButtonHeaderContacts();
    buttonBarMenOpen();
  });
  li4.appendChild(aLiHeader4);
}

export { BarMenu };
