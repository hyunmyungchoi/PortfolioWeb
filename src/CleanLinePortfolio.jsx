import React, { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "credentials", label: "Credentials" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "side-projects", label: "Side Projects" },
  { id: "archive", label: "Archive" },
  { id: "contact", label: "Contact" },
];


const domains = ["Tax", "Law", "Video"];

const credentials = [
  {
    code: "CKA",
    title: "Certified Kubernetes Administrator",
    desc: "Kubernetes 운영, 워크로드, 네트워킹, 스토리지, 트러블슈팅 기본기",
    weight: "major",
  },
  {
    code: "AWS CCP",
    title: "AWS Certified Cloud Practitioner",
    desc: "AWS 클라우드 기본 개념, 주요 서비스, 보안, 과금 구조 이해",
    weight: "major",
  },
  {
    code: "Linux 1",
    title: "리눅스마스터 1급",
    desc: "Linux 시스템 운영, 쉘 환경, 네트워크/서비스 관리 기본기",
    weight: "major",
  },
  {
    code: "SQLD",
    title: "SQL Developer",
    desc: "관계형 데이터베이스, SQL, 모델링 기본 이해",
    weight: "normal",
  },
  {
    code: "ADsP",
    title: "데이터분석 준전문가",
    desc: "데이터 분석 프로세스, 통계, 분석 기획 기본 이해",
    weight: "normal",
  },
  {
    code: "NET 2",
    title: "네트워크관리사 2급",
    desc: "TCP/IP, 네트워크 구성, 인프라 기본 개념",
    weight: "normal",
  },
];

const workItems = [
  {
    title: "Tanzania IDRAS / OBA Project",
    role: "Java / Spring · React · Oracle · Kibana",
    desc: "공공 세무 업무 시스템에서 요구사항을 업무 흐름으로 해석하고, 백엔드 API, 화면 구조, 데이터 처리, 운영 로그 분석까지 연결해 기능을 구현하고 개선했습니다.",
  },
  {
    title: "MSA-oriented Business System Experience",
    role: "Backend · Frontend · Operation",
    desc: "서비스 분리를 지향하는 구조 안에서 권한 검증, 요청값 검증, 내부 API 연계, 상태 처리, 운영 이슈 분석 경험을 쌓았습니다.",
  },
];

const approaches = [
  [
    "01",
    "Validation & Security",
    "서비스 로직에 흩어지는 검증과 권한 체크를 Spring Validation, ConstraintValidator, Spring Security 기반 구조로 분리합니다.",
  ],
  [
    "02",
    "Service Integration",
    "모듈 간 데이터 의존을 줄이기 위해 직접 쿼리 공유보다 Feign Client 기반 내부 API 연계 구조를 우선합니다.",
  ],
  [
    "03",
    "Data & State Flow",
    "화면 기준보다 업무 상태, 데이터 흐름, VO/DB 구조를 먼저 보고 상태 판단과 데이터 매핑 책임을 명확히 합니다.",
  ],
  [
    "04",
    "Operation & Documentation",
    "운영 이슈는 Kibana 로그, Trace ID, DB 상태를 함께 확인하고 원인과 조치 내용을 문서화합니다.",
  ],
];

const skills = [
  { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/000000", fallback: "J" },
  { name: "Spring", logo: "https://cdn.simpleicons.org/spring/6DB33F", fallback: "S" },
  { name: "Spring Security", logo: "https://cdn.simpleicons.org/springsecurity/6DB33F", fallback: "SEC" },
  { name: "Authorization Server", logo: "https://cdn.simpleicons.org/openid/000000", fallback: "AUTH" },
  { name: "OAuth2/OIDC", logo: "https://cdn.simpleicons.org/openid/000000", fallback: "OIDC" },
  { name: "BFF Pattern", logo: "https://cdn.simpleicons.org/jsonwebtokens/000000", fallback: "BFF" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", fallback: "R" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", fallback: "TS" },
  { name: "Oracle", logo: "https://cdn.simpleicons.org/oracle/F80000", fallback: "DB" },
  { name: "MyBatis", logo: "https://cdn.simpleicons.org/apache/000000", fallback: "SQL" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis/FF4438", fallback: "RE" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/231F20", fallback: "K" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", fallback: "DO" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5", fallback: "K8S" },
  { name: "Kibana", logo: "https://cdn.simpleicons.org/kibana/005571", fallback: "LOG" },
  { name: "WebRTC", logo: "https://cdn.simpleicons.org/webrtc/333333", fallback: "RTC" },
  { name: "FFmpeg", logo: "https://cdn.simpleicons.org/ffmpeg/007808", fallback: "FF" },
];

const sideProjects = [
  {
    id: "spring-msa",
    title: "Spring MSA Platform",
    oneLine: "실무에서 경험한 구조적 문제를 Spring 기반 MSA 서비스 구조로 재설계한 프로젝트",
    desc: "프론트엔드 독립 빌드, 세션 관리, 권한 분리, 외부 인터페이스 테스트, 대시보드 집계, Redis 활용 문제를 Gateway, BFF, Authorization Server, Redis Session, 도메인 서비스 분리 기반의 MSA 서비스 구조로 다시 설계했습니다.",
    stack: "Spring Boot · Spring Security · Authorization Server · Gateway · BFF · Redis · PostgreSQL · React · Kubernetes",
    status: "Completed MVP / Deployed Demo",
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
      "Docker Compose와 Kubernetes manifest 기반 실행 환경 구성",
      "GitHub Actions 기반 build/test workflow와 README 실행 가이드 작성",
    ],
    tests: [
      "Auth Flow 통합 테스트",
      "BFF Session / Redis Session 테스트",
      "Resource Server JWT 검증 테스트",
      "Gateway Routing 테스트",
      "API 문서와 Postman Collection 정리",
    ],
    evidence: ["GitHub", "README", "Demo", "Architecture", "Test Report"],
  },
  {
    id: "video-streaming",
    title: "Video Streaming Platform",
    oneLine: "방송형 서비스와 회의형 서비스를 함께 고려한 Video Streaming 메인 도메인 프로젝트",
    desc: "OBS 기반 RTMP 송출, FFmpeg 기반 HLS/DASH 변환, Shaka Player 브라우저 재생, WebRTC 기반 저지연 통신을 목표로 설계했습니다. Spring Boot는 서비스 도메인을, Go는 WebRTC SFU와 미디어 세션 처리를 담당하도록 분리했습니다.",
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
      "OBS RTMP 송출과 nginx-rtmp 수신 성공",
      "FFmpeg 컨테이너 기반 HLS/DASH 변환 파이프라인 구현",
      "Shaka Player 기반 DASH/HLS 브라우저 재생 구현",
      "WebSocket 채팅과 WebRTC Signaling API 구현",
      "Docker Compose 기반 로컬 스트리밍 MVP 실행 환경 구성",
    ],
    tests: [
      "RTMP 송출 → HLS/DASH 재생 시나리오 테스트",
      "방송 시작/종료 이벤트 발행/소비 테스트",
      "Redis Room State TTL 테스트",
      "WebSocket 연결/해제 테스트",
      "스트리밍 아키텍처 README와 실행 GIF 정리",
    ],
    evidence: ["GitHub", "README", "Demo Video", "Architecture", "Troubleshooting"],
  },
  {
    id: "money-book",
    title: "Money Book Service",
    oneLine: "실제 서비스 운영 경험을 목표로 만든 AI 기반 웹/앱 가계부",
    desc: "구매 문자와 결제 알림 내용을 AI로 분석해 금액, 카테고리, 거래 정보를 추정하고 자동 등록하는 기능을 적용했습니다. 빠른 개발, 실제 배포, 사용자 입력 흐름 개선을 중심으로 만든 서비스형 프로젝트입니다.",
    stack: "React · Mobile/Web · Spring Boot · AI Parsing · PostgreSQL · Deployment",
    status: "Released Service / AI Feature",
    architecture: [
      "웹/앱 클라이언트에서 수동 거래 등록과 AI 문자 분석 등록을 함께 지원",
      "Spring Boot API에서 거래, 카테고리, 예산, 월별 리포트 도메인 처리",
      "AI Parsing Layer에서 구매 문자/결제 알림을 분석해 금액, 상호명, 카테고리 추정",
      "PostgreSQL에 거래 내역과 AI 추정 결과, 사용자 수정 이력을 분리 저장",
      "배포 환경에서 사용자 피드백을 반영해 카테고리 추천 규칙 개선",
    ],
    implemented: [
      "거래 등록, 카테고리 관리, 월별 지출 조회 구현",
      "구매 문자 AI 분석과 자동 거래 등록 플로우 구현",
      "사용자 수정 이력을 기반으로 카테고리 추천 개선 구조 적용",
      "웹 배포와 모바일 대응 UI 구성",
      "서비스 운영용 로그와 오류 추적 기본 구조 구성",
    ],
    tests: [
      "문자 분석 샘플 데이터 테스트",
      "거래 등록/수정/삭제 API 테스트",
      "월별 리포트 집계 테스트",
      "AI 추정 실패 시 수동 입력 fallback 테스트",
      "배포 체크리스트와 사용자 시나리오 문서 작성",
    ],
    evidence: ["GitHub", "Service URL", "README", "Demo", "User Flow"],
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
    <span className="group inline-flex items-center border border-black text-sm font-medium transition hover:-translate-y-1 hover:bg-black hover:text-white">
      <span className="grid h-12 min-w-12 place-items-center border-r border-black bg-white px-3 group-hover:border-white">
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
      <span className="px-4 py-3">{name}</span>
    </span>
  );
}


function CredentialCard({ credential }) {
  const isMajor = credential.weight === "major";

  return (
    <article
      className={`group border-b border-r border-black p-7 transition duration-200 hover:-translate-y-1 hover:bg-black hover:text-white ${
        isMajor ? "min-h-[260px]" : "min-h-[210px]"
      }`}
    >
      <span className="inline-flex border border-current px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
        {credential.code}
      </span>
      <h3 className={`${isMajor ? "mt-9 text-3xl" : "mt-7 text-2xl"} font-semibold leading-tight tracking-[-0.05em]`}>
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

export default function CleanLinePortfolio() {
  const [entered, setEntered] = useState(false);
  const [active, setActive] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState(sideProjects[0].id);

  if (!entered) {
    return <IntroGate onEnter={() => setEntered(true)} />;
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
              Backend / DevOps
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

          <h1 className="max-w-4xl text-6xl font-black leading-[0.98] tracking-[-0.08em] md:text-8xl">
            졸라
            <br />
            궁금한가요?
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-neutral-600">
            사진은 장난인데,
            <br />
            포트폴리오는 생각보다 진지합니다.
            <br />
            제가 뭘 만들고, 어디까지 해봤고, 왜 자꾸 구조를 바꾸려는지 보여드리겠습니다.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onEnter}
              className="group border border-black bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
            >
              포트폴리오 보기
              <span className="ml-3 inline-block transition group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              type="button"
              onClick={onEnter}
              className="border border-black bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              일단 눌러보셈
            </button>
          </div>

          <div className="mt-16 grid border-y border-black md:grid-cols-3">
            {[
              ["Role", "Backend"],
              ["Cloud", "CKA / AWS"],
              ["Track", "MSA / Video / AI"],
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

  const activeLabel = navItems.find((item) => item.id === active)?.label ?? "Home";
  const selectedProject = sideProjects.find((project) => project.id === selectedProjectId) ?? sideProjects[0];

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
        <a href="#home" className="block text-lg font-bold tracking-[-0.06em]">
          CHOI.DEV
        </a>
        <p className="mt-4 max-w-[190px] text-xs leading-6 text-neutral-500">
          Backend developer who turns repeated problems into maintainable structures.
        </p>

        <nav className="mt-16 space-y-5">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className="group grid grid-cols-[32px_1fr] items-center gap-3"
            >
              <span className={`text-xs font-semibold transition ${active === item.id ? "text-black" : "text-neutral-300 group-hover:text-black"}`}>
                {String(index).padStart(2, "0")}
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
          <a href="#home" onClick={() => setActive("home")} className="text-sm font-bold tracking-[-0.04em]">
            CHOI.DEV
          </a>
          <span className="text-xs font-semibold uppercase tracking-[0.22em]">{activeLabel}</span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 lg:ml-[260px] lg:max-w-none lg:px-12 xl:px-16">
        <section id="home" className="min-h-[calc(100vh-73px)] scroll-mt-24 py-20 md:py-28">
          <div className="hero-line border-b border-black pb-10">
            <div className="grid gap-12 xl:grid-cols-[180px_1fr]">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                00 / home
              </div>
              <div>
                <p className="reveal-text mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  Backend / DevOps Portfolio
                </p>
                <div className="reveal-text mb-8 flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <span key={domain} className="border border-black px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
                      {domain}
                    </span>
                  ))}
                </div>
                <h1 className="reveal-text max-w-6xl text-5xl font-semibold leading-[1.08] tracking-[-0.06em] md:text-8xl">
                  문제를 고치는 데서 끝내지 않고,
                  <br />
                  반복되는 구조를 바꿉니다.
                </h1>
                <p className="reveal-text mt-10 max-w-3xl text-lg leading-9 text-neutral-600">
                  SI 실무에서 마주한 업무 시스템의 문제를 Java/Spring, React, DB, 운영 로그 관점으로 연결해 해결했습니다.
                  그리고 그 경험을 Spring MSA, Video Streaming, AI 기반 서비스형 사이드 프로젝트로 확장하고 있습니다.
                </p>

                <div className="reveal-text mt-12 flex flex-wrap gap-3">
                  <LineButton href="#credentials">View Credentials</LineButton>
                  <LineButton href="#side-projects">View Side Projects</LineButton>
                </div>
              </div>
            </div>
          </div>

          <div className="grid border-b border-black md:grid-cols-4">
            {[
              ["Role", "Backend / DevOps"],
              ["Domain", "Tax · Law · Video"],
              ["Track", "MSA · Video Streaming · AI Service"],
              ["Credential", "CKA · AWS · Linux"],
            ].map(([k, v], idx) => (
              <div key={k} className={`py-6 md:px-6 ${idx !== 0 ? "md:border-l md:border-black" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">{k}</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.04em]">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <Section
          id="credentials"
          index={1}
          title="Credentials"
          desc="클라우드 네이티브, 리눅스, 데이터, 네트워크 기본기를 자격증으로 보완했습니다. CKA, AWS, Linux는 Backend/DevOps 방향성을 먼저 보여주는 신호로 배치했습니다."
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
          desc="기술 스택은 실제 SVG 로고를 사용하되, 전체 톤은 선과 여백 중심으로 단순하게 유지합니다."
        >
          <div className="flex flex-wrap gap-3 border-y border-black py-8">
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
          desc="경력기술서의 핵심 내용을 업무명 중심이 아니라 개발 방식 중심으로 압축합니다. 검증, 연계, 데이터 흐름, 운영 분석 경험을 통해 어떤 방식으로 문제를 다루는지 보여줍니다."
        >
          <div className="border-y border-black">
            {approaches.map(([no, title, desc]) => (
              <article key={title} className="grid gap-5 border-b border-black py-7 last:border-b-0 md:grid-cols-[120px_260px_1fr]">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">{no}</div>
                <h3 className="text-xl font-semibold tracking-[-0.05em]">{title}</h3>
                <p className="text-sm leading-7 text-neutral-600">{desc}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="side-projects"
          index={5}
          title="Side Projects"
          desc="실무에서 느낀 구조적 한계를 MSA 서비스, Video Streaming 서비스, AI 기반 실제 서비스 프로젝트 안에서 다시 설계하고 구현합니다."
        >
          <div className="grid border-y border-black lg:grid-cols-3">
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
                      <a key={item} href="#" className="border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="archive"
          index={6}
          title="Archive"
          desc="블로그는 기술 사용 목록이 아니라, 문제 해결 과정과 의사결정 기록으로 보여줍니다."
        >
          <div className="grid border-y border-black md:grid-cols-2">
            {archives.map((item, idx) => (
              <a
                key={item}
                href="#"
                className={`group flex items-center justify-between gap-6 py-5 text-sm font-medium transition-all hover:bg-black hover:px-4 hover:text-white ${idx >= 2 ? "border-t border-black" : ""} ${idx % 2 === 1 ? "md:border-l md:border-black" : ""}`}
              >
                <span>{item}</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          index={7}
          title="Contact"
          desc="마지막은 불필요한 설명 없이 링크만 배치합니다."
        >
          <div className="flex flex-wrap gap-4 border-y border-black py-8">
            {["Email", "GitHub", "Resume PDF", "Blog"].map((item) => (
              <a key={item} href="#" className="border border-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
