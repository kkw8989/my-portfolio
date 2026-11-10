/* 화면 조각을 HTML로 만드는 파일: 홈, 프로젝트 카드, 상세 페이지 */
const R = (() => {
  const list = PROJECTS.filter(p => !p.hidden);
  const ul = a => `<ul>${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const tags = a => `<div class="tags">${a.map(x => `<span>${x}</span>`).join("")}</div>`;
  const rv = (html, d = 0) => `<div class="reveal" style="--d:${d}s">${html}</div>`;
  const ext = (u, t, c = "") => `<a ${c ? `class="${c}" ` : ""}href="${u}" target="_blank" rel="noopener">${t}</a>`;

  const outlook = e => `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(e)}&subject=${encodeURIComponent("포트폴리오 보고 연락드립니다")}`;
  const photo = () => `<div class="photo-wrap"><figure class="photo-card"><div class="photo-img"><span></span><img src="${PROFILE.photo}" alt="${PROFILE.name} 사진" onerror="this.style.display='none'"></div></b><small></small></figcaption></figure></div>`; //<figcaption><b>${PROFILE.name}
  const header = `<header><div class="wrap"><a class="logo" href="#">${PROFILE.name}</a><nav><a href="#projects">프로젝트</a><a href="#skills">기술</a><a href="#about">소개</a><a href="#timeline">경험</a><a href="#contact">연락</a></nav></div></header>`;
  const footer = `<footer>© 2026 ${PROFILE.name} All rights reserved.</footer>`;
  const marquee = () => { const s = PROFILE.marquee.map(t => `<span>${t}</span>`).join(""); return `<div class="band"><div>${s}${s}</div></div>`; };

  const chips = group => SKILLS.filter(g => group === "전체" || g.group === group)
    .flatMap(g => g.items).map(i => `<div class="chip"><b>${i[0]}</b><small>${i[1]}</small></div>`).join("");

  const isVid = u => /\.(mp4|webm)$/i.test(u || "");
  const media = p => isVid(p.video) ? `<video src="${p.video}" poster="${p.image}" muted loop playsinline preload="metadata"></video>` : `<img src="${p.video || p.image}" alt="${p.name} 화면" loading="lazy">`;
  const img = p => {
    const l = [`<a href="#p/${p.id}" class="details">Details</a>`, p.links.github && ext(p.links.github, "GitHub")].filter(Boolean).join("");
    return `<div class="pimg">${media(p)}<div class="pover">${l}</div></div>`;
  };
  const feature = p => rv(`<div class="pfeature">${img(p)}<div><p class="pnum">대표 프로젝트</p><h3>${p.name}</h3><p class="sub">${p.subtitle}</p><p class="pkey">${p.key}</p>${tags(p.stack.slice(0, 6))}</div></div>`);
  const card = (p, i) => rv(`<article class="pcard">${img(p)}<div class="pbody"><h3>${p.name}</h3><p class="sub">${p.subtitle}</p><p class="pkey">${p.key}</p>${tags(p.stack.slice(0, 4))}</div></article>`, (i % 3) * 0.1);
  const titem = t => rv(`<div class="titem"><small><span class="ttag">${t.tag}</span>${t.when || ""}</small><h3>${t.title}</h3><p>${t.desc}</p></div>`);

  const home = () => {
    const feat = list.find(p => p.featured) || list[0], rest = list.filter(p => p !== feat);
    const head = PROFILE.headline.split("<br>").map((t, i) => `<span class="rise" style="--d:${0.15 + i * 0.15}s">${t.replace("개발자 " + PROFILE.name, `<mark>개발자 ${PROFILE.name}</mark>`)}</span>`).join("");
    const tabs = ["전체", ...SKILLS.map(g => g.group)].map((g, i) => `<button data-tab="${g}" class="${i ? "" : "on"}">${g}</button>`).join("");
    const info = [...PROFILE.info.map(([k, v]) => [k, v]), CONTACT.email && ["이메일", `<a class="more" href="${outlook(CONTACT.email)}" target="_blank" rel="noopener">${CONTACT.email}</a>`], ["GitHub", ext(CONTACT.github, CONTACT.github.replace("https://", ""), "more")]]
      .filter(Boolean).map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join("");
    const big = (u, k, v, ex = "") => `<a class="cbig" href="${u}" ${ex}><small>${k}</small>${v}</a>`;
    return `${header}<main>
    <section class="hero"><div class="wrap hero-grid"><div><p class="hello rise" style="--d:.05s">${PROFILE.hello}</p><h1>${head}</h1>
      <div class="type rise" style="--d:.6s"><b></b><i></i></div>
      <div class="btns rise" style="--d:.75s"><a class="btn fill" href="#projects">프로젝트 보기</a>${ext(CONTACT.github, "GitHub 둘러보기", "btn")}</div></div>${photo()}</div></section>
    ${marquee()}
    <section id="projects"><div class="wrap">${rv('<h2 class="sec-title">Projects</h2>')}${feature(feat)}<div class="pgrid">${rest.map(card).join("")}</div></div></section>
    <section id="skills" class="soft"><div class="wrap">${rv('<h2 class="sec-title">Tech Stack</h2><p>사용해 본 프로젝트가 있는 기술만 적었습니다.</p>')}${rv(`<div class="tabs">${tabs}</div><div class="chips" id="chips">${chips("전체")}</div>`)}</div></section>
    <section id="about"><div class="wrap about">${rv('<h2 class="sec-title">About</h2>')}${rv(`<p>${PROFILE.intro}</p>${PROFILE.about.map(t => `<p>${t}</p>`).join("")}<div class="info">${info}</div>`, 0.1)}</div></section>
    <section id="timeline" class="soft"><div class="wrap">${rv('<h2 class="sec-title">Experience</h2>')}<div class="tl">${TIMELINE.map(titem).join("")}</div></div></section>
    <section id="contact" class="dark"><div class="wrap">${rv('<h2 class="sec-title">Contact</h2>')}${rv((CONTACT.email ? big(outlook(CONTACT.email), "Outlook으로 메일 보내기", CONTACT.email, 'target="_blank" rel="noopener"') + `<p class="fallback">Outlook이 열리지 않으면 <a class="more" href="mailto:${CONTACT.email}">기본 메일 앱으로 열기</a></p>` : "") + big(CONTACT.github, "GitHub", CONTACT.github.replace("https://", ""), 'target="_blank" rel="noopener"') + (CONTACT.resume ? big(CONTACT.resume, "이력서", "Resume PDF") : "") + '<div style="border-top:1px solid #353842"></div>', 0.1)}</div></section>
    </main>${footer}`;
  };

  const detail = p => {
    const sec = (t, body) => body ? rv(`<div class="dsec"><h3>${t}</h3>${body}</div>`) : "";
    const l = [p.links.github && ext(p.links.github, "GitHub", "btn"), p.links.demo && ext(p.links.demo, "서비스 보기", "btn")].filter(Boolean).join("");
    return `${header}<main class="wrap detail"><a class="back" href="#projects">프로젝트 목록으로</a>
      ${rv(`<h1 class="sec-title" style="font-size:clamp(38px,7vw,76px);margin-bottom:12px">${p.name}</h1><p style="font-size:19px;color:var(--mute)">${p.subtitle}</p><img class="dimg" src="${p.image}" alt="${p.name} 화면">
      <dl class="dgrid"><dt>팀 구성</dt><dd>${p.team}</dd>${p.period ? `<dt>기간</dt><dd>${p.period}</dd>` : ""}<dt>기술</dt><dd>${p.stack.join(", ")}</dd></dl>`)}
      ${sec("문제와 목표", `<p>${p.problem}</p>`)}${sec("담당 기능", ul(p.mine) + (p.note ? `<p class="note">${p.note}</p>` : ""))}
      ${sec("주요 기능", p.features && ul(p.features))}
      ${p.flow ? sec("처리 흐름", `<ol class="flow">${p.flow.map(x => `<li>${x}</li>`).join("")}</ol>`) : ""}
      ${sec("문제 해결 과정", p.fix && ul(p.fix))}${sec("결과", p.result && ul(p.result))}${sec("다음 개선", p.next && `<p>${p.next}</p>`)}
      ${l ? rv(`<div class="btns" style="margin-top:36px">${l}</div>`) : ""}</main>${footer}`;
  };
  return { home, detail, chips };
})();