import { createEll, addClass } from "../../utilities/createFunc";

function AboutPage() {
  const main = document.getElementById("main-pag");

  const sectionAbout = createEll("section");
  addClass(sectionAbout, "about-page");
  sectionAbout.setAttribute("id", "aboutPage");
  sectionAbout.style.display = "none";
  main.appendChild(sectionAbout);
}

export { AboutPage };
