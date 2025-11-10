import "./section2.css";
import { createEll, addClass } from "../../../utilities/createFunc";
import { ButtonHeaderAbout } from "../../../utilities/buttonHeader";
import santaImg from "../../../../docs/img/santa.png";

function TwoSection() {
  const main = document.getElementById("globalMain");
  const textAboutP =
    "This New Year marks the beginning of your journey. to inner harmony and new strengths. We offer unique gifts that will help you improve your life.";

  const sectionTwo = createEll("section");
  addClass(sectionTwo, "about");
  sectionTwo.setAttribute("id", "about");
  main.appendChild(sectionTwo);

  const sectionAbout = createEll("section");
  addClass(sectionAbout, "about2");
  sectionTwo.appendChild(sectionAbout);

  const sectionAbout2 = createEll("section");
  addClass(sectionAbout2, "about3");
  sectionAbout.appendChild(sectionAbout2);

  const sectionAbout3 = createEll("section");
  addClass(sectionAbout3, "about4");
  sectionAbout2.appendChild(sectionAbout3);

  const buttonAbout = createEll("button");
  addClass(buttonAbout, "buttonAbout");
  buttonAbout.innerText = "About";
  buttonAbout.addEventListener("click", ButtonHeaderAbout);
  sectionAbout3.appendChild(buttonAbout);

  const aboutH2 = createEll("h2");
  addClass(aboutH2, "aboutH2");
  aboutH2.innerText = "UNLEASH YOUR INNER SUPERHERO!";
  sectionAbout3.appendChild(aboutH2);

  const aboutP = createEll("p");
  addClass(aboutP, "aboutP");
  aboutP.innerText = textAboutP;
  sectionAbout3.appendChild(aboutP);

  const sectionImgAbout = createEll("section");
  addClass(sectionImgAbout, "about-img");
  sectionAbout2.appendChild(sectionImgAbout);

  const imgAbout = createEll("img");
  addClass(imgAbout, "about-imga");
  imgAbout.setAttribute("src", santaImg);
  imgAbout.setAttribute("alt", "Santa");
  sectionImgAbout.appendChild(imgAbout);
}

export { TwoSection };
