/* a_nailzz_art — ndërveprimet */
(function () {
  "use strict";

  var WHATSAPP = "https://wa.me/355693055309";

  var services = [
    ["01", "Thonj të thjeshtë", "Formë e pastër, shkëlqim natyral dhe qëndrueshmëri e gjatë."],
    ["02", "Thonj me dekor", "Art i punuar me dorë: linja, gurë, ombre dhe detaje unike."],
    ["03", "Manikyr", "Kujdes i plotë për duart, kutikula të përsosura dhe hidratim."],
    ["04", "Pedikyr", "Pedikyr estetik dhe relaksues me finish të butë e të shëndetshëm."],
    ["05", "Trajtim këmbësh", "Trajtim i thelluar, zbutje dhe rikthim i lëkurës së shëndetshme."],
    ["06", "Flokë", "Kujdes dhe stilime flokësh që zgjasin nga mëngjesi deri natën vonë."],
    ["07", "Makeup", "Nga natyral glow te glam për dasma dhe evente speciale."],
    ["08", "Qerpikë", "Zgjatime volum ose klasike, të lehta dhe të përsosura për sy."]
  ];

  var galleries = [
    { id: "dekor", label: "Thonj me Dekor", note: "Art i punuar me dorë, detaj pas detaji." },
    { id: "thjeshte", label: "Thonj të Thjeshtë", note: "Elegancë minimaliste, çdo ditë." },
    { id: "pedikyr", label: "Pedikyr & Trajtim", note: "Këmbë të kujdesura, përfundim i pastër." },
    { id: "beauty", label: "Makeup, Flokë & Qerpikë", note: "Look-e të bukura për çdo event." }
  ];
const modules = [
  ["01", "Anatomia & Problematikat", "Njohja e strukturës së thoit, infeksionet, myku, thonjtë e futur në mish dhe dëmtimet."],
  ["02", "Higjiena & Siguria", "Higjiena profesionale, kujdesi i thonjve dhe rregullat e sigurisë gjatë punës."],
  ["03", "Dezinfektimi & Sterilizimi", "Pastrimi, dezinfektimi dhe sterilizimi i mjeteve për një ambient profesional dhe të sigurt."],
  ["04", "Njohja e Produkteve", "Njohja e materialeve, mjeteve dhe përdorimi i tyre në mënyrë të sigurt dhe profesionale."],

  ["05", "Përgatitja e Thoit", "Pastrimi profesional i kutikulave dhe përdorimi i frezës."],
  ["06", "Zgjatimi & Ndërtimi", "Punimi me tips, xhel dhe zgjatimi i thonjve me letër."],
  ["07", "Forma & Teknikat", "Modelimi i formës së thoit dhe realizimi i teknikave Ombre & French."],
  ["08", "Nail Art & Dekor", "Dizenjo 3D, piktura artistike dhe dekorime të ndryshme."]
];

  var words = ["Nail Art", "Manikyr", "Pedikyr", "Trajtim Këmbësh", "Flokë", "Makeup", "Qerpikë", "Kurse me Certifikim"];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* Marquee */
  var mq = document.getElementById("marquee");
  for (var r = 0; r < 2; r++) {
    words.forEach(function (w) {
      mq.appendChild(el("span", null, w + ' <span class="gold">&#10022;</span>'));
    });
  }

  /* Shërbimet */
  var sv = document.getElementById("services");
  services.forEach(function (s, i) {
    var card = el("div", "service reveal",
      '<span class="num">' + s[0] + '</span><h3>' + s[1] + '</h3><p>' + s[2] + '</p><div class="hairline"></div>');
    card.style.transitionDelay = (i * 60) + "ms";
    sv.appendChild(card);
  });

  /* Modulet e kursit */
  var md = document.getElementById("modules");
  modules.forEach(function (m) {
    md.appendChild(el("div", "module",
      '<span class="num">' + m[0] + '</span><p class="t">' + m[1] + '</p><p class="d">' + m[2] + '</p><div class="hairline"></div>'));
  });

  /* Galeria me tabs — fotot janë tashmë shkruar direkt si <img> në HTML,
     këtu vetëm ndërrohet cila kategori (data-cat) shfaqet */
  var tabsEl = document.getElementById("tabs");
  var noteEl = document.getElementById("tabNote");
  var photoGroups = document.querySelectorAll(".photos");
  var activeId = galleries[0].id;

  function showCategory(id) {
    photoGroups.forEach(function (group) {
      group.classList.toggle("is-active", group.getAttribute("data-cat") === id);
    });
  }

  galleries.forEach(function (g) {
    var b = el("button", "tab" + (g.id === activeId ? " is-active" : ""), g.label);
    b.type = "button";
    b.addEventListener("click", function () {
      activeId = g.id;
      noteEl.textContent = g.note;
      Array.prototype.forEach.call(tabsEl.children, function (c) { c.classList.remove("is-active"); });
      b.classList.add("is-active");
      showCategory(activeId);
    });
    tabsEl.appendChild(b);
  });
  noteEl.textContent = galleries[0].note;
  showCategory(activeId);

  /* Reveal on scroll */
  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observe(node) {
    if (io) io.observe(node); else node.classList.add("is-visible");
  }

  Array.prototype.forEach.call(document.querySelectorAll(".reveal"), observe);
  photoGroups.forEach(observe);

  document.getElementById("year").textContent = new Date().getFullYear();

  /* Smooth scroll për lidhjet e brendshme */
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
    a.addEventListener("click", function (ev) {
      var t = document.querySelector(a.getAttribute("href"));
      if (!t) return;
      ev.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  void WHATSAPP;
})();