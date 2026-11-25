// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>현장명</strong>
          <span>신분평 에피트 더웨이시티</span>
        </li>
  
        <li>
          <strong>대지위치</strong>
          <span>
            충청북도 청주시 서원구 장성동 135번지 일원
            (장성지구 A2블록)
          </span>
        </li>
  
        <li>
          <strong>단지규모</strong>
          <span>
            총 992세대 / 지하 2층 ~ 지상 최고 29층 / 총 10개 동
          </span>
        </li>
  
        <li>
          <strong>사업면적</strong>
          <span>
            대지면적 46,473.00㎡ / 건축면적 8,198.5530㎡ / 연면적
            160,113.0171㎡
          </span>
        </li>
  
        <li>
          <strong>주차대수</strong>
          <span>공동주택 기준 세대당 약 1.48대</span>
        </li>
  
        <li>
          <strong>주택형</strong>
          <span>
            전용 59㎡A · 59㎡B · 75㎡A · 75㎡B · 84㎡A · 84㎡B · 112㎡
          </span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="한화포레나 지제역 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="한화포레나 지제역 평택지제역 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            청주 남부권의 새로운 주거 가치를 담은
            <br />
            신분평 에피트 더웨이시티 라이프
          </p>
        </div>
  
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
  ];
  
  function PremiumSlider() {
    const slides = [
      {
        img: slide1,
        title: "1·2·3순환로를 품은 교통망",
        desc:
          "청주 제2순환로와 국도 17호선의 편리한 이용<br/>제1·3순환로를 통해 청주 주요 지역으로 빠른 이동<br/>오송·오창·세종·대전 방면을 잇는 광역 교통환경",
      },
      {
        img: slide2,
        title: "3,948세대 대규모 브랜드타운",
        desc:
          "신분평 더웨이시티 3개 단지, 총 3,948세대 계획<br/>브랜드타운의 두 번째 단지로 공급되는 992세대<br/>새로운 주거타운으로 완성될 청주 남부권의 미래가치",
      },
      {
        img: slide3,
        title: "장성초 개교 예정 교육환경",
        desc:
          "단지 인접 부지에 가칭 장성초등학교 신설 추진<br/>2029년 9월 개교를 목표로 조성되는 교육환경<br/>자녀의 안전하고 편리한 통학을 고려한 입지",
      },
      {
        img: slide4,
        title: "생활과 자연을 가까이 누리다",
        desc:
          "이마트 청주점과 기존 분평동 생활 인프라 이용<br/>무심천과 공원 등 가까이에서 누리는 자연환경<br/>단지 주변 준주거시설 조성계획으로 높아지는 생활편의",
      },
      {
        img: slide5,
        title: "신흥주거벨트의 새로운 중심",
        desc:
          "분평2지구 개발계획의 미래가치를 품은 입지<br/>방서·동남·지북지구와 연계되는 청주 남부 생활권<br/>주거와 생활 인프라가 확장되는 새로운 주거 중심지",
      },
      {
        img: slide6,
        title: "992세대 에피트 프리미엄",
        desc:
          "전용 59㎡부터 112㎡까지 구성된 총 992세대<br/>남향 위주 배치와 풍부한 조경을 갖춘 쾌적한 단지<br/>세대당 약 1.48대의 주차공간과 에피트 특화설계",
      },
    ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>HANWHA FORENA JIJE STATION</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="신분평 에피트 더웨이시티 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
