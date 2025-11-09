import { createEll, addClass } from "../../../utilities/createFunc";
import { ButtonHeaderGifts } from "../../../utilities/buttonHeader";

function SixthSection() {
  const main = document.getElementById("globalMain");

  const sectionCTA = createEll("section");
  addClass(sectionCTA, "CTA");
  addClass(sectionCTA, "conteiner");
  main.appendChild(sectionCTA);

  const sectionStaContainer = createEll("section");
  addClass(sectionStaContainer, "cta-conteiner");
  sectionCTA.appendChild(sectionStaContainer);

  const sectionTitleTame = createEll("section");
  sectionStaContainer.appendChild(sectionTitleTame);

  const titleH2Tame = createEll("h2");
  addClass(titleH2Tame, "sta-h2");
  titleH2Tame.innerText =
    "READY TO START YOUR JOURNEY TO A BETTER VERSION OF YOURSELF?";
  sectionTitleTame.appendChild(titleH2Tame);

  const sectionButtonTime = createEll("section");
  addClass(sectionButtonTime, "sta-button-conteiner");
  sectionStaContainer.appendChild(sectionButtonTime);

  const articleTame = createEll("article");
  sectionButtonTime.appendChild(articleTame);

  const buttonTame = createEll("button");
  addClass(buttonTame, "sta-button");
  buttonTame.setAttribute("id", "but2");
  buttonTame.innerText = "EXPLORE MAGICAL GIFTS";
  buttonTame.addEventListener("click", ButtonHeaderGifts);
  articleTame.appendChild(buttonTame);

  const sectionTameContainer = createEll("section");
  sectionStaContainer.appendChild(sectionTameContainer);

  const articleP1 = createEll("article");
  sectionTameContainer.appendChild(articleP1);

  const titleTameP1 = createEll("p");
  addClass(titleTameP1, "size-conteiner");
  addClass(titleTameP1, "sta-p");
  titleTameP1.innerText = "The New Year is Coming Soon...";
  articleP1.appendChild(titleTameP1);

  const sectionTame = createEll("section");
  addClass(sectionTame, "time");
  sectionTameContainer.appendChild(sectionTame);

  const articleDey = createEll("article");
  addClass(articleDey, "sta-time1");
  sectionTame.appendChild(articleDey);

  const deyP1 = createEll("p");
  addClass(deyP1, "timer");
  articleDey.appendChild(deyP1);

  const spanDey = createEll("span");
  spanDey.setAttribute("id", "d");
  deyP1.appendChild(spanDey);

  const deyP2 = createEll("p");
  addClass(deyP2, "sta-deis");
  deyP2.innerText = "DAYS";
  articleDey.appendChild(deyP2);

  const span1 = createEll("span");
  addClass(span1, "sta-span1");
  sectionTame.appendChild(span1);

  const articleHors = createEll("article");
  addClass(articleHors, "sta-time2");
  sectionTame.appendChild(articleHors);

  const HorsP1 = createEll("p");
  addClass(HorsP1, "timer");
  articleHors.appendChild(HorsP1);

  const spanHors = createEll("span");
  spanHors.setAttribute("id", "h");
  HorsP1.appendChild(spanHors);

  const horsP2 = createEll("p");
  addClass(horsP2, "sta-deis");
  horsP2.innerText = "HORS";
  articleHors.appendChild(horsP2);

  const span2 = createEll("span");
  addClass(span2, "sta-span2");
  sectionTame.appendChild(span2);

  //
  const articleMin = createEll("article");
  addClass(articleMin, "sta-time3");
  sectionTame.appendChild(articleMin);

  const MinP1 = createEll("p");
  addClass(MinP1, "timer");
  articleMin.appendChild(MinP1);

  const spanMin = createEll("span");
  spanMin.setAttribute("id", "m");
  MinP1.appendChild(spanMin);

  const MinP2 = createEll("p");
  addClass(MinP2, "sta-deis");
  MinP2.innerText = "MINUTES";
  articleMin.appendChild(MinP2);

  const span3 = createEll("span");
  addClass(span3, "sta-span3");
  sectionTame.appendChild(span3);

  //

  const articleSec = createEll("article");
  addClass(articleSec, "sta-time4");
  sectionTame.appendChild(articleSec);

  const SecP1 = createEll("p");
  addClass(SecP1, "timer");
  articleSec.appendChild(SecP1);

  const spanSec = createEll("span");
  spanSec.setAttribute("id", "s");
  SecP1.appendChild(spanSec);

  const SecP2 = createEll("p");
  addClass(SecP2, "sta-deis");
  SecP2.innerText = "SECONDS";
  articleSec.appendChild(SecP2);
}

export { SixthSection };
