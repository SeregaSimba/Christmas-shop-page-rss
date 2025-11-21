import { createEll, addClass } from "../../utilities/createFunc";
import { ForHarmony } from "../forHarmony/forHarmony";
import { ForHealth } from "../forHealth/forHealth";
import { ForWork } from "../forWork/forWork";
import { ShopSectionTitle } from "./shopContent/shopSection1";
import { CreateItemsShop } from "./shopContent/shopSection2";
import "./shop.css";

function ShopSection() {
  const main = document.getElementById("main-pag");

  const shopSection = createEll("section");
  addClass(shopSection, "best-Gifts3");
  shopSection.setAttribute("id", "bestGifts");
  shopSection.style.display = "none";
  main.appendChild(shopSection);

  const sectionShopContainer = createEll("section");
  addClass(sectionShopContainer, "best-Gifts-shop");
  shopSection.appendChild(sectionShopContainer);

  const sectionContentShop = createEll("section");
  addClass(sectionContentShop, "best-Gifts-conteiner2");
  sectionContentShop.setAttribute("id", "contentShop");
  sectionShopContainer.appendChild(sectionContentShop);

  ShopSectionTitle();

  ForWork();
  ForHealth();
  ForHarmony();
  CreateItemsShop();
}

export { ShopSection };
