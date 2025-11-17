(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const l of r)
      if (l.type === "childList")
        for (const d of l.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
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
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const l = o(r);
    fetch(r.href, l);
  }
})();
function t(i) {
  return document.createElement(i);
}
function e(i, n) {
  return i.classList.add(n);
}
function D() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    o = document.getElementById("aboutPage"),
    s = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  n.style.display === "none"
    ? ((n.style.display = "flex"),
      (i.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"),
      (r.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"),
      (r.style.display = "none"));
}
function Y() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    o = document.getElementById("aboutPage"),
    s = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  o.style.display === "none"
    ? ((o.style.display = "flex"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (s.style.display = "none"),
      (r.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"),
      (r.style.display = "none"));
}
function U() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    o = document.getElementById("aboutPage"),
    s = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  s.style.display === "none"
    ? ((s.style.display = "flex"),
      (o.style.display = "none"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (r.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"),
      (r.style.display = "none"));
}
function _() {
  const i = document.getElementById("globalMain"),
    n = document.getElementById("bestGifts"),
    o = document.getElementById("aboutPage"),
    s = document.getElementById("bestGiftsPage"),
    r = document.getElementById("sectionContacts");
  r.style.display === "none"
    ? ((r.style.display = "flex"),
      (s.style.display = "none"),
      (o.style.display = "none"),
      (i.style.display = "none"),
      (n.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"),
      (r.style.display = "none"));
}
function G() {
  const i = document.getElementById("span1"),
    n = document.getElementById("span2"),
    o = document.getElementById("section-bar-menu");
  i.classList.toggle("span-bar-menu-click"),
    n.classList.toggle("span-bar-menu2-click"),
    o.classList.toggle("section-bar-menu-none"),
    document.body.classList.toggle("bodyOverflow");
}
function q() {
  const i = document.getElementById("header"),
    n = t("section");
  e(n, "header"), i.appendChild(n);
  const o = t("a");
  o.setAttribute("href", "index.html"), n.appendChild(o);
  const s = t("article");
  e(s, "logo"), o.appendChild(s);
  const r = t("img");
  r.setAttribute("src", "img/snowflakeICON.svg"),
    r.setAttribute("alt", "Logo"),
    s.appendChild(r);
  const l = t("p");
  e(l, "header-p"), (l.innerText = "THE GIFTS"), s.appendChild(l);
  const d = t("section");
  e(d, "contents"), n.appendChild(d);
  const p = t("section");
  e(p, "bar-window-menu"),
    p.setAttribute("id", "openWindowMenu"),
    d.appendChild(p);
  const c = t("ul");
  e(c, "ul-header"), p.appendChild(c);
  const g = t("li");
  e(g, "li-header");
  const m = t("li");
  e(m, "li-header");
  const h = t("li");
  e(h, "li-header");
  const y = t("li");
  e(y, "li-header"), c.append(g, m, h, y);
  const f = t("button");
  e(f, "li-a-header"),
    (f.innerText = "GIFTS"),
    f.addEventListener("click", D),
    g.appendChild(f);
  const u = t("button");
  e(u, "li-a-header"),
    (u.innerText = "ABOUT"),
    u.addEventListener("click", Y),
    m.appendChild(u);
  const C = t("button");
  e(C, "li-a-header"),
    (C.innerText = "BEST"),
    C.addEventListener("click", U),
    h.appendChild(C);
  const b = t("button");
  e(b, "li-a-header"),
    (b.innerText = "CONTACTS"),
    b.addEventListener("click", _),
    y.appendChild(b);
  const T = t("article");
  e(T, "button-bar-men"), T.setAttribute("id", "openBar"), d.appendChild(T);
  const E = t("button");
  e(E, "slider-bar"),
    E.setAttribute("id", "sliderBar2None"),
    T.appendChild(E),
    E.addEventListener("click", G);
  const O = t("span");
  e(O, "span-bar-menu"), O.setAttribute("id", "span1"), E.appendChild(O);
  const H = t("span");
  e(H, "span-bar-menu2"), H.setAttribute("id", "span2"), E.appendChild(H);
}
function z() {
  const i = document.getElementById("globalMain"),
    n = t("section");
  e(n, "hero"), e(n, "container1"), i.appendChild(n);
  const o = t("section");
  e(o, "hero-container"), n.appendChild(o);
  const s = t("article");
  e(s, "christmas"), o.appendChild(s);
  const r = t("p");
  (r.innerText = "Merry Christmas"), s.appendChild(r);
  const l = t("article");
  e(l, "heroH1"), o.appendChild(l);
  const d = t("h1");
  (d.innerText = "GIFT"), l.appendChild(d);
  const p = t("h1");
  (p.innerText = "YOURSELF THE MAGIC"), l.appendChild(p);
  const c = t("h1");
  (c.innerText = "OF"), l.appendChild(c);
  const g = t("h1");
  (g.innerText = "NEW POSSIBILITIES"), l.appendChild(g);
  const m = t("article");
  e(m, "button"), o.appendChild(m);
  const h = t("button");
  h.setAttribute("id", "button"),
    (h.innerText = "EXPLORE MAGICAL GIFTS"),
    h.addEventListener("click", D),
    m.appendChild(h);
  const y = t("article");
  e(y, "christmas2"), o.appendChild(y);
  const f = t("p");
  (f.innerText = "and Happy New Year"), y.appendChild(f);
}
const Q = "./assets/santa-_rx7H_QE.png";
function $() {
  const i = document.getElementById("globalMain"),
    n =
      "This New Year marks the beginning of your journey. to inner harmony and new strengths. We offer unique gifts that will help you improve your life.",
    o = t("section");
  e(o, "about"), o.setAttribute("id", "about"), i.appendChild(o);
  const s = t("section");
  e(s, "about2"), o.appendChild(s);
  const r = t("section");
  e(r, "about3"), s.appendChild(r);
  const l = t("section");
  e(l, "about4"), r.appendChild(l);
  const d = t("button");
  e(d, "buttonAbout"),
    (d.innerText = "About"),
    d.addEventListener("click", Y),
    l.appendChild(d);
  const p = t("h2");
  e(p, "aboutH2"),
    (p.innerText = "UNLEASH YOUR INNER SUPERHERO!"),
    l.appendChild(p);
  const c = t("p");
  e(c, "aboutP"), (c.innerText = n), l.appendChild(c);
  const g = t("section");
  e(g, "about-img"), r.appendChild(g);
  const m = t("img");
  e(m, "about-imga"),
    m.setAttribute("src", Q),
    m.setAttribute("alt", "Santa"),
    g.appendChild(m);
}
const Z = 200;
let A = 0;
const P = window.innerWidth;
function W() {
  const i = document.getElementById("styleLeftIndex"),
    n = -A * Z;
  i.style.transform = `translateX(${n}px)`;
}
function tt() {
  const i = document.getElementById("buttonSliderLeft"),
    n = document.getElementById("buttonSliderRight");
  A > 0 && ((A -= 1), W(), n.classList.remove("button-Right-none")),
    A <= 0 && (console.log(A), i.classList.add("button-Left-none"));
}
function et() {
  const i = document.getElementById("buttonSliderLeft"),
    n = document.getElementById("buttonSliderRight");
  P > 1330
    ? A < 4 &&
      ((A += 1),
      W(),
      i.classList.remove("button-Left-none"),
      A === 4 && n.classList.add("button-Right-none"))
    : P > 1120
    ? A < 5 &&
      ((A += 1),
      W(),
      i.classList.remove("button-Left-none"),
      A === 5 && n.classList.add("button-Right-none"))
    : P > 920
    ? A < 6 &&
      ((A += 1),
      W(),
      i.classList.remove("button-Left-none"),
      A === 6 && n.classList.add("button-Right-none"))
    : P < 920 && P > 360
    ? A < 8 &&
      ((A += 1),
      W(),
      i.classList.remove("button-Left-none"),
      A === 8 && n.classList.add("button-Right-none"))
    : P <= 360 &&
      A < 9 &&
      ((A += 1),
      W(),
      i.classList.remove("button-Left-none"),
      A === 9 && n.classList.add("button-Right-none"));
}
function nt() {
  const i = document.getElementById("globalMain"),
    n = t("section");
  e(n, "slider"), i.appendChild(n);
  const o = t("section");
  e(o, "container-slider"), n.appendChild(o);
  const s = t("section");
  e(s, "slider-title"), o.appendChild(s);
  const r = t("h3");
  (r.innerText = "Become Happier!"), s.appendChild(r);
  const l = t("h2");
  (l.innerText = "IN THE NEW 2025"), s.appendChild(l);
  const d = t("section");
  e(d, "slider-container-main"), o.appendChild(d);
  const p = t("section");
  e(p, "slider2"), d.appendChild(p);
  const c = t("section");
  e(c, "christmas-slider"),
    c.setAttribute("id", "styleLeftIndex"),
    p.appendChild(c);
  const g = t("article");
  c.appendChild(g);
  const m = t("p");
  e(m, "text-slider"), (m.innerText = "LIVE"), g.appendChild(m);
  const h = t("article");
  c.appendChild(h);
  const y = t("img");
  e(y, "imagesSlider"),
    y.setAttribute("src", "img/snowman.jpg"),
    y.setAttribute("alt", "Snowman"),
    h.appendChild(y);
  const f = t("article");
  c.appendChild(f);
  const u = t("p");
  e(u, "text-slider"), (u.innerText = "CREATE"), f.appendChild(u);
  const C = t("article");
  c.appendChild(C);
  const b = t("img");
  e(b, "imagesSlider"),
    b.setAttribute("src", "img/christmas-trees.jpg"),
    b.setAttribute("alt", "Christmas Trees"),
    C.appendChild(b);
  const T = t("article");
  c.appendChild(T);
  const E = t("p");
  e(E, "text-slider"), (E.innerText = "LOVE"), T.appendChild(E);
  const O = t("article");
  c.appendChild(O);
  const H = t("img");
  e(H, "imagesSlider"),
    H.setAttribute("src", "img/christmas-tree-ball.png"),
    H.setAttribute("alt", "Christmas Tree Ball"),
    O.appendChild(H);
  const v = t("article");
  c.appendChild(v);
  const M = t("p");
  e(M, "text-slider"), (M.innerText = "DREAM"), v.appendChild(M);
  const S = t("article");
  c.appendChild(S);
  const F = t("img");
  e(F, "imagesSlider"),
    F.setAttribute("src", "img/fairytale-house.png"),
    F.setAttribute("alt", "Fairytale House"),
    S.appendChild(F);
  const R = t("article");
  e(R, "button-slider"), d.appendChild(R);
  const I = t("button");
  I.setAttribute("id", "buttonSliderLeft"),
    e(I, "button-slider-main"),
    e(I, "button-Left-none"),
    I.addEventListener("click", tt),
    R.appendChild(I);
  const L = t("img");
  L.setAttribute("src", "img/Vectorleft.png"),
    L.setAttribute("alt", "Vector"),
    L.setAttribute("id", "vector"),
    I.appendChild(L);
  const B = t("button");
  B.setAttribute("id", "buttonSliderRight"),
    e(B, "button-slider-main2"),
    B.addEventListener("click", et),
    R.appendChild(B);
  const x = t("img");
  x.setAttribute("src", "img/Vectorright.png"),
    x.setAttribute("alt", "Vector"),
    x.setAttribute("id", "vector2"),
    B.appendChild(x);
}
function a(i, n, o, s, r) {
  const l = document.getElementById(r),
    d = t("section");
  e(d, "best-img"), l.appendChild(d);
  const p = t("article");
  d.appendChild(p);
  const c = t("img");
  c.setAttribute("src", o), c.setAttribute("alt", "image1"), p.appendChild(c);
  const g = t("article");
  e(g, "best-h"), d.appendChild(g);
  const m = t("h4");
  e(m, "best-h4"), e(m, s), (m.innerText = i), g.appendChild(m);
  const h = t("h3");
  e(h, "best-h3"), (h.innerText = n), g.appendChild(h);
}
function ot() {
  a(
    "FOR WORK",
    "CONSOLE.LOG GURU",
    "img/image.svg",
    "for-work",
    "bestGiftsConteiner"
  );
}
function it() {
  a(
    "FOR HEALTH",
    "Posture Levitation",
    "img/image-2.svg",
    "for-health",
    "bestGiftsConteiner"
  );
}
function st() {
  a(
    "FOR HARMONY",
    "Joy Charger",
    "img/image-3.svg",
    "for-harmony",
    "bestGiftsConteiner"
  );
}
function at() {
  ot(), it(), st();
}
function rt() {
  const i = document.getElementById("globalMain"),
    n = t("section");
  e(n, "best-Gifts"), n.setAttribute("id", "best-Gifts"), i.appendChild(n);
  const o = t("section");
  e(o, "best-Gifts2"), n.appendChild(o);
  const s = t("section");
  e(s, "best-gifts-title"), o.appendChild(s);
  const r = t("article");
  s.appendChild(r);
  const l = t("h1");
  e(l, "best-p"), (l.innerText = "Best Gifts"), r.appendChild(l);
  const d = t("h2");
  e(d, "best-h2"), (d.innerText = "ESPECIALLY FOR YOU"), s.appendChild(d);
  const p = t("section");
  e(p, "best-Gifts-conteiner"),
    p.setAttribute("id", "bestGiftsConteiner"),
    o.appendChild(p),
    at();
}
class lt {
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
function dt() {
  const i = document.getElementById("globalMain"),
    n = new lt(),
    o = t("section");
  e(o, "CTA"), i.appendChild(o);
  const s = t("section");
  e(s, "cta-conteiner"), o.appendChild(s);
  const r = t("section");
  e(r, "title-sta-section"), s.appendChild(r);
  const l = t("h2");
  e(l, "sta-h2"),
    (l.innerText = "READY TO START YOUR JOURNEY"),
    r.appendChild(l);
  const d = t("h2");
  e(d, "sta-h2"), (d.innerText = "TO A"), r.appendChild(d);
  const p = t("h2");
  e(p, "sta-h2"),
    (p.innerText = "BETTER VERSION OF YOURSELF?"),
    r.appendChild(p);
  const c = t("section");
  e(c, "sta-button-conteiner"), s.appendChild(c);
  const g = t("article");
  c.appendChild(g);
  const m = t("button");
  e(m, "sta-button"),
    m.setAttribute("id", "but2"),
    (m.innerText = "EXPLORE MAGICAL GIFTS"),
    m.addEventListener("click", D),
    g.appendChild(m);
  const h = t("section");
  e(h, "title-after-sta"), s.appendChild(h);
  const y = t("article");
  e(y, "sta-p"), h.appendChild(y);
  const f = t("p");
  (f.innerText = "The New Year is Coming Soon..."), y.appendChild(f);
  const u = t("section");
  e(u, "time"), h.appendChild(u);
  const C = t("article");
  e(C, "sta-time1"), u.appendChild(C);
  const b = t("p");
  e(b, "timer"), b.setAttribute("id", "dey"), C.appendChild(b);
  const T = t("span");
  T.setAttribute("id", "d"), b.appendChild(T);
  const E = t("p");
  e(E, "sta-deis"), (E.innerText = "DAYS"), C.appendChild(E);
  const O = t("span");
  e(O, "sta-span1"), u.appendChild(O);
  const H = t("article");
  e(H, "sta-time1"), u.appendChild(H);
  const v = t("p");
  e(v, "timer"), H.appendChild(v);
  const M = t("span");
  M.setAttribute("id", "h"), v.appendChild(M);
  const S = t("p");
  e(S, "sta-deis"), (S.innerText = "HORS"), H.appendChild(S);
  const F = t("span");
  e(F, "sta-span1"), u.appendChild(F);
  const R = t("article");
  e(R, "sta-time1"), u.appendChild(R);
  const I = t("p");
  e(I, "timer"), R.appendChild(I);
  const L = t("span");
  L.setAttribute("id", "m"), I.appendChild(L);
  const B = t("p");
  e(B, "sta-deis"), (B.innerText = "MINUTES"), R.appendChild(B);
  const x = t("span");
  e(x, "sta-span1"), u.appendChild(x);
  const w = t("article");
  e(w, "sta-time1"), u.appendChild(w);
  const k = t("p");
  e(k, "timer"), w.appendChild(k);
  const K = t("span");
  K.setAttribute("id", "s"), k.appendChild(K);
  const N = t("p");
  e(N, "sta-deis"),
    (N.innerText = "SECONDS"),
    w.appendChild(N),
    n.start(({ day: V, hours: X, minutes: J, seconds: j }) => {
      (document.getElementById("d").textContent = V),
        (document.getElementById("h").textContent = X),
        (document.getElementById("m").textContent = J),
        (document.getElementById("s").textContent = j);
    });
}
function ct() {
  a(
    "FOR HARMONY",
    "Joy Charger",
    "img/image-3.svg",
    "for-harmony",
    "forHarmony"
  ),
    a(
      "FOR HARMONY",
      "Error Laugher",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Bug Acceptance Guru",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Spontaneous Coding Philosopher",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Deadline Sage",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Inspiration Maestro",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Peace Keeper",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Empathy Guru",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Laughter Generator",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Pause Master",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Coder Healer",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    ),
    a(
      "FOR HARMONY",
      "Music Code Curator",
      "img/image-3.svg",
      "for-harmony",
      "forHarmony"
    );
}
function pt() {
  const i = document.getElementById("contentShop"),
    n = t("section");
  e(n, "for-Harmony"),
    e(n, "conteiner-dest-magasin"),
    n.setAttribute("id", "forHarmony"),
    (n.style.display = "none"),
    i.appendChild(n),
    ct();
}
function mt() {
  a(
    "FOR HEALTH",
    "Posture Levitation",
    "img/image-2.svg",
    "for-health",
    "forHealth"
  ),
    a(
      "FOR HEALTH",
      "Step Master",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a(
      "FOR HEALTH",
      "Snack Resister",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a(
      "FOR HEALTH",
      "Hydration Bot",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a(
      "FOR HEALTH",
      "Sleep Overlord",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a("FOR HEALTH", "Break Guru", "img/image-2.svg", "for-health", "forHealth"),
    a(
      "FOR HEALTH",
      "Eye Protector",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a(
      "FOR HEALTH",
      "Stress Dodger",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a("FOR HEALTH", "Yoga Coder", "img/image-2.svg", "for-health", "forHealth"),
    a(
      "FOR HEALTH",
      "Healthy Sacker",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a(
      "FOR HEALTH",
      "Chair Exerciser",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    ),
    a(
      "FOR HEALTH",
      "Caffeine Filter",
      "img/image-2.svg",
      "for-health",
      "forHealth"
    );
}
function gt() {
  const i = document.getElementById("contentShop"),
    n = t("section");
  e(n, "for-Health"),
    e(n, "conteiner-dest-magasin"),
    n.setAttribute("id", "forHealth"),
    (n.style.display = "none"),
    i.appendChild(n),
    mt();
}
function ht() {
  a("FOR WORK", "CONSOLE.LOG GURU", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "BUG MAGNET", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "Merge Master", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "Shortcut Cheater", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "Async Tamer", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "CSS Tamer", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "Time Hacker", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "Layout Master", "img/image.svg", "for-work", "ForWork"),
    a(
      "FOR WORK",
      "Documentation Whisperer",
      "img/image.svg",
      "for-work",
      "ForWork"
    ),
    a("FOR WORK", "Feedback Master", "img/image.svg", "for-work", "ForWork"),
    a("FOR WORK", "Code Minimalist", "img/image.svg", "for-work", "ForWork"),
    a(
      "FOR WORK",
      "Pixel-Perfect Magician",
      "img/image.svg",
      "for-work",
      "ForWork"
    );
}
function ut() {
  const i = document.getElementById("contentShop"),
    n = t("section");
  e(n, "for-Work"),
    e(n, "conteiner-dest-magasin"),
    n.setAttribute("id", "ForWork"),
    (n.style.display = "none"),
    i.appendChild(n),
    ht();
}
function yt() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    o = document.getElementById("forHealth"),
    s = document.getElementById("forHarmony");
  i.style.display,
    (i.style.display = "flex"),
    (n.style.display = "none"),
    (o.style.display = "none"),
    (s.style.display = "none");
}
function ft() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    o = document.getElementById("forHealth"),
    s = document.getElementById("forHarmony");
  n.style.display === "none"
    ? ((n.style.display = "flex"),
      (i.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"));
}
function bt() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    o = document.getElementById("forHealth"),
    s = document.getElementById("forHarmony");
  o.style.display === "none"
    ? ((o.style.display = "flex"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (s.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"));
}
function Ct() {
  const i = document.getElementById("shopItems"),
    n = document.getElementById("ForWork"),
    o = document.getElementById("forHealth"),
    s = document.getElementById("forHarmony");
  s.style.display === "none"
    ? ((s.style.display = "flex"),
      (i.style.display = "none"),
      (n.style.display = "none"),
      (o.style.display = "none"))
    : ((i.style.display = "flex"),
      (n.style.display = "none"),
      (o.style.display = "none"),
      (s.style.display = "none"));
}
function Ht() {
  const i = document.getElementById("contentShop"),
    n = t("section");
  e(n, "hero-conteiner3"), i.appendChild(n);
  const o = t("article");
  e(o, "h12"), n.appendChild(o);
  const s = t("h1");
  (s.innerText = "ACHIEVE HEALTH HARMONY,"), o.appendChild(s);
  const r = t("h1");
  (r.innerText = "AND"), o.appendChild(r);
  const l = t("h1");
  (l.innerText = "INNER STRENGTH"), o.appendChild(l);
  const d = t("article");
  e(d, "contacts2"), n.appendChild(d);
  const p = t("ul");
  e(p, "ul-shop"), d.appendChild(p);
  const c = t("li");
  e(c, "li-shop"), p.appendChild(c);
  const g = t("button");
  e(g, "button-all"),
    (g.innerText = "ALL WORK"),
    g.setAttribute("id", "buttonAll"),
    g.addEventListener("click", yt),
    c.appendChild(g);
  const m = t("li");
  e(m, "li-shop"), p.appendChild(m);
  const h = t("button");
  e(h, "button-all"),
    (h.innerText = "FOR WORK"),
    h.setAttribute("id", "buttonWork"),
    h.addEventListener("click", ft),
    m.appendChild(h);
  const y = t("li");
  e(y, "li-shop"), p.appendChild(y);
  const f = t("button");
  e(f, "button-all"),
    (f.innerText = "FOR HEALTH"),
    f.setAttribute("id", "buttonHealth"),
    f.addEventListener("click", bt),
    y.appendChild(f);
  const u = t("li");
  e(u, "li-shop"), p.appendChild(u);
  const C = t("button");
  e(C, "button-all"),
    (C.innerText = "FOR HARMONY"),
    C.setAttribute("id", "buttonHarmony"),
    C.addEventListener("click", Ct),
    u.appendChild(C);
  const b = t("section");
  e(b, "conteiner-dest-magasin"),
    b.setAttribute("id", "shopItems"),
    (b.style.display = "flex"),
    i.appendChild(b);
}
function At() {
  a("FOR WORK", "CONSOLE.LOG GURU", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Posture Levitation",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a("FOR WORK", "BUG MAGNET", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Step Master",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Error Laugher",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "CSS Tamer", "img/image.svg", "for-work", "shopItems"),
    a("FOR HEALTH", "Break Guru", "img/image-2.svg", "for-health", "shopItems"),
    a(
      "FOR HARMONY",
      "Inspiration Maestro",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Feedback Master", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Healthy Sacker",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Pause Master",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Joy Charger",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Merge Master", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Snack Resister",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Bug Acceptance Guru",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Time Hacker", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Eye Protector",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Peace Keeper",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Code Minimalist", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Chair Exerciser",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Coder Healer",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Shortcut Cheater", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Hydration Bot",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Spontaneous Coding Philosopher",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Layout Master", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Stress Dodger",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Empathy Guru",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a(
      "FOR WORK",
      "Pixel-Perfect Magician",
      "img/image.svg",
      "for-work",
      "shopItems"
    ),
    a(
      "FOR HEALTH",
      "Caffeine Filter",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Music Code Curator",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a("FOR WORK", "Async Tamer", "img/image.svg", "for-work", "shopItems"),
    a(
      "FOR HEALTH",
      "Sleep Overlord",
      "img/image-2.svg",
      "for-health",
      "shopItems"
    ),
    a(
      "FOR HARMONY",
      "Deadline Sage",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    ),
    a(
      "FOR WORK",
      "Documentation Whisperer",
      "img/image.svg",
      "for-work",
      "shopItems"
    ),
    a("FOR HEALTH", "Yoga Coder", "img/image-2.svg", "for-health", "shopItems"),
    a(
      "FOR HARMONY",
      "Laughter Generator",
      "img/image-3.svg",
      "for-harmony",
      "shopItems"
    );
}
function Et() {
  const i = document.getElementById("main-pag"),
    n = t("section");
  e(n, "best-Gifts3"),
    n.setAttribute("id", "bestGifts"),
    (n.style.display = "none"),
    i.appendChild(n);
  const o = t("section");
  e(o, "best-Gifts-shop"), n.appendChild(o);
  const s = t("section");
  e(s, "best-Gifts-conteiner2"),
    s.setAttribute("id", "contentShop"),
    o.appendChild(s),
    Ht(),
    At(),
    ut(),
    gt(),
    pt();
}
function Ot() {
  const i = document.getElementById("main-pag"),
    n = t("section");
  e(n, "about-page"),
    n.setAttribute("id", "aboutPage"),
    (n.style.display = "none"),
    i.appendChild(n);
}
function Rt() {
  const i = document.getElementById("main-pag"),
    n = t("section");
  e(n, "best-gifts-page"),
    n.setAttribute("id", "bestGiftsPage"),
    (n.style.display = "none"),
    i.appendChild(n);
}
function It() {
  const i = document.getElementById("main-pag"),
    n = t("section");
  e(n, "sectionContacts"),
    n.setAttribute("id", "sectionContacts"),
    (n.style.display = "none"),
    i.appendChild(n);
}
function Tt() {
  const i = document.getElementById("main-pag"),
    n = t("section");
  n.setAttribute("id", "section-bar-menu"),
    e(n, "section-bar-menu"),
    e(n, "section-bar-menu-none"),
    i.appendChild(n);
  const o = t("ul");
  e(o, "bar-menu"), n.appendChild(o);
  const s = t("li");
  e(s, "li-header");
  const r = t("li");
  e(r, "li-header");
  const l = t("li");
  e(l, "li-header");
  const d = t("li");
  e(d, "li-header"), o.append(s, r, l, d);
  const p = t("button");
  e(p, "li-a-header"),
    (p.innerText = "GIFTS"),
    p.addEventListener("click", () => {
      D(), G();
    }),
    s.appendChild(p);
  const c = t("button");
  e(c, "li-a-header"),
    (c.innerText = "ABOUT"),
    c.addEventListener("click", () => {
      Y(), G();
    }),
    r.appendChild(c);
  const g = t("button");
  e(g, "li-a-header"),
    (g.innerText = "BEST"),
    g.addEventListener("click", () => {
      U(), G();
    }),
    l.appendChild(g);
  const m = t("button");
  e(m, "li-a-header"),
    (m.innerText = "CONTACTS"),
    m.addEventListener("click", () => {
      _(), G();
    }),
    d.appendChild(m);
}
function Bt() {
  Tt(), Lt(), Et(), Ot(), Rt(), It();
}
function Lt() {
  const i = document.getElementById("main-pag"),
    n = t("section");
  n.setAttribute("id", "globalMain"),
    (n.style.display = "flex"),
    i.appendChild(n),
    z(),
    $(),
    nt(),
    rt(),
    dt();
}
function vt() {
  const i = document.getElementById("contacts-footer"),
    n = t("section");
  i.appendChild(n);
  const o = t("section");
  e(o, "footer-nav-conteiner"), n.appendChild(o);
  const s = t("section");
  e(s, "footer-nav"), o.appendChild(s);
  const r = t("section");
  e(r, "footer-cont"), s.appendChild(r);
  const l = t("img");
  l.setAttribute("src", "/img/GroupSANTA.svg"),
    l.setAttribute("alt", "Group"),
    r.appendChild(l);
  const d = t("p");
  (d.innerText = "+375 (29) 111 22 33"), e(d, "footer-p"), r.appendChild(d);
  const p = t("a");
  e(p, "footer-a"),
    p.setAttribute("href", "tel:+375-29-111-22-33"),
    r.appendChild(p);
  const c = t("h3");
  (c.innerText = "CALL US"), e(c, "footer-h3"), r.appendChild(c);
  const g = t("section");
  e(g, "footer-cont"), s.appendChild(g);
  const m = t("img");
  m.setAttribute("src", "/img/christmas-treeELCA.svg"),
    m.setAttribute("alt", "Group"),
    g.appendChild(m);
  const h = t("p");
  (h.innerText = "MAGIC FOREST"), e(h, "footer-p"), g.appendChild(h);
  const y = t("a");
  e(y, "footer-a"),
    y.setAttribute("target", "_blank"),
    y.setAttribute(
      "href",
      "https://www.google.com/maps/place/%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9-%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%BD%D0%B8%D0%BA+%22%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B3%D0%BE%D1%84%22/@59.8901129,29.9316625,11.82z/data=!4m6!3m5!1s0x46964730d11ed9e3:0x1c82ffc2f406bf1!8m2!3d59.8863041!4d29.9085976!16s%2Fm%2F09v6yp5?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
    ),
    g.appendChild(y);
  const f = t("h3");
  (f.innerText = "MEET US"), e(f, "footer-h3"), g.appendChild(f);
  const u = t("section");
  e(u, "footer-cont"), s.appendChild(u);
  const C = t("img");
  C.setAttribute("src", "/img/GroupSNEICK.svg"),
    C.setAttribute("alt", "Group"),
    u.appendChild(C);
  const b = t("p");
  (b.innerText = "GIFTS@MAGIC.COM"), e(b, "footer-p"), u.appendChild(b);
  const T = t("a");
  e(T, "footer-a"),
    T.setAttribute("href", "mailto:gifts@magic.com"),
    u.appendChild(T);
  const E = t("h3");
  (E.innerText = "WRITE US"), e(E, "footer-h3"), u.appendChild(E);
  const O = t("section");
  e(O, "footer-cont-img"), o.appendChild(O);
  const H = t("article");
  e(H, "media"), O.appendChild(H);
  const v = t("a");
  e(v, "footer-image"),
    v.setAttribute("href", "https://telegram.org/"),
    v.setAttribute("target", "_blank"),
    H.appendChild(v);
  const M = t("img");
  M.setAttribute("src", "img/telegram.svg"),
    M.setAttribute("alt", "Telegram"),
    e(M, "telegram"),
    v.appendChild(M);
  const S = t("a");
  e(S, "footer-image"),
    S.setAttribute(
      "href",
      "https://ru-ru.facebook.com/login/device-based/regular/login/?login_attempt=1"
    ),
    S.setAttribute("target", "_blank"),
    H.appendChild(S);
  const F = t("img");
  F.setAttribute("src", "img/facebook.svg"),
    F.setAttribute("alt", "facebook"),
    e(F, "facebook"),
    S.appendChild(F);
  const R = t("a");
  e(R, "footer-image"),
    R.setAttribute("href", "https://www.instagram.com/"),
    R.setAttribute("target", "_blank"),
    H.appendChild(R);
  const I = t("img");
  I.setAttribute("src", "img/instagram.svg"),
    I.setAttribute("alt", "insta"),
    e(I, "insta"),
    R.appendChild(I);
  const L = t("a");
  e(L, "footer-image"),
    L.setAttribute("href", "https://x.com/rollingscopes?mx=2"),
    L.setAttribute("target", "_blank"),
    H.appendChild(L);
  const B = t("img");
  B.setAttribute("src", "img/X.svg"),
    B.setAttribute("alt", "RS"),
    e(B, "x"),
    L.appendChild(B);
  const x = t("article");
  O.appendChild(x);
  const w = t("p");
  (w.innerText = "© Copyright 2025, All Rights Reserved"), x.appendChild(w);
  const k = t("a");
  k.setAttribute("href", "https://rs.school/"),
    k.setAttribute("target", "_blank"),
    e(k, "size-conteiner"),
    e(k, "footer-rs"),
    (k.innerText = "Made in Rolling Scopes School"),
    O.appendChild(k);
}
function St() {
  const i = window.innerWidth,
    n = document.getElementById("openBar"),
    o = document.getElementById("openWindowMenu");
  i > 760
    ? (n.classList.add("open"), o.classList.remove("open"))
    : (o.classList.add("open"), n.classList.remove("open"));
}
function Ft() {
  const i = document.getElementById("span1"),
    n = document.getElementById("span2"),
    o = document.getElementById("section-bar-menu");
  i.classList.remove("span-bar-menu-click"),
    n.classList.remove("span-bar-menu2-click"),
    o.classList.add("section-bar-menu-none"),
    document.body.classList.remove("bodyOverflow");
}
function Mt() {
  q(),
    Bt(),
    vt(),
    St(),
    console.log("hell"),
    document.addEventListener("click", (i) => {
      const n = document.getElementById("section-bar-menu"),
        o = document.getElementById("sliderBar2None");
      n && !n.contains(i.target) && o && !o.contains(i.target) && Ft();
    });
}
Mt();
