import Register from "@/components/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | SportNest",
};

const RegisterPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
