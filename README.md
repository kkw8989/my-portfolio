# 김경우 포트폴리오

빌드 없이 동작하는 정적 사이트입니다. `index.html`을 브라우저로 열면 바로 보입니다.

## 파일 지도 (어디에 뭐가 있나)

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 첫 화면 문구, 타이핑 문장, 떠다니는 기술 타일, 소개 문단 | js/data/profile.js |
| GitHub, 이메일, 이력서 PDF 경로 | js/data/contact.js |
| 프로젝트 (카드, 상세 페이지, Demo/GitHub 링크, 이미지) | js/data/projects.js |
| 기술 스택과 사용한 프로젝트 | js/data/skills.js |
| 경험, 교육, 수상, 학력 | js/data/timeline.js |
| 프로젝트 이미지 | assets/projects/ |
| 색상, 글꼴, 버튼 | css/base.css |
| 헤더, 첫 화면, 섹션 배치, 푸터 | css/layout.css |
| 카드, 타일, 기술 칩, 경험 카드, 상세 페이지 모양 | css/components.css |
| 스크롤 등장, 떠다니는 효과, 클릭 효과 | css/animations.css |
| 화면 HTML 조립 | js/render.js |
| 스크롤, 타이핑, 마우스 반응, 버튼 물결 | js/animations.js |
| 주소에 따라 홈과 상세 전환 | js/main.js |

## 프로젝트 추가하기

`js/data/projects.js`의 배열 맨 끝에 같은 모양의 객체를 하나 더 넣으면 카드와 상세 페이지가 자동으로 생깁니다. `id`는 영문 소문자로 겹치지 않게 쓰세요.

## 실제 시연 이미지로 바꾸기

`assets/projects/`에 이미지(png, jpg, gif, mp4 아님)를 넣고 해당 프로젝트의 `image` 값을 파일 경로로 바꾸세요. 16:10 비율을 권장합니다. 기술 타일을 실제 로고로 바꾸려면 `profile.js`의 `tiles`에 `"img": "assets/icons/java.svg"`처럼 추가하면 됩니다.

## 배포

GitHub에 이 폴더 전체를 올리고 Vercel에서 저장소를 가져오면 설정 없이 배포됩니다.
