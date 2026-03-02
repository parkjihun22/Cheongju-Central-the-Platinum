// src/components/Header/Header.jsx

import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Header.module.scss";
import SlideMenu from "../../components/SlideMenu/SlideMenu";
import logoImage from "../../assets/logo/mainlogo.png";
import bannerGif from "../../assets/logo/uptool.gif";
import mainlogowhite from "../../assets/logo/mainlogowhite.jpg";
import InterestPopup from "../../components/InterestPopup/InterestPopup";

const menuArray = [
    {
      title: "브랜드소개",
      subMenu: [
        { subTitle: "브랜드 소개", subUrl: "/Brand/intro" },
        { subTitle: "홍보 영상", subUrl: "/Brand/video" },
      ],
    },
  {
    title: "사업개요",
    subMenu: [
      { subTitle: "사업안내", subUrl: "/BusinessGuide/intro" },
      // { subTitle: "분양일정", subUrl: "/BusinessGuide/plan" },
      // { subTitle: "공급안내", subUrl: "/BusinessGuide/documents" },
    ],
  },
  // {
  //   title: "장기일반민간임대",
  //   subMenu: [
  //     { subTitle: "장기일반민간임대", subUrl: "/SalesInfo/SubscriptionGuide" },
  //     { subTitle: "파격적인특별혜택", subUrl: "/SalesInfo/guide" },
  //     { subTitle: "부담없는계약조건", subUrl: "/SalesInfo/stampTax" },
  //     { subTitle: "모집공고안내", subUrl: "/SalesInfo/announcement" },
  //   ],
  // },

  {
    title: "입지환경",
    subMenu: [
      { subTitle: "입지안내", subUrl: "/LocationEnvironment/intro" },
      { subTitle: "프리미엄", subUrl: "/LocationEnvironment/primium" },
    ],
  },
  {
    title: "단지안내",
    subMenu: [
      { subTitle: "단지 배치도", subUrl: "/ComplexGuide/intro" },
      { subTitle: "호수 배치도", subUrl: "/ComplexGuide/detailintro" },
      { subTitle: "커뮤니티", subUrl: "/ComplexGuide/community" },
    ],
  },
  {
    title: "세대안내",
    subMenu: [
      { subTitle: "59A", subUrl: "/FloorPlan/59A" },
      { subTitle: "59B", subUrl: "/FloorPlan/59B" },
      { subTitle: "59C", subUrl: "/FloorPlan/84A" },
      { subTitle: "84A", subUrl: "/FloorPlan/84B" },
      { subTitle: "84B", subUrl: "/FloorPlan/114A" },
      { subTitle: "84C", subUrl: "/FloorPlan/114B" },
      { subTitle: "E-모델하우스", subUrl: "/FloorPlan/Emodel" },
    ],
  },
  // {
  //   title: "인테리어",
  //   subMenu: [
  //     { subTitle: "84A", subUrl: "/Interior/59A" },
  //     { subTitle: "84B", subUrl: "/Interior/84A" },
  //   ],
  // },
  {
    title: "홍보센터",
    subMenu: [
      // { subTitle: "언론보도", subUrl: "/Promotion/Press" },
      { subTitle: "관심고객등록", subUrl: "/Promotion/Customer" },
    ],
  },
];

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredMenuRect, setHoveredMenuRect] = useState(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 팝업 상태
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false);
  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({ ...prev, [name]: value }));
  };

  // 모바일 헤더 렌더링
  if (isMobile) {
    return (
      <>
        <div className={styles.gifBanner}>
          <img src={bannerGif} alt="Uptool Banner" />
        </div>
        <div className={styles.mobileHeader}>
          <div onClick={() => setIsMobileMenu((v) => !v)}>
            {!isMobileMenu ? (
              <AiOutlineMenu className={styles.icon} size={25} color="#16243e" />
            ) : (
              <IoCloseSharp className={styles.icon} size={25} color="#16243e" />
            )}
          </div>
          {isMobileMenu && (
            <SlideMenu
              contents={menuArray}
              onClose={() => setIsMobileMenu(false)}
              onReservationClick={() => setIsInterestPopupOpen(true)}
            />
          )}
          <Link to="/">
            <img src={mainlogowhite} alt="Logo" className={styles.logo} />
          </Link>
          <a href="tel:1533-8848">
            <IoCall className={styles.icon} size={25} color="#16243e" />
          </a>
        </div>
        {isInterestPopupOpen && (
          <InterestPopup
            onClose={() => setIsInterestPopupOpen(false)}
            registration={registration}
            handleInputChange={handleInputChange}
          />
        )}
      </>
    );
  }

  // PC 헤더 이벤트 핸들러
  const handleNavItemMouseEnter = (idx, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredMenu(idx);
    setHoveredMenuRect(rect);
  };
  const handleMouseLeave = () => {
    setHoveredMenu(null);
    setHoveredMenuRect(null);
  };

  return (
    <div
      className={`${styles.headerWrapper} ${
        hoveredMenu !== null ? styles.dropdownOpen : ""
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.gifBanner}>
        <img src={bannerGif} alt="Uptool Banner" />
      </div>
      <header className={styles.headerInitial}>
        <Link to="/">
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </Link>

        <div className={styles.itemBox}>
          {/* 모바일 상담예약 → 이제 페이지 이동 */}
          <Link to="/Promotion/Customer" className={styles.consultLink}>
            모바일 상담예약
          </Link>

          {menuArray.map((menu, idx) => (
            <div
              key={idx}
              className={styles.navItem}
              onMouseEnter={(e) => handleNavItemMouseEnter(idx, e)}
            >
              <Link to={menu.subMenu[0].subUrl} className={styles.navLink}>
                {menu.title}
              </Link>
            </div>
          ))}
        </div>

        <button
          className={styles.phoneNumber}
          onClick={() => setIsInterestPopupOpen(true)}
          type="button"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <IoCall size={20} /> 1533-8848
        </button>
      </header>

      {hoveredMenu !== null && hoveredMenuRect && (
        <div className={styles.dropdownContainer}>
          <div
            className={styles.dropdownContent}
            style={{ marginLeft: hoveredMenuRect.left }}
          >
            {menuArray[hoveredMenu].subMenu.map((submenu, subIdx) => (
              <Link
                key={subIdx}
                to={submenu.subUrl}
                className={styles.dropdownItem}
              >
                {submenu.subTitle}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isInterestPopupOpen && (
        <InterestPopup
          onClose={() => setIsInterestPopupOpen(false)}
          registration={registration}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
}
