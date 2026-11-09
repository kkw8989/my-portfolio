/* 시작 파일: 주소(해시)에 따라 홈 또는 프로젝트 상세 페이지를 보여줍니다 */
const app = document.getElementById("app");
let view = "";

function route() {
  const m = location.hash.match(/^#p\/(.+)$/), p = m && PROJECTS.find(x => x.id === m[1]);
  const next = p ? "p:" + p.id : "home";
  if (next !== view) {
    app.innerHTML = p ? R.detail(p) : R.home();
    document.body.classList.toggle("is-detail", !!p);
    document.title = p ? `${p.name} | ${PROFILE.name} 포트폴리오` : `${PROFILE.name} 포트폴리오`;
    view = next;
    initAnimations();
    if (p) scrollTo(0, 0);
  }
  if (!p) {
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView(); else if (!location.hash) scrollTo(0, 0);
  }
}

document.addEventListener("click", e => {
  const b = e.target.closest("[data-tab]");
  if (!b) return;
  document.querySelectorAll("[data-tab]").forEach(x => x.classList.toggle("on", x === b));
  document.getElementById("chips").innerHTML = R.chips(b.dataset.tab);
});
addEventListener("hashchange", route);
route();
