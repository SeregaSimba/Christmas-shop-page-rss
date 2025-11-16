import "./header.css";
import { createEll, addClass } from "../../utilities/createFunc";
import {
  ButtonHeaderGifts,
  ButtonHeaderAbout,
  ButtonHeaderBestGifts,
  ButtonHeaderContacts,
  buttonBarMenOpen,
} from "../../utilities/buttonHeader";

function Header() {
  const header = document.getElementById("header");

  const sectionHeader = createEll("section");
  addClass(sectionHeader, "header");
  header.appendChild(sectionHeader);

  const aHeader = createEll("a");
  aHeader.setAttribute("href", "index.html");
  sectionHeader.appendChild(aHeader);

  const articleHeader = createEll("article");
  addClass(articleHeader, "logo");
  aHeader.appendChild(articleHeader);

  const imgHeader = createEll("img");
  imgHeader.setAttribute("src", "img/snowflakeICON.svg");
  imgHeader.setAttribute("alt", "Logo");
  articleHeader.appendChild(imgHeader);

  const pLogo = createEll("p");
  addClass(pLogo, "header-p");
  pLogo.innerText = "THE GIFTS";
  articleHeader.appendChild(pLogo);

  const sectionContents = createEll("section");
  addClass(sectionContents, "contents");
  sectionHeader.appendChild(sectionContents);

  const sectionHeaderMenu = createEll("section");
  addClass(sectionHeaderMenu, "bar-window-menu");
  sectionHeaderMenu.setAttribute("id", "openWindowMenu");
  sectionContents.appendChild(sectionHeaderMenu);

  const ulHeaderMenu = createEll("ul");
  addClass(ulHeaderMenu, "ul-header");
  sectionHeaderMenu.appendChild(ulHeaderMenu);

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
  aLiHeader1.addEventListener("click", ButtonHeaderGifts);
  li1.appendChild(aLiHeader1);

  const aLiHeader2 = createEll("button");
  addClass(aLiHeader2, "li-a-header");
  aLiHeader2.innerText = "ABOUT";
  aLiHeader2.addEventListener("click", ButtonHeaderAbout);
  li2.appendChild(aLiHeader2);

  const aLiHeader3 = createEll("button");
  addClass(aLiHeader3, "li-a-header");
  aLiHeader3.innerText = "BEST";
  aLiHeader3.addEventListener("click", ButtonHeaderBestGifts);
  li3.appendChild(aLiHeader3);

  const aLiHeader4 = createEll("button");
  addClass(aLiHeader4, "li-a-header");
  aLiHeader4.innerText = "CONTACTS";
  aLiHeader4.addEventListener("click", ButtonHeaderContacts);
  li4.appendChild(aLiHeader4);

  const articleBar = createEll("article");
  addClass(articleBar, "button-bar-men");
  articleBar.setAttribute("id", "openBar");
  sectionContents.appendChild(articleBar);

  const buttonMobile = createEll("button");
  addClass(buttonMobile, "slider-bar");
  buttonMobile.setAttribute("id", "sliderBar2None");
  articleBar.appendChild(buttonMobile);
  buttonMobile.addEventListener("click", buttonBarMenOpen);

  const span1 = createEll("span");
  addClass(span1, "span-bar-menu");
  span1.setAttribute("id", "span1");
  buttonMobile.appendChild(span1);

  const span2 = createEll("span");
  addClass(span2, "span-bar-menu2");
  span2.setAttribute("id", "span2");
  buttonMobile.appendChild(span2);
}

export { Header, createEll };
