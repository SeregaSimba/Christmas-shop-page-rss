import { createEll, addClass } from "../../../utilities/createFunc";
import { sliderLogicLeft, sliderLogicRight } from "./slider";
import "./section3.css";

function ThirdSection() {
  const main = document.getElementById("globalMain");

  const thirdSection = createEll("section");
  addClass(thirdSection, "slider");
  main.appendChild(thirdSection);

  const sliderSection = createEll("section");
  addClass(sliderSection, "container-slider");
  thirdSection.appendChild(sliderSection);

  const sectionSliderTitle = createEll("section");
  addClass(sectionSliderTitle, "slider-title");
  sliderSection.appendChild(sectionSliderTitle);

  const sliderPTitle = createEll("h3");
  sliderPTitle.innerText = "Become Happier!";
  sectionSliderTitle.appendChild(sliderPTitle);

  const titleH2 = createEll("h2");
  titleH2.innerText = "IN THE NEW 2025";
  sectionSliderTitle.appendChild(titleH2);

  const sectionContainerMain = createEll("section");
  addClass(sectionContainerMain, "slider-container-main");
  sliderSection.appendChild(sectionContainerMain);

  const sectionSlider2 = createEll("section");
  addClass(sectionSlider2, "slider2");
  sectionContainerMain.appendChild(sectionSlider2);

  const sectionChristmasSlider = createEll("section");
  addClass(sectionChristmasSlider, "christmas-slider");
  sectionChristmasSlider.setAttribute("id", "styleLeftIndex");
  sectionSlider2.appendChild(sectionChristmasSlider);

  const articleTextSlider = createEll("article");
  sectionChristmasSlider.appendChild(articleTextSlider);

  const sliderPText = createEll("p");
  addClass(sliderPText, "text-slider");
  sliderPText.innerText = "LIVE";
  articleTextSlider.appendChild(sliderPText);

  const articleImg1 = createEll("article");
  sectionChristmasSlider.appendChild(articleImg1);

  const imgSlider1 = createEll("img");
  addClass(imgSlider1, "imagesSlider");
  imgSlider1.setAttribute("src", "img/snowman.jpg");
  imgSlider1.setAttribute("alt", "Snowman");
  articleImg1.appendChild(imgSlider1);

  const articleTextSlider2 = createEll("article");
  sectionChristmasSlider.appendChild(articleTextSlider2);

  const sliderPText2 = createEll("p");
  addClass(sliderPText2, "text-slider");
  sliderPText2.innerText = "CREATE";
  articleTextSlider2.appendChild(sliderPText2);

  const articleImg2 = createEll("article");
  sectionChristmasSlider.appendChild(articleImg2);

  const imgSlider2 = createEll("img");
  addClass(imgSlider2, "imagesSlider");
  imgSlider2.setAttribute("src", "img/christmas-trees.jpg");
  imgSlider2.setAttribute("alt", "Christmas Trees");
  articleImg2.appendChild(imgSlider2);

  const articleTextSlider3 = createEll("article");
  sectionChristmasSlider.appendChild(articleTextSlider3);

  const sliderPText3 = createEll("p");
  addClass(sliderPText3, "text-slider");
  sliderPText3.innerText = "LOVE";
  articleTextSlider3.appendChild(sliderPText3);

  const articleImg3 = createEll("article");
  sectionChristmasSlider.appendChild(articleImg3);

  const imgSlider3 = createEll("img");
  addClass(imgSlider3, "imagesSlider");
  imgSlider3.setAttribute("src", "img/christmas-tree-ball.png");
  imgSlider3.setAttribute("alt", "Christmas Tree Ball");
  articleImg3.appendChild(imgSlider3);
  //

  const articleTextSlider4 = createEll("article");
  sectionChristmasSlider.appendChild(articleTextSlider4);

  const sliderPText4 = createEll("p");
  addClass(sliderPText4, "text-slider");
  sliderPText4.innerText = "DREAM";
  articleTextSlider4.appendChild(sliderPText4);

  const articleImg4 = createEll("article");
  sectionChristmasSlider.appendChild(articleImg4);

  const imgSlider4 = createEll("img");
  addClass(imgSlider4, "imagesSlider");
  imgSlider4.setAttribute("src", "img/fairytale-house.png");
  imgSlider4.setAttribute("alt", "Fairytale House");
  articleImg4.appendChild(imgSlider4);

  const articleButtonSlider = createEll("article");
  addClass(articleButtonSlider, "button-slider");
  sectionContainerMain.appendChild(articleButtonSlider);

  const buttonSliderLeft = createEll("button");
  buttonSliderLeft.setAttribute("id", "buttonSliderLeft");
  addClass(buttonSliderLeft, "button-slider-main");
  addClass(buttonSliderLeft, "button-Left-none");
  buttonSliderLeft.addEventListener("click", sliderLogicLeft);
  articleButtonSlider.appendChild(buttonSliderLeft);

  const ingButtonLeft = createEll("img");
  ingButtonLeft.setAttribute("src", "img/Vectorleft.png");
  ingButtonLeft.setAttribute("alt", "Vector");
  ingButtonLeft.setAttribute("id", "vector");
  buttonSliderLeft.appendChild(ingButtonLeft);

  //

  const buttonSliderRight = createEll("button");
  buttonSliderRight.setAttribute("id", "buttonSliderRight");
  addClass(buttonSliderRight, "button-slider-main2");
  buttonSliderRight.addEventListener("click", sliderLogicRight);
  articleButtonSlider.appendChild(buttonSliderRight);

  const ingButtonRight = createEll("img");
  ingButtonRight.setAttribute("src", "img/Vectorright.png");
  ingButtonRight.setAttribute("alt", "Vector");
  ingButtonRight.setAttribute("id", "vector2");
  buttonSliderRight.appendChild(ingButtonRight);
}

export { ThirdSection };
