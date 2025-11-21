import { createEll, addClass } from "../utilities/createFunc";
import { ProductCards } from "../components/productСards/productСards";

function CreateCatalog(text, text2, srcImg, className, id, section, idItems) {
  const containerCatalog = document.getElementById(id);

  const sectionItem = createEll("button");
  addClass(sectionItem, "best-img");
  containerCatalog.appendChild(sectionItem);

  function createItemCart() {
    ProductCards(section, idItems);
  }

  sectionItem.addEventListener("click", () => {
    const containerSectionCards = document.getElementById(
      "containerSectionCards"
    );
    containerSectionCards.classList.add("containerSectionCards");
    containerSectionCards.innerHTML = "";
    createItemCart();
  });

  const articleItemImg = createEll("article");
  sectionItem.appendChild(articleItemImg);

  const imgItemCatalog = createEll("img");
  imgItemCatalog.setAttribute("src", srcImg);
  imgItemCatalog.setAttribute("alt", "image1");
  articleItemImg.appendChild(imgItemCatalog);

  const articleItemTitle = createEll("article");
  addClass(articleItemTitle, "best-h");
  sectionItem.appendChild(articleItemTitle);

  const titleH4 = createEll("h4");
  addClass(titleH4, "best-h4");
  addClass(titleH4, className);
  titleH4.innerText = text;
  articleItemTitle.appendChild(titleH4);

  const titleH3 = createEll("h3");
  addClass(titleH3, "best-h3");
  titleH3.innerText = text2;
  articleItemTitle.appendChild(titleH3);
}
export { CreateCatalog };
