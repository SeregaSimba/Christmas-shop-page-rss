import { createEll, addClass } from "../../utilities/createFunc";
import { ForHarmony } from "../forHarmony/forHarmony";
import { ForHealth } from "../forHealth/forHealth";
import { ForWork } from "../forWork/forWork";
import { ShopSectionTitle } from "./shopContent/shopSection1";
import { CreateItemsShop } from "./shopContent/shopSection2";

function ShopSection() {
  const main = document.getElementById("main-pag");

  const shopSection = createEll("section");
  addClass(shopSection, "best-Gifts3");
  addClass(shopSection, "conteiner-best");
  addClass(shopSection, "hero2");
  addClass(shopSection, "conteiner3");
  shopSection.setAttribute("id", "bestGifts");
  shopSection.style.display = "none";
  main.appendChild(shopSection);

  const sectionShopContainer = createEll("section");
  addClass(sectionShopContainer, "best-Gifts2");
  shopSection.appendChild(sectionShopContainer);

  const sectionContentShop = createEll("section");
  addClass(sectionContentShop, "best-Gifts-conteiner2");
  sectionContentShop.setAttribute("id", "contentShop");
  sectionShopContainer.appendChild(sectionContentShop);

  ShopSectionTitle();
  CreateItemsShop();
  ForWork();
  ForHealth();
  ForHarmony();
}

export { ShopSection };
