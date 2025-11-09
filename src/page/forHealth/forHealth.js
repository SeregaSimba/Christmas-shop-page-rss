import { createEll, addClass } from "../../utilities/createFunc";

function ForHealth() {
  const shopItems = document.getElementById("contentShop");

  const sectionHealth = createEll("section");
  addClass(sectionHealth, "for-Health");
  addClass(sectionHealth, "conteiner-dest-magasin");
  sectionHealth.setAttribute("id", "forHealth");
  sectionHealth.style.display = "none";
  shopItems.appendChild(sectionHealth);
}

export { ForHealth };
