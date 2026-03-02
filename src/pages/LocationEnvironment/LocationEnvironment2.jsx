import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";

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

      {/* SEO 핵심 */}
      <title>청주 센트럴 더 플래티넘 - 프리미엄</title>
      <meta
        name="description"
        content="청주 센트럴 더 플래티넘 프리미엄을 확인하세요. 브랜드 가치, 단지 설계, 커뮤니티, 생활 편의까지 주거의 완성도를 높이는 핵심 포인트를 소개합니다."
      />
      <meta
        name="keywords"
        content="청주 센트럴 더 플래티넘, 프리미엄, 브랜드 프리미엄, 단지 설계, 커뮤니티, 청주 아파트, 청주 분양"
      />
      <link rel="canonical" href="https://intercs.co.kr/LocationEnvironment/primium" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
      <meta property="og:title" content="청주 센트럴 더 플래티넘 - 프리미엄" />
      <meta
        property="og:description"
        content="브랜드 가치, 단지 설계, 커뮤니티 등 청주 센트럴 더 플래티넘의 프리미엄 포인트를 확인하세요."
      />
      <meta property="og:url" content="https://intercs.co.kr/LocationEnvironment/primium" />
      <meta property="og:image" content="https://intercs.co.kr/Main1.png" />
      <meta property="og:image:alt" content="청주 센트럴 더 플래티넘 프리미엄" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="청주 센트럴 더 플래티넘 - 프리미엄" />
      <meta
        name="twitter:description"
        content="청주 센트럴 더 플래티넘의 프리미엄 포인트를 확인하세요."
      />
      <meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
      <meta name="twitter:url" content="https://intercs.co.kr/LocationEnvironment/primium" />
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="프리미엄" />
    <MenuBar contents={menuContents} />

    <h1 className={styles.screenReaderOnly}>
      청주 센트럴 더 플래티넘 - 프리미엄
    </h1>
    <p className={styles.screenReaderOnly}>
      청주 센트럴 더 플래티넘만의 프리미엄을 소개합니다.
      브랜드 가치, 단지 설계, 커뮤니티 구성 등 주거의 완성도를 높이는 핵심 포인트를 확인하세요.
    </p>

    <div className={styles.textBox}>
      <div>주거의 가치를 높이는 프리미엄 라이프</div>
      <div>청주 센트럴 더 플래티넘 프리미엄</div>
    </div>

        <img
          src={page1}
          className={styles.image3}
          alt="청주 센트럴 더 플래티넘프리미엄 이미지 1"
        />



      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
