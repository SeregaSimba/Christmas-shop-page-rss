function ButtonHeaderGifts() {
  const sectionPageHom = document.getElementById("globalMain");
  const sectionPageShop = document.getElementById("bestGifts");
  const sectionAbout = document.getElementById("aboutPage");
  const sectionBestGifts = document.getElementById("bestGiftsPage");
  const sectionContacts = document.getElementById("sectionContacts");

  if (sectionPageShop.style.display === "none") {
    sectionPageShop.style.display = "block";
    sectionPageHom.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  } else {
    sectionPageHom.style.display = "block";
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
    sectionAbout.style.display = "block";
    sectionPageHom.style.display = "none";
    sectionPageShop.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  } else {
    sectionPageHom.style.display = "block";
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
    sectionBestGifts.style.display = "block";
    sectionAbout.style.display = "none";
    sectionPageHom.style.display = "none";
    sectionPageShop.style.display = "none";
    sectionContacts.style.display = "none";
  } else {
    sectionPageHom.style.display = "block";
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
    sectionContacts.style.display = "block";
    sectionBestGifts.style.display = "none";
    sectionAbout.style.display = "none";
    sectionPageHom.style.display = "none";
    sectionPageShop.style.display = "none";
  } else {
    sectionPageHom.style.display = "block";
    sectionPageShop.style.display = "none";
    sectionAbout.style.display = "none";
    sectionBestGifts.style.display = "none";
    sectionContacts.style.display = "none";
  }
}

export {
  ButtonHeaderGifts,
  ButtonHeaderAbout,
  ButtonHeaderBestGifts,
  ButtonHeaderContacts,
};
