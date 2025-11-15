const sliderWight200 = 200;
//  const containerSlider = document.getElementById("styleLeftIndex");
//   const totalSlides = containerSlider.children.length;

let currentI = 0;
const windowWidth = window.innerWidth;

function transform() {
  const containerSlider = document.getElementById("styleLeftIndex");

  const result = -currentI * sliderWight200;
  containerSlider.style.transform = `translateX(${result}px)`;
}

function sliderLogicLeft() {
  if (currentI > 0) {
    currentI -= 1;
    transform();
  }
}

function sliderLogicRight() {
  if (windowWidth > 1330) {
    if (currentI < 4) {
      currentI += 1;
      transform();
    }
  } else if (windowWidth > 1120) {
    if (currentI < 5) {
      currentI += 1;
      transform();
    }
  } else if (windowWidth > 920) {
    if (currentI < 6) {
      currentI += 1;
      transform();
    }
  } else if (windowWidth < 920 && windowWidth > 360) {
    if (currentI < 8) {
      currentI += 1;
      transform();
    }
  } else if (windowWidth <= 360) {
    if (currentI < 9) {
      currentI += 1;
      transform();
    }
  }
}

export { sliderLogicLeft, sliderLogicRight };
