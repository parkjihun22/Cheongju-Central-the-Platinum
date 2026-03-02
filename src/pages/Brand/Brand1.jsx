import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
        <Helmet>
          {/* Basic */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="robots" content="index, follow" />
          <html lang="ko" />

          {/* Primary SEO */}
          <title>청주 센트럴 더 플래티넘 - 브랜드 소개</title>
          <meta
            name="description"
            content="청주 센트럴 더 플래티넘의 브랜드 가치와 주거 철학을 소개합니다. 프리미엄 라이프를 완성하는 브랜드 스토리를 확인해보세요."
          />
          <meta
            name="keywords"
            content="청주 센트럴 더 플래티넘, 브랜드소개, 프리미엄 아파트, 청주 분양, 청주 신축 아파트"
          />
          <link rel="canonical" href="https://intercs.co.kr/Brand/intro" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
          <meta property="og:title" content="청주 센트럴 더 플래티넘 - 브랜드 소개" />
          <meta
            property="og:description"
            content="청주 센트럴 더 플래티넘의 브랜드 철학과 프리미엄 라이프 가치를 소개합니다."
          />
          <meta property="og:url" content="https://intercs.co.kr/Brand/intro" />
          <meta property="og:image" content="https://intercs.co.kr/Main1.png" />
          <meta property="og:image:alt" content="청주 센트럴 더 플래티넘 브랜드 이미지" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="청주 센트럴 더 플래티넘 - 브랜드 소개" />
          <meta
            name="twitter:description"
            content="청주 센트럴 더 플래티넘의 브랜드 철학과 주거 가치를 소개합니다."
          />
          <meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
          <meta name="twitter:url" content="https://intercs.co.kr/Brand/intro" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "청주 센트럴 더 플래티넘 - 브랜드 소개",
              "url": "https://intercs.co.kr/Brand/intro",
              "inLanguage": "ko-KR",
              "description": "청주 센트럴 더 플래티넘의 브랜드 철학과 프리미엄 주거 가치를 소개합니다.",
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
                  "name": "브랜드 소개",
                  "item": "https://intercs.co.kr/Brand/intro"
                }]
              }
            }`}
          </script>
        </Helmet>

        <Header isChanged={isScroll} />
        <FixIcon />

        <Bener title="플래티넘" />
        <MenuBar contents={menuContents} />

        <h1 className={styles.screenReaderOnly}>
          청주 센트럴 더 플래티넘 - 브랜드소개
        </h1>

        <p className={styles.screenReaderOnly}>
          청주 센트럴 더 플래티넘은 프리미엄 주거 가치를 바탕으로 설계, 공간, 라이프스타일까지
          세심하게 담아낸 주거공간을 제안합니다.
          이 페이지에서는 브랜드 철학과 디자인 아이덴티티, 주거 가치를 소개합니다.
        </p>

        <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
          <div>삶의 기준을 높이는 프리미엄 주거</div>
          <div>청주 센트럴 더 플래티넘에서 만나다</div>
        </div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="청주 센트럴 더 플래티넘 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
