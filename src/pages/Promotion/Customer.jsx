// src/pages/Promotion/Customer.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Promotion.module.scss";

import Header from "../../components/Header/Header";
import FixIcon from "../../components/FixIcon/FixIcon";
import Bener from "../../components/Bener/Bener";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";

import { Helmet } from "react-helmet-async";

export default function Customer() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  // 폼 상태
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  // 전송 중 플래그 & 결과 메시지
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage(""); 

    try {
      // Formspree 엔드포인트로 POST
      const res = await fetch("https://formspree.io/f/mgolbjyz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (res.ok) {
        setResultMessage("✅ 등록이 완료되었습니다. 곧 전문상담원이 연락드리도록 하겠습니다");
        // 폼 초기화
        setForm({ name: "", phone: "", message: "" });
      } else {
        setResultMessage("❌ 등록에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
      setResultMessage("⚠️ 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }

    setIsSubmitting(false);
  };

  const promoMenu = [
    { key: "newsletter", title: "언론보도", url: "/Promotion/Press" },
    { key: "interest", title: "방문예약등록", url: "/Promotion/Customer" },
  ];

  return (
<>
      <Helmet>
        {/* 기본 설정 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <html lang="ko" />

        {/* Primary SEO */}
        <title>청주 센트럴 더 플래티넘– 관심고객 등록</title>
        <meta
          name="description"
          content="청주 센트럴 더 플래티넘관심고객 등록 페이지입니다. 분양 일정 및 주요 안내 소식을 빠르게 받아보고, 상담 요청을 남겨보세요."
        />
        <meta
          name="keywords"
          content="청주 센트럴 더 플래티넘, 관심고객 등록, 상담 신청, 분양 일정 알림, 방문 안내"
        />
        <link rel="canonical" href="https://intercs.co.kr/Contact/interest" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="청주 센트럴 더 플래티넘" />
        <meta property="og:title" content="청주 센트럴 더 플래티넘– 관심고객 등록" />
        <meta
          property="og:description"
          content="분양 일정 및 주요 안내 소식을 빠르게 받아보세요. 간편한 관심고객 등록/상담 신청."
        />
        <meta property="og:url" content="https://intercs.co.kr/Contact/interest" />
        <meta property="og:image" content="https://intercs.co.kr/Main1.png" />
        <meta
          property="og:image:alt"
          content="청주 센트럴 더 플래티넘관심고객 등록 안내 이미지"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="청주 센트럴 더 플래티넘– 관심고객 등록" />
        <meta
          name="twitter:description"
          content="분양 일정 알림과 상담 요청을 간편하게 남겨보세요."
        />
        <meta name="twitter:image" content="https://intercs.co.kr/Main1.png" />
        <meta name="twitter:url" content="https://intercs.co.kr/Contact/interest" />

        {/* JSON-LD: ContactPage + Breadcrumbs */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "청주 센트럴 더 플래티넘– 관심고객 등록",
            "url": "https://intercs.co.kr/Contact/interest",
            "inLanguage": "ko-KR",
            "description": "청주 센트럴 더 플래티넘관심고객 등록. 분양 일정 및 주요 안내 소식 알림과 상담 요청을 접수합니다.",
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
                "name": "관심고객 등록",
                "item": "https://intercs.co.kr/Contact/interest"
              }]
            },
            "potentialAction": {
              "@type": "SubmitAction",
              "target": "https://intercs.co.kr/Contact/interest",
              "name": "관심고객 등록 제출"
            }
          }`}
        </script>
      </Helmet>


      <Header />
      <FixIcon />

      {/* 배너 */}
      <Bener title="청주 센트럴 더 플래티넘" />

      {/* 네비게이션 탭 */}
      <MenuBar contents={promoMenu} />

      {/* 좌·우 카드 레이아웃 */}
      <div className={styles.customerWrap}>
        {/* ─── 좌측 카드 ─── */}
        <div className={styles.customerLeft}>
          <div className={styles.textBlock}>
            <h2 className={styles.projectName}>청주 센트럴 더 플래티넘</h2>
            <h3 className={styles.pageTitle}>방문예약등록</h3>
          </div>
          <img
            src="/img/sample1.jpg"
            alt="방문예약등록 이미지"
            className={styles.mainImage}
          />
          <div className={styles.serviceSection}>
            <span className={styles.serviceBadge}>CUSTOMER SERVICE</span>
            <h4 className={styles.serviceTitle}>방문예약등록</h4>
            <p className={styles.serviceDesc}>
              문의사항을 남겨주시면 빠르게 답변드리겠습니다.<br />
              방문예약등록시 당사 분양소식을 받아보실 수 있습니다.
            </p>
            <div className={styles.serviceLine}></div>
          </div>
          <div className={styles.custInfo}>
            <div className={styles.custItem}>
              <i className="icon-phone" />
              <div className={styles.infoText}>
                <strong>대표번호</strong>
                <span>1533-8848</span>
              </div>
            </div>
            <div className={styles.custItem}>
              <i className="icon-clock" />
              <div className={styles.infoText}>
                <strong>상담시간</strong>
                <span>24시간 상담</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 우측 카드 (폼) ─── */}
        <div className={styles.customerRight}>
          {/* 전송 결과 메시지 */}
          {resultMessage && (
            <div className={styles.submitResult}>{resultMessage}</div>
          )}

<form className={styles.custForm} onSubmit={handleSubmit}>
  {/* 고객명 */}
  <label className={styles.fieldLabel}>
    고객명<span className={styles.required}></span>
  </label>
  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="고객명"
    required
  />

  {/* 연락처 */}
  <label className={styles.fieldLabel}>
    연락처<span className={styles.required}></span>
  </label>
  <input
    type="tel"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    placeholder="010-1234-5678"
    required
  />

  {/* 문의내용 */}
  <label className={styles.fieldLabel}>문의 내용
  <span className={styles.required}></span>
  </label>
  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="문의 내용"
  />

  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "등록 중..." : "등록하기"}
  </button>
</form>
        </div>
      </div>

      <Footer />
    </>
  );
}
