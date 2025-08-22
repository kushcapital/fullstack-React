import styles from "./userProfile.module.css";

export default function userProfile({firstName, lastName, skills}= props) {
  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>FirstName: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Skills: {skills}</li>
        </ul>
      </section>
    </>
  );
}
