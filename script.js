(function () {
  if (/[?&]dev(&|$)/.test(location.search)) return;
  const go = () => location.replace("https://www.google.com");
  addEventListener("keydown", e => {
    const k = (e.key || "").toLowerCase(), c = e.ctrlKey || e.metaKey;
    if (e.key === "F12" || (c && e.shiftKey && (k === "i" || k === "j" || k === "c")) || (c && k === "u") || (e.metaKey && e.altKey && "ijcu".includes(k))) {
      e.preventDefault(); go();
    }
  }, true);
  addEventListener("contextmenu", e => e.preventDefault());
  addEventListener("selectstart", e => e.preventDefault());
  addEventListener("dragstart", e => e.preventDefault());
})();


(function () {
  const canvas = document.getElementById("ascii");
  const ctx = canvas.getContext("2d");
  const chars = " .:-=+*#%@";
  const cw = 9, ch = 15;
  let cols, rows, t = 0, mouse = { x: -999, y: -999 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(innerWidth / cw);
    rows = Math.ceil(innerHeight / ch);
  }
  addEventListener("resize", resize);
  addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();

  function field(x, y, t) {
    const v =
      Math.sin(x * 0.07 + t * 0.6) +
      Math.sin(y * 0.09 - t * 0.4) +
      Math.sin((x + y) * 0.05 + t * 0.3) +
      Math.sin(Math.hypot(x - cols / 2, y - rows / 2) * 0.12 - t * 0.5);
    return (v + 4) / 8;
  }

  function draw() {
    const rgb = getComputedStyle(document.documentElement).getPropertyValue("--ascii").trim();
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.font = `${ch - 2}px "JetBrains Mono", monospace`;
    ctx.textBaseline = "top";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let v = field(x, y, t);
        v = Math.pow(v, 2.6);
        const dx = x * cw - mouse.x, dy = y * ch - mouse.y;
        v += Math.max(0, 1 - Math.hypot(dx, dy) / 180) * 0.35;
        const i = Math.min(chars.length - 1, Math.floor(v * chars.length));
        if (i < 1) continue;
        ctx.fillStyle = `rgba(${rgb}, ${0.025 + v * 0.11})`;
        ctx.fillText(chars[i], x * cw, y * ch);
      }
    }
    t += 0.02;
    requestAnimationFrame(draw);
  }
  draw();
})();

const affiliations = [
  { description: "Antinuke System Development", url: "", image: "https://file.garden/auLtjIQv-uq0Ef2-/source/affiliation/sentrix/profile.png" },
  { description: "world wide threat", url: "", image: "https://file.garden/auLtjIQv-uq0Ef2-/source/affiliation/paradox/profile.png" },
  { description: "source ng mga shitz fivem/discord", url: "", image: "https://file.garden/auLtjIQv-uq0Ef2-/source/affiliation/sulasok/profile.png" },
];
const members = [
  { id: "1539423740985872484", handle: "shuk",     role: "3117", bio: ['console.log("testing lang po")', 'console.log("print everything")'], banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/shuk/banner.mp4", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/shuk/music.mp3", links: ["https://github.com/0x63X", "https://youtube.com/@0x63X", "https://nxllsecurity.site/"] },
  { id: "1538978329082863796", handle: "slimey",  role: "$$$4u", bio: "sitting pretty sa'kin trono habang ka call bf nyang insecure", banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/slimey/banner.gif", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/slimey/music.mp3", links: ["https://www.youtube.com/@dreizza1738", "https://nxllsecurity.site/"] },
  { id: "937952428526018590", handle: "xea",    role: "NOSTRA", bio: "", banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/xea/banner.gif", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/xea/music.mp3", links: [] },
  { id: "1571927895180312618", handle: "koyun", role: "AIMPILL", bio: "", banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/koyun/banner.gif", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/koyun/music.mp3", links: [] },
  { id: "1345898702077825162", handle: "kredens",    role: "NOSTRA", bio: "", banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/kredens/banner.jpg", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/kredens/music.mp3", links: [] },
  { id: "1409142122644246558", handle: "aki",    role: "sntz", bio: "wag mo'ko kinu-kuya, 'di mabuti 'tong ihemplo", banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/aki/banner.gif", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/aki/music.mp3", links: [] },
  { id: "1394930001949888553", handle: "yuno",    role: "nxllsecurity", bio: 'console.log ("hello world")', banner: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/yuno/banner.gif", music: "https://file.garden/auLtjIQv-uq0Ef2-/source/member/yuno/music.mp3", links: ["https://youtube.com/@shukwrld"] },
];

const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const validId = id => /^\d{15,25}$/.test(id) && !/^0+$/.test(id);
const presence = {};
const STATUS_LABEL = { online: "online", idle: "idle", dnd: "do not disturb", offline: "offline" };
const ACT_LABEL = { 0: "Playing", 1: "Streaming", 2: "Listening to", 3: "Watching", 5: "Competing in" };
const ICONS = {
  github: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.4-2.5.4-3.8s-.1-2.5-.4-3.8ZM10 15V9l5.2 3-5.2 3Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
};

const isVideo = u => /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(u || "");

function setMedia(el, src) {
  let v = el.querySelector(":scope > video.media-vid");
  if (src && isVideo(src)) {
    el.style.backgroundImage = "";
    if (!v || v.getAttribute("src") !== src) {
      if (v) v.remove();
      v = document.createElement("video");
      v.className = "media-vid"; v.src = src;
      v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true; v.setAttribute("muted", ""); v.setAttribute("playsinline", "");
      el.prepend(v);
      const p = v.play(); if (p && p.catch) p.catch(() => {});
    }
  } else {
    if (v) v.remove();
    el.style.backgroundImage = src ? `url("${src}")` : "";
  }
}
const pres = m => presence[m.id];
const statusOf = m => (pres(m) && pres(m).discord_status) || "offline";
const userOf = m => (pres(m) && pres(m).discord_user && pres(m).discord_user.username) || m.handle;

const nameOf = m => {
  const u = pres(m) && pres(m).discord_user;
  return ((u && (u.display_name || u.global_name || u.username)) || m.handle).toUpperCase();
};
function avatarOf(m) {
  const u = pres(m) && pres(m).discord_user;
  if (u && u.avatar) return `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${u.avatar.startsWith("a_") ? "gif" : "png"}?size=256`;
  return m.avatar || "";
}

function decoOf(m) {
  const u = pres(m) && pres(m).discord_user, d = u && u.avatar_decoration_data;
  return d && d.asset ? `https://cdn.discordapp.com/avatar-decoration-presets/${d.asset}.png?passthrough=true` : "";
}
const avatarHTML = m => {
  const a = avatarOf(m), d = decoOf(m);
  return (a ? `<img src="${esc(a)}" alt="" draggable="false">` : `<span>${esc(m.handle[0].toUpperCase())}</span>`) +
    (d ? `<img class="deco" src="${esc(d)}" alt="" draggable="false">` : "") + `<i class="dot s-${statusOf(m)}"></i>`;
};
const allActs = m => (pres(m) && pres(m).activities) || [];
const acts = m => allActs(m).filter(a => a.type !== 4);
const customStatus = m => allActs(m).find(a => a.type === 4);
const actTitle = a => (a.type === 2 ? (a.details || a.name) : a.name);

function nowHTML(m) {
  const a = acts(m)[0], st = statusOf(m);
  let txt;
  if (a) txt = `${ACT_LABEL[a.type] || "Active in"} <b>${esc(actTitle(a))}</b>`;
  else { const c = customStatus(m); txt = c && c.state ? esc(c.state) : STATUS_LABEL[st]; }
  return `<i class="dot s-${st}"></i><span>${txt}</span>`;
}

function updateRow(i) {
  const m = members[i], row = document.querySelector(`.m-row[data-i="${i}"]`);
  if (!row) return;
  row.querySelector(".m-av").innerHTML = avatarHTML(m);
  row.querySelector(".m-name").textContent = nameOf(m);
  row.querySelector(".m-user").textContent = "@" + userOf(m);
  row.querySelector(".m-now").innerHTML = nowHTML(m);
  const a = avatarOf(m);
  if (!m.banner && a) row.querySelector(".m-cover").style.backgroundImage = `url("${a}")`;
  else if (isVideo(m.banner)) setMedia(row.querySelector(".m-cover"), m.banner);
  const gc = document.querySelector(`.g-card[data-i="${i}"]`);
  if (gc) {
    gc.querySelector(".g-av").innerHTML = avatarHTML(m);
    gc.querySelector(".g-name").textContent = nameOf(m);
    gc.querySelector(".g-user").textContent = "@" + userOf(m);
  }
}

document.getElementById("member-grid").innerHTML = members.map((m, i) =>
  `<article class="m-row" data-i="${i}" tabindex="0" role="button" aria-label="Open ${esc(m.handle)}">` +
    `<div class="m-side"><div class="m-av"></div><div class="m-id"><div class="m-name">${esc(m.handle.toUpperCase())}</div><div class="m-user"></div></div></div>` +
    `<div class="m-card"><div class="m-cover${m.banner ? "" : " blur"}"${m.banner && !isVideo(m.banner) ? ` style="background-image:url('${esc(m.banner)}')"` : ""}></div>` +
      `<span class="m-idx">MEMBER / ${String(i + 1).padStart(2, "0")}</span><span class="m-role">${esc(m.role)}</span><div class="m-now"></div></div>` +
  `</article>`
).join("");
document.getElementById("m-cards").innerHTML = members.map((m, i) =>
  `<article class="g-card" data-i="${i}" style="--i:${i}" tabindex="0" role="button" aria-label="Open ${esc(m.handle)}">` +
    `<div class="g-tile"><div class="g-av"></div></div>` +
    `<div class="g-info"><div class="g-name">${esc(m.handle.toUpperCase())}</div><div class="g-user"></div></div>` +
  `</article>`
).join("");
members.forEach((_, i) => updateRow(i));


const mView = document.getElementById("members");
const ticks = document.getElementById("m-ticks");
ticks.innerHTML = members.map((_, i) => `<button class="tick" data-i="${i}" type="button" aria-label="Member ${i + 1}"></button>`).join("");
const setTick = i => ticks.querySelectorAll(".tick").forEach(t => t.classList.toggle("active", +t.dataset.i === i));
setTick(0);
ticks.addEventListener("click", e => {
  const t = e.target.closest(".tick");
  if (t) goTo(+t.dataset.i);
});
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(en => {
    en.target.classList.toggle("in-view", en.intersectionRatio >= 0.35);
  }), { root: mView, threshold: [0, 0.35, 0.6] });
  document.querySelectorAll(".m-row").forEach(r => io.observe(r));
}
const rail = document.querySelector(".m-rail");
let railTimer;
function flashRail() {
  rail.classList.add("show");
  clearTimeout(railTimer);
  railTimer = setTimeout(() => rail.classList.remove("show"), 1200);
}
mView.addEventListener("scroll", flashRail, { passive: true });


const peek = document.getElementById("m-peek");
function showPeek(t) {
  const i = +t.dataset.i, m = members[i], a = avatarOf(m), bg = m.banner || a;
  peek.querySelector(".peek-label").textContent = `${String(i + 1).padStart(2, "0")} - ${nameOf(m)}`;
  const cv = peek.querySelector(".peek-cover");
  setMedia(cv, bg);
  cv.classList.toggle("sharp", !!m.banner);
  peek.querySelector(".peek-av").innerHTML = a ? `<img src="${esc(a)}" alt="" draggable="false">` : `<span>${esc(m.handle[0].toUpperCase())}</span>`;
  const r = t.getBoundingClientRect();
  peek.style.top = Math.min(innerHeight - 150, Math.max(150, r.top + r.height / 2)) + "px";
  peek.classList.add("show");
}
ticks.addEventListener("mouseover", e => { const t = e.target.closest(".tick"); if (t) showPeek(t); });
rail.addEventListener("mouseleave", () => peek.classList.remove("show"));


let curIdx = 0, anim = 0, pageLock = 0;
const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
function goTo(n, dur = 1000) {
  n = Math.max(0, Math.min(members.length - 1, n));
  curIdx = n; setTick(n);
  const row = document.querySelector(`.m-row[data-i="${n}"]`);
  const rr = row.getBoundingClientRect(), cr = mView.getBoundingClientRect();
  const from = mView.scrollTop;
  const to = from + (rr.top + rr.height / 2 - cr.top) - (84 + mView.clientHeight) / 2;
  const run = ++anim;
  pageLock = performance.now() + dur + 220;
  if (!dur) { mView.scrollTop = to; return; }
  flashRail();
  const t0 = performance.now();
  (function step(now) {
    if (run !== anim) return;
    const p = Math.min(1, (now - t0) / dur);
    mView.scrollTop = from + (to - from) * easeInOut(p);
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
const listMode = () => !mView.classList.contains("grid-mode");
mView.addEventListener("wheel", e => {
  if (!listMode() || openIdx >= 0) return;
  e.preventDefault();
  flashRail();
  if (Math.abs(e.deltaY) < 8 || performance.now() < pageLock) return;
  goTo(curIdx + (e.deltaY > 0 ? 1 : -1));
}, { passive: false });
let touchY = null;
mView.addEventListener("touchstart", e => { touchY = e.touches[0].clientY; }, { passive: true });
mView.addEventListener("touchmove", e => { if (listMode()) e.preventDefault(); }, { passive: false });
mView.addEventListener("touchend", e => {
  if (touchY == null || !listMode()) return;
  const dy = touchY - e.changedTouches[0].clientY; touchY = null;
  if (Math.abs(dy) > 50 && performance.now() >= pageLock) goTo(curIdx + (dy > 0 ? 1 : -1));
}, { passive: true });
mView.addEventListener("mousemove", e => { if (listMode() && innerWidth - e.clientX < 120) flashRail(); });
addEventListener("resize", () => goTo(curIdx, 0));
addEventListener("keydown", e => {
  if (openIdx >= 0 || !mView.classList.contains("active") || !listMode()) return;
  const next = e.key === "ArrowDown" || e.key === "PageDown", prev = e.key === "ArrowUp" || e.key === "PageUp";
  if (!next && !prev) return;
  e.preventDefault();
  if (performance.now() >= pageLock) goTo(curIdx + (next ? 1 : -1));
});
const setMode = grid => { mView.classList.toggle("grid-mode", grid); mView.scrollTop = 0; if (!grid) goTo(curIdx, 0); };
document.getElementById("m-toggle").addEventListener("click", () => setMode(true));
document.getElementById("m-listbtn").addEventListener("click", () => setMode(false));


const fmt = s => {
  s = Math.max(0, Math.floor(s));
  const h = (s / 3600) | 0, mi = ((s % 3600) / 60) | 0, sec = s % 60;
  return (h ? h + ":" + String(mi).padStart(2, "0") : mi) + ":" + String(sec).padStart(2, "0");
};
function actImg(a) {
  const li = a.assets && a.assets.large_image;
  if (!li) return "";
  if (li.startsWith("mp:")) return "https://media.discordapp.net/" + li.slice(3);
  if (li.startsWith("spotify:")) return "https://i.scdn.co/image/" + li.slice(8);
  if (a.application_id) return `https://cdn.discordapp.com/app-assets/${a.application_id}/${li}.png`;
  return "";
}
function actHTML(a) {
  const img = actImg(a), t = a.timestamps || {};
  const spot = a.type === 2;
  const lines = (spot ? [a.state] : [a.details, a.state]).filter(Boolean);
  const time = t.start ? `<span data-start="${t.start}"${t.end ? ` data-end="${t.end}"` : ""}></span>` : "";
  return `<div class="act"><div class="a-art">${img ? `<img src="${esc(img)}" alt="" draggable="false">` : `<span>${esc((a.name || "?")[0])}</span>`}</div>` +
    `<div class="a-body"><div class="a-type"><span>${ACT_LABEL[a.type] || "Activity"}</span>${time}</div>` +
    `<div class="a-name">${esc(actTitle(a))}</div>` +
    lines.map(l => `<div class="a-sub">${esc(l)}</div>`).join("") +
    (t.start && t.end ? `<div class="a-bar"><i data-prog></i></div>` : "") + `</div></div>`;
}
function updateTimers() {
  const now = Date.now();
  document.querySelectorAll("#profile [data-start]").forEach(el => {
    const s = +el.dataset.start, e = +el.dataset.end;
    if (e) {
      const dur = (e - s) / 1000, pos = Math.min(dur, Math.max(0, (now - s) / 1000));
      el.textContent = fmt(pos) + " / " + fmt(dur);
      const bar = el.closest(".act").querySelector("[data-prog]");
      if (bar) bar.style.width = (pos / dur * 100) + "%";
    } else el.textContent = fmt((now - s) / 1000);
  });
}
setInterval(updateTimers, 1000);

let bioRun = 0;
function typeInto(el, bios) {
  const run = ++bioRun;
  const list = (Array.isArray(bios) ? bios : [bios]).filter(Boolean);
  el.textContent = "";
  if (!list.length) return;
  const TYPE_MS = 28, ERASE_MS = 16, HOLD_MS = 1800, GAP_MS = 300;
  let idx = 0;
  (function cycle() {
    if (run !== bioRun) return;
    const text = list[idx];
    let i = 0;
    (function typeStep() {
      if (run !== bioRun) return;
      el.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(typeStep, TYPE_MS);
      else if (list.length > 1) setTimeout(eraseStep, HOLD_MS);
    })();
    function eraseStep() {
      if (run !== bioRun) return;
      let j = text.length;
      (function erase() {
        if (run !== bioRun) return;
        el.textContent = text.slice(0, --j);
        if (j > 0) setTimeout(erase, ERASE_MS);
        else { idx = (idx + 1) % list.length; setTimeout(cycle, GAP_MS); }
      })();
    }
  })();
}

const prof = document.createElement("div");
prof.id = "profile";
document.body.appendChild(prof);
let openIdx = -1;

function paintProfile() {
  if (openIdx < 0) return;
  const m = members[openIdx], st = statusOf(m), bg = m.banner || avatarOf(m);
  const av = avatarOf(m);
  prof.querySelector(".p-bg").style.backgroundImage = (isVideo(bg) ? av : bg) ? `url("${isVideo(bg) ? av : bg}")` : "";
  setMedia(prof.querySelector(".p-banner"), bg);
  prof.querySelector(".p-av").innerHTML = avatarHTML(m);
  prof.querySelector(".p-name").textContent = nameOf(m);
  prof.querySelector(".p-meta").textContent = `@${userOf(m)}`;
  const c = customStatus(m);
  prof.querySelector(".p-custom").innerHTML = c && (c.state || (c.emoji && !c.emoji.id))
    ? `${c.emoji && !c.emoji.id ? esc(c.emoji.name) + " " : ""}${esc(c.state || "")}` : "";
  const list = acts(m);
  prof.querySelector(".p-acts").innerHTML = list.length ? list.map(actHTML).join("")
    : `<div class="act none">${!validId(m.id) ? "Discord not linked yet" : st === "offline" ? "Offline" : "No activity right now"}</div>`;
  updateTimers();
  requestAnimationFrame(applyMarquee);
}

function applyMarquee() {
  prof.querySelectorAll(".a-name, .a-sub").forEach(el => {
    if (el.dataset.mq || el.scrollWidth <= el.clientWidth + 1) return;
    const t = el.textContent, dur = Math.max(9, t.length * 0.32);
    el.dataset.mq = "1";
    el.innerHTML = `<span class="mq" style="animation-duration:${dur.toFixed(1)}s"><span>${esc(t)}</span><span>${esc(t)}</span></span>`;
  });
}

function normLink(l) {
  const url = typeof l === "string" ? l : l && l.url;
  if (!url || !/^https?:\/\//i.test(url)) return null;
  let type = typeof l === "object" && l.type;
  if (!type || !ICONS[type]) {
    const h = (() => { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; } })();
    type = /(^|\.)github\.com$/.test(h) ? "github" : /(^|\.)(youtube\.com|youtu\.be)$/.test(h) ? "youtube" : "link";
  }
  return { type, url };
}


const MUSIC_ON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/></svg>';
const MUSIC_OFF = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4Z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';
let musicMuted = false, musicVol = 0.6;
try {
  musicMuted = localStorage.getItem("musicMuted") === "1";
  const v = parseFloat(localStorage.getItem("musicVol")); if (v >= 0 && v <= 1) musicVol = v;
} catch (e) {}
const audio = new Audio();
audio.loop = true; audio.preload = "auto";
function syncAudioUI() {
  const b = prof.querySelector(".p-music"), r = prof.querySelector(".p-vol");
  const off = musicMuted || musicVol === 0;
  if (b) { b.innerHTML = off ? MUSIC_OFF : MUSIC_ON; b.classList.toggle("off", off); }
  if (r) { r.value = musicMuted ? 0 : musicVol; r.style.setProperty("--v", (musicMuted ? 0 : musicVol) * 100 + "%"); }
}
function playMusic(m) {
  stopMusic();
  if (!m.music) return;
  audio.src = m.music;
  audio.muted = musicMuted;
  audio.volume = musicVol;
  syncAudioUI();
  const p = audio.play();
  if (p && p.catch) p.catch(() => {});
}
function stopMusic() {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
}
prof.addEventListener("click", e => {
  if (!e.target.closest(".p-music")) return;
  musicMuted = !musicMuted;
  if (!musicMuted && musicVol === 0) musicVol = 0.6;
  audio.muted = musicMuted; audio.volume = musicVol;
  try { localStorage.setItem("musicMuted", musicMuted ? "1" : "0"); localStorage.setItem("musicVol", musicVol); } catch (err) {}
  syncAudioUI();
});
prof.addEventListener("input", e => {
  if (!e.target.classList.contains("p-vol")) return;
  musicVol = +e.target.value;
  musicMuted = musicVol === 0;
  audio.volume = musicVol; audio.muted = musicMuted;
  try { localStorage.setItem("musicVol", musicVol); localStorage.setItem("musicMuted", musicMuted ? "1" : "0"); } catch (err) {}
  syncAudioUI();
});
addEventListener("hashchange", () => { if (openIdx >= 0) closeProfile(); });

function openProfile(i) {
  openIdx = i;
  const m = members[i];
  const links = (m.links || []).map(normLink).filter(Boolean)
    .map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(l.type)}" title="${esc(l.type)}">${ICONS[l.type] || ICONS.link}</a>`).join("");
  prof.innerHTML =
    `<div class="p-bg"></div><div class="p-wrap">` +
    `<div class="p-top"><button class="p-back" type="button">&larr; Back</button>` +
    (m.music ? `<div class="p-audio"><input class="p-vol" type="range" min="0" max="1" step="0.01" aria-label="Volume"><button class="p-music" type="button" aria-label="Mute music" title="Mute / unmute">${MUSIC_ON}</button></div>` : "") + `</div>` +
    `<div class="p-card"><div class="p-banner"></div>` +
    `<div class="p-head"><div class="p-av"></div><div><div class="p-name">${esc(m.handle.toUpperCase())}</div><div class="p-meta"></div></div></div>` +
    `<p class="p-bio"></p><div class="p-custom"></div><div class="p-acts"></div>` +
    `<div class="p-foot"><div class="p-links">${links}</div><span class="p-role">${esc(m.role)}</span></div></div></div>` +
    "";
  paintProfile();
  playMusic(m);
  typeInto(prof.querySelector(".p-bio"), m.bio);
  prof.scrollTop = 0;
  prof.classList.add("open");
  document.documentElement.classList.add("profile-open");
}
function closeProfile() {
  stopMusic();
  openIdx = -1; bioRun++;
  prof.classList.remove("open");
  document.documentElement.classList.remove("profile-open");
}
prof.addEventListener("click", e => { if (e.target.closest(".p-back") || e.target === prof || e.target.classList.contains("p-wrap")) closeProfile(); });
addEventListener("keydown", e => { if (e.key === "Escape" && openIdx >= 0) closeProfile(); });
["member-grid", "m-cards"].forEach(id => {
  const box = document.getElementById(id);
  box.addEventListener("click", e => { const r = e.target.closest(".m-row, .g-card"); if (r) openProfile(+r.dataset.i); });
  box.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const r = e.target.closest(".m-row, .g-card"); if (r) { e.preventDefault(); openProfile(+r.dataset.i); }
  });
});


function setPresence(id, d) {
  if (!d) return;
  presence[id] = d;
  members.forEach((m, i) => { if (m.id === id) { updateRow(i); if (openIdx === i) paintProfile(); } });
}
function connectLanyard() {
  const ids = [...new Set(members.map(m => m.id).filter(validId))];
  if (!ids.length) return;
  let hb;
  const ws = new WebSocket("wss://api.lanyard.rest/socket");
  ws.onmessage = ev => {
    let msg; try { msg = JSON.parse(ev.data); } catch (e) { return; }
    if (msg.op === 1) {
      ws.send(JSON.stringify({ op: 2, d: { subscribe_to_ids: ids } }));
      hb = setInterval(() => { if (ws.readyState === 1) ws.send(JSON.stringify({ op: 3 })); }, msg.d.heartbeat_interval);
    } else if (msg.op === 0) {
      if (msg.t === "INIT_STATE") {
        if (msg.d && msg.d.discord_user) setPresence(msg.d.discord_user.id, msg.d);
        else Object.entries(msg.d || {}).forEach(([id, d]) => setPresence(id, d));
      } else if (msg.t === "PRESENCE_UPDATE" && msg.d && msg.d.discord_user) setPresence(msg.d.discord_user.id, msg.d);
    }
  };
  ws.onclose = () => { clearInterval(hb); setTimeout(connectLanyard, 5000); };
  ws.onerror = () => ws.close();
}
connectLanyard();


const CLICK_ICON = '<svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M28 28l26 10-11 5-5 11-10-26Z"/><path d="M26 14l-2-8M14 20l-7-5M12 32l-8 1M36 12l3-7M18 40l-5 6"/></svg>';
document.getElementById("affiliations-list").innerHTML = affiliations.map(a =>
  `<${a.url ? `a href="${esc(a.url)}" target="_blank" rel="noopener"` : "div"} class="aff-card">` +
    `<i class="pl tl">+</i><i class="pl tr">+</i><i class="pl bl">+</i><i class="pl br">+</i>` +
    `<div class="aff-img"${a.image ? ` style="background-image:url('${esc(a.image)}')"` : ""}></div>` +
    `<span class="aff-cursor">${CLICK_ICON}</span>${(a.description || a.name) ? `<p class="aff-desc">${esc(a.description || a.name)}</p>` : ""}` +
  `</${a.url ? "a" : "div"}>`
).join("");


function route() {
  const name = (location.hash || "#home").slice(1);
  const id = document.getElementById(name) ? name : "home";
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
  document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.route === id));
  window.scrollTo(0, 0);
  goTo(0, 0);
  if (id === "members") flashRail();
  if (id === "home" && !document.documentElement.classList.contains("intro")) typeTagline();
}
addEventListener("hashchange", route);


let typing = 0;
function typeTagline() {
  const el = document.getElementById("tagline");
  const text = el.dataset.text;
  const run = ++typing;
  el.textContent = "";
  let i = 0;
  (function step() {
    if (run !== typing) return;
    el.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(step, 16);
  })();
}


const DISCORD_CLIENT_ID = "1558056855236907048";
const DISCORD_REDIRECT_URI = location.origin + location.pathname;
const loginWrap = document.getElementById("loginWrap");
const loginBtn = document.getElementById("login");
const loginMenu = document.getElementById("loginMenu");
const loginMenuName = document.getElementById("loginMenuName");
const logoutBtn = document.getElementById("logoutBtn");
const LOGIN_ICON = loginBtn.innerHTML;
let dUser = null;
try { dUser = JSON.parse(localStorage.getItem("discordUser") || "null"); } catch (e) {}
function dAvatar(u) {
  if (u.avatar) return `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${u.avatar.startsWith("a_") ? "gif" : "png"}?size=64`;
  let n = 0; try { n = Number((BigInt(u.id) >> 22n) % 6n); } catch (e) {}
  return `https://cdn.discordapp.com/embed/avatars/${n}.png`;
}
function closeLoginMenu() { loginWrap.classList.remove("open"); }
function paintLogin() {
  closeLoginMenu();
  if (dUser) {
    loginBtn.classList.add("logged-in");
    loginBtn.innerHTML = `<img class="login-av" src="${esc(dAvatar(dUser))}" alt="" draggable="false">`;
    loginBtn.removeAttribute("title");
    loginBtn.setAttribute("aria-label", `Logged in as ${dUser.name}. Click to open menu`);
    loginMenuName.textContent = dUser.name;
  } else {
    loginBtn.classList.remove("logged-in");
    loginBtn.innerHTML = LOGIN_ICON;
    loginBtn.title = "Log in with Discord";
    loginBtn.setAttribute("aria-label", "Log in with Discord");
  }
}
paintLogin();

(function () {
  if (!/access_token=|error=/.test(location.hash)) return;
  const tok = new URLSearchParams(location.hash.slice(1)).get("access_token");
  try { history.replaceState(null, "", location.pathname + location.search + "#home"); } catch (e) {}
  if (!tok) return;
  fetch("https://discord.com/api/users/@me", { headers: { Authorization: "Bearer " + tok } })
    .then(r => (r.ok ? r.json() : null))
    .then(u => {
      if (!u) return;
      dUser = { id: u.id, name: u.global_name || u.username, avatar: u.avatar };
      try { localStorage.setItem("discordUser", JSON.stringify(dUser)); } catch (e) {}
      paintLogin();
    }).catch(() => {});
})();
loginBtn.addEventListener("click", () => {
  if (dUser) {
    loginWrap.classList.toggle("open");
    return;
  }
  location.href = "https://discord.com/oauth2/authorize?response_type=token&scope=identify" +
    "&client_id=" + encodeURIComponent(DISCORD_CLIENT_ID) +
    "&redirect_uri=" + encodeURIComponent(DISCORD_REDIRECT_URI);
});
logoutBtn.addEventListener("click", () => {
  dUser = null;
  try { localStorage.removeItem("discordUser"); } catch (e) {}
  paintLogin();
});
document.addEventListener("click", e => {
  if (loginWrap.classList.contains("open") && !loginWrap.contains(e.target)) closeLoginMenu();
});
addEventListener("keydown", e => { if (e.key === "Escape") closeLoginMenu(); });
function tick() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString([], { hour12: false }) + " Philippine Time";
}
tick(); setInterval(tick, 1000);

route();


(function () {
  const root = document.documentElement;
  if (!root.classList.contains("intro")) return;
  const logoEl = document.querySelector(".logo");
  const homeImg = logoEl && logoEl.querySelector("img");
  if (!homeImg) { root.classList.remove("intro", "intro-ran"); typeTagline(); return; }

  let skipped = false, done = false, moved = false;
  let cur = { x: 0, y: 0, s: 1 }, shift = { x: 0, y: 0 }, baseW = 0;
  const wait = ms => skipped ? Promise.resolve() : new Promise(r => setTimeout(r, ms));

  const bg = document.createElement("div"); bg.id = "intro-bg";
  const ui = document.createElement("div"); ui.id = "intro-ui";
  ui.innerHTML =
    '<div class="i-panel"><div class="i-bar"><span>spyware // encrypt</span><span class="i-pct">000%</span></div>' +
    '<div class="i-log"></div><div class="i-progress"><i></i></div><div class="i-cipher"></div></div>' +
    '';
  document.body.append(bg, ui);

  const outline = new Image(); outline.className = "i-outline"; outline.alt = ""; outline.src = "https://file.garden/auLtjIQv-uq0Ef2-/source/logo/outline.png";
  logoEl.append(outline);

  const panel = ui.querySelector(".i-panel"), log = ui.querySelector(".i-log"),
        bar = ui.querySelector(".i-progress i"), pct = ui.querySelector(".i-pct"),
        cipher = ui.querySelector(".i-cipher");

  function move(x, y, s) { s = s || 1; cur = { x, y, s }; logoEl.style.transform = "translate(" + x + "px," + y + "px) scale(" + s + ")"; }

  function place() {
    const r = homeImg.getBoundingClientRect();
    const s = cur.s || 1, bw = r.width / s, bh = r.height / s;
    const cx = r.left + r.width / 2 - cur.x, cy = r.top + r.height / 2 - cur.y;
    const base = { left: cx - bw / 2, top: cy - bh / 2, width: bw, height: bh };
    baseW = bw;
    const pw = Math.min(380, innerWidth - 32), gap = 40;
    panel.style.width = pw + "px";
    if (innerWidth >= base.width + 380 + gap + 60) {
      shift = { x: -(pw + gap) / 2, y: 0 };
      panel.style.left = (base.left + base.width / 2 - (pw + gap + base.width) / 2 + base.width + gap) + "px";
      panel.style.top = (base.top + base.height / 2 - panel.offsetHeight / 2) + "px";
    } else {
      shift = { x: 0, y: -Math.min(36, base.top) };
      panel.style.left = (innerWidth - pw) / 2 + "px";
      panel.style.top = (base.top + base.height + shift.y + 24) + "px";
    }
    if (moved) move(shift.x, shift.y, 1);
  }
  addEventListener("resize", place);

  function addLine(a, b) {
    const d = document.createElement("div");
    d.innerHTML = a + (b ? ' <span class="ok">' + b + "</span>" : "");
    log.appendChild(d);
    while (log.children.length > 5) log.removeChild(log.firstChild);
  }

  async function encrypt() {
    for (const [a, b] of [["> boot sequence", "ok"], ["> mounting archive", "ok"], ["> generating key pair", "rsa-4096"], ["> deriving session key", "ok"]]) {
      addLine(a, b); await wait(380);
    }
    addLine("> encrypting archive", "");
    const hex = Array.from({ length: 32 }, () => "0123456789abcdef"[Math.random() * 16 | 0]).join("").toUpperCase();
    const glyphs = "0123456789ABCDEF#%@*+=";
    await new Promise(resolve => {
      const t0 = performance.now(), dur = 2300;
      (function frame(now) {
        const p = skipped ? 1 : Math.min(1, (now - t0) / dur);
        bar.style.width = (p * 100) + "%";
        pct.textContent = String(Math.round(p * 100)).padStart(3, "0") + "%";
        const locked = Math.floor(p * hex.length);
        cipher.textContent = "key " + hex.slice(0, locked) +
          Array.from({ length: hex.length - locked }, () => glyphs[Math.random() * glyphs.length | 0]).join("");
        if (p < 1) requestAnimationFrame(frame); else resolve();
      })(performance.now());
    });
    addLine("> verifying checksums", "ok"); await wait(420);
    addLine("> sealing archive", "ok"); await wait(420);
    addLine("> encryption complete", "done"); await wait(700);
  }

  function finish() {
    if (done) return; done = true;
    root.classList.remove("intro", "intro-fill");
    root.classList.add("intro-out");
    bg.classList.add("out"); ui.classList.add("out");
    logoEl.style.transform = ""; logoEl.style.transition = "";
    logoEl.classList.remove("phase-draw", "phase-fill");
    outline.remove();
    typeTagline();
    setTimeout(() => { root.classList.remove("intro-out"); bg.remove(); ui.remove(); }, 700);
  }

  (async function run() {
    await Promise.all([homeImg, outline].map(i => i.decode ? i.decode().catch(() => {}) : 0));
    place();
    const startS = Math.max(1, Math.min(1.35, (innerWidth - 24) / (baseW || 1)));
    logoEl.style.transition = "none"; move(0, 0, startS); void logoEl.offsetWidth; logoEl.style.transition = "";
    await wait(250);
    logoEl.classList.add("phase-draw");
    await wait(1600);
    logoEl.classList.add("phase-fill");
    root.classList.add("intro-fill");
    await wait(900);
    moved = true; move(shift.x, shift.y, 1);
    await wait(1000);
    panel.classList.add("show");
    await encrypt();
    panel.classList.remove("show");
    await wait(450);
    moved = false; move(0, 0, 1);
    await wait(1050);
    finish();
  })();
})();
