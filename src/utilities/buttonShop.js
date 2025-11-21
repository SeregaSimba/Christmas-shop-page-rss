function ButtonAll() {
  const buttonAll = document.getElementById("shopItems");
  const buttonWork = document.getElementById("ForWork");
  const buttonHealth = document.getElementById("forHealth");
  const buttonHarmony = document.getElementById("forHarmony");

  if (buttonAll.style.display === "none") {
    buttonAll.style.display = "flex";
    buttonWork.style.display = "none";
    buttonHealth.style.display = "none";
    buttonHarmony.style.display = "none";
  } else {
    buttonAll.style.display = "flex";
    buttonWork.style.display = "none";
    buttonHealth.style.display = "none";
    buttonHarmony.style.display = "none";
  }
}

function ButtonWork() {
  const buttonAll = document.getElementById("shopItems");
  const buttonWork = document.getElementById("ForWork");
  const buttonHealth = document.getElementById("forHealth");
  const buttonHarmony = document.getElementById("forHarmony");

  if (buttonWork.style.display === "none") {
    buttonWork.style.display = "flex";
    buttonAll.style.display = "none";
    buttonHealth.style.display = "none";
    buttonHarmony.style.display = "none";
  } else {
    buttonAll.style.display = "flex";
    buttonWork.style.display = "none";
    buttonHealth.style.display = "none";
    buttonHarmony.style.display = "none";
  }
}

function ButtonHealth() {
  const buttonAll = document.getElementById("shopItems");
  const buttonWork = document.getElementById("ForWork");
  const buttonHealth = document.getElementById("forHealth");
  const buttonHarmony = document.getElementById("forHarmony");

  if (buttonHealth.style.display === "none") {
    buttonHealth.style.display = "flex";
    buttonAll.style.display = "none";
    buttonWork.style.display = "none";
    buttonHarmony.style.display = "none";
  } else {
    buttonAll.style.display = "flex";
    buttonWork.style.display = "none";
    buttonHealth.style.display = "none";
    buttonHarmony.style.display = "none";
  }
}

function ButtonHarmony() {
  const buttonAll = document.getElementById("shopItems");
  const buttonWork = document.getElementById("ForWork");
  const buttonHealth = document.getElementById("forHealth");
  const buttonHarmony = document.getElementById("forHarmony");

  if (buttonHarmony.style.display === "none") {
    buttonHarmony.style.display = "flex";
    buttonAll.style.display = "none";
    buttonWork.style.display = "none";
    buttonHealth.style.display = "none";
  } else {
    buttonAll.style.display = "flex";
    buttonWork.style.display = "none";
    buttonHealth.style.display = "none";
    buttonHarmony.style.display = "none";
  }
}

function buttonClose() {
  const sectionCards = document.getElementById("containerSectionCards");
  sectionCards.classList.remove("containerSectionCards");
  sectionCards.innerHTML = "";
}

export { ButtonAll, ButtonWork, ButtonHealth, ButtonHarmony, buttonClose };
