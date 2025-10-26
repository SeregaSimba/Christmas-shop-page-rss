import { createEll, addClass } from "../../../utilities/createFunc";

function FifthSection() {
  const main = document.getElementById("main-pag");

  const sectionBest = createEll("section");
  addClass(sectionBest, "best-Gifts");
  addClass(sectionBest, "conteiner");
  sectionBest.setAttribute("id", "best-Gifts");
  main.appendChild(sectionBest);

  const sectionBestGift = createEll("section");
  addClass(sectionBestGift, "best-Gifts2");
  sectionBest.appendChild(sectionBestGift);

  const sectionBestTitle = createEll("section");
  addClass(sectionBestTitle, "best-gifts-title");
  sectionBestGift.appendChild(sectionBestTitle);

  const articleTitle = createEll("article");
  sectionBestTitle.appendChild(articleTitle);

  const bestTitleP = createEll("p");
  addClass(bestTitleP, "size-conteiner");
  addClass(bestTitleP, "best-p");
  bestTitleP.innerText = "Best Gifts";
  articleTitle.appendChild(bestTitleP);

  const bestTitleH2 = createEll("h2");
  addClass(bestTitleH2, "best-h2");
  bestTitleH2.innerText = "ESPECIALLY FOR YOU";
  sectionBestTitle.appendChild(bestTitleH2);

  const sectionContainerBest = createEll("section");
  addClass(sectionContainerBest, "best-Gifts-conteiner");
  sectionBestGift.appendChild(sectionContainerBest);

  // место под карточки товаров
}

export { FifthSection };

{
  /* <section class="best-Gifts conteiner" id="best-Gifts">

        <div class="best-Gifts2">//

          <div class="best-Gifts-conteiner"> //

            <div class="best-img">
              <div>
                <img src="img/image.svg" alt="image1" />
              </div>
              <div class="best-h">
                <h4 class="best-h4 for-work">FOR WORK</h4>
                <h3 class="best-h3">CONSOLE.LOG GURU</h3>
              </div>
            </div>

            <div class="best-img">
              <div>
                <img src="img/image-2.svg" alt="image2" />
              </div>
              <div class="best-h">
                <h4 class="best-h4 for-health">FOR HEALTH</h4>
                <h3 class="best-h3">HYDRATION BOT</h3>
              </div>
            </div>

            <div class="best-img">
              <div>
                <img src="img/image.svg" alt="image3" />
              </div>
              <div class="best-h">
                <h4 class="best-h4 for-work">FOR WORK</h4>
                <h3 class="best-h3">MERGE MASTER</h3>
              </div>
            </div>

            <div class="best-img">
              <div>
                <img src="img/image-3.svg" alt="image4" />
              </div>
              <div class="best-h">
                <h4 class="best-h4 for-harmony">FOR HARMONY</h4>
                <h3 class="best-h3">SPONTANEOUS CODING <br />PHILOSOPHER</h3>
              </div>
            </div>

          </div>

        </div>

      </section> */
}
