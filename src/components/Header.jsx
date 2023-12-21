import styles from "./header.module.css";
function Header() {
  return (
    <>
      <div className={styles.flex}>
        <img src="../../public/Tribja logo black.svg" alt="tribaja" />
        <button className={styles.btn}>Login</button>
      </div>
    </>
  );
}

export default Header;
