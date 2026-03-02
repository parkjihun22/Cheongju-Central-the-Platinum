import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
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

			{/* Minimal SEO (Subpage) */}
			<title>청주 센트럴 더 플래티넘 - 홍보영상</title>
			<meta
				name="description"
				content="청주 센트럴 더 플래티넘 홍보영상으로 단지 분위기와 핵심 포인트를 빠르게 확인하세요."
			/>
			<meta
				name="keywords"
				content="청주 센트럴 더 플래티넘, 홍보영상, 단지 영상, 청주 아파트, 청주 분양"
			/>
			<link rel="canonical" href="https://intercs.co.kr/Brand/video" />

			{/* Open Graph (minimal) */}
			<meta property="og:type" content="website" />
			<meta property="og:locale" content="ko_KR" />
			<meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
			<meta property="og:title" content="청주 센트럴 더 플래티넘 - 홍보영상" />
			<meta
				property="og:description"
				content="홍보영상으로 청주 센트럴 더 플래티넘의 핵심 포인트를 간단히 확인하세요."
			/>
			<meta property="og:url" content="https://intercs.co.kr/Brand/video" />
			<meta property="og:image" content="https://intercs.co.kr/Main1.png" />
			<meta property="og:image:alt" content="청주 센트럴 더 플래티넘 홍보영상 썸네일" />

			{/* Twitter (minimal) */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="청주 센트럴 더 플래티넘 - 홍보영상" />
			<meta name="twitter:description" content="영상으로 단지 핵심을 빠르게 확인하세요." />
			<meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
			<meta name="twitter:url" content="https://intercs.co.kr/Brand/video" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />
			<MenuBar contents={menuContents} />

			<h1 className={styles.screenReaderOnly}>청주 센트럴 더 플래티넘 - 홍보영상</h1>
			<p className={styles.screenReaderOnly}>
			청주 센트럴 더 플래티넘의 홍보영상을 통해 단지의 분위기와 주요 특장점을 확인해보세요.
			단지 설계, 커뮤니티, 생활 인프라 등 핵심 포인트를 영상으로 빠르게 안내합니다.
			</p>

			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
			<div>영상으로 먼저 만나는 단지의 분위기</div>
			<div>청주 센트럴 더 플래티넘, 핵심 포인트를 확인하세요.</div>
			</div>

			<div className={styles.videoContainer}>
				<YouTube
					videoId="hQ4trk-Blhs"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
