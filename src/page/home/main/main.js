import { FirstSection } from "../firstSection/firstSection";
import { TwoSection } from "../twoSection/twoSection";
import { ThirdSection } from "../thirdSection/thirdSection";
import { FourthSection } from "../fourthSection/fourthSection";
import { FifthSection } from "../fifthSection/fifthSection";
import { SixthSection } from "../sixthSection/sixthSection";
import { createEll } from "../../../components/header/header";
import { ShopSection } from "../../shopCatalog/shopSection";
import { AboutPage } from "../../about/about";
import { BestGiftsPage } from "../../bestGifts/bestGifts";
import { ContactsPage } from "../../contacts/contacts";

function Main() {
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
  // FourthSection();
  FifthSection();
  SixthSection();
}

export { Main };
