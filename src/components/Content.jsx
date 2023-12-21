import styles from "./content.module.css";
function Content() {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.firstHeading}>Welcome to Tribaja</h1>
        <p className={styles.paragraph}>
          Open Doors to Limitless Tech Networking and Learning Opportunities.
        </p>
        <div className={styles.flexContainerGoogle}>
          <div className={styles.icon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="white" />
              <path
                d="M26.5005 16.2332C26.5005 15.3699 26.4291 14.7399 26.2744 14.0865H16.2148V17.9832H22.1196C22.0006 18.9515 21.3577 20.4099 19.9291 21.3898L19.9091 21.5203L23.0897 23.935L23.3101 23.9565C25.3338 22.1249 26.5005 19.4298 26.5005 16.2332Z"
                fill="#4285F4"
              />
              <path
                d="M16.212 26.5C19.1048 26.5 21.5334 25.5666 23.3072 23.9567L19.9263 21.3899C19.0215 22.0083 17.8072 22.4399 16.212 22.4399C13.3787 22.4399 10.974 20.6083 10.1168 18.0766L9.99113 18.0871L6.68388 20.5954L6.64062 20.7132C8.4025 24.1433 12.0215 26.5 16.212 26.5Z"
                fill="#34A853"
              />
              <path
                d="M10.119 18.0767C9.89281 17.4234 9.76191 16.7233 9.76191 16C9.76191 15.2767 9.89281 14.5767 10.1071 13.9234L10.1011 13.7842L6.75239 11.2356L6.64283 11.2867C5.91667 12.71 5.5 14.3084 5.5 16C5.5 17.6917 5.91667 19.29 6.64283 20.7133L10.119 18.0767Z"
                fill="#FBBC05"
              />
              <path
                d="M16.2121 9.55997C18.224 9.55997 19.5811 10.4116 20.3549 11.1233L23.3787 8.23C21.5216 6.53834 19.1049 5.5 16.2121 5.5C12.0216 5.5 8.40251 7.85665 6.64062 11.2866L10.1049 13.9233C10.974 11.3917 13.3788 9.55997 16.2121 9.55997Z"
                fill="#EB4335"
              />
            </svg>
          </div>
          <p className={styles.flexContent}>Continue with google</p>
        </div>
        <div className={styles.flexContainerLinkedin}>
          <div className={styles.icon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="white" />
              <path
                d="M25 22.5C25 23.881 23.881 25 22.5 25H9.5C8.1195 25 7 23.881 7 22.5V9.5C7 8.119 8.1195 7 9.5 7H22.5C23.881 7 25 8.119 25 9.5V22.5Z"
                fill="#0288D1"
              />
              <path
                d="M10 13.5H12.5V22H10V13.5ZM11.2425 12.5H11.2285C10.4825 12.5 10 11.944 10 11.2495C10 10.54 10.4975 10 11.257 10C12.0175 10 12.486 10.54 12.5 11.2495C12.5 11.9435 12.0175 12.5 11.2425 12.5ZM22 22H19.5V17.4505C19.5 16.3515 18.8875 15.6015 17.904 15.6015C17.1535 15.6015 16.7475 16.1075 16.5505 16.5965C16.4785 16.7715 16.5 17.2555 16.5 17.5V22H14V13.5H16.5V14.808C16.8605 14.25 17.425 13.5 18.869 13.5C20.658 13.5 21.9995 14.625 21.9995 17.137L22 22Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={styles.flexContent}>Continue with Linkedin</p>
        </div>
        <span className={styles.separator}>OR</span>
      </div>
    </>
  );
}

export default Content;
