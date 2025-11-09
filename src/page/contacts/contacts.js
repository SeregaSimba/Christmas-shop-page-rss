import { createEll, addClass } from "../../utilities/createFunc";

function ContactsPage() {
  const main = document.getElementById("main-pag");

  const sectionContacts = createEll("section");
  addClass(sectionContacts, "sectionContacts");
  sectionContacts.setAttribute("id", "sectionContacts");
  sectionContacts.style.display = "none";
  main.appendChild(sectionContacts);
}

export { ContactsPage };
