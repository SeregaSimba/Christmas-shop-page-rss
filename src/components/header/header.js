import { createEll, addClass } from "../../utilities/createFunc";

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

  const articleBar = createEll("article");
  addClass(articleBar, "button-bar-men");
  sectionContents.appendChild(articleBar);

  const buttonMobile = createEll("button");
  addClass(buttonMobile, "slider-bar");
  buttonMobile.setAttribute("id", "sliderBar2None");
  articleBar.appendChild(buttonMobile);

  const span1 = createEll("span");
  addClass(span1, "span-bar-menu3");
  buttonMobile.appendChild(span1);

  const span2 = createEll("span");
  addClass(span2, "span-bar-menu4");
  buttonMobile.appendChild(span2);

  const buttonMobile2 = createEll("button");
  addClass(buttonMobile2, "slider-bar2");
  addClass(buttonMobile2, "sliderBar2None");
  buttonMobile2.setAttribute("id", "sliderBar2None");
  articleBar.appendChild(buttonMobile2);

  const span3 = createEll("span");
  addClass(span3, "span-bar-menu");
  buttonMobile.appendChild(span3);

  const span4 = createEll("span");
  addClass(span4, "span-bar-menu2");
  buttonMobile.appendChild(span4);

  const sectionHeaderMenu = createEll("section");
  addClass(sectionHeaderMenu, "bar-window-menu");
  sectionContents.appendChild(sectionHeaderMenu);

  const ulHeaderMenu = createEll("ul");
  addClass(ulHeaderMenu, "ul-header");
  addClass(ulHeaderMenu, "bar-menu");
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

  const aLiHeader1 = createEll("a");
  addClass(aLiHeader1, "li-a-header");
  aLiHeader1.setAttribute("href", "index-thu.html");
  aLiHeader1.innerText = "GIFTS";
  li1.appendChild(aLiHeader1);

  const aLiHeader2 = createEll("a");
  addClass(aLiHeader2, "li-a-header");
  aLiHeader2.setAttribute("href", "index.html#about");
  aLiHeader2.innerText = "ABOUT";
  li2.appendChild(aLiHeader2);

  const aLiHeader3 = createEll("a");
  addClass(aLiHeader3, "li-a-header");
  aLiHeader3.setAttribute("href", "index.html#best-Gifts");
  aLiHeader3.innerText = "BEST";
  li3.appendChild(aLiHeader3);

  const aLiHeader4 = createEll("a");
  addClass(aLiHeader4, "li-a-header");
  aLiHeader4.setAttribute("href", "#contacts-footer");
  aLiHeader4.innerText = "CONTACTS";
  li4.appendChild(aLiHeader4);
}

export { Header, createEll };
