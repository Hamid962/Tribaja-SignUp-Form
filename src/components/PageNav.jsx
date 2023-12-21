import Content from "./Content";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import styles from "./pageNav.module.css";
function PageNav() {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <Content />
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default PageNav;
