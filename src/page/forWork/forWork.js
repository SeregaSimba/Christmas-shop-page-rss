import { createEll, addClass } from "../../utilities/createFunc";

function ForWork() {
  const shopItems = document.getElementById("contentShop");

  const sectionWork = createEll("section");
  addClass(sectionWork, "for-Work");
  addClass(sectionWork, "conteiner-dest-magasin");
  sectionWork.setAttribute("id", "ForWork");
  sectionWork.style.display = "none";
  shopItems.appendChild(sectionWork);
}

export { ForWork };
