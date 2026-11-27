/* Zaytoun School side menu — the same layout as the veridian.lk menu (navy side panel, amber edge, serif type).
   Each school page calls ZNav.draw(activeKey, lang). */
(function () {
  var css =
    ':root{--zn-navy:#153462;--zn-navy2:#0e2547;--zn-amber:#FDBA1E}' +
    '.zn-side{position:fixed;left:0;top:0;bottom:0;width:272px;z-index:40;background:var(--zn-navy2);color:#fff;display:flex;flex-direction:column;overflow-y:auto;border-right:4px solid var(--zn-amber);transition:transform .3s ease;direction:ltr}' +
    '.zn-brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#fff;padding:22px 20px 18px;border-bottom:1px solid rgba(255,255,255,.14)}' +
    '.zn-mark{width:46px;height:46px;border-radius:50%;background:#153462;display:grid;place-items:center;flex:none;border:2px solid #FDBA1E}.zn-mark svg{width:28px;height:28px}' +
    '.zn-vlogo{height:48px;width:auto;flex:none}.zn-brand{gap:10px!important}' +
    '.zn-by{display:flex;align-items:center;gap:8px;padding:10px 20px;font:13px/1.3 system-ui,sans-serif;color:#cfd8ea;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.14);background:rgba(0,0,0,.15)}.zn-by img{height:22px;width:auto}.zn-by b{color:#FDBA1E;font-weight:600}' +
    '.zn-brand b{display:block;font:600 19px/1.1 "Times New Roman",Times,serif;letter-spacing:.05em}' +
    '.zn-brand small{display:block;font-size:10.5px;letter-spacing:.12em;color:#cfd8ea;margin-top:4px}' +
    '.zn-menu{list-style:none;margin:0;padding:10px 0;flex:1}.zn-menu ul{list-style:none;margin:0;padding:0}' +
    '.zn-menu>li{border-bottom:1px solid rgba(255,255,255,.08)}' +
    '.zn-menu a,.zn-menu button.zn-grp{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:48px;padding:0 20px;text-decoration:none;color:#e7ecf5;font:600 15px "Times New Roman",Times,serif;background:none;border:0;cursor:pointer;text-align:left;box-sizing:border-box}' +
    '.zn-menu a:hover,.zn-menu button.zn-grp:hover{background:rgba(255,255,255,.07);color:#fff}' +
    '.zn-menu button.zn-grp::after{content:"";width:8px;height:8px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg);transition:transform .25s;margin-left:10px;flex:none}' +
    '.zn-menu li.open>button.zn-grp::after{transform:rotate(-135deg)}.zn-menu li.open>button.zn-grp{color:var(--zn-amber)}' +
    '.zn-gname{display:flex;flex-direction:column;line-height:1.25;padding:6px 0}.zn-gname b{font-weight:700}.zn-gname small{font-weight:700;font-size:.82em;opacity:.85}' +
    '.zn-sub{display:none;padding:0 0 8px!important;background:rgba(0,0,0,.14)}.zn-menu li.open>.zn-sub{display:block}' +
    '.zn-sub a{min-height:42px;padding-left:36px;font-weight:500;font-size:14px;color:#cfd8ea}' +
    '.zn-menu a.on{color:var(--zn-amber);background:rgba(255,255,255,.08);box-shadow:inset 4px 0 0 var(--zn-amber)}' +
    '.zn-ar{display:block;font-family:"Noto Naskh Arabic","Geeza Pro","Segoe UI",Tahoma,sans-serif;font-weight:400;font-size:13px;color:#aebbd4;direction:rtl}' +
    '.zn-menu a .zn-t{display:flex;flex-direction:column;line-height:1.2;padding:5px 0}' +
    '.zn-mini{padding:16px 20px 22px;font-size:12.5px;line-height:1.7;color:#cfd8ea;border-top:1px solid rgba(255,255,255,.14);font-family:system-ui,sans-serif}.zn-mini a{color:#cfd8ea}' +
    '.zn-offbox{padding:12px 20px 0}.zn-off{margin:0;font:600 12.5px/1.4 system-ui,sans-serif}.zn-off:empty{display:none}.zn-ready{color:#9be38f}.zn-offline{color:#FDBA1E}' +
    '.zn-inst{margin-top:10px;width:100%;min-height:42px;border-radius:4px;border:1px solid #FDBA1E;background:#FDBA1E;color:#153462;font:700 14px system-ui,sans-serif;cursor:pointer}.zn-inst[hidden]{display:none}' +
    '.zn-shade{display:none;position:fixed;inset:0;z-index:35;background:rgba(5,12,25,.5);border:0;padding:0}' +
    '.zn-top{display:none}' +
    'body{padding-left:272px}' +
    '@media(max-width:999px){body{padding-left:0}.zn-side{transform:translateX(-105%);width:min(86vw,320px)}' +
    'body.zn-open .zn-side{transform:none;box-shadow:8px 0 30px rgba(0,0,0,.35)}body.zn-open .zn-shade{display:block}' +
    '.zn-top{display:flex;position:sticky;top:0;z-index:30;align-items:center;justify-content:space-between;gap:12px;background:var(--zn-navy);color:#fff;padding:8px max(4vw,14px);border-bottom:4px solid var(--zn-amber);direction:ltr}' +
    '.zn-top .zn-brand{padding:0;border:0}.zn-top .zn-vlogo{height:36px}.zn-top .zn-mark{width:38px;height:38px}.zn-top .zn-mark svg{width:23px;height:23px}.zn-top .zn-brand b{font-size:17px}' +
    '.zn-btn{display:flex;align-items:center;gap:8px;background:none;border:1px solid rgba(255,255,255,.55);color:#fff;font:600 15px "Times New Roman",Times,serif;padding:0 14px;border-radius:4px;min-height:44px;cursor:pointer;flex:none}' +
    '.zn-btn span{display:block;width:18px;height:2px;background:#fff;box-shadow:0 6px 0 #fff,0 -6px 0 #fff}}' +
    '@media(prefers-reduced-motion:reduce){.zn-side{transition:none}}';
  var LEAF = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19C9 15 13 11 19 5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M9 15c-2.6.2-4.2-.8-4.8-2.6 2.4-.6 4.2.2 4.8 2.6z" fill="#fff"/><path d="M9 15c.4-2.6-.4-4.4-2-5.4-.8 2.2-.4 4.2 2 5.4z" fill="#fff"/><path d="M13 11c-2.4.6-4.2-.2-5-1.8 2.2-.9 4.1-.4 5 1.8z" fill="#fff"/><path d="M13 11c.2-2.6-.8-4.3-2.5-5.1-.6 2.3 0 4.2 2.5 5.1z" fill="#fff"/><path d="M16.5 7.5c-2.2.8-4 .3-4.9-1.2 2-1.1 3.9-.8 4.9 1.2z" fill="#fff"/><path d="M16.5 7.5c-.2-2.4-1.4-3.8-3-4.3-.3 2.2.6 3.8 3 4.3z" fill="#fff"/><ellipse cx="15.3" cy="11.2" rx="1.5" ry="1.9" transform="rotate(35 15.3 11.2)" fill="#FDBA1E"/><ellipse cx="10.8" cy="17.2" rx="1.4" ry="1.8" transform="rotate(35 10.8 17.2)" fill="#FDBA1E"/></svg>';
  // [key, link, English, Arabic]
  var SCHOOL = [["about", "/school", "About the school", "عن المدرسة"], ["kids", "/school#kids", "Kids' area", "ألعاب ودروس الأطفال"]];
  var ITEMS = [["quran", "/school#quran", "Holy Quran", "القرآن الكريم"], ["live", "/school#live", "Live classes", "دروس مباشرة"],
    ["firstaid", "/school/firstaid", "First aid", "الإسعافات الأولية"], ["help", "/school/help", "Ask for academic support", "اطلب دعمًا دراسيًا"],
    ["sponsor", "/school/sponsor", "Sponsor a child's education", "اكفل تعليم طفل"],
    ["teach", "/school/teach", "Volunteer teachers", "المعلّمون المتطوّعون"]];
  function item(x, on) {
    return '<li><a href="' + x[1] + '"' + (x[0] === on ? ' class="on" aria-current="page"' : '') + ' data-zn="' + x[0] + '"><span class="zn-t">' + x[2] + '<span class="zn-ar" lang="ar">' + x[3] + '</span></span></a></li>';
  }
  var built = false;
  function build() {
    if (built) return; built = true;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var side = document.createElement("aside"); side.className = "zn-side"; side.id = "zn-side"; side.setAttribute("aria-label", "School menu");
    var shade = document.createElement("button"); shade.className = "zn-shade"; shade.id = "zn-shade"; shade.tabIndex = -1; shade.setAttribute("aria-label", "Close menu");
    var top = document.createElement("div"); top.className = "zn-top";
    top.innerHTML = '<a class="zn-brand" href="/school"><img class="zn-vlogo" src="/img/mark.png" alt="Veridian Academy"><b>ZAYTOUN</b></a><button class="zn-btn" id="zn-btn" aria-expanded="false" aria-controls="zn-side"><span></span>Menu</button>';
    document.body.insertBefore(top, document.body.firstChild);
    document.body.insertBefore(shade, document.body.firstChild);
    document.body.insertBefore(side, document.body.firstChild);
    function close() { document.body.classList.remove("zn-open"); document.getElementById("zn-btn").setAttribute("aria-expanded", "false"); }
    document.getElementById("zn-btn").addEventListener("click", function () { var o = document.body.classList.toggle("zn-open"); this.setAttribute("aria-expanded", o); });
    shade.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
    side.addEventListener("click", function (e) {
      var g = e.target.closest("button.zn-grp"); if (g) { var li = g.parentElement, o = li.classList.toggle("open"); g.setAttribute("aria-expanded", o); return; }
      if (e.target.closest("a")) close();
    });
  }
  var installEvt = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); installEvt = e; var b = document.getElementById("zn-install"); if (b) b.hidden = false; });
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("/school-sw.js", { scope: "/school" }).catch(function () {});
  }
  function offStatus() {
    var el = document.getElementById("zn-off"); if (!el) return;
    if (!navigator.onLine) { el.textContent = "● Offline now: saved lessons still work"; el.className = "zn-off zn-offline"; return; }
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) { el.textContent = "✓ Saved on this phone: works without internet"; el.className = "zn-off zn-ready"; }
    else { el.textContent = ""; }
  }
  window.addEventListener("online", offStatus); window.addEventListener("offline", offStatus);
  if ("serviceWorker" in navigator) navigator.serviceWorker.addEventListener("controllerchange", offStatus);
  window.ZNav = {
    draw: function (on) {
      build();
      var inSchool = on === "about" || on === "kids";
      document.getElementById("zn-side").innerHTML =
        '<a class="zn-brand" href="/school"><img class="zn-vlogo" src="/img/mark.png" alt="Veridian Academy"><span><b>ZAYTOUN</b><small>SCHOOL · مدرسة الزيتون</small></span></a>' +
        '<a class="zn-by" href="/">A project of&nbsp;<b>Veridian Academy</b></a>' +
        '<nav><ul class="zn-menu">' +
        '<li class="' + (inSchool ? "open" : "") + '"><button class="zn-grp" aria-expanded="' + inSchool + '"><span class="zn-gname"><b>Zaytoun School</b><small>for children who need support</small></span></button><ul class="zn-sub">' +
        SCHOOL.map(function (x) { return item(x, on); }).join("") + '</ul></li>' +
        ITEMS.map(function (x) { return item(x, on); }).join("") +
        '<li><a href="/">Veridian Academy<span aria-hidden="true">↗</span></a></li>' +
        '</ul></nav>' +
        '<div class="zn-offbox"><p id="zn-off" class="zn-off"></p><button id="zn-install" class="zn-inst" hidden>📲 Add the school to your home screen</button></div>' +
        '<div class="zn-mini">A charity project of Veridian Academy<br>+94 76 171 8171<br><a href="mailto:veridian@sltnet.lk">veridian@sltnet.lk</a></div>';
      offStatus();
      var ib = document.getElementById("zn-install"); if (installEvt) ib.hidden = false;
      ib.addEventListener("click", function () { if (!installEvt) return; installEvt.prompt(); installEvt.userChoice.then(function () { installEvt = null; ib.hidden = true; }); });
    }
  };
})();
