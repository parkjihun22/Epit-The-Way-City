import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";
import unit07 from "../../assets/FloorPlan/FloorPlan7/unit07.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "신분평 에피트 더웨이시티 타입안내",

  description:
    "신분평 에피트 더웨이시티의 전용 59㎡A·59㎡B, 75㎡A·75㎡B, 84㎡A·84㎡B 및 112㎡ 타입별 평면을 확인할 수 있습니다. 총 992세대의 다양한 공간 구성과 생활 동선을 비교하며 라이프스타일에 맞는 주거공간을 살펴보세요.",

  plans: [
    {
      id: "59A",
      type: "59㎡A",
      name: "59㎡A",
      summary:
        "총 256세대로 구성되는 59㎡A 타입의 실용적인 공간 구성과 효율적인 생활 동선을 확인해 보세요.",

      image: unit01,
      alt: "신분평 에피트 더웨이시티 59㎡A 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "59B",
      type: "59㎡B",
      name: "59㎡B",
      summary:
        "총 29세대로 구성되는 59㎡B 타입의 효율적인 평면과 실용적인 수납공간을 확인해 보세요.",

      image: unit02,
      alt: "신분평 에피트 더웨이시티 59㎡B 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "75A",
      type: "75㎡A",
      name: "75㎡A",
      summary:
        "총 49세대로 구성되는 75㎡A 타입의 균형 잡힌 공간 구성과 편리한 생활 동선을 확인해 보세요.",

      image: unit03,
      alt: "신분평 에피트 더웨이시티 75㎡A 평면도",

      // 기존 프로젝트 라우트 유지
      link: "/FloorPlan/84A",
    },

    {
      id: "75B",
      type: "75㎡B",
      name: "75㎡B",
      summary:
        "총 51세대로 구성되는 75㎡B 타입의 실용적인 평면 구성과 여유로운 주거공간을 확인해 보세요.",

      image: unit04,
      alt: "신분평 에피트 더웨이시티 75㎡B 평면도",

      // 기존 프로젝트 라우트 유지
      link: "/FloorPlan/84B",
    },

    {
      id: "84A",
      type: "84㎡A",
      name: "84㎡A",
      summary:
        "총 345세대로 구성되는 주력 84㎡A 타입의 여유로운 공간 구성과 효율적인 생활 동선을 확인해 보세요.",

      image: unit05,
      alt: "신분평 에피트 더웨이시티 84㎡A 평면도",

      // 기존 프로젝트 라우트 유지
      link: "/FloorPlan/114A",
    },

    {
      id: "84B",
      type: "84㎡B",
      name: "84㎡B",
      summary:
        "총 174세대로 구성되는 84㎡B 타입의 차별화된 평면 구성과 편리한 수납공간을 확인해 보세요.",

      image: unit06,
      alt: "신분평 에피트 더웨이시티 84㎡B 평면도",

      // 기존 프로젝트 라우트 유지
      link: "/FloorPlan/114B",
    },

    {
      id: "112",
      type: "112㎡",
      name: "112㎡",
      summary:
        "총 88세대로 구성되는 112㎡ 타입의 넓고 여유로운 공간과 차별화된 주거설계를 확인해 보세요.",

      image: unit07,
      alt: "신분평 에피트 더웨이시티 112㎡ 평면도",

      // 기존 프로젝트 라우트 유지
      link: "/FloorPlan/120A",
    },
  ],
};