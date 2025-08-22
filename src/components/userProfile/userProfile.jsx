import styles from "./userProfile.module.css";
import LikeButton from "../likeButton/likeButton.jsx";

export default function userProfile({ firstName, lastName, skills } = props) {
  return (
    <>
      <section>
        <ul className={`${styles.userDetails} ${styles.border}`}>
          <li>FirstName: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Skills: {skills}</li>
        </ul>
        <LikeButton />
      </section>
    </>
  );
}
