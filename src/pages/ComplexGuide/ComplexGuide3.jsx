import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide3/community.jpg";

const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
        <title>청주 센트럴 더 플래티넘– 커뮤니티</title>
        <meta
          name="description"
          content="청주 센트럴 더 플래티넘커뮤니티 시설을 소개합니다. 피트니스, 독서실, 카페 등 입주민의 편리한 일상을 위한 다양한 커뮤니티 공간을 확인하세요."
        />
        <meta
          name="keywords"
          content="청주 센트럴 더 플래티넘, 커뮤니티, 단지 커뮤니티, 피트니스, 독서실, 카페, 청주 아파트"
        />
        <link rel="canonical" href="https://intercs.co.kr/ComplexGuide/community" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
        <meta property="og:title" content="청주 센트럴 더 플래티넘– 커뮤니티" />
        <meta
          property="og:description"
          content="청주 센트럴 더 플래티넘커뮤니티 시설과 편의공간을 한눈에 확인하세요."
        />
        <meta property="og:url" content="https://intercs.co.kr/ComplexGuide/community" />
        <meta property="og:image" content="https://intercs.co.kr/Main1.png" />
        <meta property="og:image:alt" content="청주 센트럴 더 플래티넘커뮤니티" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="청주 센트럴 더 플래티넘– 커뮤니티" />
        <meta
          name="twitter:description"
          content="청주 센트럴 더 플래티넘커뮤니티 시설을 확인하세요."
        />
        <meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
        <meta name="twitter:url" content="https://intercs.co.kr/ComplexGuide/community" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        청주 센트럴 더 플래티넘- 커뮤니티
      </h1>
      <p className={styles.screenReaderOnly}>
        청주 센트럴 더 플래티넘커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 안내합니다.
        피트니스, 독서실, 카페 등 입주민의 일상 편의를 고려한 공간 구성으로
        보다 쾌적하고 여유로운 주거 생활을 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>일상을 더 풍요롭게 만드는 커뮤니티 공간</div>
        <div>청주 센트럴 더 플래티넘커뮤니티</div>
      </div>


      {/* 이미지에 애니메이션 효과 추가 */}
      <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="청주 센트럴 더 플래티넘커뮤니티 안내 -image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>

 


      <Footer />
    </div>
  );
};

export default ComplexGuide3;
