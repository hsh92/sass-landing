export const BRAND_NAME = "WriteFlow";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Company", href: "#" },
] as const;

export const HERO_MOCKUP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCzUZljiMIWAmOKwmN2JE0O21JUsgggkJnZBVLr8fbwk_360uI__LohqL2vP4FC0O3n9mw60w0Kf0DIF5Mxk_fFWK7zwnhGdvr1RxrpsBfpPpIO8MueMuEH-AIkGJMpquX5V_0kCi1xLy85JNVW5O5RyOJuXHms8LFGYvtCMjg-Rcl6QklOhhocDfstFs-DcxdV9s1lxsdr8PLikjmt-a7SeaEmWM10zEP5cT3kDcJ0xm3B6o0B2vyV4dzL333sWcFHN3fcm8jwz5Td";

export const FEATURES = [
  {
    icon: "edit_note",
    title: "AI 글쓰기 어시스턴트",
    description:
      "클릭 한 번으로 블로그 포스트, 이메일, 광고 카피 등 고품질 콘텐츠를 생성합니다.",
  },
  {
    icon: "spellcheck",
    title: "언제나 완벽한 문법",
    description:
      "맥락을 이해하는 AI가 오타와 문법 오류를 실시간으로 교정하여 신뢰도를 높입니다.",
  },
  {
    icon: "record_voice_over",
    title: "브랜드 목소리 조절",
    description:
      "당신의 브랜드 정체성에 맞춰 톤앤매너를 자유롭게 조정하고 일관성을 유지하세요.",
  },
  {
    icon: "translate",
    title: "50개 이상 언어 지원",
    description:
      "전 세계 어디서든 소통할 수 있도록 자연스러운 다국어 작성을 지원합니다.",
  },
  {
    icon: "dashboard_customize",
    title: "100개 이상 템플릿",
    description:
      "모든 비즈니스 시나리오에 즉시 사용 가능한 최적화된 템플릿 라이브러리입니다.",
  },
  {
    icon: "groups",
    title: "실시간 협업",
    description:
      "팀원들과 실시간으로 문서를 편집하고 아이디어를 공유하며 작업 속도를 높이세요.",
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["월 5개 문서", "기본 문법 검사", "이메일 지원"],
    cta: "시작하기",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "무제한 문서",
      "고급 AI 모델 사용",
      "우선 고객 지원",
      "API 액세스",
    ],
    cta: "지금 구독하기",
    highlighted: true,
    badge: "가장 인기",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Pro 플랜 전체 포함",
      "맞춤형 AI 학습",
      "전담 매니저 배정",
      "SSO 보안 지원",
    ],
    cta: "문의하기",
    highlighted: false,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "무료 체험은 어떻게 진행되나요?",
    answer:
      "회원가입 즉시 14일간 Pro 플랜의 모든 기능을 자유롭게 사용해 보실 수 있습니다. 체험 기간 종료 후 자동으로 결제되지 않으니 안심하세요.",
  },
  {
    question: "언제든지 구독을 취소할 수 있나요?",
    answer:
      "네, 대시보드 설정에서 언제든지 클릭 한 번으로 구독을 해지하실 수 있습니다. 해지 후에도 남은 구독 기간 동안은 서비스를 정상적으로 이용 가능합니다.",
  },
  {
    question: "제 데이터는 안전한가요?",
    answer:
      "모든 문서는 엔드투엔드 암호화로 보호됩니다. 당사는 사용자의 데이터를 AI 학습에 무단으로 사용하지 않으며, 보안 규정을 엄격히 준수합니다.",
  },
  {
    question: "환불이 가능합니까?",
    answer:
      "결제 후 7일 이내에 사용량이 일정 수준 미만인 경우 100% 환불을 보장합니다. 고객 센터를 통해 간편하게 요청하실 수 있습니다.",
  },
  {
    question: "어떤 결재 수단을 지원하나요?",
    answer:
      "국내 주요 신용카드, 카카오페이, 네이버페이는 물론 해외 카드(VISA, Master) 및 PayPal 결제를 모두 지원합니다.",
  },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "API", href: "#" },
  ],
  support: [
    { label: "Contact Support", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
} as const;
