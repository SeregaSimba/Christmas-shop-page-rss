import { createEll, addClass } from "../../utilities/createFunc";

function ForHarmony() {
  const shopItems = document.getElementById("contentShop");

  const sectionHarmony = createEll("section");
  addClass(sectionHarmony, "for-Harmony");
  addClass(sectionHarmony, "conteiner-dest-magasin");
  sectionHarmony.setAttribute("id", "forHarmony");
  sectionHarmony.style.display = "none";
  shopItems.appendChild(sectionHarmony);
}

export { ForHarmony };
