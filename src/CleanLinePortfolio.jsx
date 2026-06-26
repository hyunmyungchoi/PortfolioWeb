import React, { useEffect, useState } from "react";

const navItems = [
  { id: "credentials", label: "Credentials" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "side-projects", label: "Side Projects" },
  { id: "deployment", label: "Deployment" },
  { id: "archive", label: "Archive" },
  { id: "contact", label: "Contact" },
];

const domains = ["MSA", "Cloud", "DevOps"];

const springMsaLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hyunmyungchoi/Spring-React-MSA",
    logo: "https://cdn.simpleicons.org/github/000000",
    fallback: "GH",
  },
];

const videoStreamingLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hyunmyungchoi/Video-Streaming-Platform",
    logo: "https://cdn.simpleicons.org/github/000000",
    fallback: "GH",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hyunmyungchoi",
    logo: "https://cdn.simpleicons.org/github/000000",
    fallback: "GH",
  },
  {
    label: "Velog",
    href: "https://velog.io/@hyunmyungchoi/posts",
    logo: "https://cdn.simpleicons.org/velog/20C997",
    fallback: "VE",
  },
  {
    label: "Resume PDF",
    href: "#",
    logo: "https://cdn.simpleicons.org/readthedocs/000000",
    fallback: "PDF",
  },
];

const credentials = [
  {
    code: "SQLD",
    title: "SQL Developer",
    issuer: "KData",
    desc: "관계형 데이터베이스, SQL, 모델링 기본 이해",
    focus: "RDB / SQL",
    logo: "https://cdn.simpleicons.org/postgresql/000000",
    fallback: "SQL",
    weight: "normal",
  },
  {
    code: "ADsP",
    title: "데이터분석 준전문가",
    issuer: "KData",
    desc: "데이터 분석 프로세스, 통계, 분석 기획 기본 이해",
    focus: "Data Analysis",
    logo: "https://cdn.simpleicons.org/googleanalytics/000000",
    fallback: "DATA",
    weight: "normal",
  },
  {
    code: "NET 2",
    title: "네트워크관리사 2급",
    issuer: "한국정보통신협회",
    desc: "TCP/IP, 네트워크 구성, 인프라 기본 개념",
    focus: "Network",
    logo: "https://cdn.simpleicons.org/cisco/000000",
    fallback: "NET",
    weight: "normal",
  },
  {
    code: "정보처리",
    title: "정보처리기능사",
    issuer: "한국산업인력공단",
    desc: "소프트웨어 개발, 데이터베이스, 업무 시스템 구현에 필요한 기본기",
    focus: "Software",
    logo: "https://cdn.simpleicons.org/codecademy/000000",
    fallback: "IT",
    weight: "normal",
  },
];

const skills = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", fallback: "JAVA" },
  { name: "Spring Boot", logo: "https://cdn.simpleicons.org/spring/6DB33F", fallback: "SB" },
  { name: "Spring Security", logo: "https://cdn.simpleicons.org/spring/6DB33F", fallback: "SEC" },
  { name: "Spring Authorization Server", logo: "https://cdn.simpleicons.org/spring/6DB33F", fallback: "AUTH" },
  { name: "Spring OAuth2/OIDC", logo: "https://cdn.simpleicons.org/spring/6DB33F", fallback: "OIDC" },
  { name: "BFF Pattern", logo: "https://cdn.simpleicons.org/jsonwebtokens/000000", fallback: "BFF" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", fallback: "R" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", fallback: "TS" },
  { name: "Oracle", logo: "https://api.iconify.design/mdi:database.svg?color=%23A3A3A3", fallback: "DB" },
  { name: "MyBatis", logo: "https://cdn.simpleicons.org/apache/000000", fallback: "SQL" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis/FF4438", fallback: "RE" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/231F20", fallback: "K" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", fallback: "DO" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5", fallback: "K8S" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E", fallback: "AWS" },
  { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF", fallback: "CI" },
  { name: "Argo CD", logo: "https://cdn.simpleicons.org/argo/EF7B4D", fallback: "CD" },
  { name: "Nginx", logo: "https://cdn.simpleicons.org/nginx/009639", fallback: "NX" },
  { name: "Kibana", logo: "https://cdn.simpleicons.org/kibana/005571", fallback: "LOG" },
  { name: "WebRTC", logo: "https://cdn.simpleicons.org/webrtc/333333", fallback: "RTC" },
  { name: "FFmpeg", logo: "https://cdn.simpleicons.org/ffmpeg/007808", fallback: "FF" },
];

const workItems = [
  {
    title: "Requirement to Implementation",
    role: "업무 요구사항 분석 · 화면/API/DB 연결",
    desc: "SI 프로젝트에서 고객 요구사항을 화면 흐름, 백엔드 API, DB 데이터 구조로 나누어 해석하고 구현했습니다. 단순히 화면을 만드는 것보다 업무 상태와 데이터 흐름이 맞게 이어지는지를 기준으로 개발했습니다.",
  },
  {
    title: "Validation & Common Logic",
    role: "Spring Validation · 공통 검증 구조",
    desc: "요청값 검증, 업무 조건 확인, 상태 판단처럼 반복되는 로직은 서비스 코드 안에 흩어지지 않도록 공통화했습니다. Spring Validation과 커스텀 Validator를 활용해 검증 기준을 일관되게 관리하는 방향으로 개선했습니다.",
  },
  {
    title: "Notification & Workflow Handling",
    role: "Mail · SMS · Portal Message · 업무 상태 처리",
    desc: "신청, 배정, 승인, 반려, 처리 완료 등 업무 흐름별 알림 로직을 구현했습니다. 사용자 ID, 메시지 코드, 파라미터, 수신 가능 여부를 기준으로 반복되는 알림 처리를 공통 호출 구조로 정리했습니다.",
  },
  {
    title: "Frontend Maintainability",
    role: "React · TypeScript · Component · Custom Hook",
    desc: "검색 영역, 상세 영역, 공통 정보 영역을 컴포넌트 단위로 분리하고 반복 조회 로직과 이벤트 처리는 Custom Hook으로 정리했습니다. 화면이 커질수록 상태 흐름을 추적하기 쉽도록 구조를 나누는 데 집중했습니다.",
  },
  {
    title: "Operation Issue Tracking",
    role: "Kibana · Trace ID · DB 상태 확인",
    desc: "Staging과 Production 환경에서 Kibana 로그, API 경로, 사용자 ID, 오류 코드, Trace ID를 기준으로 이슈를 분석했습니다. 로그와 DB 상태를 함께 확인하며 외부 연계 실패나 데이터 처리 예외의 원인을 좁혀갔습니다.",
  },
  {
    title: "Change-safe Implementation",
    role: "영향 범위 확인 · 조건 분기 정리 · 수정 근거 기록",
    desc: "기존 업무 로직을 수정할 때는 화면 증상만 보고 바로 고치기보다, 관련 조건 분기와 DB 상태, 배치 영향, 알림 흐름까지 함께 확인했습니다. 수정 후에는 왜 바꿨는지와 어떤 케이스를 막기 위한 변경인지 남겨 재수정 가능성을 줄이는 방향으로 작업했습니다.",
  },
];

const approaches = [
  [
    "01",
    "업무 흐름을 먼저 세웁니다",
    "화면 하나만 보지 않고 신청, 검토, 승인, 반려, 완료처럼 상태가 어떻게 이동하는지 먼저 정리합니다. 그래서 수정할 때도 버튼 하나, 쿼리 하나가 전체 프로세스에서 어떤 의미인지 같이 확인합니다.",
  ],
  [
    "02",
    "조건과 예외를 끝까지 따라갑니다",
    "단순 정상 케이스보다 상태값, 마감일, 제출 여부, 승인 여부처럼 문제가 생기기 쉬운 조건을 먼저 봅니다. 애매한 요구사항은 코드로 바로 옮기기보다 케이스를 쪼개서 기준을 명확히 잡으려 합니다.",
  ],
  [
    "03",
    "화면 · API · DB를 연결해서 봅니다",
    "프론트엔드 이벤트, 백엔드 서비스, VO, SQL, 테이블 데이터가 따로 놀지 않도록 흐름을 맞춥니다. 오류가 나면 화면에서 멈추지 않고 실제 요청값과 DB 반영 결과까지 확인하는 편입니다.",
  ],
  [
    "04",
    "운영 로그로 원인을 좁힙니다",
    "운영 이슈는 추측으로 판단하지 않고 Kibana 로그, Trace ID, API 경로, 사용자 ID, DB 상태를 함께 확인합니다. 증상보다 근거를 먼저 잡고, 재현 가능한 단위로 문제를 좁히는 방식을 선호합니다.",
  ],
  [
    "05",
    "AI는 부사수처럼 쓰고 판단은 직접 합니다",
    "Codex, GPT, Gemini는 초안 작성, 리팩터링 검토, 오류 원인 정리, 문서화에 적극적으로 활용합니다. 다만 최종 반영 전에는 업무 규칙, 영향 범위, 실제 데이터 기준으로 다시 검토해 AI 결과를 그대로 믿지 않고 개발 판단의 보조 도구로 사용합니다.",
  ],
];

const sideProjects = [
  {
    id: "spring-msa",
    title: "Spring MSA Platform",
    oneLine: "실무에서 경험한 구조적 문제를 Spring 기반 서비스 분리 구조로 다시 정리한 프로젝트",
    desc: "프론트엔드 독립 빌드, 세션 관리, 권한 분리, 외부 인터페이스 테스트, 대시보드 집계 문제를 Gateway, BFF, Authorization Server, Redis Session, 도메인 서비스 분리 관점으로 다시 설계했습니다. Docker Compose 기반 로컬 실행 환경에서 시작해 GitHub Actions, Kubernetes, Argo CD, AWS 배포 구조로 확장하며 애플리케이션이 실제 운영 환경에 올라가는 흐름까지 검증하는 방향으로 발전시키고 있습니다.",    stack: "Spring Boot · Spring Security · Authorization Server · Gateway · BFF · Redis · PostgreSQL · React · Docker",
    status: "MSA / CI-CD / Kubernetes Lab",
    architecture: [
      "Public Gateway / Admin Gateway로 사용자 채널과 관리자 채널 분리",
      "Business BFF / Admin BFF에서 브라우저 토큰 저장 없이 Redis Session 기반 인증 상태 관리",
      "Spring Authorization Server 기반 OAuth2/OIDC, Authorization Code Flow, SSO 구성",
      "User, Community, Stock Resource Service를 분리하고 Gateway/BFF를 통해 API 조합",
      "Admin BFF에서 각 도메인 관리자 API를 조합해 Dashboard Aggregation 구성",
    ],
    implemented: [
      "Gateway → BFF → Authorization Server → Resource Server 인증 흐름 구현",
      "Redis Session Store, Refresh Token/ID Token 서버 측 저장 구조 적용",
      "Business/Admin 채널 분리와 ROLE_USER / ROLE_ADMIN 접근 경계 구성",
      "Docker Compose 기반 로컬 실행 환경 구성",
      "API 문서와 실행 가이드 정리",
    ],
    tests: [
      "Auth Flow 통합 테스트",
      "BFF Session / Redis Session 테스트",
      "Resource Server JWT 검증 테스트",
      "Gateway Routing 테스트",
      "PowerShell Invoke-RestMethod 기반 API 흐름 확인",
    ],
    evidence: springMsaLinks,
  },
  {
    id: "video-streaming",
    title: "Video Streaming Platform",
    oneLine: "방송형 서비스와 회의형 서비스를 함께 고려한 Video Streaming 메인 도메인 프로젝트",
    desc: "OBS 기반 RTMP 송출, FFmpeg 기반 HLS/DASH 변환, Shaka Player 브라우저 재생, WebRTC 기반 저지연 통신을 목표로 설계했습니다. Spring Boot는 서비스 도메인을 담당하고, Go는 WebRTC SFU와 미디어 세션 처리 영역으로 분리하는 방향으로 학습하며 구현하고 있습니다.",
    stack: "React · Spring Boot · Go SFU · WebRTC · RTMP · FFmpeg · HLS/DASH · Kafka · Redis · Docker",
    status: "Streaming MVP / Realtime Track",
    architecture: [
      "방송형 서비스: OBS → nginx-rtmp → FFmpeg → HLS/DASH → Nginx HTTP → Shaka Player",
      "회의형 서비스: Browser → WebRTC Signaling → Go SFU → Participant Browser",
      "Spring Boot에서 인증/인가, 방송방, 스트림 메타데이터, 채팅, 알림, VOD 관리 담당",
      "Kafka로 방송 시작/종료, 시청자 입장/퇴장, VOD 변환 완료 이벤트 처리",
      "Redis로 현재 방송 상태, 시청자 수, 방 세션, 채팅 제한, 토큰/세션 정보 관리",
    ],
    implemented: [
      "Gateway → BFF → Authorization Server → Resource Server 인증 흐름 구현",
      "Redis Session Store, Refresh Token/ID Token 서버 측 저장 구조 적용",
      "Business/Admin 채널 분리와 ROLE_USER / ROLE_ADMIN 접근 경계 구성",
      "Docker Compose 기반 로컬 실행 환경 구성",
      "GitHub Actions 기반 Build / Test / Docker Image Build 파이프라인 구성 예정",
      "Kubernetes 배포 매니페스트와 Argo CD GitOps 배포 흐름 확장 예정",
      "Argo CD를 활용한 GitOps 배포 흐름과 OutOfSync / Sync 반영 과정 검증",
      "API 문서와 실행 가이드 정리",
    ],
    tests: [
      "RTMP 송출 → HLS/DASH 재생 시나리오 테스트",
      "방송 시작/종료 이벤트 발행/소비 테스트",
      "Redis Room State TTL 테스트",
      "WebSocket 연결/해제 테스트",
      "스트리밍 아키텍처 README와 실행 GIF 정리",
    ],
    evidence: videoStreamingLinks,
  },
];

const archives = [
  "Spring Validation으로 검증 책임 분리하기",
  "BFF Pattern으로 브라우저 토큰 저장 피하기",
  "Redis를 세션, OTP, 캐시로 나눠 사용하는 기준",
  "Kafka 이벤트 처리와 재처리 구조",
  "RTMP, HLS/DASH, WebRTC 역할 구분하기",
  "Kibana Trace ID 기반 운영 로그 분석 패턴",
];



function Section({ id, index, title, desc, children }) {
  return (
      <section id={id} className="scroll-mt-24 border-t border-black py-20 md:py-28">
        <div className="grid gap-8 xl:grid-cols-[180px_1fr]">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
            {String(index).padStart(2, "0")} / {id}
          </div>
          <div>
            <h2 className="reveal-text text-4xl font-semibold tracking-[-0.05em] text-black md:text-6xl">
              {title}
            </h2>
            {desc && <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">{desc}</p>}
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </section>
  );
}

function LineButton({ children, href = "#" }) {
  return (
      <a
          href={href}
          className="group inline-flex items-center gap-3 border border-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
      >
        {children}
        <span className="transition group-hover:translate-x-1">→</span>
      </a>
  );
}

function SkillBadge({ logo, fallback, name }) {
  const [failed, setFailed] = useState(false);

  return (
      <span className="group flex w-full min-w-0 items-center border border-black text-sm font-medium transition hover:-translate-y-1 hover:bg-black hover:text-white">
      <span className="grid h-12 w-12 shrink-0 place-items-center border-r border-black bg-white group-hover:border-white">
        {!failed ? (
            <img
                src={logo}
                alt={`${name} logo`}
                className="h-6 w-6 object-contain transition group-hover:scale-110"
                loading="lazy"
                onError={() => setFailed(true)}
            />
        ) : (
            <span className="text-[10px] font-bold uppercase tracking-[-0.04em] text-black group-hover:text-white">
            {fallback}
          </span>
        )}
      </span>
      <span className="min-w-0 flex-1 px-4 py-3 leading-5 break-keep">
        {name}
      </span>
    </span>
  );
}

function CredentialLogo({ logo, fallback, title }) {
  const [failed, setFailed] = useState(false);

  return (
      <div className="grid h-20 w-20 place-items-center border border-black bg-white transition group-hover:rotate-[-2deg] group-hover:scale-105">
        {!failed ? (
            <img
                src={logo}
                alt={`${title} mark`}
                className="h-11 w-11 object-contain"
                loading="lazy"
                onError={() => setFailed(true)}
            />
        ) : (
            <span className="text-xs font-black uppercase tracking-[-0.04em] text-black">
          {fallback}
        </span>
        )}
      </div>
  );
}

function CredentialCard({ credential }) {
  const isMajor = credential.weight === "major";

  return (
      <article
          className={`group relative overflow-hidden border-b border-r border-black bg-white p-7 transition duration-200 hover:-translate-y-1 hover:bg-black hover:text-white ${
              isMajor ? "min-h-[300px]" : "min-h-[240px]"
          }`}
      >
        <div className="absolute right-5 top-5 max-w-[120px] text-right text-[10px] font-black uppercase leading-4 tracking-[0.16em] text-neutral-300 transition group-hover:text-white/30">
          {credential.focus}
        </div>

        <CredentialLogo
            logo={credential.logo}
            fallback={credential.fallback}
            title={credential.title}
        />

        <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="inline-flex border border-current px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
          {credential.code}
        </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 group-hover:text-white/60">
          {credential.issuer}
        </span>
        </div>

        <h3 className={`${isMajor ? "mt-7 text-3xl" : "mt-6 text-2xl"} font-semibold leading-tight tracking-[-0.05em]`}>
          {credential.title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-neutral-600 transition group-hover:text-white/70">
          {credential.desc}
        </p>
      </article>
  );
}

function DetailBlock({ title, items }) {
  return (
      <div className="border-t border-black pt-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">{title}</p>
        <ul className="space-y-3">
          {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-neutral-600">
                <span className="mt-[11px] h-1.5 w-1.5 shrink-0 bg-black" />
                <span>{item}</span>
              </li>
          ))}
        </ul>
      </div>
  );
}

function IntroGate({ onEnter }) {
  return (
      <main
          className="min-h-screen bg-white text-black"
          style={{
            fontFamily:
                "'Noto Sans KR', 'Inter', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
          }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap');

        @keyframes introImage {
          from {
            opacity: 0;
            transform: scale(0.96) rotate(-1deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes introText {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .intro-image {
          animation: introImage 0.7s ease both;
        }

        .intro-text {
          animation: introText 0.7s ease 0.15s both;
        }
      `}</style>

        <section className="grid min-h-screen grid-cols-1 border-black lg:grid-cols-[1fr_1.1fr]">
          <div className="relative flex items-center justify-center border-b border-black p-6 lg:border-b-0 lg:border-r">
            <div className="intro-image relative w-full max-w-[520px] overflow-hidden border border-black bg-white">
              <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute left-4 top-4 border border-black bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
                Backend / Frontend
              </div>

              <div className="absolute bottom-4 right-4 border border-black bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
                Portfolio.exe
              </div>
            </div>
          </div>

          <div className="intro-text flex flex-col justify-center px-6 py-16 lg:px-16">
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.28em] text-neutral-500">
              CHOI.DEV / First Impression
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {domains.map((domain) => (
                  <span
                      key={domain}
                      className="border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
                  >
                {domain}
              </span>
              ))}
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-[-0.05em] md:text-4xl">
              <span className="block">
                백엔드와 프론트엔드 구현 경험을 바탕으로,
              </span>
              <span className="mt-3 block">
                운영과 인프라까지 시야를 넓히고 있습니다.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-neutral-600">
              SI 실무에서 업무 흐름, 화면, API, 데이터 처리,<br /> 운영 로그를 함께 다루며 시스템이 동작하는 흐름을 익혔습니다.
              <br />
              이제는 그 경험을 클라우드, DevOps, 인프라 운영 관점으로 확장하고 있습니다.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <button
                  type="button"
                  onClick={() => onEnter("credentials")}
                  className="group border border-black bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
              >
                Credentials부터 보기
                <span className="ml-3 inline-block transition group-hover:translate-x-1">
                →
              </span>
              </button>
            </div>

            <div className="mt-16 grid border-y border-black md:grid-cols-3">
              {[
                ["Role", "Backend / DevOps-oriented"],
                ["View", "Application / Deploy / Operation"],
                ["Track", "MSA / Cloud / DevOps"],
              ].map(([k, v], index) => (
                  <div
                      key={k}
                      className={`py-5 md:px-5 ${index !== 0 ? "md:border-l md:border-black" : ""}`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                      {k}
                    </p>
                    <p className="mt-2 text-base font-bold tracking-[-0.04em]">
                      {v}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}

export default function CleanLinePortfolio() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState("credentials");
  const [selectedProjectId, setSelectedProjectId] = useState(sideProjects[0].id);

  const handleEnter = (targetId = "credentials") => {
    setEntered(true);
    setActive(targetId);

    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const handleBackToIntro = () => {
    setEntered(false);
    setActive("credentials");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!entered) return;

    const sectionIds = navItems.map((item) => item.id);

    const updateActiveSection = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 맨 아래까지 내려왔으면 마지막 섹션(Contact)을 강제로 active 처리
      if (scrollTop + viewportHeight >= documentHeight - 8) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      const currentSection = sectionIds
          .map((id) => document.getElementById(id))
          .filter(Boolean)
          .map((section) => ({
            id: section.id,
            top: section.getBoundingClientRect().top,
          }))
          .filter((section) => section.top <= viewportHeight * 0.35)
          .sort((a, b) => b.top - a.top)[0];

      if (currentSection?.id) {
        setActive(currentSection.id);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [entered]);

  const activeLabel = navItems.find((item) => item.id === active)?.label ?? "Credentials";
  const selectedProject = sideProjects.find((project) => project.id === selectedProjectId) ?? sideProjects[0];

  if (!entered) {
    return <IntroGate onEnter={handleEnter} />;
  }

  return (
      <main
          className="min-h-screen bg-white text-black"
          style={{ fontFamily: "'Noto Sans KR', 'Inter', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #000;
          color: #fff;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawLine {
          to {
            transform: scaleX(1);
          }
        }

        .reveal-text {
          animation: fadeUp 0.75s ease both;
        }

        .hero-line {
          position: relative;
          overflow: hidden;
        }

        .hero-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px;
          background: #000;
          transform: scaleX(0);
          transform-origin: left;
          animation: drawLine 0.9s ease 0.25s forwards;
        }
      `}</style>

        <div className="fixed left-0 top-0 z-50 hidden h-screen w-[260px] border-r border-black bg-white px-7 py-8 lg:block">
          <a href="#credentials" className="block text-lg font-bold tracking-[-0.06em]">
            CHOI.DEV
          </a>
          <p className="mt-4 max-w-[190px] text-xs leading-6 text-neutral-500">
            업무 흐름을 코드와 데이터 구조로 연결하고, 반복되는 문제를 유지보수 가능한 형태로 정리하려는 개발자입니다.
          </p>

          <button
              type="button"
              onClick={handleBackToIntro}
              className="mt-6 border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
          >
            ← Back to intro
          </button>

          <nav className="mt-16 space-y-5">
            {navItems.map((item, index) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActive(item.id)}
                    className="group grid grid-cols-[32px_1fr] items-center gap-3"
                >
              <span className={`text-xs font-semibold transition ${active === item.id ? "text-black" : "text-neutral-300 group-hover:text-black"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
                  <span className={`border-b py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                      active === item.id
                          ? "border-black text-black"
                          : "border-neutral-200 text-neutral-400 group-hover:border-black group-hover:text-black"
                  }`}>
                {item.label}
              </span>
                </a>
            ))}
          </nav>

          <div className="absolute bottom-8 left-7 right-7 border-t border-black pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">Current</p>
            <p className="mt-2 text-sm font-semibold tracking-[-0.04em]">{activeLabel}</p>
          </div>
        </div>

        <header className="sticky top-0 z-50 border-b border-black bg-white/90 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <a href="#credentials" onClick={() => setActive("credentials")} className="text-sm font-bold tracking-[-0.04em]">
              CHOI.DEV
            </a>
            <div className="flex items-center gap-3">
              <button
                  type="button"
                  onClick={handleBackToIntro}
                  className="border border-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
              >
                ← Intro
              </button>
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">{activeLabel}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 lg:ml-[260px] lg:max-w-none lg:px-12 xl:px-16">
          <Section
              id="credentials"
              index={1}
              title="Credentials"
              desc="자격증은 기술력을 과장하기 위한 요소가 아니라, 업무 시스템 개발에 필요한 기본기를 보완해 온 기록입니다. 데이터 구조, SQL, 네트워크, 소프트웨어 개발 기초를 바탕으로 화면·API·DB·운영 흐름을 함께 이해하려고 합니다."
          >
            <div className="grid border-l border-t border-black md:grid-cols-2 xl:grid-cols-3">
              {credentials.map((credential) => (
                  <CredentialCard key={credential.code} credential={credential} />
              ))}
            </div>
          </Section>

            <Section
                id="skills"
                index={2}
                title="Skills"
            >
            <div className="grid grid-cols-2 gap-3 border-y border-black py-8 md:grid-cols-3 xl:grid-cols-5">
              {skills.map((skill) => (
                  <SkillBadge
                      key={skill.name}
                      logo={skill.logo}
                      fallback={skill.fallback}
                      name={skill.name}
                  />
              ))}
            </div>
          </Section>

          <Section
              id="work"
              index={3}
              title="Work"
              desc="업무 상세를 과하게 드러내기보다, 하나의 실무 프로젝트 안에서 어떤 기술 범위와 문제 해결 경험을 쌓았는지 보여줍니다."
          >
            <div className="border-y border-black">
              {workItems.map((item, idx) => (
                  <article key={item.title} className={`grid gap-6 py-8 md:grid-cols-[1fr_2fr] ${idx !== 0 ? "border-t border-black" : ""}`}>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{item.role}</p>
                    </div>
                    <p className="text-base leading-8 text-neutral-600">{item.desc}</p>
                  </article>
              ))}
            </div>
          </Section>

          <Section
              id="approach"
              index={4}
              title="Approach"
              desc="업무를 단순 기능 단위로 보지 않고 상태 흐름, 조건 분기, 데이터 반영, 운영 로그까지 이어서 확인하는 방식을 정리했습니다. 문제를 빠르게 고치기보다 왜 발생했는지와 다시 깨지지 않게 하려면 어디를 잡아야 하는지를 먼저 봅니다."
          >
            <div className="border-y border-black">
              {approaches.map(([no, title, desc]) => (
                  <article
                      key={title}
                      className="grid gap-4 border-b border-black py-7 last:border-b-0 md:grid-cols-[48px_minmax(280px,360px)_1fr]"
                  >
                    <div className="pt-1 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      {no}
                    </div>
                    <h3 className="text-xl font-semibold leading-8 tracking-[-0.035em] break-keep">
                      {title}
                    </h3>
                    <p className="text-sm leading-7 text-neutral-600 break-keep">
                      {desc}
                    </p>
                  </article>
              ))}
            </div>
          </Section>

          <Section
              id="side-projects"
              index={5}
              title="Side Projects"
              desc="실무에서 경험한 구조적 문제를 Spring MSA와 Video Streaming 프로젝트로 재설계하고, Docker, CI/CD, Kubernetes, AWS 배포 구조까지 확장해 애플리케이션이 운영되는 흐름을 함께 검증합니다."
          >
            <div className="grid border-y border-black lg:grid-cols-2">
              {sideProjects.map((project, idx) => {
                const selected = selectedProjectId === project.id;
                return (
                    <article key={project.id} className={`p-6 ${idx !== 0 ? "border-t border-black lg:border-l lg:border-t-0" : ""}`}>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                        Side Project {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em]">{project.title}</h3>
                      <p className="mt-5 text-sm font-semibold leading-7">{project.oneLine}</p>
                      <p className="mt-4 text-sm leading-7 text-neutral-600">{project.desc}</p>
                      <button
                          type="button"
                          onClick={() => setSelectedProjectId(project.id)}
                          className={`mt-7 border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 ${
                              selected ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
                          }`}
                      >
                        {selected ? "Selected" : "Detail →"}
                      </button>
                    </article>
                );
              })}
            </div>

            <div key={selectedProject.id} className="reveal-text mt-10 border-y border-black py-10">
              <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">Project Detail</p>
                  <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em]">{selectedProject.title}</h3>
                  <p className="mt-5 inline-flex border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                    {selectedProject.status}
                  </p>
                  <div className="mt-6 border-t border-black pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Stack</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">{selectedProject.stack}</p>
                  </div>
                </div>

                <div className="grid gap-8">
                  <DetailBlock title="Architecture" items={selectedProject.architecture} />
                  <DetailBlock title="Implemented" items={selectedProject.implemented} />
                  <DetailBlock title="Tests / Evidence" items={selectedProject.tests} />
                  <div className="border-t border-black pt-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Links</p>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.evidence.map((item) => (
                          <a
                              key={item.label}
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="group inline-flex items-center gap-3 border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
                          >
                            <span className="grid h-5 w-5 place-items-center">
                              <img
                                  src={item.logo}
                                  alt={`${item.label} logo`}
                                  className="h-4 w-4 object-contain transition group-hover:invert"
                                  loading="lazy"
                              />
                            </span>
                            {item.label}
                          </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section
              id="deployment"
              index={6}
              title="Cloud Deployment"
              desc="PortfolioWeb을 AWS 기반 정적 웹 서비스로 배포하고, 빌드 산출물, 배포 경로, 도메인 접근, 캐시 정책까지 정리하여 누구나 접속 가능한 포트폴리오 형태로 운영합니다."
          >
            <div className="grid border-y border-black lg:grid-cols-3">
              {[
                [
                  "Hosting",
                  "AWS S3 / CloudFront",
                  "Vite 빌드 산출물을 S3에 업로드하고 CloudFront를 통해 전역 캐시 기반으로 제공합니다.",
                ],
                [
                  "Delivery",
                  "GitHub Actions",
                  "master 브랜치 push 시 build 후 S3 sync 및 CloudFront invalidation을 수행하는 배포 흐름으로 확장합니다.",
                ],
                [
                  "Access",
                  "HTTPS / Public Access",
                  "CloudFront HTTPS 엔드포인트를 통해 누구나 접근 가능한 포트폴리오 웹으로 운영합니다.",
                ],
              ].map(([title, role, desc], idx) => (
                  <article
                      key={title}
                      className={`p-6 ${idx !== 0 ? "border-t border-black lg:border-l lg:border-t-0" : ""}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                      {role}
                    </p>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                      {desc}
                    </p>
                  </article>
              ))}
            </div>
          </Section>
          <Section
              id="archive"
              index={7}
              title="Archive"
              desc="블로그는 기술 사용 목록이 아니라, 문제 해결 과정과 의사결정 기록으로 보여줍니다."
          >
            <div className="grid border-y border-black md:grid-cols-2">
              {archives.map((item, idx) => (
                  <a
                      key={item}
                      href="#"
                      className={`group flex items-center justify-between gap-6 px-4 py-5 text-sm font-medium transition-all hover:bg-black hover:text-white ${idx >= 2 ? "border-t border-black" : ""} ${idx % 2 === 1 ? "md:border-l md:border-black" : ""}`}
                  >
                    <span>{item}</span>
                    <span className="transition group-hover:translate-x-1">→</span>
                  </a>
              ))}
            </div>
          </Section>

          <Section
              id="contact"
              index={8}
              title="Contact"
              desc="깃허브, 기술 기록, 이력서 링크만 간단히 정리했습니다."
          >
            <div className="flex flex-wrap gap-4 border-y border-black py-8">
              {contactLinks.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      target={item.href === "#" ? undefined : "_blank"}
                      rel={item.href === "#" ? undefined : "noreferrer"}
                      className="group inline-flex items-center gap-3 border border-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
                  >
        <span className="grid h-6 w-6 place-items-center border border-black bg-white transition group-hover:border-white">
          <img
              src={item.logo}
              alt={`${item.label} logo`}
              className="h-4 w-4 object-contain transition group-hover:scale-110"
              loading="lazy"
          />
        </span>
                    {item.label}
                  </a>
              ))}
            </div>
          </Section>
        </div>
      </main>
  );
}