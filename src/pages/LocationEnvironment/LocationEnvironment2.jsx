import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const LocationEnvironment2 = () => {
  const [isScroll, setIsScroll] = useState(false);
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

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>청주 남부권의 새로운 주거 중심에서</div>
  <div>3,948세대 브랜드타운의 프리미엄 라이프를 완성합니다.</div>
  <div>신분평 에피트 더웨이시티가 새로운 주거 기준을 제안합니다.</div>
</div>

<figure className={styles.locationMapFrame}>
  <img
    src={page1}
    className={styles.image3}
    alt="신분평 에피트 더웨이시티 입지환경 및 브랜드타운 프리미엄 이미지"
  />
    </figure>

      <Footer />
    </div>
  );
};

export default LocationEnvironment2;
