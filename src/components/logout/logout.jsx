import { Button } from "../ui/button.jsx";
import { LogOut } from "lucide-react";

export function Logout() {
  return (
    <div className="flex justify-end">
      <Button variant="outline" size="icon" className="size-9">
        <LogOut />
      </Button>
    </div>
  );
}
