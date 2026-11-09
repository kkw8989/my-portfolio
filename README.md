# 김경우 포트폴리오

## 파일 지도 (어디에 뭐가 있나)

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 첫 화면 문구, 타이핑 문장, 흘러가는 기술 목록(marquee), 소개 문단, About 정보칸(info) | js/data/profile.js |
| GitHub, 이메일, 이력서 PDF 경로 | js/data/contact.js |
| 프로젝트 (카드, 상세 페이지, Demo/GitHub 링크, 이미지) | js/data/projects.js |
| 기술 스택과 사용한 프로젝트 | js/data/skills.js |
| 경험, 교육, 수상, 학력 | js/data/timeline.js |
| 프로젝트 이미지 | assets/projects/ |
| 색상, 글꼴, 버튼 | css/base.css |
| 헤더, 첫 화면, 섹션 배치, 푸터 | css/layout.css |
| 카드, 기술 칩, 경험 카드, 상세 페이지 모양 | css/components.css |
| 스크롤 등장, 첫 화면 등장, 형광펜, 마퀴, 클릭 효과 | css/animations.css |
| 화면 HTML 조립 | js/render.js |
| 스크롤 등장, 타이핑, 카드 기울기, 버튼 물결 | js/animations.js |
| 주소에 따라 홈과 상세 전환 | js/main.js |
<<<<<<< HEAD
=======

## 프로젝트 추가하기

`js/data/projects.js`의 배열 맨 끝에 같은 모양의 객체를 하나 더 넣으면 카드와 상세 페이지가 자동으로 생깁니다. `id`는 영문 소문자로 겹치지 않게 쓰세요.

## 실제 시연 이미지로 바꾸기

`assets/projects/`에 이미지(png, jpg, gif, mp4 아님)를 넣고 해당 프로젝트의 `image` 값을 파일 경로로 바꾸세요. 16:10 비율을 권장합니다. 

## 배포

GitHub에 이 폴더 전체를 올리고 Vercel에서 저장소를 가져오면 설정 없이 배포됩니다.

## 프로젝트 카드 숨기기와 연락처

- 카드를 숨기려면 `js/data/projects.js`에서 해당 프로젝트에 `"hidden": true` 한 줄만 넣으세요. 지우지 않아도 되고, `false`로 바꾸면 다시 나타납니다.
- 이메일은 `js/data/contact.js`의 `email`에 쓰면 About 정보칸과 Contact 섹션에 클릭 가능한 링크가 자동으로 생깁니다. 비워 두면 표시되지 않습니다.

## 사진과 이메일

- 첫 화면 오른쪽 카드에 사진을 넣으려면 `assets/profile.jpg`라는 이름으로 파일을 넣으세요(세로가 긴 4:5 비율 권장). 파일이 없으면 이름 첫 글자가 대신 보입니다. 다른 파일명을 쓰려면 `js/data/profile.js`의 `photo` 값을 바꾸세요.
- 이메일 링크는 Outlook 웹 메일 작성 화면으로 연결되고, 바로 아래에 기본 메일 앱으로 여는 링크가 있습니다.

## 프로젝트 시연 영상

- 영상 파일(mp4 또는 webm)을 `assets/projects/`에 넣고 `js/data/projects.js`에서 해당 프로젝트의 `"video"` 값에 경로를 쓰세요. 예: `"video": "assets/projects/remate.mp4"`. 비워 두면 대표 이미지가 보입니다. GIF 파일도 쓸 수 있지만 GIF는 재생 방식을 제어할 수 없습니다.
- 재생 방식은 `js/data/settings.js`의 `videoMode` 한 줄로 바꿉니다(always, hover, off). 실제 동작 코드는 `js/animations.js`의 `initVideos` 함수입니다.
- 영상은 소리 없이 5~15초 반복되는 짧은 화면 녹화를 권장하고, 파일 하나당 10MB 이하로 줄이세요.
>>>>>>> 4a40680 (feat: redesign portfolio with contact, photo card and project video support)
