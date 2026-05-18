"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: formObj.email as string,
      password: formObj.password as string,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data?.user) {
      toast.success("Login successfully");
      redirect("/");
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    if (error) {
      toast.error(error.message);
      return;
    }
  };

  return (
    <div className="w-full max-w-110 mx-auto my-30 px-5 py-10 shadow-md rounded-lg">
      <Form className="flex flex-col gap-6 w-full" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
            name="email"
            className="w-full"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input
            placeholder="Enter your password"
            name="password"
            className="w-full"
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <div className="flex flex-col justify-center items-center my-5 gap-3">
        <Link href="/register" className="btn  no-underline  p-3 w-full">
          {" "}
          Register
        </Link>
        <div className="btn  items-center gap-2 w-full">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.98 2.69 30.4 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.2C12.43 13.09 17.72 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.1 24.5c0-1.64-.15-3.22-.42-4.75H24v9h12.4c-.54 2.9-2.17 5.36-4.62 7.02l7.2 5.6C43.91 37.1 46.1 31.4 46.1 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.54 28.43A14.5 14.5 0 019.5 24c0-1.52.26-2.99.72-4.43l-7.98-6.2A24 24 0 000 24c0 3.84.92 7.45 2.56 10.68l7.98-6.25z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.14 15.91-5.8l-7.2-5.6c-2.01 1.35-4.6 2.1-8.71 2.1-6.28 0-11.57-3.59-13.46-8.93l-7.98 6.25C6.51 42.62 14.62 48 24 48z"
            />
          </svg>

          <button
            onClick={handleGoogleSignIn}
            className="no-underline  p-3 cursor-pointer"
          >
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
