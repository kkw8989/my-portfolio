/* 움직임 담당 파일: 스크롤 등장, 타이핑, 타일 마우스 반응, 카드 기울기, 버튼 물결, 진행바 */
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
let io, timer;

function typeLoop(el, words) {
  let i = 0, c = 0, del = 0;
  (function tick() {
    const s = words[i];
    c += del ? -1 : 1;
    el.textContent = s.slice(0, c);
    let n = del ? 25 : 55;
    if (!del && c === s.length) { del = 1; n = 1600; }
    else if (del && c === 0) { del = 0; i = (i + 1) % words.length; n = 300; }
    timer = setTimeout(tick, n);
  })();
}

function onScroll() {
  const y = scrollY, h = document.querySelector("header");
  if (h) h.classList.toggle("solid", y > 40 || document.body.classList.contains("is-detail"));
  document.getElementById("progress").style.width = (y / ((document.documentElement.scrollHeight - innerHeight) || 1)) * 100 + "%";
  let cur = "";
  document.querySelectorAll("main section[id]").forEach(s => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s.id; });
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
}

function observe(root = document) {
  root.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

function initAnimations() {
  if (io) io.disconnect();
  clearTimeout(timer);
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  observe();
  const t = document.querySelector(".type b");
  if (t) RM ? (t.textContent = PROFILE.typed[0]) : typeLoop(t, PROFILE.typed);
  const tiles = [...document.querySelectorAll(".tile")], hero = document.querySelector(".hero");
  if (hero && !RM) hero.onmousemove = e => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    tiles.forEach((el, i) => { const k = (i % 3 + 1) * 12; el.style.translate = `${-x * k}px ${-y * k}px`; });
  };
  tiles.forEach(el => el.onclick = () => { el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); });
  if (!RM) document.querySelectorAll(".pcard").forEach(c => {
    c.onmousemove = e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
    };
    c.onmouseleave = () => (c.style.transform = "");
  });
  onScroll();
}

addEventListener("scroll", onScroll, { passive: true });
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn");
  if (!b) return;
  const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height), sp = document.createElement("span");
  sp.className = "rp";
  sp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  b.appendChild(sp);
  setTimeout(() => sp.remove(), 600);
});
