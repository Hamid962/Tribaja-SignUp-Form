import { useDispatch, useSelector } from "react-redux";
import styles from "./form.module.css";
import { postData } from "../redux/userSlice";
import { useState, useEffect } from "react";
import { encryptPassword } from "../utils/EncryptPassword";
// import { enc } from "crypto-js";

function Form() {
  const [seePassword, setSeePassword] = useState(true);
  const [seeRepeatPassword, setRepeatPassword] = useState(true);

  const [error, setError] = useState("");
  // const [matchPassword, setMatchPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "talent",
    password1: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  // console.log(state);
  useEffect(() => {
    if (!isLoading) {
      console.log("Data posted successfully!");
    }
  }, [isLoading]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const encryptPassword1 = await encryptPassword(formData.password1);
      const encryptPassword2 = await encryptPassword(formData.password2);
      if (encryptPassword1 !== encryptPassword2) {
        setError("password must be match");
        return;
      }
      setError("");
      const updatedFormData = {
        ...formData,
        password1: encryptPassword1,
        password2: encryptPassword2,
      };

      const response = await dispatch(postData(updatedFormData));
      if (response.payload.status === 400) {
        setError(Object.values(response.payload.data)[0][0]);
      }
    } catch (error) {
      throw new Error();
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  function handlePassword() {
    setSeePassword((password) => !password);
  }
  function handleRepeatPassword() {
    setRepeatPassword((password) => !password);
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.flex}>
          <label className={styles.label}>First Name</label>
          <input
            className={styles.flex}
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.flex}>
          <label className={styles.label}>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.flex}>
          <label className={styles.label}>Enter an Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.flex}>
          <label className={styles.label}>I want to continue as </label>
          <select
            className={styles.select}
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option>talent</option>
            <option>partner</option>
            <option>employer</option>
          </select>
        </div>
        <div className={styles.flex}>
          <label className={styles.label}>Create a password </label>
          <input
            type={!seePassword ? "text" : "password"}
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            required
          />

          {seePassword ? (
            <svg
              onClick={handlePassword}
              width="19"
              className={styles.icon}
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 1">
                <path
                  id="Vector"
                  d="M17.3822 0.88129L16.6463 0.145348C16.4383 -0.0626432 16.0543 -0.0306342 15.8143 0.257311L13.2541 2.80128C12.102 2.30533 10.8382 2.06533 9.5101 2.06533C5.55798 2.08127 2.1342 4.38524 0.486083 7.69745C0.390056 7.90544 0.390056 8.16137 0.486083 8.33736C1.25402 9.90538 2.40609 11.2014 3.84609 12.1774L1.7501 14.3053C1.5101 14.5453 1.47809 14.9293 1.63813 15.1373L2.37408 15.8733C2.58207 16.0812 2.96606 16.0492 3.20606 15.7613L17.254 1.7134C17.558 1.47354 17.59 1.08958 17.382 0.881565L17.3822 0.88129ZM10.3581 5.71318C10.0861 5.64916 9.79813 5.5692 9.52611 5.5692C8.16606 5.5692 7.07818 6.65723 7.07818 8.01714C7.07818 8.28914 7.14219 8.57709 7.22215 8.84911L6.15003 9.90515C5.83008 9.34519 5.65409 8.72109 5.65409 8.01717C5.65409 5.88919 7.36611 4.17717 9.49409 4.17717C10.1982 4.17717 10.8221 4.35315 11.3821 4.67311L10.3581 5.71318Z"
                  fill="#1E1E2F"
                />
                <path
                  id="Vector_2"
                  d="M18.5327 7.6974C17.9728 6.57735 17.2367 5.56942 16.3248 4.75339L13.3487 7.6974V8.01735C13.3487 10.1453 11.6367 11.8574 9.50872 11.8574H9.18876L7.30078 13.7453C8.00484 13.8893 8.74079 13.9853 9.46079 13.9853C13.4129 13.9853 16.8367 11.6814 18.4848 8.35322C18.6288 8.12915 18.6288 7.90524 18.5328 7.69723L18.5327 7.6974Z"
                  fill="#1E1E2F"
                />
              </g>
            </svg>
          ) : (
            <svg
              onClick={handlePassword}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className={styles.iconEye}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </div>
        <div className={styles.flex}>
          <label className={styles.label}>Repeat password</label>
          <input
            type={!seeRepeatPassword ? "text" : "password"}
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
          />
          {seeRepeatPassword ? (
            <svg
              onClick={handleRepeatPassword}
              width="19"
              className={styles.icon}
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 1">
                <path
                  id="Vector"
                  d="M17.3822 0.88129L16.6463 0.145348C16.4383 -0.0626432 16.0543 -0.0306342 15.8143 0.257311L13.2541 2.80128C12.102 2.30533 10.8382 2.06533 9.5101 2.06533C5.55798 2.08127 2.1342 4.38524 0.486083 7.69745C0.390056 7.90544 0.390056 8.16137 0.486083 8.33736C1.25402 9.90538 2.40609 11.2014 3.84609 12.1774L1.7501 14.3053C1.5101 14.5453 1.47809 14.9293 1.63813 15.1373L2.37408 15.8733C2.58207 16.0812 2.96606 16.0492 3.20606 15.7613L17.254 1.7134C17.558 1.47354 17.59 1.08958 17.382 0.881565L17.3822 0.88129ZM10.3581 5.71318C10.0861 5.64916 9.79813 5.5692 9.52611 5.5692C8.16606 5.5692 7.07818 6.65723 7.07818 8.01714C7.07818 8.28914 7.14219 8.57709 7.22215 8.84911L6.15003 9.90515C5.83008 9.34519 5.65409 8.72109 5.65409 8.01717C5.65409 5.88919 7.36611 4.17717 9.49409 4.17717C10.1982 4.17717 10.8221 4.35315 11.3821 4.67311L10.3581 5.71318Z"
                  fill="#1E1E2F"
                />
                <path
                  id="Vector_2"
                  d="M18.5327 7.6974C17.9728 6.57735 17.2367 5.56942 16.3248 4.75339L13.3487 7.6974V8.01735C13.3487 10.1453 11.6367 11.8574 9.50872 11.8574H9.18876L7.30078 13.7453C8.00484 13.8893 8.74079 13.9853 9.46079 13.9853C13.4129 13.9853 16.8367 11.6814 18.4848 8.35322C18.6288 8.12915 18.6288 7.90524 18.5328 7.69723L18.5327 7.6974Z"
                  fill="#1E1E2F"
                />
              </g>
            </svg>
          ) : (
            <svg
              onClick={handleRepeatPassword}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className={styles.iconEye}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </div>

        <div className={styles.flex}>
          <button type="submit" className={styles.btnGmail}>
            Continue with email
          </button>
          {error && (
            <p style={{ color: "red", paddingBottom: "12px" }}>{error}</p>
          )}
          <p className={styles.paragraph}>
            By continuing, you agree to the{" "}
            <span className={styles.span}>Terms of use, Privacy Policy, </span>
            and Community Standards of Tribaja.
          </p>
        </div>
      </form>
    </>
  );
}

export default Form;
Form.jsx;
