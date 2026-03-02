import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="청주 센트럴 더 플래티넘-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (
        text === '플래티넘' ||
        text === '홍보영상' ||
        text === '장기일반민간임대' ||
        text === '당첨자서류안내' ||
        text === '청주 센트럴 더 플래티넘'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지친 하루를 마치고 가장 나에 가까운 본연의 모습으로 돌아와 누리는 프리미엄입니다.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    청주의 중심에서 만나는 새로운 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드 청주 센트럴 더 플래티넘과 함께합니다.
                </div>
            </>
        );
    } else if (
        text === '사업개요' ||
        text === '세대안내' ||
        text === '인테리어' ||
        text === '청약안내' ||
        text === '모집공고안내' ||
        text === '인지세납부안내'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    플래티넘이 선택한 중심 입지!
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    가장 높은 브랜드의 새로운 시작
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    청주 센트럴 더 플래티넘
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수준 높은 생활, 도심 속 프리미엄 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    기대하던 모든 프리미엄이 청주 센트럴 더 플래티넘에서 펼쳐집니다
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    편리한 생활을 위한 최적의 공간설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    소수에게만 허락된 청주 센트럴 더 플래티넘, 청주의 핵심 중심에 찾아옵니다
                </div>
            </>
        );
    }
};
