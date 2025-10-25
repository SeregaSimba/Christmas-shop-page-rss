import { createEll, addClass } from "../../../utilities/createFunc";

function TwoSection() {
  const main = document.getElementById("main-pag");

  const sectionTwo = createEll("section");
  addClass(sectionTwo, "about");
  addClass(sectionTwo, "conteiner");
  sectionTwo.setAttribute("id", "about");
  main.appendChild(sectionTwo);

  const sectionAbout = createEll("section");
  addClass(sectionAbout, "about2");
  sectionTwo.appendChild(sectionAbout);

  const sectionAbout2 = createEll("section");
  addClass(sectionAbout2, "about4");
  sectionAbout.appendChild(sectionAbout2);

  const sectionAbout3 = createEll("section");
  addClass(sectionAbout3, "about3");
  sectionAbout2.appendChild(sectionAbout3);

  const aAbout = createEll("a");
  addClass(aAbout, "size-conteiner");
  aAbout.setAttribute("href", "#");
  aAbout.innerText = "About";
  sectionAbout3.appendChild(aAbout);

  const aboutH2 = createEll("h2");
  aboutH2.innerText = "UNLEASH YOUR INNER SUPERHERO!";
  sectionAbout3.appendChild(aboutH2);

  const aboutP = createEll("p");
  aboutP.innerText =
    "This New Year marks the beginning of your journey. to inner harmony and new strengths. We offer unique gifts that will help you improve your life.";
  sectionAbout3.appendChild(aboutP);

  const sectionImgAbout = createEll("section");
  addClass(sectionImgAbout, "about-img");
  sectionAbout2.appendChild(sectionImgAbout);

  const imgAbout = createEll("img");
  addClass(imgAbout, "about-imga");
  imgAbout.setAttribute("src", "img/santa.png");
  imgAbout.setAttribute("alt", "Santa");
  sectionImgAbout.appendChild(imgAbout);
}

export { TwoSection };
