const SITE_URL = "https://sinbunpyeong-epit.co.kr/";

export const siteSeo = {
  siteName: "신분평 에피트 더웨이시티",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",

  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "신분평 에피트 더웨이시티 분양정보 안내 홈페이지입니다. 충청북도 청주시 서원구 장성동 135번지 일원에 조성되는 지하 2층~지상 최고 29층, 총 10개 동, 992세대 규모의 에피트 브랜드 아파트로 전용 59㎡A·B, 75㎡A·B, 84㎡A·B, 112㎡ 평면도, 입지환경, 공급정보, 분양일정과 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "충청북도",
    addressLocality: "청주시 서원구",
    streetAddress: "장성동 135번지 일원",
    block: "장성지구 A2블록",

    households: "총 992세대",

    scale:
      "지하 2층~지상 최고 29층 · 총 10개 동 · 992세대",

    unitTypes: [
      "59㎡A",
      "59㎡B",
      "75㎡A",
      "75㎡B",
      "84㎡A",
      "84㎡B",
      "112㎡",
    ],

    brand: "EFETE",

    brands: [
      "신분평 에피트 더웨이시티",
      "청주 신분평 에피트 더웨이시티",
      "에피트",
      "EFETE",
      "HL디앤아이한라",
    ],

    developer: "유한회사 에이치엠서빈",
    contractor: "HL디앤아이한라㈜",

    navigationSchemaName:
      "신분평 에피트 더웨이시티 주요 메뉴",
  },

  keywords: [
    "신분평 에피트 더웨이시티",
    "청주 신분평 에피트 더웨이시티",
    "신분평 에피트",
    "신분평 더웨이시티",
    "신분평 에피트 더웨이시티 분양",
    "신분평 에피트 더웨이시티 모델하우스",
    "신분평 에피트 더웨이시티 견본주택",
    "신분평 에피트 더웨이시티 방문예약",
    "신분평 에피트 더웨이시티 공급정보",
    "신분평 에피트 더웨이시티 청약",
    "신분평 에피트 더웨이시티 무순위",
    "신분평 에피트 더웨이시티 분양가",
    "신분평 에피트 더웨이시티 평면도",
    "신분평 에피트 더웨이시티 입지환경",
    "신분평 에피트 더웨이시티 커뮤니티",
    "신분평 에피트 더웨이시티 992세대",
    "신분평 에피트 더웨이시티 59A",
    "신분평 에피트 더웨이시티 59B",
    "신분평 에피트 더웨이시티 75A",
    "신분평 에피트 더웨이시티 75B",
    "신분평 에피트 더웨이시티 84A",
    "신분평 에피트 더웨이시티 84B",
    "신분평 에피트 더웨이시티 112",
    "신분평 에피트 더웨이시티 언론보도",
    "신분평 에피트 더웨이시티 보도자료",
    "신분평 에피트 더웨이시티 뉴스",
    "청주 장성동 아파트",
    "청주 아파트 분양",
    "청주 무순위 청약",
    "청주 모델하우스",
    "장성지구 아파트",
    "에피트 모델하우스",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      {
        name: "브랜드소개",
        path: "/Brand/intro",
      },
    ],
  },

  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
      {
        name: "분양일정",
        path: "/BusinessGuide/plan",
      },
    ],
  },

  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },

  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "동·호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },

  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      {
        name: "공급안내",
        path: "/BusinessGuide/documents",
      },
      {
        name: "입주자모집공고",
        path: "/SalesInfo/announcement",
      },
      {
        name: "계약서류안내",
        path: "/SalesInfo/guide",
      },
      {
        name: "인지세 납부 안내",
        path: "/SalesInfo/StampTax",
      },
    ],
  },

  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "59㎡A",
        path: "/FloorPlan/59A",
      },
      {
        name: "59㎡B",
        path: "/FloorPlan/59B",
      },
      {
        name: "75㎡A",
        path: "/FloorPlan/84A",
      },
      {
        name: "75㎡B",
        path: "/FloorPlan/84B",
      },
      {
        name: "84㎡A",
        path: "/FloorPlan/114A",
      },
      {
        name: "84㎡B",
        path: "/FloorPlan/114B",
      },
      {
        name: "112㎡",
        path: "/FloorPlan/120A",
      },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },

  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      {
        name: "언론보도",
        path: "/Promotion/Press",
      },
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "신분평 에피트 더웨이시티",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title:
      "브랜드소개 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 브랜드소개 페이지입니다. HL디앤아이한라의 주거 브랜드 에피트가 제안하는 브랜드 철학과 청주 신분평에서 선보이는 차별화된 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title:
      "홍보영상 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 홍보영상 페이지입니다. 청주 남부권의 입지환경과 총 992세대 브랜드 단지, 에피트의 차별화된 주거 가치를 영상으로 확인하세요.",
    menu: "브랜드소개",
    robots: "noindex, follow",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title:
      "사업안내 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 사업안내 페이지입니다. 충청북도 청주시 서원구 장성동 135번지 일원, 장성지구 A2블록에 지하 2층~지상 최고 29층, 총 10개 동, 992세대로 조성되는 사업개요를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title:
      "분양일정 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 분양일정 안내입니다. 입주자모집공고와 무순위 청약, 당첨자 발표, 서류접수 및 계약체결 등 주요 공급 일정을 확인하세요.",
    menu: "사업안내",
    changefreq: "daily",
    priority: 0.9,
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title:
      "공급안내 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 공급안내 페이지입니다. 총 992세대의 공급 규모와 전용 59㎡A·B, 75㎡A·B, 84㎡A·B, 112㎡ 주택형, 타입별 세대수와 공급금액을 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
    changefreq: "daily",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title:
      "입주자모집공고 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 입주자모집공고 안내 페이지입니다. 공급 대상과 청약 자격, 청약일정, 주택형별 공급금액, 납부조건, 계약조건 및 유의사항을 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
    changefreq: "daily",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title:
      "계약서류안내 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 계약서류안내 페이지입니다. 당첨자 자격 확인과 계약체결, 제출서류, 준비사항 및 모델하우스 방문 전 확인해야 할 내용을 안내합니다.",
    menu: "분양안내",
  }),

  salesStampTax: page({
    path: "/SalesInfo/StampTax",
    title:
      "인지세 납부 안내 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 인지세 납부 안내 페이지입니다. 공급계약 체결에 필요한 인지세 납부 대상과 금액, 납부기한, 납부방법 및 관련 유의사항을 확인하세요.",
    menu: "분양안내",
    priority: 0.7,
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title:
      "입지환경 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 입지환경 안내입니다. 청주 1·2·3순환로와 국도 17호선을 이용하는 교통환경, 기존 분평동 생활 인프라와 무심천 등 청주 남부권의 주거 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title:
      "프리미엄 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 프리미엄 안내입니다. 총 3,948세대 규모로 계획된 신분평 더웨이시티 브랜드타운과 장성초 개교 예정 교육환경, 분평2지구 개발계획 및 에피트 브랜드 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title:
      "단지배치도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 단지배치도 안내입니다. 총 10개 동의 남향 위주 배치와 쾌적한 동간거리, 보행 동선, 조경시설 및 단지 내 생활편의를 고려한 공간 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title:
      "동·호수배치도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 동·호수배치도 안내입니다. 총 10개 동의 동·호수 구성과 향, 전용 59㎡A·B, 75㎡A·B, 84㎡A·B, 112㎡ 타입별 배치 및 세대 위치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title:
      "커뮤니티 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 커뮤니티 안내입니다. 입주민의 운동과 휴식, 배움과 소통을 지원하는 에피트 특화 커뮤니티와 조경시설 및 주민공동시설을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title:
      "59㎡A 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 59㎡A 평면도 안내입니다. 총 256세대로 구성되는 타입의 실용적인 평면과 공간 구성, 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title:
      "59㎡B 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 59㎡B 평면도 안내입니다. 총 29세대로 구성되는 타입의 효율적인 평면과 공간 구성, 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan75A: page({
    path: "/FloorPlan/84A",
    title:
      "75㎡A 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 75㎡A 평면도 안내입니다. 총 49세대로 구성되는 타입의 균형 잡힌 평면과 공간 구성, 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan75B: page({
    path: "/FloorPlan/84B",
    title:
      "75㎡B 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 75㎡B 평면도 안내입니다. 총 51세대로 구성되는 타입의 실용적인 평면과 공간 구성, 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/114A",
    title:
      "84㎡A 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 84㎡A 평면도 안내입니다. 총 345세대로 구성되는 주력 타입의 여유로운 평면과 공간 구성, 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/114B",
    title:
      "84㎡B 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 84㎡B 평면도 안내입니다. 총 174세대로 구성되는 타입의 차별화된 평면과 공간 구성, 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan112: page({
    path: "/FloorPlan/120A",
    title:
      "112㎡ 평면도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 전용 112㎡ 평면도 안내입니다. 총 88세대로 구성되는 대형 타입의 넓고 여유로운 공간 구성과 생활 동선 및 선택품목을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title:
      "E-모델하우스 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 E-모델하우스입니다. 전용 59㎡A·B, 75㎡A·B, 84㎡A·B, 112㎡ 타입의 실내 구조와 공간 구성, 수납 및 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title:
      "관심고객등록 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 관심고객등록 페이지입니다. 분양일정과 공급정보, 분양가 상담, 모델하우스 위치 및 방문예약 등 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  press: page({
    path: "/Promotion/Press",
    title:
      "언론보도 | 신분평 에피트 더웨이시티",
    description:
      "신분평 에피트 더웨이시티 언론보도 페이지입니다. 청주 신분평 에피트 더웨이시티의 총 992세대 공급정보와 청약, 입지환경, 상품설계 및 모델하우스 방문예약 관련 보도자료와 분양 소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title:
      "페이지를 찾을 수 없습니다 | 신분평 에피트 더웨이시티",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 신분평 에피트 더웨이시티 홈페이지의 사업안내, 입지환경, 단지안내, 평면도, E-모델하우스, 언론보도 및 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

const normalizeSeoPath = (pathname = "/") => {
  let cleanPath = pathname || "/";

  try {
    if (/^https?:\/\//.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    cleanPath = "/";
  }

  cleanPath = decodeURI(cleanPath)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  return cleanPath.toLowerCase() || "/";
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    normalizeSeoPath(value.path),
    key,
  ])
);

export const seoPageList = Object.values(seoPages).filter(
  (item) => item.robots !== "noindex, follow"
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const normalizedPath = normalizeSeoPath(pathname);
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) {
    return seoPages.press;
  }

  if (normalizedPath.includes("/promotion/press")) {
    return seoPages.press;
  }

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  if (normalizedPath.includes("/promotion/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};