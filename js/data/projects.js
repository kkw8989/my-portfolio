/* PROJECTS 데이터 파일: 여기만 수정하면 화면에 반영됩니다. 카드를 숨기려면 해당 프로젝트에 "hidden": true 를 넣으세요 */
window.PROJECTS = [
  {
    "id": "remate",
    "featured": true,
    "name": "Re:Mate",
    "subtitle": "AI 영수증 분석 및 이상 결제 탐지 경비 정산 시스템",
    "key": "199건 중 187건(94%) 자동 처리, 가맹점명 정확도 85.6%에서 99.0%",
    "period": "",
    "team": "5인 팀(백엔드 3, 프론트엔드 2), 팀장",
    "stack": [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MariaDB",
      "React",
      "Google OCR",
      "Gemini",
      "Gradle",
      "Swagger",
      "Render"
    ],
    "problem": "기업 경비 정산에서는 영수증 입력과 검토가 반복되고, 관리자가 모든 건을 직접 대조해야 합니다. 건수가 쌓이면 부적절한 결제를 놓치기 쉽습니다. 입력은 자동화하고 관리자는 의심 건에만 집중하도록 만드는 것을 목표로 삼았습니다.",
    "mine": [
      "백엔드 구조 설계 총괄: Controller-Service-Repository 계층 분리, 공통 응답 형식과 ErrorCode 관리, Swagger API 문서화, traceId 기반 로깅",
      "RBAC 기반 인증 및 권한 구조 설계",
      "영수증 등록 시 파일 검증과 중복 요청 처리",
      "OCR과 Gemini 분석 결과를 백엔드 처리 흐름에 연계하고 관리자 검토 흐름 설계"
    ],
    "flow": [
      "영수증 업로드",
      "파일 검증",
      "Google OCR 텍스트 추출",
      "Gemini 구조화",
      "규칙 판정",
      "관리자 검토"
    ],
    "fix": [
      "약 200건의 정답과 대조하며 9차례 개선했습니다. 분할결제와 유흥업소 판정의 근거가 되는 가맹점명 정확도가 85.6%에 그쳐 먼저 보완했습니다.",
      "오인식 패턴을 분석해 프롬프트를 고치고 9차에 모델을 교체해 99.0%까지 올렸습니다.",
      "이미지 전처리는 품목명 정확도를 높였지만 서버 환경의 안정성을 확인하지 못해 반영을 보류했습니다."
    ],
    "result": [
      "199건 중 187건(94%)이 자동 처리되었습니다.",
      "건당 30초씩 전수 검토할 때 약 100분이던 시간이, 자동 건은 10초, 의심 12건은 1분씩 확인하는 기준으로 약 43분까지 줄었습니다(약 57% 단축, 가정에 따른 추산)."
    ],
    "next": "Gemini가 같은 영수증의 날짜를 다르게 읽는 한계가 남아 있어, 두 번 분석해 결과가 다르면 사람이 보도록 하는 방식을 다음 과제로 정했습니다.",
    "note": "OCR과 Gemini 분석 기능의 구현은 AI 담당 팀원이 맡았고, 저는 전체 백엔드 구조와 연계 흐름을 설계했습니다.",
    "links": {
      "github": "https://github.com/kkw8989/Re-Mate",
      "demo": ""
    },
    "logo": {
      "text": "RM",
      "color": "#2f6f4f"
    },
    "image": "assets/projects/remate.gif",
    "video": ""
  },
  {
    "id": "mealkit",
    "hidden": false,
    "name": "밀키트 E-커머스 플랫폼",
    "subtitle": "1차 풀스택 프로젝트, 레시피 게시판",
    "key": "레시피 게시판과 이미지 업로드 기능 구현",
    "period": "",
    "team": "풀스택 웹개발 과정 1차 프로젝트",
    "stack": [
      "Java",
      "Spring Boot",
      "React",
      "MariaDB"
    ],
    "problem": "Spring Boot와 React 기반 밀키트 E-커머스 풀스택 프로젝트에서 회원 간 레시피 공유 게시판을 맡았습니다.",
    "mine": [
      "레시피 게시판 및 이미지 업로드 기능 구현"
    ],
    "features": [
      "게시글 등록",
      "이미지 첨부",
      "로그인 회원 정보 연동"
    ],
    "links": {
      "github": "https://github.com/kkw8989/fullstack_first",
      "demo": ""
    },
    "logo": {
      "text": "MK",
      "color": "#16a34a"
    },
    "image": "assets/projects/mealkit.gif",
    "video": ""
  },
  {
    "id": "moneybridge",
    "name": "MoneyBridge",
    "subtitle": "개인 간 금융 거래 플랫폼",
    "key": "로그인부터 데이터 저장까지 흐름을 따라가며 연계 오류를 해결",
    "period": "",
    "team": "풀스택 웹개발 과정 팀 프로젝트, 팀원",
    "stack": [
      "Java",
      "Spring Boot",
      "React",
      "MariaDB",
      "Firebase",
      "AWS"
    ],
    "problem": "개인 간 금전 거래에서 채권자와 채무자의 거래 정보를 연결해 관리하는 웹 플랫폼입니다.",
    "mine": [
      "Firebase 로그인 및 이메일 인증",
      "알림 기능",
      "게시글 CRUD 오류 수정",
      "채권자와 채무자 연결 기능",
      "AWS 배포"
    ],
    "fix": [
      "로그인 이후 사용자 정보가 필요한 기능과 게시글 데이터가 연결되는 과정에서 오류가 났습니다.",
      "개별 API만 고치면 다른 기능에서 같은 문제가 반복될 수 있다고 판단해, 화면의 요청, 인증 정보 전달, 서버 처리, 데이터 저장 순서로 원인을 좁혔습니다.",
      "AWS 환경에서도 실행해 개발 환경과 배포 환경의 차이를 검토했습니다."
    ],
    "result": [
      "인증된 사용자가 올바른 데이터를 조회, 수정, 삭제하는지까지 점검해 기능 간 연결을 안정화했습니다."
    ],
    "links": {
      "github": "https://github.com/kkw8989/moneybridge",
      "demo": ""
    },
    "logo": {
      "text": "MB",
      "color": "#3b5bdb"
    },
    "image": "assets/projects/moneybridge.gif",
    "video": ""
  },
  {
    "id": "paprika",
    "name": "파프리카",
    "subtitle": "영수증 이미지 기반 스마트 소비 분석 웹 프로그램",
    "key": "영수증 사진에서 소비를 분류하고 지출 통계를 시각화",
    "period": "2026.04 ~ 2026.06",
    "team": "4인 팀(파이썬 프로그래밍 수업), 팀장",
    "stack": [
      "Python",
      "Flask",
      "OpenAI GPT-4o Vision API",
      "Chart.js",
      "GitHub",
      "Notion"
    ],
    "problem": "영수증 사진을 올리면 날짜, 금액, 가맹점명을 추출해 소비를 자동 분류하고, 월별과 카테고리별 지출 통계를 보여주는 웹 프로그램입니다.",
    "mine": [
      "전체 설계, 주요 기능 구현, 발표"
    ],
    "fix": [
      "AI가 잘못 읽은 부분을 원본 영수증과 비교하며 직접 수정할 수 있게 해 인식 오류를 사용자가 바로잡도록 했습니다."
    ],
    "result": [
      "영수증 OCR 자동 분류, 회원가입 및 로그인(비밀번호 해시), 월별 목표 지출 경고, 소비 통계 시각화를 구현했습니다."
    ],
    "links": {
      "github": "https://github.com/kkw8989/PythonProject",
      "demo": ""
    },
    "logo": {
      "text": "PP",
      "color": "#e8590c"
    },
    "image": "assets/projects/paprika.gif",
    "video": ""
  },
  {
    "id": "wordapp",
    "name": "영어 단어 학습 웹 서비스",
    "subtitle": "3학년 전공 수업 프로젝트",
    "key": "역할을 나눠 일정 안에 하나의 서비스로 완성",
    "period": "",
    "team": "팀장",
    "stack": [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React"
    ],
    "problem": "팀원의 개발 경험과 투입 가능한 시간을 고려해, 팀원은 자료 조사와 발표 준비를 맡고 저는 서비스 구조 설계와 주요 개발을 담당했습니다.",
    "mine": [
      "JWT 인증과 Spring Security 적용",
      "데이터 생성, 조회, 수정, 삭제 기능 구현",
      "프론트엔드에 필요한 데이터와 서버 응답 형식 일치",
      "기능별 진행 상황을 팀원과 공유해 발표 내용이 실제 구현과 맞도록 조정"
    ],
    "links": {
      "github": "https://github.com/kkw8989/toeicvocab",
      "demo": ""
    },
    "logo": {
      "text": "EN",
      "color": "#7048e8"
    },
    "image": "assets/projects/toeicvocab.png",
    "video": ""
  },
  {
    "id": "itda",
    "hidden": true, /* 해커톤은 숨김 처리됨. 다시 보이게 하려면 true 를 false 로 바꾸세요 */
    "name": "재능잇다(itda)",
    "subtitle": "AI 기반 소상공인 프로젝트 매칭 플랫폼",
    "key": "소상공인의 홍보 공백과 대학생의 실전 경험 부족을 연결",
    "period": "2026.09.13 ~ 2026.09.14",
    "team": "상명 제1회 아이디어 해커톤, 팀장",
    "stack": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini API"
    ],
    "problem": "소상공인의 디지털 홍보 공백과 대학생의 실전 경험 부족을 연결하는 AI 기반 프로젝트 매칭 플랫폼을 기획하고 개발했습니다.",
    "mine": [
      "팀장, 서비스 기획 및 방향 설정",
      "발표"
    ],
    "features": [
      "소상공인 요청의 AI 기반 프로젝트 구조화",
      "학생 역량 기반 프로젝트 매칭",
      "AI 분석 결과 확인 및 수정"
    ],
    "result": [
      "서비스 운영 방식과 차별성 및 실현 가능성을 검토했습니다."
    ],
    "links": {
      "github": "",
      "demo": ""
    },
    "logo": {
      "text": "ID",
      "color": "#ff7a1a"
    },
    "image": "assets/projects/itda.svg",
    "video": ""
  }
];
