import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.push("/invert")}>Inversión</Button>
      <Button>Login</Button>
    </div>
  );
}
