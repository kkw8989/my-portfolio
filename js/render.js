/* 화면 조각을 HTML로 만드는 파일: 홈, 프로젝트 카드, 상세 페이지 */
const R = (() => {
  const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const tags = a => `<div class="tags">${a.map(x => `<span>${x}</span>`).join("")}</div>`;
  const rv = (html, d = 0) => `<div class="reveal" style="--d:${d}s">${html}</div>`;
  const ext = (u, t) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`;

  const header = `<header><div class="wrap"><a class="logo" href="#">${PROFILE.name}</a><nav><a href="#projects">프로젝트</a><a href="#skills">기술</a><a href="#about">소개</a><a href="#timeline">경험</a><a href="#contact">연락</a></nav></div></header>`;
  const footer = `<footer>© 2026 ${PROFILE.name} All rights reserved.</footer>`;

  const tiles = () => PROFILE.tiles.map((t, i) => `<div class="tile" style="background:${t.c};--d:${(i * 0.45).toFixed(2)}s">${t.img ? `<img src="${t.img}" alt="${t.t}">` : t.t}</div>`).join("");

  const chips = group => SKILLS.filter(g => group === "전체" || g.group === group)
    .flatMap(g => g.items).map(i => `<div class="chip"><b>${i[0]}</b><small>${i[1]}</small></div>`).join("");

  const card = (p, i) => {
    const l = [p.links.demo && ext(p.links.demo, "Demo"), p.links.github && ext(p.links.github, "GitHub")].filter(Boolean).join("") || `<a href="#p/${p.id}">자세히 보기</a>`;
    return rv(`<article class="pcard"><div class="pimg"><img src="${p.image}" alt="${p.name} 화면" loading="lazy">${p.featured ? '<span class="pfeat">대표 프로젝트</span>' : ""}<div class="pover">${l}</div></div>
      <div class="pbody"><div class="phead"><div class="plogo" style="background:${p.logo.color}">${p.logo.text}</div><div><h3>${p.name}</h3><p>${p.subtitle}</p></div></div>
      <p class="pkey">${p.key}</p>${tags(p.stack.slice(0, 5))}<a class="btn dark" href="#p/${p.id}">Details</a></div></article>`, (i % 2) * 0.12);
  };

  const timeline = t => rv(`<div class="tcard"><div><span class="ttag">${t.tag}</span>${t.when ? `<br><small>${t.when}</small>` : ""}</div><h3>${t.title}</h3><p>${t.desc}</p></div>`);

  const home = () => {
    const links = [CONTACT.email && `<a class="btn" href="mailto:${CONTACT.email}">이메일 보내기</a>`, CONTACT.resume && `<a class="btn" href="${CONTACT.resume}">이력서 PDF</a>`].filter(Boolean).join("");
    const tabs = ["전체", ...SKILLS.map(g => g.group)].map((g, i) => `<button data-tab="${g}" class="${i ? "" : "on"}">${g}</button>`).join("");
    return `${header}<main>
    <section class="hero"><div class="wrap"><div><p class="hello">${PROFILE.hello}</p><h1>${PROFILE.headline}</h1><div class="type"><b></b><i></i></div>
      <div class="btns"><a class="btn fill" href="#projects">프로젝트 보기</a>${ext(CONTACT.github, "GitHub 둘러보기").replace("<a ", '<a class="btn" ')}</div></div>
      <div class="tiles">${tiles()}</div></div></section>
    <section id="projects" class="sage"><div class="wrap">${rv('<h2 class="sec-title">Projects</h2>')}<div class="pgrid">${PROJECTS.map(card).join("")}</div></div></section>
    <section id="skills"><div class="wrap">${rv('<h2 class="sec-title">Tech Stack</h2>')}${rv(`<div class="tabs">${tabs}</div><div class="chips" id="chips">${chips("전체")}</div>`)}</div></section>
    <section id="about" class="soft"><div class="wrap about">${rv('<h2 class="sec-title">About</h2>')}${rv(PROFILE.intro ? `<p>${PROFILE.intro}</p>` + PROFILE.about.map(t => `<p>${t}</p>`).join("") : "", 0.1)}</div></section>
    <section id="timeline"><div class="wrap">${rv('<h2 class="sec-title">Experience</h2>')}<div class="tl">${TIMELINE.map(timeline).join("")}</div></div></section>
    <section id="contact" class="dark"><div class="wrap">${rv('<h2 class="talk">함께 만들고 싶은 일이 있다면<br>편하게 연락 주세요.</h2>')}${rv(`<div class="btns">${ext(CONTACT.github, "GitHub").replace("<a ", '<a class="btn fill" ')}${links}</div>`, 0.1)}</div></section>
    </main>${footer}`;
  };

  const detail = p => {
    const sec = (t, body) => body ? rv(`<div class="dsec"><h3>${t}</h3>${body}</div>`) : "";
    const l = [p.links.github && ext(p.links.github, "GitHub"), p.links.demo && ext(p.links.demo, "서비스 보기")].filter(Boolean).map(a => a.replace("<a ", '<a class="btn" ')).join("");
    return `${header}<main class="wrap detail"><a class="back" href="#projects">프로젝트 목록으로</a>
      ${rv(`<h1 class="sec-title" style="font-size:clamp(40px,7vw,80px);margin-bottom:12px">${p.name}</h1><p style="font-size:19px;color:var(--mute)">${p.subtitle}</p><img class="dimg" src="${p.image}" alt="${p.name} 화면">
      <dl class="dgrid"><dt>팀 구성</dt><dd>${p.team}</dd>${p.period ? `<dt>기간</dt><dd>${p.period}</dd>` : ""}<dt>기술</dt><dd>${p.stack.join(", ")}</dd></dl>`)}
      ${sec("문제와 목표", `<p>${p.problem}</p>`)}${sec("내가 맡은 일", ul(p.mine) + (p.note ? `<p class="note">${p.note}</p>` : ""))}
      ${p.flow ? sec("처리 흐름", `<ol class="flow">${p.flow.map(x => `<li>${x}</li>`).join("")}</ol>`) : ""}
      ${sec("문제 해결 과정", p.fix && ul(p.fix))}${sec("결과", p.result && ul(p.result))}${sec("다음 개선", p.next && `<p>${p.next}</p>`)}
      ${l ? rv(`<div class="btns" style="margin-top:36px;color:var(--ink)">${l}</div>`) : ""}</main>${footer}`;
  };
  return { home, detail, chips };
})();
