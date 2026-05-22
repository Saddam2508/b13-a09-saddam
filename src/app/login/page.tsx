import Login from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | SportNest",
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
