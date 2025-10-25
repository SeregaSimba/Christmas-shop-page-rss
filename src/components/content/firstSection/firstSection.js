import { createEll, addClass } from "../../../utilities/createFunc";

function FirstSection() {
  const main = document.getElementById("main-pag");
  const firstSection = createEll("section");
  addClass(firstSection, "hero");
  addClass(firstSection, "conteiner");
  main.appendChild(firstSection);

  const heroSection = createEll("section");
  addClass(heroSection, "hero-conteiner");
  firstSection.appendChild(heroSection);

  const articleHero = createEll("article");
  addClass(articleHero, "size-conteiner");
  addClass(articleHero, "christmas");
  heroSection.appendChild(articleHero);

  const pHero = createEll("p");
  pHero.innerText = "Merry Christmas";
  articleHero.appendChild(pHero);

  const articleH1 = createEll("article");
  addClass(articleH1, "h1");
  heroSection.appendChild(articleH1);

  const heroH1 = createEll("h1");
  heroH1.innerText = "GIFT YOURSELF THE MAGIC OF NEW POSSIBILITIES";
  articleH1.appendChild(heroH1);

  const articleButton = createEll("article");
  addClass(articleButton, "button");
  heroSection.appendChild(articleButton);

  const formHeroButton = createEll("form");
  formHeroButton.setAttribute("action", "index-thu.html");
  formHeroButton.setAttribute("target", "_blank");
  articleButton.appendChild(formHeroButton);

  const buttonHero = createEll("button");
  buttonHero.setAttribute("id", "button");
  buttonHero.innerText = "EXPLORE MAGICAL GIFTS";
  formHeroButton.appendChild(buttonHero);

  const articleTextHero = createEll("article");
  addClass(articleTextHero, "size-conteiner");
  addClass(articleTextHero, "christmas2");
  heroSection.appendChild(articleTextHero);

  const pBottomHero = createEll("p");
  pBottomHero.innerText = "and Happy New Year";
  articleTextHero.appendChild(pBottomHero);
}

export { FirstSection };
