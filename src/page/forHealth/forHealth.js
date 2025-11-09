import { createEll, addClass } from "../../utilities/createFunc";
import { HealthItems } from "./healthItems";

function ForHealth() {
  const shopItems = document.getElementById("contentShop");

  const sectionHealth = createEll("section");
  addClass(sectionHealth, "for-Health");
  addClass(sectionHealth, "conteiner-dest-magasin");
  sectionHealth.setAttribute("id", "forHealth");
  sectionHealth.style.display = "none";
  shopItems.appendChild(sectionHealth);
  HealthItems();
}

export { ForHealth };
