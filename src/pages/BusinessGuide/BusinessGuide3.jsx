import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      // { title: "분양일정", url: "/BusinessGuide/plan" },
      { title: "공급안내", url: "/BusinessGuide/documents" }
    ];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
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
				<title>청주 센트럴 더 플래티넘– 공급안내</title>
				<meta
					name="description"
					content="청주 센트럴 더 플래티넘공급안내를 확인하세요. 공급개요, 신청자격, 제출서류(필요 시), 유의사항 등 청약에 필요한 핵심 정보를 안내합니다."
				/>
				<meta
					name="keywords"
					content="청주 센트럴 더 플래티넘, 공급안내, 청약안내, 신청자격, 공급개요, 유의사항, 진례시례지구, B-5블록"
				/>

				{/* ✅ 여기 canonical은 실제 공급안내 라우트로 맞춰야 함 */}
				<link rel="canonical" href="https://intercs.co.kr/SalesInfo/guide" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="ko_KR" />
				<meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
				<meta property="og:title" content="청주 센트럴 더 플래티넘– 공급안내" />
				<meta
					property="og:description"
					content="청주 센트럴 더 플래티넘공급안내 – 공급개요, 신청자격, 유의사항 등 청약에 필요한 정보를 확인하세요."
				/>
				<meta property="og:url" content="https://intercs.co.kr/SalesInfo/guide" />
				<meta property="og:image" content="https://intercs.co.kr/Main1.png" />
				<meta property="og:image:alt" content="청주 센트럴 더 플래티넘" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="청주 센트럴 더 플래티넘– 공급안내" />
				<meta
					name="twitter:description"
					content="청주 센트럴 더 플래티넘공급안내 – 청약에 필요한 핵심 정보를 확인하세요."
				/>
				<meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
				</Helmet>

				<Header isChanged={isScroll} />
				<FixIcon />

				{/* ✅ 페이지 성격에 맞게 배너 타이틀도 변경 */}
				<Bener title="공급안내" />
				<MenuBar contents={menuContents} />

				<h1 className={styles.screenReaderOnly}>청주 센트럴 더 플래티넘- 공급안내</h1>
				<p className={styles.screenReaderOnly}>
				청주 센트럴 더 플래티넘의 공급안내 페이지입니다.
				공급개요, 신청자격, 유의사항 등 청약 진행에 필요한 정보를 안내합니다.
				</p>

				<div className={styles.textBox}>
				<div>청약 전에 꼭 확인해야 할 핵심 정보</div>
				<div>청주 센트럴 더 플래티넘 공급안내</div>
				</div>


			{/* 이미지에 isImageVisible 상태 적용 */}
			<img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="청주 센트럴 더 플래티넘 계약서류안내-image1" />

			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
