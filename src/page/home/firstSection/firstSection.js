import "./section1.css";
import { createEll, addClass } from "../../../utilities/createFunc";
import { ButtonHeaderGifts } from "../../../utilities/buttonHeader";

function FirstSection() {
  const main = document.getElementById("globalMain");
  const firstSection = createEll("section");
  addClass(firstSection, "hero");
  addClass(firstSection, "container1");
  main.appendChild(firstSection);

  const heroSection = createEll("section");
  addClass(heroSection, "hero-container");
  firstSection.appendChild(heroSection);

  const articleHero = createEll("article");
  addClass(articleHero, "christmas");
  heroSection.appendChild(articleHero);

  const pHero = createEll("p");
  pHero.innerText = "Merry Christmas";
  articleHero.appendChild(pHero);

  const articleH1 = createEll("article");
  addClass(articleH1, "heroH1");
  heroSection.appendChild(articleH1);

  const heroH11 = createEll("h1");
  heroH11.innerText = "GIFT";
  articleH1.appendChild(heroH11);

  const heroH12 = createEll("h1");
  heroH12.innerText = "YOURSELF THE MAGIC";
  articleH1.appendChild(heroH12);

  const heroH13 = createEll("h1");
  heroH13.innerText = "OF";
  articleH1.appendChild(heroH13);

  const heroH14 = createEll("h1");
  heroH14.innerText = "NEW POSSIBILITIES";
  articleH1.appendChild(heroH14);

  const articleButton = createEll("article");
  addClass(articleButton, "button");
  heroSection.appendChild(articleButton);

  const buttonHero = createEll("button");
  buttonHero.setAttribute("id", "button");
  buttonHero.innerText = "EXPLORE MAGICAL GIFTS";
  buttonHero.addEventListener("click", ButtonHeaderGifts);
  articleButton.appendChild(buttonHero);

  const articleTextHero = createEll("article");
  addClass(articleTextHero, "christmas2");
  heroSection.appendChild(articleTextHero);

  const pBottomHero = createEll("p");
  pBottomHero.innerText = "and Happy New Year";
  articleTextHero.appendChild(pBottomHero);
}

export { FirstSection };
