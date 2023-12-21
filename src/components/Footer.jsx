// import styles from "./footer.module.css";
import styles from "./footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.footerFlex}>
        <p>© 2023 Tribaja</p>
        <div>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
