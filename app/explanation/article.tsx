import styles from "./explanation.module.css";

export default function Article({ info }: { info: any }) {
  return (
    <li className={styles.article}>
      <span>{info.TITLE[0]}</span>
      <a href={info.LINK[0]} target="_blank">
        Link
      </a>
    </li>
  );
}
