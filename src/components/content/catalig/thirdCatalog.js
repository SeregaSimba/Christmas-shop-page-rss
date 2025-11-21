// 1: CreateCatalog("FOR HARMONY", "Joy Charger", 'img/image-3.svg', '');
// 2: CreateCatalog("FOR HARMONY", "Error Laugher", "img/image-3.svg", '');
// 3: CreateCatalog("FOR HARMONY", "Bug Acceptance Guru", "img/image-3.svg", '');
// 4: CreateCatalog("FOR HARMONY", "Spontaneous Coding Philosopher", "img/image-3.svg", '');
// 5: CreateCatalog("FOR HARMONY", "Deadline Sage", "img/image-3.svg", '');
// 6: CreateCatalog("FOR HARMONY", "Inspiration Maestro", "img/image-3.svg", '');
// 7: CreateCatalog("FOR HARMONY", "Peace Keeper", "img/image-3.svg", '');
// 8: CreateCatalog("FOR HARMONY", "Empathy Guru", "img/image-3.svg", '');
// 9: CreateCatalog("FOR HARMONY", "Laughter Generator", "img/image-3.svg", '');
// 10: CreateCatalog("FOR HARMONY", "Pause Master", "img/image-3.svg", '');
// 11: CreateCatalog("FOR HARMONY", "Coder Healer", "img/image-3.svg", '');
// 12: CreateCatalog("FOR HARMONY", "Music Code Curator", "img/image-3.svg", '');

import { CreateCatalog } from "../../../utilities/createItemCatalog";

function CreateCatalogSection3() {
  CreateCatalog(
    "FOR HARMONY",
    "Joy Charger",
    "img/image-3.svg",
    "for-harmony",
    "bestGiftsConteiner",
    productCards3,
    1
  );
}

const productCards3 = [
  {
    id: 1,
    name: "Joy Charger",
    img: "img/image-3.svg",
    textP:
      "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    nameSection: "FOR HARMONY",
    livePoint: "200",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 2,
    name: "Error Laugher",
    img: "img/image-3.svg",
    textP: "Laughs at code errors like they’re jokes instead of getting angry.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 3,
    name: "Bug Acceptance Guru",
    img: "img/image-3.svg",
    textP:
      "Accepts bugs as part of the journey to perfection — it’s just another task.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "400",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 4,
    name: "Spontaneous Coding Philosopher",
    img: "img/image-3.svg",
    textP:
      "Philosophically accepts any client suggestion after a long refactor.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "400",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 5,
    name: "Deadline Sage",
    img: "img/image-3.svg",
    textP:
      "Remains zen even when the deadline is close and the project manager is stressed.",
    nameSection: "FOR HARMONY",
    livePoint: "200",
    createPoint: "200",
    lovePoint: "300",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 6,
    name: "Inspiration Maestro",
    img: "img/image-3.svg",
    textP:
      "Finds inspiration on an empty screen as if masterpieces are already there.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "400",
    dreamPoint: "100",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 7,
    name: "Peace Keeper",
    img: "img/image-3.svg",
    textP: "Maintains inner calm even in moments of intense crisis.",
    nameSection: "FOR HARMONY",
    livePoint: "200",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 8,
    name: "Empathy Guru",
    img: "img/image-3.svg",
    textP: "Feels the team’s mood and can lift everyone’s spirits.",
    nameSection: "FOR HARMONY",
    livePoint: "500",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 9,
    name: "Laughter Generator",
    img: "img/image-3.svg",
    textP:
      "Can lighten any tense situation with a joke that even bugs laugh at.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "200",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 10,
    name: "Pause Master",
    img: "img/image-3.svg",
    textP: "Knows when to just step back from the keyboard and breathe.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "100",
    dreamPoint: "100",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 11,
    name: "Coder Healer",
    img: "img/image-3.svg",
    textP:
      "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#ff43f7",
  },
  {
    id: 12,
    name: "Music Code Curator",
    img: "img/image-3.svg",
    textP: "Creates work playlists so good, even deadlines follow the rhythm.",
    nameSection: "FOR HARMONY",
    livePoint: "300",
    createPoint: "200",
    lovePoint: "300",
    dreamPoint: "200",
    colorH2Fond: "#ff43f7",
  },
];

export { CreateCatalogSection3, productCards3 };

// -------------------------------------------------------------- 1

{
  /* <div class="shadov-window shadov-conteiner-none">
  
          <h4 class="best-h4 for-work">FOR HARMONY</h4> // -------------------------------
          <h3 class="best-h3">Joy Charger</h3> // -------------------------------
          <p>
            Finds joy in the little things—even in a build that finishes
            unexpectedly fast.
          </p> // -------------------------------
  
              <h6 class="shadov-window-h6">Live</h6> // -------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------

              <h6 class="shadov-window-h6">Create</h6> // -------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------

              <h6 class="shadov-window-h6">Love</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------
</div> */
}

// -------------------------------------------------------------- 1

// -------------------------------------------------------------- 2

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // -------------------------------
          <h3 class="best-h3">Error Laugher</h3> // -------------------------------
          <p>
            Laughs at code errors like they’re jokes instead of getting
            angry.
          </p> // -------------------------------

              <h6 class="shadov-window-h6">Live</h6> // -------------------------------
              <p class="shadov-window-p">+300</p> // -------------------------------

              <h6 class="shadov-window-h6">Create</h6> // -------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------

              <h6 class="shadov-window-h6">Love</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

</div> */
}

// -------------------------------------------------------------- 2

// -------------------------------------------------------------- 3

{
  /* <div class="shadov-window shadov-conteiner-none">
 
          <h4 class="best-h4 for-work">FOR HARMONY</h4> // ----------------------------------
          <h3 class="best-h3">Bug Acceptance Guru</h3> // ----------------------------------
          <p>
            Accepts bugs as part of the journey to perfection — it’s just
            another task.
          </p> // ----------------------------------

              <h6 class="shadov-window-h6">Live</h6> // ----------------------------------
              <p class="shadov-window-p">+300</p> // ----------------------------------

              <h6 class="shadov-window-h6">Create</h6> // ----------------------------------
              <p class="shadov-window-p">+200</p> // ----------------------------------

              <h6 class="shadov-window-h6">Love</h6> // ----------------------------------
              <p class="shadov-window-p">+500</p> // ----------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // ----------------------------------
              <p class="shadov-window-p">+400</p> // ----------------------------------
</div> */
}

// -------------------------------------------------------------- 3

// -------------------------------------------------------------- 4

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // -------------------------------
          <h3 class="best-h3">Spontaneous Coding Philosopher</h3> // -------------------------------
          <p>
            Philosophically accepts any client suggestion after a long
            refactor.
          </p> // -------------------------------

              <h6 class="shadov-window-h6">Live</h6> // -------------------------------
              <p class="shadov-window-p">+300</p> // -------------------------------

              <h6 class="shadov-window-h6">Create</h6> // -------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------

              <h6 class="shadov-window-h6">Love</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // -------------------------------
              <p class="shadov-window-p">+400</p> // -------------------------------
</div> */
}

// -------------------------------------------------------------- 4

// -------------------------------------------------------------- 5

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4>  // --------------------------------------
          <h3 class="best-h3">Deadline Sage</h3> // --------------------------------------
          <p>
            Remains zen even when the deadline is close and the project
            manager is stressed.
          </p> // --------------------------------------

              <h6 class="shadov-window-h6">Live</h6> // --------------------------------------
              <p class="shadov-window-p">+200</p> // --------------------------------------

              <h6 class="shadov-window-h6">Create</h6> // --------------------------------------
              <p class="shadov-window-p">+200</p> // --------------------------------------

              <h6 class="shadov-window-h6">Love</h6> // --------------------------------------
              <p class="shadov-window-p">+300</p> // --------------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // --------------------------------------
              <p class="shadov-window-p">+500</p> // --------------------------------------
</div> */
}

// -------------------------------------------------------------- 5

// -------------------------------------------------------------- 6

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4>// -------------------------------------
          <h3 class="best-h3">Inspiration Maestro</h3>// -------------------------------------
          <p>
            Finds inspiration on an empty screen as if masterpieces are
            already there.
          </p> // -------------------------------------

              <h6 class="shadov-window-h6">Live</h6> // -------------------------------------
              <p class="shadov-window-p">+300</p> // -------------------------------------

              <h6 class="shadov-window-h6">Create</h6> // -------------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------------

              <h6 class="shadov-window-h6">Love</h6> // -------------------------------------
              <p class="shadov-window-p">+400</p> // -------------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // -------------------------------------
              <p class="shadov-window-p">+100</p> // -------------------------------------
</div> */
}

// -------------------------------------------------------------- 6

// -------------------------------------------------------------- 7

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // ------------------------------------
          <h3 class="best-h3">Peace Keeper</h3> // ------------------------------------
          <p>Maintains inner calm even in moments of intense crisis.</p> // ------------------------------------

              <h6 class="shadov-window-h6">Live</h6> // ------------------------------------
              <p class="shadov-window-p">+200</p> // ------------------------------------

              <h6 class="shadov-window-h6">Create</h6> // ------------------------------------
              <p class="shadov-window-p">+200</p> // ------------------------------------

              <h6 class="shadov-window-h6">Love</h6> // ------------------------------------
              <p class="shadov-window-p">+500</p> // ------------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // ------------------------------------
              <p class="shadov-window-p">+500</p> // ------------------------------------
</div> */
}

// -------------------------------------------------------------- 7

// -------------------------------------------------------------- 8

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4>  // -------------------------------
          <h3 class="best-h3">Empathy Guru</h3> // -------------------------------
          <p>Feels the team’s mood and can lift everyone’s spirits.</p> // -------------------------------

              <h6 class="shadov-window-h6">Live</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

              <h6 class="shadov-window-h6">Create</h6> // -------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------

              <h6 class="shadov-window-h6">Love</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------
</div> */
}

// -------------------------------------------------------------- 8

// -------------------------------------------------------------- 9

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // --------------------------------------
          <h3 class="best-h3">Laughter Generator</h3> // --------------------------------------
          <p>
            Can lighten any tense situation with a joke that even bugs laugh
            at.
          </p> // --------------------------------------

              <h6 class="shadov-window-h6">Live</h6> // --------------------------------------
              <p class="shadov-window-p">+300</p> // --------------------------------------

              <h6 class="shadov-window-h6">Create</h6> // --------------------------------------
              <p class="shadov-window-p">+200</p> // --------------------------------------

              <h6 class="shadov-window-h6">Love</h6> // --------------------------------------
              <p class="shadov-window-p">+200</p> // --------------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // --------------------------------------
              <p class="shadov-window-p">+500</p> // --------------------------------------
</div> */
}

// -------------------------------------------------------------- 9

// -------------------------------------------------------------- 10

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // ---------------------------
          <h3 class="best-h3">Pause Master</h3> // ---------------------------
          <p>Knows when to just step back from the keyboard and breathe.</p> // ---------------------------

              <h6 class="shadov-window-h6">Live</h6> // ---------------------------
              <p class="shadov-window-p">+300</p> // ---------------------------

              <h6 class="shadov-window-h6">Create</h6> // ---------------------------
              <p class="shadov-window-p">+200</p> // ---------------------------

              <h6 class="shadov-window-h6">Love</h6> // ---------------------------
              <p class="shadov-window-p">+100</p> // ---------------------------

              <h6 class="shadov-window-h6">Dream</h6> // ---------------------------
              <p class="shadov-window-p">+100</p> // ---------------------------
</div> */
}

// -------------------------------------------------------------- 10

// -------------------------------------------------------------- 11

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // -------------------------------
          <h3 class="best-h3">Coder Healer</h3> // -------------------------------
          <p>
            Can support a colleague in their darkest hour, even if it’s a
            500 error.
          </p> // -------------------------------

              <h6 class="shadov-window-h6">Live</h6> // -------------------------------
              <p class="shadov-window-p">+300</p> // -------------------------------

              <h6 class="shadov-window-h6">Create</h6> // -------------------------------
              <p class="shadov-window-p">+200</p> // -------------------------------

              <h6 class="shadov-window-h6">Love</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // -------------------------------
              <p class="shadov-window-p">+500</p> // -------------------------------
</div> */
}

// -------------------------------------------------------------- 11

// -------------------------------------------------------------- 12

{
  /* <div class="shadov-window shadov-conteiner-none">

          <h4 class="best-h4 for-work">FOR HARMONY</h4> // ------------------------------
          <h3 class="best-h3">Music Code Curator</h3> // ------------------------------
          <p>
            Creates work playlists so good, even deadlines follow the
            rhythm.
          </p> // ------------------------------

              <h6 class="shadov-window-h6">Live</h6> // ------------------------------
              <p class="shadov-window-p">+300</p> // ------------------------------

              <h6 class="shadov-window-h6">Create</h6> // ------------------------------
              <p class="shadov-window-p">+200</p> // ------------------------------

              <h6 class="shadov-window-h6">Love</h6> // ------------------------------
              <p class="shadov-window-p">+300</p> // ------------------------------

              <h6 class="shadov-window-h6">Dream</h6> // ------------------------------
              <p class="shadov-window-p">+200</p> // ------------------------------
</div> */
}

// -------------------------------------------------------------- 12
