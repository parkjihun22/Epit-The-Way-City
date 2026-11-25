import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "청주 남부권의 새로운 중심<br />신분평 더웨이시티 브랜드타운",
    contentText:
      "충청북도 청주시 서원구 장성동 135번지 일원에 조성되는 신분평 에피트 더웨이시티<br />총 3,948세대 규모로 계획된 신분평 더웨이시티의 새로운 주거 가치",
  },
  {
    img: section2Image2,
    titleText: "청주 주요 지역을 연결하는<br />1·2·3순환로 교통망",
    contentText:
      "청주 제2순환로와 국도 17호선을 편리하게 이용할 수 있는 교통환경<br />제1·3순환로를 통해 청주 도심과 오송·오창·세종·대전 방면으로 편리한 이동",
  },
  {
    img: section2Image3,
    titleText: "생활과 자연을 함께 누리는<br />풍부한 생활 인프라",
    contentText:
      "이마트 청주점과 기존 분평동 생활권의 다양한 생활편의시설 이용<br />무심천과 공원, 준주거시설 조성계획을 가까이 누리는 생활환경",
  },
  {
    img: section2Image4,
    titleText: "장성초 개교 예정으로 기대되는<br />편리한 교육환경",
    contentText:
      "단지 인접 부지에 가칭 장성초등학교 신설 추진<br />2029년 9월 개교를 목표로 조성되는 자녀 중심의 교육환경",
  },
  {
    img: section2Image5,
    titleText: "HL디앤아이한라가 선보이는<br />에피트 브랜드 프리미엄",
    contentText:
      "모두가 선호하는 완벽함을 의미하는 에피트의 브랜드 철학<br />차별화된 단지설계와 조경, 커뮤니티로 완성하는 품격 있는 주거생활",
  },
  {
    img: section2Image6,
    titleText: "총 992세대<br />에피트 브랜드 대단지",
    contentText:
      "지하 2층부터 지상 최고 29층, 총 10개 동으로 조성되는 대단지<br />세대당 약 1.48대의 주차공간과 다양한 평면을 갖춘 신분평 에피트 더웨이시티",
  },
];
const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>청주 1·2·3순환로를 가까이 누리는</div>
  <div>신분평 더웨이시티 브랜드타운의 프리미엄 라이프</div>
  <div>신분평 에피트 더웨이시티가 새로운 주거 가치를 완성합니다.</div>
</div>

<figure className={styles.locationMapFrame}>
  <img
    src={page1}
    className={styles.image2}
    alt="신분평 에피트 더웨이시티 청주 입지환경과 생활권 안내 이미지"
  />

  <button
    type="button"
    className={styles.zoomButton}
    onClick={() =>
      openZoom(
        page1,
        "신분평 에피트 더웨이시티 청주 입지환경과 생활권 안내 이미지"
      )
    }
    aria-label="신분평 에피트 더웨이시티 입지환경 이미지 크게 보기"
  >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `신분평 에피트 더웨이시티 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
