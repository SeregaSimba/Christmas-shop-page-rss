const sliderWight200 = 200;

let currentI = 0;
const windowWidth = window.innerWidth;

function transform() {
  const containerSlider = document.getElementById("styleLeftIndex");

  const result = -currentI * sliderWight200;
  containerSlider.style.transform = `translateX(${result}px)`;
}

function sliderLogicLeft() {
  const buttonLeft = document.getElementById("buttonSliderLeft");
  const buttonRight = document.getElementById("buttonSliderRight");

  if (currentI > 0) {
    currentI -= 1;
    transform();
    buttonRight.classList.remove("button-Right-none");
  }
  if (currentI <= 0) {
    console.log(currentI);
    buttonLeft.classList.add("button-Left-none");
  }
}

function sliderLogicRight() {
  const buttonLeft = document.getElementById("buttonSliderLeft");
  const buttonRight = document.getElementById("buttonSliderRight");

  if (windowWidth > 1330) {
    if (currentI < 4) {
      currentI += 1;
      transform();
      buttonLeft.classList.remove("button-Left-none");
      if (currentI === 4) {
        buttonRight.classList.add("button-Right-none");
      }
    }
  } else if (windowWidth > 1120) {
    if (currentI < 5) {
      currentI += 1;
      transform();
      buttonLeft.classList.remove("button-Left-none");
      if (currentI === 5) {
        buttonRight.classList.add("button-Right-none");
      }
    }
  } else if (windowWidth > 920) {
    if (currentI < 6) {
      currentI += 1;
      transform();
      buttonLeft.classList.remove("button-Left-none");
      if (currentI === 6) {
        buttonRight.classList.add("button-Right-none");
      }
    }
  } else if (windowWidth < 920 && windowWidth > 360) {
    if (currentI < 8) {
      currentI += 1;
      transform();
      buttonLeft.classList.remove("button-Left-none");
      if (currentI === 8) {
        buttonRight.classList.add("button-Right-none");
      }
    }
  } else if (windowWidth <= 360) {
    if (currentI < 9) {
      currentI += 1;
      transform();
      buttonLeft.classList.remove("button-Left-none");
      if (currentI === 9) {
        buttonRight.classList.add("button-Right-none");
      }
    }
  }
}

export { sliderLogicLeft, sliderLogicRight };
