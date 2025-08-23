import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <>login page</>
      <ul>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <li>
          <Link to="signup">Signup</Link>
        </li>
      </ul>
    </>
  );
}
