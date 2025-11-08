import { FirstSection } from "../content/firstSection/firstSection";
import { TwoSection } from "../content/twoSection/twoSection";
import { ThirdSection } from "../content/thirdSection/thirdSection";
import { FourthSection } from "../content/fourthSection/fourthSection";
import { FifthSection } from "../content/fifthSection/fifthSection";
import { SixthSection } from "../content/sixthSection/sixthSection";
import { createEll } from "../header/header";

function Main() {
  SectionMainPag();
}

function SectionMainPag() {
  const main = document.getElementById("main-pag");
  const sectionMainContainer = createEll("section");
  sectionMainContainer.setAttribute("id", "globalMain");
  main.appendChild(sectionMainContainer);

  FirstSection();
  TwoSection();
  ThirdSection();
  FourthSection();
  FifthSection();
  SixthSection();
}

export { Main };
