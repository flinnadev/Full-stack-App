import RegistrationForm from "../../components/RegistrationForm";
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <h2>Registration page</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
