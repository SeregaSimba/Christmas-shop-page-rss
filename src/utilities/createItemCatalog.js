import { createEll, addClass } from "../utilities/createFunc";

function CreateCatalog(text, text2, srcImg) {
  const containerCatalog = document.getElementById("bestGiftsConteiner");

  const sectionItem = createEll("section");
  addClass(sectionItem, "best-img");
  containerCatalog.appendChild(sectionItem);

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
  addClass(titleH4, "for-work");
  titleH4.innerText = text;
  articleItemTitle.appendChild(titleH4);

  const titleH3 = createEll("h3");
  addClass(titleH3, "best-h3");
  titleH3.innerText = text2;
  articleItemTitle.appendChild(titleH3);
}
export { CreateCatalog };
