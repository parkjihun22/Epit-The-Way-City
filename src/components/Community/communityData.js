import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "꿈꾸던 일상이 펼쳐지는 에피트 특화 단지",

  description:
    "신분평 에피트 더웨이시티는 남향 위주의 단지 배치와 쾌적한 동간거리, 대지면적의 약 43%를 활용한 풍부한 조경시설과 입주민의 다양한 생활 방식을 고려한 커뮤니티 공간을 통해 품격 있고 여유로운 주거환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "신분평 에피트 더웨이시티 프리미엄 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "채광과 개방감을 고려한 쾌적한 단지 배치",

      description:
        "신분평 에피트 더웨이시티는 전 세대를 남향 위주로 배치하고 쾌적한 동간거리를 확보해 세대 간 간섭을 줄였습니다. 채광과 통풍, 조망과 입주민의 보행 동선을 고려한 단지설계로 더욱 여유롭고 편안한 생활환경을 제공합니다.",

      image: layoutImage,
      alt: "신분평 에피트 더웨이시티 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "일상에 여유를 더하는 에피트 특화설계",

      description:
        "대지면적의 약 43%를 활용한 풍부한 조경시설과 다채로운 휴식공간을 조성하고, 세대당 약 1.48대의 넉넉한 주차공간과 편리한 홈네트워크 시스템을 적용해 쾌적하고 품격 있는 주거환경을 완성합니다.",

      image: designImage,
      alt: "신분평 에피트 더웨이시티 단지 특화설계와 조경시설",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "일상의 가치를 높이는 특화 커뮤니티",

      description:
        "운동과 휴식, 배움과 소통을 위한 다양한 주민공동시설을 한곳에 구성해 입주민의 건강한 여가생활과 편리한 일상을 지원합니다. 에피트만의 특화 커뮤니티를 통해 신분평 에피트 더웨이시티에서 더욱 특별한 주거문화를 만나보세요.",

      image: communityImage,
      alt: "신분평 에피트 더웨이시티 입주민 커뮤니티 시설",
    },
  ],
};