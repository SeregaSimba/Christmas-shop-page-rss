import { createEll, addClass } from "../../utilities/createFunc";

import "./productCards.css";

function ProductCards(product, id) {
  const main = document.getElementById("main-pag");
  const result = product.find((trim) => {
    return trim.id === id;
  });

  function starOpa(calNam) {
    const starArr = [];
    for (let i = 0; i < 5; i += 1) {
      const starIn = createEll("img");
      addClass(starIn, calNam);
      starIn.src = "img/snowflakeICON.svg";
      starArr.push(starIn);
    }
    return starArr;
  }

  function addClassOPa(val, className, newClass) {
    const count = Math.floor(+val / 100);
    const el = document.getElementsByClassName(className);
    for (let i = 0; i < count && i < el.length; i += 1) {
      el[i].classList.add(newClass);
    }
  }

  const starLive = starOpa("live");
  const starCreate = starOpa("create");
  const starLove = starOpa("love");
  const starDream = starOpa("dream");

  const sectionCards = createEll("section");
  addClass(sectionCards, "section-cards");
  main.appendChild(sectionCards);

  const containerImg = createEll("section");
  addClass(containerImg, "containerImg");
  sectionCards.appendChild(containerImg);

  const buttonCloseCarts = createEll("button");
  addClass(buttonCloseCarts, "buttonCloseCarts");
  containerImg.appendChild(buttonCloseCarts);

  const cardsImg = createEll("img");
  addClass(cardsImg, "cardsImg");
  cardsImg.src = result.img;
  containerImg.appendChild(cardsImg);

  const containerTitleCart = createEll("section");
  addClass(containerTitleCart, "containerTitleCart");
  sectionCards.appendChild(containerTitleCart);

  const titleCartsH2 = createEll("h2");
  addClass(titleCartsH2, "titleCartsH2");
  titleCartsH2.innerText = result?.nameSection;
  containerTitleCart.appendChild(titleCartsH2);

  const titleCartsH1 = createEll("h1");
  addClass(titleCartsH1, "titleCartsH1");
  titleCartsH1.innerText = result?.name;
  containerTitleCart.appendChild(titleCartsH1);

  const titleCartsP = createEll("p");
  addClass(titleCartsP, "titleCartsP");
  titleCartsP.innerText = result?.textP;
  containerTitleCart.appendChild(titleCartsP);

  const titleCartsH22 = createEll("h2");
  addClass(titleCartsH22, "titleCartsH22");
  titleCartsH22.innerText = "ADDS SUPERPOWERS TO:";
  containerTitleCart.appendChild(titleCartsH22);

  const sectionParamCart = createEll("section");
  addClass(sectionParamCart, "sectionParamCart");
  containerTitleCart.appendChild(sectionParamCart);

  const articleLive = createEll("article");
  addClass(articleLive, "articleLive");
  sectionParamCart.appendChild(articleLive);

  const articleLiveP = createEll("article");
  addClass(articleLiveP, "articleLiveP");
  articleLive.appendChild(articleLiveP);

  const liveP = createEll("p");
  addClass(liveP, "liveP");
  liveP.innerText = "live";
  articleLiveP.appendChild(liveP);

  const liveP2 = createEll("p");
  addClass(liveP2, "liveP");
  liveP2.innerText = `+ ${result?.livePoint}`;
  articleLiveP.appendChild(liveP2);

  const liveArticleImage = createEll("article");
  addClass(liveArticleImage, "liveArticleImage");
  articleLive.appendChild(liveArticleImage);
  starLive.forEach((e) => liveArticleImage.appendChild(e));
  addClassOPa(result?.livePoint, "live", "liveOp1");

  const articleCreate = createEll("article");
  addClass(articleCreate, "articleCreate");
  sectionParamCart.appendChild(articleCreate);

  const articleCreateP = createEll("article");
  addClass(articleCreateP, "articleCreateP");
  articleCreate.appendChild(articleCreateP);

  const createP = createEll("p");
  addClass(createP, "createP");
  createP.innerText = "create";
  articleCreateP.appendChild(createP);

  const createP2 = createEll("p");
  addClass(createP2, "createP");
  createP2.innerText = `+ ${result?.createPoint}`;
  articleCreateP.appendChild(createP2);

  const createP3 = createEll("article");
  addClass(createP3, "createP");
  articleCreate.appendChild(createP3);
  starCreate.forEach((e) => createP3.appendChild(e));
  addClassOPa(result?.createPoint, "create", "createOp1");

  const articleLove = createEll("article");
  addClass(articleLove, "articleLove");
  sectionParamCart.appendChild(articleLove);

  const articleLoveP = createEll("article");
  addClass(articleLoveP, "articleLoveP");
  articleLove.appendChild(articleLoveP);

  const loveP = createEll("p");
  addClass(loveP, "loveP");
  loveP.innerText = "love";
  articleLoveP.appendChild(loveP);

  const loveP2 = createEll("p");
  addClass(loveP2, "loveP");
  loveP2.innerText = `+ ${result?.lovePoint}`;
  articleLoveP.appendChild(loveP2);

  const loveP3 = createEll("article");
  addClass(loveP3, "loveP");
  articleLove.appendChild(loveP3);
  starLove.forEach((e) => loveP3.appendChild(e));
  addClassOPa(result?.lovePoint, "love", "liveOp1");

  const articleDream = createEll("article");
  addClass(articleDream, "articleDream");
  sectionParamCart.appendChild(articleDream);

  const articleDreamP = createEll("article");
  addClass(articleDreamP, "articleDreamP");
  articleDream.appendChild(articleDreamP);

  const dreamP = createEll("p");
  addClass(dreamP, "dreamP");
  dreamP.innerText = "dream";
  articleDreamP.appendChild(dreamP);

  const dreamP2 = createEll("p");
  addClass(dreamP2, "dreamP");
  dreamP2.innerText = `+ ${result?.dreamPoint}`;
  articleDreamP.appendChild(dreamP2);

  const dreamP3 = createEll("article");
  addClass(dreamP3, "dreamP");
  articleDream.appendChild(dreamP3);
  starDream.forEach((e) => dreamP3.appendChild(e));
  addClassOPa(result?.dreamPoint, "dream", "dreamOp1");
}

export { ProductCards };
