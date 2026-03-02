// src/pages/Promotion/Press.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../../firebase";
import { useMediaQuery } from "react-responsive";

import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Footer from "../../components/Footer/Footer";

import styles from "./Promotion.module.scss";

const PAGE_SIZE = 10;

export default function Press() {
  const { site } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [articles, setArticles] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Auth
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  // Write form
  const [form, setForm] = useState({ title: "", summary: "", content: "" });

  useEffect(() => {
    // 감시: 로그인 상태
    const unSub = onAuthStateChanged(auth, u => setUser(u));
    return unSub;
  }, []);

  useEffect(() => {
    // site 바뀔 때마다 초기화
    setArticles([]);
    setLastVisible(null);
    setHasMore(true);
    loadArticles(true);
    // eslint-disable-next-line
  }, [site]);

  async function loadArticles(isNew = false) {
    const colRef = collection(db, "press");
    let q = query(
      colRef,
      where("siteId", "==", site),
      orderBy("date", "desc"),
      limit(PAGE_SIZE)
    );
    if (!isNew && lastVisible) {
      q = query(
        colRef,
        where("siteId", "==", site),
        orderBy("date", "desc"),
        startAfter(lastVisible),
        limit(PAGE_SIZE)
      );
    }
    const snap = await getDocs(q);
    const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    setArticles(prev => (isNew ? docs : [...prev, ...docs]));
    setLastVisible(snap.docs[snap.docs.length - 1] || null);
    if (snap.docs.length < PAGE_SIZE) setHasMore(false);
  }

  // 관리자 로그인
  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, "eyeful31@naver.com",
        "gusqls@159");
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("로그인 실패: " + err.message);
    }
  }
  function handleLogout() {
    signOut(auth);
  }

  // 글쓰기 등록
  async function handleWrite(e) {
    e.preventDefault();
    const { title, summary, content } = form;
    if (!title || !summary) return alert("제목/요약은 필수입니다!");
    await addDoc(collection(db, "press"), {
      siteId: site,
      title,
      summary,
      content,
      date: serverTimestamp(),
      views: 0,
    });
    setForm({ title: "", summary: "", content: "" });
    // 리스트 새로 고침
    setArticles([]);
    setLastVisible(null);
    setHasMore(true);
    loadArticles(true);
  }

  return (
    <>
      <Header />
      <Bener />
      <MenuBar
        contents={[
          { title: "언론보도", url: `/${site}/press` },
          { title: "방문예약등록", url: `/${site}/customer` },
        ]}
      />
      <FixIcon />

      <div className={styles.pressWrap}>

        {!isMobile ? (
          <>
            <table table table table className={styles.pressTable}>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a, idx) => (
                  <tr key={a.id} className={styles.pressRow}>
                    <td>{idx + 1}</td>
                    <td>
                      <Link className={styles.tableTitle} to={`/${site}/press/${a.id}`}>{a.title}</Link>
                    </td>
                    <td>관리자</td>
                    <td>
                      {a.date?.toDate
                        ? a.date.toDate().toLocaleDateString("ko-KR")
                        : ""}
                    </td>
                    <td>{a.views}</td>
                  </tr>
                ))}
              </tbody>

            </table>
            {hasMore && (
              <div className={styles.loadMore}>
                <button onClick={() => loadArticles(false)}>더보기</button>
              </div>
            )}
          </>
        )
          :
          (
            <>
              <table className={styles.pressTable}>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((a, idx) => (
                    <tr key={a.id} className={styles.pressRow}>
                      <td>{idx + 1}</td>
                      <td>
                        <Link className={styles.tableTitle} to={`/${site}/press/${a.id}`}>{a.title}</Link>
                      </td>
                      <td className={styles.tableTime}>
                        {a.date?.toDate
                          ? a.date.toDate().toLocaleDateString("ko-KR")
                          : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
              {hasMore && (
                <div className={styles.loadMore}>
                  <button onClick={() => loadArticles(false)}>더보기</button>
                </div>
              )}
            </>)
        }

        <hr style={{ margin: "4vw 0" }} />

        {/* 로그인 폼 (비로그인 시) */}
        {!user && (
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="관리자 이메일"
              value={loginForm.email}
              onChange={e =>
                setLoginForm(f => ({ ...f, email: e.target.value }))
              }
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={loginForm.password}
              onChange={e =>
                setLoginForm(f => ({ ...f, password: e.target.value }))
              }
            />
            <button type="submit">관리자 로그인</button>
            {errorMsg && <p className={styles.error}>{errorMsg}</p>}
          </form>
        )}

        {/* 글쓰기 폼 (로그인 시) */}
        {user && (
          <>
            <div className={styles.adminBar}>
              <span>{user.email}님 환영합니다</span>
              <button onClick={handleLogout}>로그아웃</button>
            </div>
            <form className={styles.writeForm} onSubmit={handleWrite}>
              <input
                name="title"
                placeholder="제목"
                value={form.title}
                onChange={e =>
                  setForm(f => ({ ...f, title: e.target.value }))
                }
              />
              <input
                name="summary"
                placeholder="요약"
                value={form.summary}
                onChange={e =>
                  setForm(f => ({ ...f, summary: e.target.value }))
                }
              />
              <textarea
                name="content"
                placeholder="본문"
                value={form.content}
                onChange={e =>
                  setForm(f => ({ ...f, content: e.target.value }))
                }
              />
              <button type="submit">글 등록</button>
            </form>
          </>
        )}
      </div >

      <Footer />
    </>
  );
}
