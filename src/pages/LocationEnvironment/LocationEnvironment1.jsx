import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "미래가치를 높이는<br />청주 도심 프리미엄 입지",
    contentText:
      "청주 핵심 생활권 중심 입지로<br />주거와 생활이 가까운 편리한 환경<br />높은 미래가치를 기대할 수 있는 도심 주거지",
  },
  {
    img: section2Image2,
    titleText:
      "가까운 의료 인프라<br />안심할 수 있는 생활 환경",
    contentText:
      "청주 주요 병원 및 의료시설과의<br />우수한 접근성으로<br />일상 속 의료 편의성을 누리는 생활",
  },
  {
    img: section2Image3,
    titleText:
      "도심과 광역을 잇는<br />편리한 교통 프리미엄",
    contentText:
      "주요 도로망과 빠르게 연결되는 입지<br />청주 도심 이동은 물론<br />광역 이동까지 편리한 교통 환경",
  },
  {
    img: section2Image4,
    titleText:
      "생활에 필요한 모든 것을<br />가깝게 누리는 인프라",
    contentText:
      "쇼핑, 문화, 행정 등 중심 생활권 인접<br />일상에 필요한 다양한 시설을<br />편리하게 누리는 스마트 라이프",
  },
  {
    img: section2Image5,
    titleText:
      "프리미엄 브랜드 가치로 완성되는<br />도심 주거의 새로운 기준",
    contentText:
      "차별화된 설계와 브랜드 철학<br />품격 있는 주거 환경과 커뮤니티<br />프리미엄 라이프를 위한 공간",
  },
  {
    img: section2Image6,
    titleText:
      "도심 속 여유를 더하는<br />쾌적한 자연 환경",
    contentText:
      "인근 공원과 녹지 공간으로<br />일상에 여유를 더하는 힐링 라이프<br />자연과 함께하는 쾌적한 주거 환경",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

      {/* SEO 메타 */}
      <title>청주 센트럴 더 플래티넘 - 입지환경</title>
      <meta
        name="description"
        content="청주 센트럴 더 플래티넘 입지환경을 확인하세요. 교통, 생활 인프라, 교육환경, 자연환경 등 일상에 필요한 입지 포인트를 안내합니다."
      />
      <meta
        name="keywords"
        content="청주 센트럴 더 플래티넘, 입지환경, 입지안내, 교통, 생활인프라, 교육환경, 자연환경, 청주 분양"
      />
      <link rel="canonical" href="https://intercs.co.kr/LocationEnvironment/intro" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
      <meta property="og:title" content="청주 센트럴 더 플래티넘 - 입지환경" />
      <meta
        property="og:description"
        content="청주 센트럴 더 플래티넘 입지환경 - 교통/생활인프라/교육/자연환경 포인트를 확인하세요."
      />
      <meta property="og:url" content="https://intercs.co.kr/LocationEnvironment/intro" />
      <meta property="og:image" content="https://intercs.co.kr/Main1.png" />
      <meta property="og:image:alt" content="청주 센트럴 더 플래티넘 입지환경" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="청주 센트럴 더 플래티넘 - 입지환경" />
      <meta
        name="twitter:description"
        content="청주 센트럴 더 플래티넘 입지환경 - 교통/생활인프라/교육/자연환경 포인트를 확인하세요."
      />
      <meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
      <meta name="twitter:url" content="https://intercs.co.kr/LocationEnvironment/intro" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "청주 센트럴 더 플래티넘 - 입지환경",
          "description": "청주 센트럴 더 플래티넘 입지환경을 안내합니다. 교통, 생활 인프라, 교육 및 자연환경 등 입지 포인트를 확인하세요.",
          "url": "https://intercs.co.kr/LocationEnvironment/intro",
          "inLanguage": "ko-KR"
        }`}
      </script>
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="입지환경" />
    <MenuBar contents={menuContents} />

    <h1 className={styles.screenReaderOnly}>
      청주 센트럴 더 플래티넘 - 입지환경
    </h1>
    <p className={styles.screenReaderOnly}>
      청주 센트럴 더 플래티넘의 입지 정보를 안내합니다.
      교통, 생활 인프라, 교육환경, 자연환경 등 일상에 필요한 입지 포인트를 확인하실 수 있습니다.
    </p>

    <div className={styles.textBox}>
      <div>도심의 편리함을 가까이 누리는 입지</div>
      <div>청주 센트럴 더 플래티넘 입지환경</div>
    </div>

      <img
        src={page1}
        className={styles.image2}
        alt="청주 센트럴 더 플래티넘 입지환경 이미지"
      />


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="청주 센트럴 더 플래티넘입지환경 이미지"
      />


      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 청주 센트럴 더 플래티넘 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
