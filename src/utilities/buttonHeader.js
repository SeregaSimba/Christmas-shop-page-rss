function ButtonHeaderGifts() {
  const sectionPageHom = document.getElementById("globalMain");
  const sectionPageShop = document.getElementById("bestGifts");

  if (sectionPageShop.style.display === "none") {
    sectionPageShop.style.display = "block";
    sectionPageHom.style.display = "none";
  } else {
    sectionPageHom.style.display = "block";
    sectionPageShop.style.display = "none";
  }
}

function ButtonHeaderAbout() {}

export { ButtonHeaderGifts };
