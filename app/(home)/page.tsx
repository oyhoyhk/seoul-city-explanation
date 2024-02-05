import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>서울시 해명 / 보도 자료 모음</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <Link href="/explanation">서울시 해명 자료</Link>
        </div>
        <div className={styles.card}>
          <Link href="/news">서울시 보도 자료</Link>
        </div>
      </div>
    </div>
  );
}
