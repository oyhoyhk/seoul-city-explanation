import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className={styles.loader} />
    </div>
  );
}
