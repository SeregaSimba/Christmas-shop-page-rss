(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const l of r)
      if (l.type === "childList")
        for (const d of l.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const l = {};
    return (
      r.integrity && (l.integrity = r.integrity),
      r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const l = a(r);
    fetch(r.href, l);
  }
})();
function e(i) {
  return document.createElement(i);
}
function t(i, n) {
  return i.classList.add(n);
}
function ee() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    a = document.getElementById("aboutPage"),
    o = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  n.style.display === "none"
    ? ((n.style.display = "flex"),
      (i.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"),
      (r.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"),
      (r.style.display = "none"));
}
function oe() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    a = document.getElementById("aboutPage"),
    o = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  a.style.display === "none"
    ? ((a.style.display = "flex"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (r.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"),
      (r.style.display = "none"));
}
function se() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    a = document.getElementById("aboutPage"),
    o = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  o.style.display === "none"
    ? ((o.style.display = "flex"),
      (a.style.display = "none"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (r.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"),
      (r.style.display = "none"));
}
function re() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    a = document.getElementById("aboutPage"),
    o = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  r.style.display === "none"
    ? ((r.style.display = "flex"),
      (o.style.display = "none"),
      (a.style.display = "none"),
      (i.style.display = "none"),
      (n.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"),
      (r.style.display = "none"));
}
function $() {
  const i = document.getElementById("span1"),
    n = document.getElementById("span2"),
    a = document.getElementById("section-bar-menu");
  i.classList.toggle("span-bar-menu-click"),
    n.classList.toggle("span-bar-menu2-click"),
    a.classList.toggle("section-bar-menu-none"),
    document.body.classList.toggle("bodyOverflow");
}
function le() {
  const i = document.getElementById("header"),
    n = e("section");
  t(n, "header"), i.appendChild(n);
  const a = e("a");
  a.setAttribute("href", "index.html"), n.appendChild(a);
  const o = e("article");
  t(o, "logo"), a.appendChild(o);
  const r = e("img");
  r.setAttribute("src", "img/snowflakeICON.svg"),
    r.setAttribute("alt", "Logo"),
    o.appendChild(r);
  const l = e("p");
  t(l, "header-p"), (l.innerText = "THE GIFTS"), o.appendChild(l);
  const d = e("section");
  t(d, "contents"), n.appendChild(d);
  const p = e("section");
  t(p, "bar-window-menu"),
    p.setAttribute("id", "openWindowMenu"),
    d.appendChild(p);
  const c = e("ul");
  t(c, "ul-header"), p.appendChild(c);
  const g = e("li");
  t(g, "li-header");
  const m = e("li");
  t(m, "li-header");
  const f = e("li");
  t(f, "li-header");
  const h = e("li");
  t(h, "li-header"), c.append(g, m, f, h);
  const y = e("button");
  t(y, "li-a-header"),
    (y.innerText = "GIFTS"),
    y.addEventListener("click", ee),
    g.appendChild(y);
  const u = e("button");
  t(u, "li-a-header"),
    (u.innerText = "ABOUT"),
    u.addEventListener("click", oe),
    m.appendChild(u);
  const b = e("button");
  t(b, "li-a-header"),
    (b.innerText = "BEST"),
    b.addEventListener("click", se),
    f.appendChild(b);
  const C = e("button");
  t(C, "li-a-header"),
    (C.innerText = "CONTACTS"),
    C.addEventListener("click", re),
    h.appendChild(C);
  const E = e("article");
  t(E, "button-bar-men"), E.setAttribute("id", "openBar"), d.appendChild(E);
  const A = e("button");
  t(A, "slider-bar"),
    A.setAttribute("id", "sliderBar2None"),
    E.appendChild(A),
    A.addEventListener("click", $);
  const F = e("span");
  t(F, "span-bar-menu"), F.setAttribute("id", "span1"), A.appendChild(F);
  const O = e("span");
  t(O, "span-bar-menu2"), O.setAttribute("id", "span2"), A.appendChild(O);
}
function ce() {
  const i = document.getElementById("globalMain"),
    n = e("section");
  t(n, "hero"), t(n, "container1"), i.appendChild(n);
  const a = e("section");
  t(a, "hero-container"), n.appendChild(a);
  const o = e("article");
  t(o, "christmas"), a.appendChild(o);
  const r = e("p");
  (r.innerText = "Merry Christmas"), o.appendChild(r);
  const l = e("article");
  t(l, "heroH1"), a.appendChild(l);
  const d = e("h1");
  (d.innerText = "GIFT"), l.appendChild(d);
  const p = e("h1");
  (p.innerText = "YOURSELF THE MAGIC"), l.appendChild(p);
  const c = e("h1");
  (c.innerText = "OF"), l.appendChild(c);
  const g = e("h1");
  (g.innerText = "NEW POSSIBILITIES"), l.appendChild(g);
  const m = e("article");
  t(m, "button"), a.appendChild(m);
  const f = e("button");
  f.setAttribute("id", "button"),
    (f.innerText = "EXPLORE MAGICAL GIFTS"),
    f.addEventListener("click", ee),
    m.appendChild(f);
  const h = e("article");
  t(h, "christmas2"), a.appendChild(h);
  const y = e("p");
  (y.innerText = "and Happy New Year"), h.appendChild(y);
}
const de = "./assets/santa-_rx7H_QE.png";
function me() {
  const i = document.getElementById("globalMain"),
    n =
      "This New Year marks the beginning of your journey. to inner harmony and new strengths. We offer unique gifts that will help you improve your life.",
    a = e("section");
  t(a, "about"), a.setAttribute("id", "about"), i.appendChild(a);
  const o = e("section");
  t(o, "about2"), a.appendChild(o);
  const r = e("section");
  t(r, "about3"), o.appendChild(r);
  const l = e("section");
  t(l, "about4"), r.appendChild(l);
  const d = e("button");
  t(d, "buttonAbout"),
    (d.innerText = "About"),
    d.addEventListener("click", oe),
    l.appendChild(d);
  const p = e("h2");
  t(p, "aboutH2"),
    (p.innerText = "UNLEASH YOUR INNER SUPERHERO!"),
    l.appendChild(p);
  const c = e("p");
  t(c, "aboutP"), (c.innerText = n), l.appendChild(c);
  const g = e("section");
  t(g, "about-img"), r.appendChild(g);
  const m = e("img");
  t(m, "about-imga"),
    m.setAttribute("src", de),
    m.setAttribute("alt", "Santa"),
    g.appendChild(m);
}
const pe = 200;
let R = 0;
const U = window.innerWidth;
function _() {
  const i = document.getElementById("styleLeftIndex"),
    n = -R * pe;
  i.style.transform = `translateX(${n}px)`;
}
function ge() {
  const i = document.getElementById("buttonSliderLeft"),
    n = document.getElementById("buttonSliderRight");
  R > 0 && ((R -= 1), _(), n.classList.remove("button-Right-none")),
    R <= 0 && (console.log(R), i.classList.add("button-Left-none"));
}
function he() {
  const i = document.getElementById("buttonSliderLeft"),
    n = document.getElementById("buttonSliderRight");
  U > 1330
    ? R < 4 &&
      ((R += 1),
      _(),
      i.classList.remove("button-Left-none"),
      R === 4 && n.classList.add("button-Right-none"))
    : U > 1120
    ? R < 5 &&
      ((R += 1),
      _(),
      i.classList.remove("button-Left-none"),
      R === 5 && n.classList.add("button-Right-none"))
    : U > 920
    ? R < 6 &&
      ((R += 1),
      _(),
      i.classList.remove("button-Left-none"),
      R === 6 && n.classList.add("button-Right-none"))
    : U < 920 && U > 360
    ? R < 8 &&
      ((R += 1),
      _(),
      i.classList.remove("button-Left-none"),
      R === 8 && n.classList.add("button-Right-none"))
    : U <= 360 &&
      R < 9 &&
      ((R += 1),
      _(),
      i.classList.remove("button-Left-none"),
      R === 9 && n.classList.add("button-Right-none"));
}
function ue() {
  const i = document.getElementById("globalMain"),
    n = e("section");
  t(n, "slider"), i.appendChild(n);
  const a = e("section");
  t(a, "container-slider"), n.appendChild(a);
  const o = e("section");
  t(o, "slider-title"), a.appendChild(o);
  const r = e("h3");
  (r.innerText = "Become Happier!"), o.appendChild(r);
  const l = e("h2");
  (l.innerText = "IN THE NEW 2025"), o.appendChild(l);
  const d = e("section");
  t(d, "slider-container-main"), a.appendChild(d);
  const p = e("section");
  t(p, "slider2"), d.appendChild(p);
  const c = e("section");
  t(c, "christmas-slider"),
    c.setAttribute("id", "styleLeftIndex"),
    p.appendChild(c);
  const g = e("article");
  c.appendChild(g);
  const m = e("p");
  t(m, "text-slider"), (m.innerText = "LIVE"), g.appendChild(m);
  const f = e("article");
  c.appendChild(f);
  const h = e("img");
  t(h, "imagesSlider"),
    h.setAttribute("src", "img/snowman.jpg"),
    h.setAttribute("alt", "Snowman"),
    f.appendChild(h);
  const y = e("article");
  c.appendChild(y);
  const u = e("p");
  t(u, "text-slider"), (u.innerText = "CREATE"), y.appendChild(u);
  const b = e("article");
  c.appendChild(b);
  const C = e("img");
  t(C, "imagesSlider"),
    C.setAttribute("src", "img/christmas-trees.jpg"),
    C.setAttribute("alt", "Christmas Trees"),
    b.appendChild(C);
  const E = e("article");
  c.appendChild(E);
  const A = e("p");
  t(A, "text-slider"), (A.innerText = "LOVE"), E.appendChild(A);
  const F = e("article");
  c.appendChild(F);
  const O = e("img");
  t(O, "imagesSlider"),
    O.setAttribute("src", "img/christmas-tree-ball.png"),
    O.setAttribute("alt", "Christmas Tree Ball"),
    F.appendChild(O);
  const T = e("article");
  c.appendChild(T);
  const k = e("p");
  t(k, "text-slider"), (k.innerText = "DREAM"), T.appendChild(k);
  const x = e("article");
  c.appendChild(x);
  const M = e("img");
  t(M, "imagesSlider"),
    M.setAttribute("src", "img/fairytale-house.png"),
    M.setAttribute("alt", "Fairytale House"),
    x.appendChild(M);
  const I = e("article");
  t(I, "button-slider"), d.appendChild(I);
  const S = e("button");
  S.setAttribute("id", "buttonSliderLeft"),
    t(S, "button-slider-main"),
    t(S, "button-Left-none"),
    S.addEventListener("click", ge),
    I.appendChild(S);
  const B = e("img");
  B.setAttribute("src", "img/Vectorleft.png"),
    B.setAttribute("alt", "Vector"),
    B.setAttribute("id", "vector"),
    S.appendChild(B);
  const L = e("button");
  L.setAttribute("id", "buttonSliderRight"),
    t(L, "button-slider-main2"),
    L.addEventListener("click", he),
    I.appendChild(L);
  const w = e("img");
  w.setAttribute("src", "img/Vectorright.png"),
    w.setAttribute("alt", "Vector"),
    w.setAttribute("id", "vector2"),
    L.appendChild(w);
}
function fe() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    a = document.getElementById("forHealth"),
    o = document.getElementById("forHarmony");
  i.style.display,
    (i.style.display = "flex"),
    (n.style.display = "none"),
    (a.style.display = "none"),
    (o.style.display = "none");
}
function ye() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    a = document.getElementById("forHealth"),
    o = document.getElementById("forHarmony");
  n.style.display === "none"
    ? ((n.style.display = "flex"),
      (i.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"));
}
function Ce() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    a = document.getElementById("forHealth"),
    o = document.getElementById("forHarmony");
  a.style.display === "none"
    ? ((a.style.display = "flex"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (o.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"));
}
function be() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    a = document.getElementById("forHealth"),
    o = document.getElementById("forHarmony");
  o.style.display === "none"
    ? ((o.style.display = "flex"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (a.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (a.style.display = "none"),
      (o.style.display = "none"));
}
function Pe() {
  const i = document.getElementById("containerSectionCards");
  i.classList.remove("containerSectionCards"), (i.innerHTML = "");
}
function ve() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  (n.id = "containerSectionCards"), i.appendChild(n);
}
function He(i, n) {
  const a = document.getElementById("containerSectionCards"),
    o = i.find((D) => D.id === n);
  function r(D) {
    const q = [];
    for (let Q = 0; Q < 5; Q += 1) {
      const J = e("img");
      t(J, D), (J.src = "img/snowflakeICON.svg"), q.push(J);
    }
    return q;
  }
  function l(D, q, Q) {
    const J = Math.floor(+D / 100),
      ae = document.getElementsByClassName(q);
    for (let Z = 0; Z < J && Z < ae.length; Z += 1) ae[Z].classList.add(Q);
  }
  const d = r("live"),
    p = r("create"),
    c = r("love"),
    g = r("dream"),
    m = e("section");
  (m.id = "sectionCards"), t(m, "section-cards"), a.appendChild(m);
  const f = e("section");
  t(f, "containerImg"), m.appendChild(f);
  const h = e("button");
  t(h, "buttonCloseCarts"), h.addEventListener("click", Pe), f.appendChild(h);
  const y = e("span");
  t(y, "spanButtonIcon1"), h.appendChild(y);
  const u = e("span");
  t(u, "spanButtonIcon2"), h.appendChild(u);
  const b = e("img");
  t(b, "cardsImg"), (b.src = o.img), f.appendChild(b);
  const C = e("section");
  t(C, "containerTitleCart"), m.appendChild(C);
  const E = e("h2");
  t(E, "titleCartsH2"),
    (E.innerText = o?.nameSection),
    (E.style.color = o?.colorH2Fond),
    C.appendChild(E);
  const A = e("h1");
  t(A, "titleCartsH1"), (A.innerText = o?.name), C.appendChild(A);
  const F = e("p");
  t(F, "titleCartsP"), (F.innerText = o?.textP), C.appendChild(F);
  const O = e("h2");
  t(O, "titleCartsH22"),
    (O.innerText = "ADDS SUPERPOWERS TO:"),
    C.appendChild(O);
  const T = e("section");
  t(T, "sectionParamCart"), C.appendChild(T);
  const k = e("article");
  t(k, "articleLive"), T.appendChild(k);
  const x = e("article");
  t(x, "articleLiveP"), k.appendChild(x);
  const M = e("p");
  t(M, "liveP"), (M.innerText = "Live"), x.appendChild(M);
  const I = e("p");
  t(I, "liveP"), (I.innerText = `+ ${o?.livePoint}`), x.appendChild(I);
  const S = e("article");
  t(S, "liveArticleImage"),
    k.appendChild(S),
    d.forEach((D) => S.appendChild(D)),
    l(o?.livePoint, "live", "liveOp1");
  const B = e("article");
  t(B, "articleCreate"), T.appendChild(B);
  const L = e("article");
  t(L, "articleCreateP"), B.appendChild(L);
  const w = e("p");
  t(w, "createP"), (w.innerText = "Create"), L.appendChild(w);
  const G = e("p");
  t(G, "createP"), (G.innerText = `+ ${o?.createPoint}`), L.appendChild(G);
  const W = e("article");
  t(W, "createP"),
    B.appendChild(W),
    p.forEach((D) => W.appendChild(D)),
    l(o?.createPoint, "create", "createOp1");
  const Y = e("article");
  t(Y, "articleLove"), T.appendChild(Y);
  const N = e("article");
  t(N, "articleLoveP"), Y.appendChild(N);
  const j = e("p");
  t(j, "loveP"), (j.innerText = "Love"), N.appendChild(j);
  const V = e("p");
  t(V, "loveP"), (V.innerText = `+ ${o?.lovePoint}`), N.appendChild(V);
  const X = e("article");
  t(X, "loveP"),
    Y.appendChild(X),
    c.forEach((D) => X.appendChild(D)),
    l(o?.lovePoint, "love", "liveOp1");
  const K = e("article");
  t(K, "articleDream"), T.appendChild(K);
  const z = e("article");
  t(z, "articleDreamP"), K.appendChild(z);
  const te = e("p");
  t(te, "dreamP"), (te.innerText = "Dream"), z.appendChild(te);
  const ne = e("p");
  t(ne, "dreamP"), (ne.innerText = `+ ${o?.dreamPoint}`), z.appendChild(ne);
  const ie = e("article");
  t(ie, "dreamP"),
    K.appendChild(ie),
    g.forEach((D) => ie.appendChild(D)),
    l(o?.dreamPoint, "dream", "dreamOp1");
}
function s(i, n, a, o, r, l, d) {
  const p = document.getElementById(r),
    c = e("button");
  t(c, "best-img"), p.appendChild(c);
  function g() {
    He(l, d);
  }
  c.addEventListener("click", () => {
    const b = document.getElementById("containerSectionCards");
    b.classList.add("containerSectionCards"), (b.innerHTML = ""), g();
  });
  const m = e("article");
  c.appendChild(m);
  const f = e("img");
  f.setAttribute("src", a), f.setAttribute("alt", "image1"), m.appendChild(f);
  const h = e("article");
  t(h, "best-h"), c.appendChild(h);
  const y = e("h4");
  t(y, "best-h4"), t(y, o), (y.innerText = i), h.appendChild(y);
  const u = e("h3");
  t(u, "best-h3"), (u.innerText = n), h.appendChild(u);
}
function Oe() {
  s(
    "FOR WORK",
    "CONSOLE.LOG GURU",
    "img/image.svg",
    "for-work",
    "bestGiftsConteiner",
    P,
    1
  );
}
const P = [
  {
    id: 1,
    name: "Console.log Guru",
    img: "./img/image.svg",
    textP: "Uses Console.log like a crystal ball to find any issue.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "200",
    dreamPoint: "400",
    colorH2Fond: "#4361ff",
  },
  {
    id: 2,
    name: "BUG MAGNET",
    img: "./img/image.svg",
    textP: "Able to find bugs in code like they were placed there on purpose",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "200",
    dreamPoint: "400",
    colorH2Fond: "#4361ff",
  },
  {
    id: 3,
    name: "Merge Master",
    img: "./img/image.svg",
    textP:
      "Merges branches in Git without conflicts, like a wizard during an exam.",
    nameSection: "FOR WORK",
    livePoint: "200",
    createPoint: "500",
    lovePoint: "200",
    dreamPoint: "300",
    colorH2Fond: "#4361ff",
  },
  {
    id: 4,
    name: "Shortcut Cheater",
    img: "./img/image.svg",
    textP: "Knows every keyboard shortcut like they were born with them.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "400",
    dreamPoint: "200",
    colorH2Fond: "#4361ff",
  },
  {
    id: 5,
    name: "Async Tamer",
    img: "./img/image.svg",
    textP: "Handles asynchronous code and promises like well-trained pets.",
    nameSection: "FOR WORK",
    livePoint: "100",
    createPoint: "400",
    lovePoint: "200",
    dreamPoint: "300",
    colorH2Fond: "#4361ff",
  },
  {
    id: 6,
    name: "CSS Tamer",
    img: "./img/image.svg",
    textP:
      "Can make Flex-box and Grid work together like they were always best friends.",
    nameSection: "FOR WORK",
    livePoint: "200",
    createPoint: "200",
    lovePoint: "200",
    dreamPoint: "200",
    colorH2Fond: "#4361ff",
  },
  {
    id: 7,
    name: "Time Hacker",
    img: "./img/image.svg",
    textP: "Writes code at the last moment but always meets the deadline.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "500",
    dreamPoint: "200",
    colorH2Fond: "#4361ff",
  },
  {
    id: 8,
    name: "Layout Master",
    img: "./img/image.svg",
    textP:
      "Creates perfect layouts on the first try, like they can read the designer's mind.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "300",
    lovePoint: "200",
    dreamPoint: "200",
    colorH2Fond: "#4361ff",
  },
  {
    id: 9,
    name: "Documentation Whisperer",
    img: "./img/image.svg",
    textP: "Understands cryptic documentation as if they wrote it themselves.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "200",
    dreamPoint: "100",
    colorH2Fond: "#4361ff",
  },
  {
    id: 10,
    name: "Feedback Master",
    img: "./img/image.svg",
    textP: "Accepts client revisions with the Zen calm of Buddha.",
    nameSection: "FOR WORK",
    livePoint: "300",
    createPoint: "500",
    lovePoint: "300",
    dreamPoint: "400",
    colorH2Fond: "#4361ff",
  },
  {
    id: 11,
    name: "Code Minimalist",
    img: "./img/image.svg",
    textP: "Writes code so concise that one line does more than a whole file.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "500",
    dreamPoint: "200",
    colorH2Fond: "#4361ff",
  },
  {
    id: 12,
    name: "Pixel-Perfect Magician",
    img: "./img/image.svg",
    textP:
      "Aligns elements to the last pixel, even when the design looks abstract.",
    nameSection: "FOR WORK",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "400",
    dreamPoint: "400",
    colorH2Fond: "#4361ff",
  },
];
function Ae() {
  s(
    "FOR HEALTH",
    "Posture Levitation",
    "img/image-2.svg",
    "for-health",
    "bestGiftsConteiner",
    v,
    1
  );
}
const v = [
  {
    id: 1,
    name: "Posture Levitation",
    img: "./img/image-2.svg",
    textP: "Can sit for hours, but maintains perfect posture like a ballerina.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "500",
    lovePoint: "500",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 2,
    name: "Step Master",
    img: "./img/image-2.svg",
    textP: "Gets 10,000 steps a day even while sitting at the computer.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "300",
    lovePoint: "500",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 3,
    name: "Snack Resister",
    img: "./img/image-2.svg",
    textP: "Ignoring desktop snacks like a strict dietician.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "100",
    lovePoint: "200",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 4,
    name: "Hydration Bot",
    img: "./img/image-2.svg",
    textP:
      "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
    nameSection: "FOR HEALTH",
    livePoint: "500",
    createPoint: "300",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#06a44f",
  },
  {
    id: 5,
    name: "Sleep Overlord",
    img: "./img/image-2.svg",
    textP: "Sleeps 6 hours but feels like they had 10.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "500",
    lovePoint: "500",
    dreamPoint: "500",
    colorH2Fond: "#06a44f",
  },
  {
    id: 6,
    name: "Break Guru",
    img: "./img/image-2.svg",
    textP:
      "Takes a stretch break every hour without forgetting, no matter how focused.",
    nameSection: "FOR HEALTH",
    livePoint: "300",
    createPoint: "300",
    lovePoint: "300",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 7,
    name: "Eye Protector",
    img: "./img/image-2.svg",
    textP:
      " Can work all day at the monitor without feeling like their eyes are on fire.",
    nameSection: "FOR HEALTH",
    livePoint: "100",
    createPoint: "300",
    lovePoint: "500",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 8,
    name: "Stress Dodger",
    img: "./img/image-2.svg",
    textP: "Masters meditation right at the keyboard.",
    nameSection: "FOR HEALTH",
    livePoint: "100",
    createPoint: "400",
    lovePoint: "200",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 9,
    name: "Yoga Coder",
    img: "./img/image-2.svg",
    textP: "Easily switches from coding to yoga and back.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "400",
    lovePoint: "400",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 10,
    name: "Healthy Shacker",
    img: "./img/image-2.svg",
    textP: "Always picks fruit, even when chocolate is within arm’s reach.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "300",
    lovePoint: "200",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 11,
    name: "Chair Exerciser",
    img: "./img/image-2.svg",
    textP: "Manages to work out without leaving the chair.",
    nameSection: "FOR HEALTH",
    livePoint: "500",
    createPoint: "500",
    lovePoint: "500",
    dreamPoint: "400",
    colorH2Fond: "#06a44f",
  },
  {
    id: 12,
    name: "Caffeine Filter",
    img: "./img/image-2.svg",
    textP: "Drinks coffee at night and still falls asleep with no problem.",
    nameSection: "FOR HEALTH",
    livePoint: "400",
    createPoint: "300",
    lovePoint: "500",
    dreamPoint: "200",
    colorH2Fond: "#06a44f",
  },
];
function Re() {
  s(
    "FOR HARMONY",
    "Joy Charger",
    "img/image-3.svg",
    "for-harmony",
    "bestGiftsConteiner",
    H,
    1
  );
}
const H = [
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
function Ee() {
  Oe(), Ae(), Re();
}
function Fe() {
  const i = document.getElementById("globalMain"),
    n = e("section");
  t(n, "best-Gifts"), n.setAttribute("id", "best-Gifts"), i.appendChild(n);
  const a = e("section");
  t(a, "best-Gifts2"), n.appendChild(a);
  const o = e("section");
  t(o, "best-gifts-title"), a.appendChild(o);
  const r = e("article");
  o.appendChild(r);
  const l = e("h1");
  t(l, "best-p"), (l.innerText = "Best Gifts"), r.appendChild(l);
  const d = e("h2");
  t(d, "best-h2"), (d.innerText = "ESPECIALLY FOR YOU"), o.appendChild(d);
  const p = e("section");
  t(p, "best-Gifts-conteiner"),
    p.setAttribute("id", "bestGiftsConteiner"),
    a.appendChild(p),
    Ee();
}
class Te {
  constructor() {
    (this.newYar = new Date(new Date().getFullYear() + 1, 0, 1)),
      (this.intervalId = null);
  }
  _updateTime() {
    (this._now = new Date()),
      (this._diff = this.newYar - this._now),
      this._diff < 0 && (this._diff = 0);
  }
  getDay() {
    return Math.floor(this._diff / 864e5);
  }
  getHours() {
    return Math.floor((this._diff / 36e5) % 24);
  }
  getMinutes() {
    return Math.floor((this._diff / 6e4) % 60);
  }
  getSeconds() {
    return Math.floor((this._diff / 1e3) % 60);
  }
  start(n) {
    this.intervalId = setInterval(() => {
      this._updateTime(),
        n({
          day: this.getDay(),
          hours: this.getHours(),
          minutes: this.getMinutes(),
          seconds: this.getSeconds(),
        });
    }, 1e3);
  }
  stop() {
    clearInterval(this.intervalId);
  }
}
function Ie() {
  const i = document.getElementById("globalMain"),
    n = new Te(),
    a = e("section");
  t(a, "CTA"), i.appendChild(a);
  const o = e("section");
  t(o, "cta-conteiner"), a.appendChild(o);
  const r = e("section");
  t(r, "title-sta-section"), o.appendChild(r);
  const l = e("h2");
  t(l, "sta-h2"),
    (l.innerText = "READY TO START YOUR JOURNEY"),
    r.appendChild(l);
  const d = e("h2");
  t(d, "sta-h2"), (d.innerText = "TO A"), r.appendChild(d);
  const p = e("h2");
  t(p, "sta-h2"),
    (p.innerText = "BETTER VERSION OF YOURSELF?"),
    r.appendChild(p);
  const c = e("section");
  t(c, "sta-button-conteiner"), o.appendChild(c);
  const g = e("article");
  c.appendChild(g);
  const m = e("button");
  t(m, "sta-button"),
    m.setAttribute("id", "but2"),
    (m.innerText = "EXPLORE MAGICAL GIFTS"),
    m.addEventListener("click", ee),
    g.appendChild(m);
  const f = e("section");
  t(f, "title-after-sta"), o.appendChild(f);
  const h = e("article");
  t(h, "sta-p"), f.appendChild(h);
  const y = e("p");
  (y.innerText = "The New Year is Coming Soon..."), h.appendChild(y);
  const u = e("section");
  t(u, "time"), f.appendChild(u);
  const b = e("article");
  t(b, "sta-time1"), u.appendChild(b);
  const C = e("p");
  t(C, "timer"), C.setAttribute("id", "dey"), b.appendChild(C);
  const E = e("span");
  E.setAttribute("id", "d"), C.appendChild(E);
  const A = e("p");
  t(A, "sta-deis"), (A.innerText = "DAYS"), b.appendChild(A);
  const F = e("span");
  t(F, "sta-span1"), u.appendChild(F);
  const O = e("article");
  t(O, "sta-time1"), u.appendChild(O);
  const T = e("p");
  t(T, "timer"), O.appendChild(T);
  const k = e("span");
  k.setAttribute("id", "h"), T.appendChild(k);
  const x = e("p");
  t(x, "sta-deis"), (x.innerText = "HORS"), O.appendChild(x);
  const M = e("span");
  t(M, "sta-span1"), u.appendChild(M);
  const I = e("article");
  t(I, "sta-time1"), u.appendChild(I);
  const S = e("p");
  t(S, "timer"), I.appendChild(S);
  const B = e("span");
  B.setAttribute("id", "m"), S.appendChild(B);
  const L = e("p");
  t(L, "sta-deis"), (L.innerText = "MINUTES"), I.appendChild(L);
  const w = e("span");
  t(w, "sta-span1"), u.appendChild(w);
  const G = e("article");
  t(G, "sta-time1"), u.appendChild(G);
  const W = e("p");
  t(W, "timer"), G.appendChild(W);
  const Y = e("span");
  Y.setAttribute("id", "s"), W.appendChild(Y);
  const N = e("p");
  t(N, "sta-deis"),
    (N.innerText = "SECONDS"),
    G.appendChild(N),
    n.start(({ day: j, hours: V, minutes: X, seconds: K }) => {
      (document.getElementById("d").textContent = j),
        (document.getElementById("h").textContent = V),
        (document.getElementById("m").textContent = X),
        (document.getElementById("s").textContent = K);
    });
}
function Se() {
  s(
    "FOR HARMONY",
    "Joy Charger",
    "img/image-3.svg",
    "for-harmony",
    "forHarmony",
    H,
    1
  ),
    s(
      "FOR HARMONY",
      "Error Laugher",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      2
    ),
    s(
      "FOR HARMONY",
      "Bug Acceptance Guru",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      3
    ),
    s(
      "FOR HARMONY",
      "Spontaneous Coding Philosopher",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      4
    ),
    s(
      "FOR HARMONY",
      "Deadline Sage",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      5
    ),
    s(
      "FOR HARMONY",
      "Inspiration Maestro",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      6
    ),
    s(
      "FOR HARMONY",
      "Peace Keeper",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      7
    ),
    s(
      "FOR HARMONY",
      "Empathy Guru",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      8
    ),
    s(
      "FOR HARMONY",
      "Laughter Generator",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      9
    ),
    s(
      "FOR HARMONY",
      "Pause Master",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      10
    ),
    s(
      "FOR HARMONY",
      "Coder Healer",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      11
    ),
    s(
      "FOR HARMONY",
      "Music Code Curator",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony",
      H,
      12
    );
}
function Le() {
  const i = document.getElementById("contentShop"),
    n = e("section");
  t(n, "for-Harmony"),
    t(n, "conteiner-dest-magasin"),
    n.setAttribute("id", "forHarmony"),
    (n.style.display = "none"),
    i.appendChild(n),
    Se();
}
function Be() {
  s(
    "FOR HEALTH",
    "Posture Levitation",
    "img/image-2.svg",
    "for-health",
    "forHealth",
    v,
    1
  ),
    s(
      "FOR HEALTH",
      "Step Master",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      2
    ),
    s(
      "FOR HEALTH",
      "Snack Resister",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      3
    ),
    s(
      "FOR HEALTH",
      "Hydration Bot",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      4
    ),
    s(
      "FOR HEALTH",
      "Sleep Overlord",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      5
    ),
    s(
      "FOR HEALTH",
      "Break Guru",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      6
    ),
    s(
      "FOR HEALTH",
      "Eye Protector",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      7
    ),
    s(
      "FOR HEALTH",
      "Stress Dodger",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      8
    ),
    s(
      "FOR HEALTH",
      "Yoga Coder",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      9
    ),
    s(
      "FOR HEALTH",
      "Healthy Sacker",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      10
    ),
    s(
      "FOR HEALTH",
      "Chair Exerciser",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      11
    ),
    s(
      "FOR HEALTH",
      "Caffeine Filter",
      "img/image-2.svg",
      "for-health",
      "forHealth",
      v,
      12
    );
}
function xe() {
  const i = document.getElementById("contentShop"),
    n = e("section");
  t(n, "for-Health"),
    t(n, "conteiner-dest-magasin"),
    n.setAttribute("id", "forHealth"),
    (n.style.display = "none"),
    i.appendChild(n),
    Be();
}
function ke() {
  s(
    "FOR WORK",
    "CONSOLE.LOG GURU",
    "img/image.svg",
    "for-work",
    "ForWork",
    P,
    1
  ),
    s("FOR WORK", "BUG MAGNET", "img/image.svg", "for-work", "ForWork", P, 2),
    s("FOR WORK", "Merge Master", "img/image.svg", "for-work", "ForWork", P, 3),
    s(
      "FOR WORK",
      "Shortcut Cheater",
      "img/image.svg",
      "for-work",
      "ForWork",
      P,
      4
    ),
    s("FOR WORK", "Async Tamer", "img/image.svg", "for-work", "ForWork", P, 5),
    s("FOR WORK", "CSS Tamer", "img/image.svg", "for-work", "ForWork", P, 6),
    s("FOR WORK", "Time Hacker", "img/image.svg", "for-work", "ForWork", P, 7),
    s(
      "FOR WORK",
      "Layout Master",
      "img/image.svg",
      "for-work",
      "ForWork",
      P,
      8
    ),
    s(
      "FOR WORK",
      "Documentation Whisperer",
      "img/image.svg",
      "for-work",
      "ForWork",
      P,
      9
    ),
    s(
      "FOR WORK",
      "Feedback Master",
      "img/image.svg",
      "for-work",
      "ForWork",
      P,
      10
    ),
    s(
      "FOR WORK",
      "Code Minimalist",
      "img/image.svg",
      "for-work",
      "ForWork",
      P,
      11
    ),
    s(
      "FOR WORK",
      "Pixel-Perfect Magician",
      "img/image.svg",
      "for-work",
      "ForWork",
      P,
      12
    );
}
function Me() {
  const i = document.getElementById("contentShop"),
    n = e("section");
  t(n, "for-Work"),
    t(n, "conteiner-dest-magasin"),
    n.setAttribute("id", "ForWork"),
    (n.style.display = "none"),
    i.appendChild(n),
    ke();
}
function we() {
  const i = document.getElementById("contentShop"),
    n = e("section");
  t(n, "hero-conteiner3"), i.appendChild(n);
  const a = e("article");
  t(a, "h12"), n.appendChild(a);
  const o = e("h1");
  (o.innerText = "ACHIEVE HEALTH HARMONY,"), a.appendChild(o);
  const r = e("h1");
  (r.innerText = "AND"), a.appendChild(r);
  const l = e("h1");
  (l.innerText = "INNER STRENGTH"), a.appendChild(l);
  const d = e("article");
  t(d, "contacts2"), n.appendChild(d);
  const p = e("ul");
  t(p, "ul-shop"), d.appendChild(p);
  const c = e("li");
  t(c, "li-shop"), p.appendChild(c);
  const g = e("button");
  t(g, "button-all"),
    (g.innerText = "ALL WORK"),
    g.setAttribute("id", "buttonAll"),
    g.addEventListener("click", fe),
    c.appendChild(g);
  const m = e("li");
  t(m, "li-shop"), p.appendChild(m);
  const f = e("button");
  t(f, "button-all"),
    (f.innerText = "FOR WORK"),
    f.setAttribute("id", "buttonWork"),
    f.addEventListener("click", ye),
    m.appendChild(f);
  const h = e("li");
  t(h, "li-shop"), p.appendChild(h);
  const y = e("button");
  t(y, "button-all"),
    (y.innerText = "FOR HEALTH"),
    y.setAttribute("id", "buttonHealth"),
    y.addEventListener("click", Ce),
    h.appendChild(y);
  const u = e("li");
  t(u, "li-shop"), p.appendChild(u);
  const b = e("button");
  t(b, "button-all"),
    (b.innerText = "FOR HARMONY"),
    b.setAttribute("id", "buttonHarmony"),
    b.addEventListener("click", be),
    u.appendChild(b);
  const C = e("section");
  t(C, "conteiner-dest-magasin"),
    C.setAttribute("id", "shopItems"),
    (C.style.display = "flex"),
    i.appendChild(C);
}
function We() {
  s(
    "FOR WORK",
    "CONSOLE.LOG GURU",
    "img/image.svg",
    "for-work",
    "shopItems",
    P,
    1
  ),
    s(
      "FOR HEALTH",
      "Posture Levitation",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      1
    ),
    s("FOR WORK", "BUG MAGNET", "img/image.svg", "for-work", "shopItems", P, 2),
    s(
      "FOR HEALTH",
      "Step Master",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      2
    ),
    s(
      "FOR HARMONY",
      "Error Laugher",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      1
    ),
    s("FOR WORK", "CSS Tamer", "img/image.svg", "for-work", "shopItems", P, 3),
    s(
      "FOR HEALTH",
      "Break Guru",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      3
    ),
    s(
      "FOR HARMONY",
      "Inspiration Maestro",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      2
    ),
    s(
      "FOR WORK",
      "Feedback Master",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      4
    ),
    s(
      "FOR HEALTH",
      "Healthy Sacker",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      4
    ),
    s(
      "FOR HARMONY",
      "Pause Master",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      3
    ),
    s(
      "FOR HARMONY",
      "Joy Charger",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      4
    ),
    s(
      "FOR WORK",
      "Merge Master",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      5
    ),
    s(
      "FOR HEALTH",
      "Snack Resister",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      5
    ),
    s(
      "FOR HARMONY",
      "Bug Acceptance Guru",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      5
    ),
    s(
      "FOR WORK",
      "Time Hacker",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      6
    ),
    s(
      "FOR HEALTH",
      "Eye Protector",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      6
    ),
    s(
      "FOR HARMONY",
      "Peace Keeper",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      6
    ),
    s(
      "FOR WORK",
      "Code Minimalist",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      7
    ),
    s(
      "FOR HEALTH",
      "Chair Exerciser",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      7
    ),
    s(
      "FOR HARMONY",
      "Coder Healer",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      7
    ),
    s(
      "FOR WORK",
      "Shortcut Cheater",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      8
    ),
    s(
      "FOR HEALTH",
      "Hydration Bot",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      8
    ),
    s(
      "FOR HARMONY",
      "Spontaneous Coding Philosopher",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      8
    ),
    s(
      "FOR WORK",
      "Layout Master",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      9
    ),
    s(
      "FOR HEALTH",
      "Stress Dodger",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      9
    ),
    s(
      "FOR HARMONY",
      "Empathy Guru",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      9
    ),
    s(
      "FOR WORK",
      "Pixel-Perfect Magician",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      10
    ),
    s(
      "FOR HEALTH",
      "Caffeine Filter",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      10
    ),
    s(
      "FOR HARMONY",
      "Music Code Curator",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      10
    ),
    s(
      "FOR WORK",
      "Async Tamer",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      11
    ),
    s(
      "FOR HEALTH",
      "Sleep Overlord",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      11
    ),
    s(
      "FOR HARMONY",
      "Deadline Sage",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      11
    ),
    s(
      "FOR WORK",
      "Documentation Whisperer",
      "img/image.svg",
      "for-work",
      "shopItems",
      P,
      12
    ),
    s(
      "FOR HEALTH",
      "Yoga Coder",
      "img/image-2.svg",
      "for-health",
      "shopItems",
      v,
      12
    ),
    s(
      "FOR HARMONY",
      "Laughter Generator",
      "img/image-3.svg",
      "for-harmony",
      "shopItems",
      H,
      12
    );
}
function De() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  t(n, "best-Gifts3"),
    n.setAttribute("id", "bestGifts"),
    (n.style.display = "none"),
    i.appendChild(n);
  const a = e("section");
  t(a, "best-Gifts-shop"), n.appendChild(a);
  const o = e("section");
  t(o, "best-Gifts-conteiner2"),
    o.setAttribute("id", "contentShop"),
    a.appendChild(o),
    we(),
    Me(),
    xe(),
    Le(),
    We();
}
function Ge() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  t(n, "about-page"),
    n.setAttribute("id", "aboutPage"),
    (n.style.display = "none"),
    i.appendChild(n);
}
function Ne() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  t(n, "best-gifts-page"),
    n.setAttribute("id", "bestGiftsPage"),
    (n.style.display = "none"),
    i.appendChild(n);
}
function Ye() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  t(n, "sectionContacts"),
    n.setAttribute("id", "sectionContacts"),
    (n.style.display = "none"),
    i.appendChild(n);
}
function Ke() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  n.setAttribute("id", "section-bar-menu"),
    t(n, "section-bar-menu"),
    t(n, "section-bar-menu-none"),
    i.appendChild(n);
  const a = e("ul");
  t(a, "bar-menu"), n.appendChild(a);
  const o = e("li");
  t(o, "li-header");
  const r = e("li");
  t(r, "li-header");
  const l = e("li");
  t(l, "li-header");
  const d = e("li");
  t(d, "li-header"), a.append(o, r, l, d);
  const p = e("button");
  t(p, "li-a-header"),
    (p.innerText = "GIFTS"),
    p.addEventListener("click", () => {
      ee(), $();
    }),
    o.appendChild(p);
  const c = e("button");
  t(c, "li-a-header"),
    (c.innerText = "ABOUT"),
    c.addEventListener("click", () => {
      oe(), $();
    }),
    r.appendChild(c);
  const g = e("button");
  t(g, "li-a-header"),
    (g.innerText = "BEST"),
    g.addEventListener("click", () => {
      se(), $();
    }),
    l.appendChild(g);
  const m = e("button");
  t(m, "li-a-header"),
    (m.innerText = "CONTACTS"),
    m.addEventListener("click", () => {
      re(), $();
    }),
    d.appendChild(m);
}
function Ue() {
  Ke(), ve(), _e(), De(), Ge(), Ne(), Ye();
}
function _e() {
  const i = document.getElementById("main-pag"),
    n = e("section");
  n.setAttribute("id", "globalMain"),
    (n.style.display = "flex"),
    i.appendChild(n),
    ce(),
    me(),
    ue(),
    Fe(),
    Ie();
}
function je() {
  const i = document.getElementById("contacts-footer"),
    n = e("section");
  i.appendChild(n);
  const a = e("section");
  t(a, "footer-nav-conteiner"), n.appendChild(a);
  const o = e("section");
  t(o, "footer-nav"), a.appendChild(o);
  const r = e("section");
  t(r, "footer-cont"), o.appendChild(r);
  const l = e("img");
  l.setAttribute("src", "/img/GroupSANTA.svg"),
    l.setAttribute("alt", "Group"),
    r.appendChild(l);
  const d = e("p");
  (d.innerText = "+375 (29) 111 22 33"), t(d, "footer-p"), r.appendChild(d);
  const p = e("a");
  t(p, "footer-a"),
    p.setAttribute("href", "tel:+375-29-111-22-33"),
    r.appendChild(p);
  const c = e("h3");
  (c.innerText = "CALL US"), t(c, "footer-h3"), r.appendChild(c);
  const g = e("section");
  t(g, "footer-cont"), o.appendChild(g);
  const m = e("img");
  m.setAttribute("src", "/img/christmas-treeELCA.svg"),
    m.setAttribute("alt", "Group"),
    g.appendChild(m);
  const f = e("p");
  (f.innerText = "MAGIC FOREST"), t(f, "footer-p"), g.appendChild(f);
  const h = e("a");
  t(h, "footer-a"),
    h.setAttribute("target", "_blank"),
    h.setAttribute(
      "href",
      "https://www.google.com/maps/place/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA+%22%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B3%D0%BE%D1%84%22/@59.8901129,29.9316625,11.82z/data=!4m6!3m5!1s0x46964730d11ed9e3:0x1c82ffc2f406bf1!8m2!3d59.8863041!4d29.9085976!16s%2Fm%2F09v6yp5?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
    ),
    g.appendChild(h);
  const y = e("h3");
  (y.innerText = "MEET US"), t(y, "footer-h3"), g.appendChild(y);
  const u = e("section");
  t(u, "footer-cont"), o.appendChild(u);
  const b = e("img");
  b.setAttribute("src", "/img/GroupSNEICK.svg"),
    b.setAttribute("alt", "Group"),
    u.appendChild(b);
  const C = e("p");
  (C.innerText = "GIFTS@MAGIC.COM"), t(C, "footer-p"), u.appendChild(C);
  const E = e("a");
  t(E, "footer-a"),
    E.setAttribute("href", "mailto:gifts@magic.com"),
    u.appendChild(E);
  const A = e("h3");
  (A.innerText = "WRITE US"), t(A, "footer-h3"), u.appendChild(A);
  const F = e("section");
  t(F, "footer-cont-img"), a.appendChild(F);
  const O = e("article");
  t(O, "media"), F.appendChild(O);
  const T = e("a");
  t(T, "footer-image"),
    T.setAttribute("href", "https://telegram.org/"),
    T.setAttribute("target", "_blank"),
    O.appendChild(T);
  const k = e("img");
  k.setAttribute("src", "img/telegram.svg"),
    k.setAttribute("alt", "Telegram"),
    t(k, "telegram"),
    T.appendChild(k);
  const x = e("a");
  t(x, "footer-image"),
    x.setAttribute(
      "href",
      "https://ru-ru.facebook.com/login/device-based/regular/login/?login_attempt=1"
    ),
    x.setAttribute("target", "_blank"),
    O.appendChild(x);
  const M = e("img");
  M.setAttribute("src", "img/facebook.svg"),
    M.setAttribute("alt", "facebook"),
    t(M, "facebook"),
    x.appendChild(M);
  const I = e("a");
  t(I, "footer-image"),
    I.setAttribute("href", "https://www.instagram.com/"),
    I.setAttribute("target", "_blank"),
    O.appendChild(I);
  const S = e("img");
  S.setAttribute("src", "img/instagram.svg"),
    S.setAttribute("alt", "insta"),
    t(S, "insta"),
    I.appendChild(S);
  const B = e("a");
  t(B, "footer-image"),
    B.setAttribute("href", "https://x.com/rollingscopes?mx=2"),
    B.setAttribute("target", "_blank"),
    O.appendChild(B);
  const L = e("img");
  L.setAttribute("src", "img/X.svg"),
    L.setAttribute("alt", "RS"),
    t(L, "x"),
    B.appendChild(L);
  const w = e("article");
  F.appendChild(w);
  const G = e("p");
  (G.innerText = "© Copyright 2025, All Rights Reserved"), w.appendChild(G);
  const W = e("a");
  W.setAttribute("href", "https://rs.school/"),
    W.setAttribute("target", "_blank"),
    t(W, "size-conteiner"),
    t(W, "footer-rs"),
    (W.innerText = "Made in Rolling Scopes School"),
    F.appendChild(W);
}
function Ve() {
  const i = window.innerWidth,
    n = document.getElementById("openBar"),
    a = document.getElementById("openWindowMenu");
  i > 760
    ? (n.classList.add("open"), a.classList.remove("open"))
    : (a.classList.add("open"), n.classList.remove("open"));
}
function Xe() {
  const i = document.getElementById("span1"),
    n = document.getElementById("span2"),
    a = document.getElementById("section-bar-menu");
  i.classList.remove("span-bar-menu-click"),
    n.classList.remove("span-bar-menu2-click"),
    a.classList.add("section-bar-menu-none"),
    document.body.classList.remove("bodyOverflow");
}
function Je() {
  le(),
    Ue(),
    je(),
    Ve(),
    console.log("hell"),
    document.addEventListener("click", (i) => {
      const n = document.getElementById("section-bar-menu"),
        a = document.getElementById("sliderBar2None"),
        o = document.getElementById("containerSectionCards");
      n &&
        !n.contains(i.target) &&
        a &&
        !a.contains(i.target) &&
        o &&
        !o.contains(i.target) &&
        Xe();
    });
}
Je();
