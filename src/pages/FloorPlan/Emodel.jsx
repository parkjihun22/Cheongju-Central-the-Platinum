import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    // { title: "59A", key: "59A" },
    // { title: "59B", key: "59B" },
    // { title: "84A", key: "84A" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    // "59A": "https://www.prugio.com/hb/2025/onecluster/vr/59a.html",
    // "59B": "https://www.prugio.com/hb/2025/onecluster/vr/59b.html",
    // "84A": "https://jeil-gh.co.kr/vr/tour_84a.html",
    // "84B": "https://jeil-gh.co.kr/vr/tour_84b.html",
  };

  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 설정 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <html lang="ko" />

        {/* Primary SEO */}
        <title>청주 센트럴 더 플래티넘– E-모델하우스</title>
        <meta
          name="description"
          content="청주 센트럴 더 플래티넘E-모델하우스를 온라인으로 둘러보세요. 주요 타입 내부와 공간 구성, 수납·동선, 마감 포인트를 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="청주 센트럴 더 플래티넘, E-모델하우스, 온라인 모델하우스, 360도, VR, 평면안내, 84A, 84B, 84C"
        />
        <link rel="canonical" href="https://intercs.co.kr/FloorPlan/Emodel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
        <meta property="og:title" content="청주 센트럴 더 플래티넘– E-모델하우스" />
        <meta
          property="og:description"
          content="온라인 E-모델하우스로 주요 타입 내부와 마감 포인트를 확인하세요."
        />
        <meta property="og:url" content="https://intercs.co.kr/FloorPlan/Emodel" />
        <meta property="og:image" content="https://intercs.co.kr/Main1.png" />
        <meta property="og:image:alt" content="청주 센트럴 더 플래티넘E-모델하우스 미리보기" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="청주 센트럴 더 플래티넘– E-모델하우스" />
        <meta
          name="twitter:description"
          content="온라인 E-모델하우스로 내부 구조·마감 포인트를 확인하세요."
        />
        <meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
        <meta name="twitter:url" content="https://intercs.co.kr/FloorPlan/Emodel" />

        {/* JSON-LD: WebPage + Breadcrumbs */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "청주 센트럴 더 플래티넘– E-모델하우스",
            "url": "https://intercs.co.kr/FloorPlan/Emodel",
            "inLanguage": "ko-KR",
            "description": "청주 센트럴 더 플래티넘E-모델하우스 온라인 투어. 주요 타입 내부와 공간 구성, 마감 포인트를 확인할 수 있습니다.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "청주 센트럴 더 플래티넘",
              "url": "https://www.diarivalencia.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "홈",
                "item": "https://intercs.co.kr/"
              }, {
                "@type": "ListItem",
                "position": 2,
                "name": "E-모델하우스",
                "item": "https://intercs.co.kr/FloorPlan/Emodel"
              }]
            }
          }`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        청주 센트럴 더 플래티넘- E-모델하우스 안내
      </h1>


      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
