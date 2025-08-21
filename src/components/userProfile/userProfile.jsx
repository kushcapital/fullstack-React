import styles from "./userProfile.module.css";

export default function userProfile() {
  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>FirstName: John</li>
          <li>Last Name: Doe</li>
          <li>Skills: React, javascript</li>
        </ul>
      </section>
    </>
  );
}
