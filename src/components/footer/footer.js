import { createEll, addClass } from "../../utilities/createFunc";

function Footer() {
  const footer = document.getElementById("contacts-footer");

  const sectionFootContainer = createEll("section");
  addClass(sectionFootContainer, "footer-conteiner");
  footer.appendChild(sectionFootContainer);

  const sectionFootNavContainer = createEll("section");
  addClass(sectionFootNavContainer, "footer-nav-conteiner");
  sectionFootContainer.appendChild(sectionFootNavContainer);

  const sectionFootNav = createEll("section");
  addClass(sectionFootNav, "footer-nav");
  sectionFootNavContainer.appendChild(sectionFootNav);

  const sectionContact = createEll("section");
  addClass(sectionContact, "footer-cont");
  sectionFootNav.appendChild(sectionContact);

  const imgContact = createEll("img");
  imgContact.setAttribute("src", "/img/GroupSANTA.svg");
  imgContact.setAttribute("alt", "Group");
  sectionContact.appendChild(imgContact);

  const contactP1 = createEll("p");
  contactP1.innerText = "+375 (29) 111 22 33";
  addClass(contactP1, "footer-p");
  sectionContact.appendChild(contactP1);

  const contactA = createEll("a");
  addClass(contactA, "footer-a");
  contactA.setAttribute("href", "tel:+375-29-111-22-33");
  sectionContact.appendChild(contactA);

  const contactH3 = createEll("h3");
  contactH3.innerText = "CALL US";
  addClass(contactH3, "footer-h3");
  sectionContact.appendChild(contactH3);

  const sectionContact2 = createEll("section");
  addClass(sectionContact2, "footer-cont");
  sectionFootNav.appendChild(sectionContact2);

  const imgContact2 = createEll("img");
  imgContact2.setAttribute("src", "/img/christmas-treeELCA.svg");
  imgContact2.setAttribute("alt", "Group");
  sectionContact2.appendChild(imgContact2);

  const contactP2 = createEll("p");
  contactP2.innerText = "MAGIC FOREST";
  addClass(contactP2, "footer-p");
  sectionContact2.appendChild(contactP2);

  const contactA2 = createEll("a");
  addClass(contactA2, "footer-a");
  contactA2.setAttribute("target", "_blank");
  contactA2.setAttribute(
    "href",
    "https://www.google.com/maps/place/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA+%22%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B3%D0%BE%D1%84%22/@59.8901129,29.9316625,11.82z/data=!4m6!3m5!1s0x46964730d11ed9e3:0x1c82ffc2f406bf1!8m2!3d59.8863041!4d29.9085976!16s%2Fm%2F09v6yp5?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
  );
  sectionContact2.appendChild(contactA2);

  const contactH32 = createEll("h3");
  contactH32.innerText = "MEET US";
  addClass(contactH32, "footer-h3");
  sectionContact2.appendChild(contactH32);

  const sectionContact3 = createEll("section");
  addClass(sectionContact3, "footer-cont");
  sectionFootNav.appendChild(sectionContact3);

  const imgContact3 = createEll("img");
  imgContact3.setAttribute("src", "/img/GroupSNEICK.svg");
  imgContact3.setAttribute("alt", "Group");
  sectionContact3.appendChild(imgContact3);

  const contactP3 = createEll("p");
  contactP3.innerText = "GIFTS@MAGIC.COM";
  addClass(contactP3, "footer-p");
  sectionContact3.appendChild(contactP3);

  const contactA3 = createEll("a");
  addClass(contactA3, "footer-a");
  contactA3.setAttribute("href", "mailto:gifts@magic.com");
  sectionContact3.appendChild(contactA3);

  const contactH33 = createEll("h3");
  contactH33.innerText = "WRITE US";
  addClass(contactH33, "footer-h3");
  sectionContact3.appendChild(contactH33);

  const sectionTitleMagic = createEll("section");
  addClass(sectionTitleMagic, "footer-cont-img");
  sectionFootNavContainer.appendChild(sectionTitleMagic);

  const articleMedea = createEll("article");
  addClass(articleMedea, "media");
  sectionTitleMagic.appendChild(articleMedea);

  const aTelegam = createEll("a");
  addClass(aTelegam, "footer-image");
  aTelegam.setAttribute("href", "https://telegram.org/");
  aTelegam.setAttribute("target", "_blank");
  articleMedea.appendChild(aTelegam);

  const imgTelegram = createEll("img");
  imgTelegram.setAttribute("src", "img/telegram.svg");
  imgTelegram.setAttribute("alt", "Telegram");
  addClass(imgTelegram, "telegram");
  aTelegam.appendChild(imgTelegram);

  const aFace = createEll("a");
  addClass(aFace, "footer-image");
  aFace.setAttribute(
    "href",
    "https://ru-ru.facebook.com/login/device-based/regular/login/?login_attempt=1"
  );
  aFace.setAttribute("target", "_blank");
  articleMedea.appendChild(aFace);

  const imgFace = createEll("img");
  imgFace.setAttribute("src", "img/facebook.svg");
  imgFace.setAttribute("alt", "facebook");
  addClass(imgFace, "facebook");
  aFace.appendChild(imgFace);

  const aIns = createEll("a");
  addClass(aIns, "footer-image");
  aIns.setAttribute("href", "https://www.instagram.com/");
  aIns.setAttribute("target", "_blank");
  articleMedea.appendChild(aIns);

  const imgIns = createEll("img");
  imgIns.setAttribute("src", "img/instagram.svg");
  imgIns.setAttribute("alt", "insta");
  addClass(imgIns, "insta");
  aIns.appendChild(imgIns);

  const aX = createEll("a");
  addClass(aX, "footer-image");
  aX.setAttribute("href", "https://x.com/rollingscopes?mx=2");
  aX.setAttribute("target", "_blank");
  articleMedea.appendChild(aX);

  const imgX = createEll("img");
  imgX.setAttribute("src", "img/X.svg");
  imgX.setAttribute("alt", "RS");
  addClass(imgX, "x");
  aX.appendChild(imgX);

  const articleTitleAbout = createEll("article");
  sectionTitleMagic.appendChild(articleTitleAbout);

  const titleAboutP = createEll("p");
  titleAboutP.innerText = "© Copyright 2025, All Rights Reserved";
  articleTitleAbout.appendChild(titleAboutP);

  const linkRSS = createEll("a");
  linkRSS.setAttribute("href", "https://rs.school/");
  linkRSS.setAttribute("target", "_blank");
  addClass(linkRSS, "size-conteiner");
  addClass(linkRSS, "footer-rs");
  linkRSS.innerText = "Made in Rolling Scopes School";
  sectionTitleMagic.appendChild(linkRSS);
}

export { Footer };
