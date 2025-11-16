function ButtonHeaderGifts() {
  const sectionPageHom = document.getElementById("globalMain");
  const sectionPageShop = document.getElementById("bestGifts");
  const sectionAbout = document.getElementById("aboutPage");
  const sectionBestGifts = document.getElementById("bestGiftsPage");
  const sectionContacts = document.getElementById("sectionContacts");

  if (sectionPageShop.style.display === "none") {
    sectionPageShop.style.display = "flex";
    sectionPageHom.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  } else {
    sectionPageHom.style.display = "flex";
    sectionPageShop.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  }
}

function ButtonHeaderAbout() {
  const sectionPageHom = document.getElementById("globalMain");
  const sectionPageShop = document.getElementById("bestGifts");
  const sectionAbout = document.getElementById("aboutPage");
  const sectionBestGifts = document.getElementById("bestGiftsPage");
  const sectionContacts = document.getElementById("sectionContacts");

  if (sectionAbout.style.display === "none") {
    sectionAbout.style.display = "flex";
    sectionPageHom.style.display = "none";
    sectionPageShop.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  } else {
    sectionPageHom.style.display = "flex";
    sectionPageShop.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  }
}

function ButtonHeaderBestGifts() {
  const sectionPageHom = document.getElementById("globalMain");
  const sectionPageShop = document.getElementById("bestGifts");
  const sectionAbout = document.getElementById("aboutPage");
  const sectionBestGifts = document.getElementById("bestGiftsPage");
  const sectionContacts = document.getElementById("sectionContacts");

  if (sectionBestGifts.style.display === "none") {
    sectionBestGifts.style.display = "flex";
    sectionAbout.style.display = "none";
    sectionPageHom.style.display = "none";
    sectionPageShop.style.display = "none";
    sectionContacts.style.display = "none";
  } else {
    sectionPageHom.style.display = "flex";
    sectionPageShop.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  }
}

function ButtonHeaderContacts() {
  const sectionPageHom = document.getElementById("globalMain");
  const sectionPageShop = document.getElementById("bestGifts");
  const sectionAbout = document.getElementById("aboutPage");
  const sectionBestGifts = document.getElementById("bestGiftsPage");
  const sectionContacts = document.getElementById("sectionContacts");

  if (sectionContacts.style.display === "none") {
    sectionContacts.style.display = "flex";
    sectionBestGifts.style.display = "none";
    sectionAbout.style.display = "none";
    sectionPageHom.style.display = "none";
    sectionPageShop.style.display = "none";
  } else {
    sectionPageHom.style.display = "flex";
    sectionPageShop.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  }
}

function buttonBarMenOpen() {
  const span1 = document.getElementById("span1");
  const span2 = document.getElementById("span2");
  const sectionBarMenu = document.getElementById("section-bar-menu");

  span1.classList.toggle("span-bar-menu-click");
  span2.classList.toggle("span-bar-menu2-click");
  sectionBarMenu.classList.toggle("section-bar-menu-none");
  document.body.classList.toggle("bodyOverflow");
}

export {
  ButtonHeaderGifts,
  ButtonHeaderAbout,
  ButtonHeaderBestGifts,
  ButtonHeaderContacts,
  buttonBarMenOpen,
};
