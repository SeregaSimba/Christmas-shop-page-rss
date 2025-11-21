import { FirstSection } from "../firstSection/firstSection";
import { TwoSection } from "../twoSection/twoSection";
import { ThirdSection } from "../thirdSection/thirdSection";
import { FifthSection } from "../fifthSection/fifthSection";
import { SixthSection } from "../sixthSection/sixthSection";
import { createEll } from "../../../components/header/header";
import { ShopSection } from "../../shopCatalog/shopSection";
import { AboutPage } from "../../about/about";
import { BestGiftsPage } from "../../bestGifts/bestGifts";
import { ContactsPage } from "../../contacts/contacts";
import { BarMenu } from "../../../components/barMenu/barMenu";
import {
  ProductCards,
  createContainerCart,
} from "../../../components/productСards/productСards";

import { productCards1 } from "../../../components/content/catalig/firstCatalog";
import { productCards2 } from "../../../components/content/catalig/secondCatalog";
import { productCards3 } from "../../../components/content/catalig/thirdCatalog";

function Main() {
  BarMenu();
  createContainerCart();
  SectionMainPag();
  ShopSection();
  AboutPage();
  BestGiftsPage();
  ContactsPage();
}

function SectionMainPag() {
  const main = document.getElementById("main-pag");
  const sectionMainContainer = createEll("section");
  sectionMainContainer.setAttribute("id", "globalMain");
  sectionMainContainer.style.display = "flex";
  main.appendChild(sectionMainContainer);

  FirstSection();
  TwoSection();
  ThirdSection();
  FifthSection();
  SixthSection();
}

export { Main };
