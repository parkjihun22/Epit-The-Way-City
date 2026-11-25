import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "신분평 에피트 더웨이시티" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="신분평 에피트 더웨이시티 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "신분평에피트더웨이시티",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "평면안내",
    "평면도",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신분평 에피트 더웨이시티가 선보이는 새로운 프리미엄 주거문화를
          만나보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          청주 신분평 에피트 더웨이시티의 미래가치와 HL디앤아이한라
          에피트의 차별화된 브랜드 가치를 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신분평 에피트 더웨이시티의 사업안내부터 공급정보와 모델하우스
          안내까지 한눈에 확인해 보세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신분평 에피트 더웨이시티의 사업개요와 공급정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 992세대의 공급 규모와 전용면적 59㎡A·B, 75㎡A·B,
          84㎡A·B, 112㎡ 주택형을 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          분양일정과 입주자모집공고, 공급안내 등 청주 신분평 에피트
          더웨이시티의 주요 분양정보를 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          실수요자의 생활 편의성과 공간 활용을 고려한 세대설계와 타입별
          평면정보를 한곳에서 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신분평 에피트 더웨이시티
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신분평 에피트 더웨이시티의 입지환경과 주변 생활 인프라를
          확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          청주 1·2·3순환로와 국도 17호선을 이용해 청주 도심은 물론
          오송·오창·세종·대전 방면으로 편리하게 이동할 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          가칭 장성초 개교 예정 부지와 이마트, 무심천, 준주거시설 계획
          등 다양한 교육·생활환경을 가까이 누릴 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 3,948세대 규모로 계획된 더웨이시티 브랜드타운과 분평2지구
          개발계획을 품은 청주 남부권의 새로운 주거 가치를 만나보세요.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          쾌적한 주거환경과 효율적인 공간 구성을 갖춘 신분평 에피트
          더웨이시티의 단지설계를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          단지배치와 동·호수 배치도, 조경시설, 커뮤니티 및 홈네트워크
          시스템 등 다양한 단지정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          세대당 약 1.48대의 넉넉한 주차공간과 에피트의 특화설계가
          완성하는 차별화된 주거 가치를 경험해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          청주 신분평 에피트 더웨이시티에서 한층 여유롭고 편리한 일상을
          만나보실 수 있습니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          신분평 에피트 더웨이시티의 새로운 공급 소식과 모델하우스
          방문예약을 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 분양일정, 공급조건, 청약정보 및 모델하우스
          위치 안내를 빠르게 받아보실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          청주 신분평 에피트 더웨이시티의 최신 분양정보와 언론보도
          소식을 확인해 보세요.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      신분평 에피트 더웨이시티 홈페이지에서 사업개요, 입지환경,
      공급정보와 모델하우스 안내를 확인하세요.
    </div>
  );
};