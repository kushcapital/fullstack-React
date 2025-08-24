import { Link } from "react-router";
import { Button } from "@/components/ui/button.jsx";

export default function Login() {
  return (
    <>
      <>login page</>
      <ul>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <li>
          <Button asChild>
            <Link to="signup">Signup</Link>
          </Button>
        </li>
      </ul>
    </>
  );
}
