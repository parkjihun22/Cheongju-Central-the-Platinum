import { useNavigate } from "react-router-dom";
import styles from "./Promotion.module.scss";
import { useState } from "react";

function PressWrite() {
  const [form, setForm] = useState({ title: "", summary: "", image: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("실제론 서버 저장 로직 필요. (지금은 임시 제출)");
    navigate("/Promotion/Press");
  };

  return (
    <div className={styles.writeContainer}>
      <h2>언론보도 등록</h2>
      <form onSubmit={handleSubmit} className={styles.writeForm}>
        <input className={styles.writeInput} name="title" value={form.title} onChange={handleChange} placeholder="제목" required />
        <input className={styles.writeInput} name="summary" value={form.summary} onChange={handleChange} placeholder="요약" />
        <input className={styles.writeInput} name="image" value={form.image} onChange={handleChange} placeholder="이미지 경로 (예: /img/sample1.jpg)" />
        <textarea className={styles.writeTextarea} name="content" value={form.content} onChange={handleChange} placeholder="본문 내용" required />
        <button type="submit" className={styles.button}>등록</button>
      </form>
    </div>
  );
}
export default PressWrite;
