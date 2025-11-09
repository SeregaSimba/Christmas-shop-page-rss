import { FirstSection } from "../firstSection/firstSection";
import { TwoSection } from "../twoSection/twoSection";
import { ThirdSection } from "../thirdSection/thirdSection";
import { FourthSection } from "../fourthSection/fourthSection";
import { FifthSection } from "../fifthSection/fifthSection";
import { SixthSection } from "../sixthSection/sixthSection";
import { createEll } from "../../../components/header/header";
import { ShopSection } from "../../shopCatalog/shopSection";

function Main() {
  SectionMainPag();
  ShopSection();
}

function SectionMainPag() {
  const main = document.getElementById("main-pag");
  const sectionMainContainer = createEll("section");
  sectionMainContainer.setAttribute("id", "globalMain");
  sectionMainContainer.style.display = "block";
  main.appendChild(sectionMainContainer);

  FirstSection();
  TwoSection();
  ThirdSection();
  FourthSection();
  FifthSection();
  SixthSection();
}

export { Main };
