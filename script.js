(function () {
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  var phrases = ["useful AI solutions.", "data-driven ideas.", "tools that help people."];
  var typed = document.getElementById("typedWord");
  var i = 0;
  if (typed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(function () {
      i = (i + 1) % phrases.length;
      typed.style.opacity = "0";
      setTimeout(function () { typed.textContent = phrases[i]; typed.style.opacity = "1"; }, 220);
    }, 2800);
  }

  var btn = document.getElementById("copybtn");
  var mail = document.getElementById("mailtext");
  btn.addEventListener("click", function () {
    function done(ok) {
      btn.textContent = ok ? "Copied" : "Select and copy";
      setTimeout(function () { btn.textContent = "Copy email"; }, 1800);
    }
    function fallback() {
      var r = document.createRange();
      r.selectNodeContents(mail);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      done(false);
    }
    try {
      navigator.clipboard.writeText(mail.textContent).then(function () { done(true); }, fallback);
    } catch (e) { fallback(); }
  });
})();
