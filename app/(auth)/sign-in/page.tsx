"use client";

import {
  AuthLayout,
  FormHeader,
  FormGroup,
  Input,
  Label,
  SocialLoginButton,
  Divider,
  FormFooter,
  AuthButton,
} from "@/app/components/auth";
import { useState,useEffect } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleForgotPassword = () => {
    if (!email) {
      setMessage("Enter your email first");
      return;
    }

    setMessage("Check your inbox 📩 — we sent you a recovery email");
  };

  return (
    <AuthLayout>
      {message && (
  <div className="fixed top-4 right-4 z-50 animate-in fade-in slide-in-from-top-2">
    <div className="flex items-start gap-3 rounded-xl border border-[rgba(145,158,171,0.2)] bg-white px-4 py-3 shadow-lg">
      <div className="text-green-600 text-lg">✔</div>

      <div className="flex flex-col">
        <span className="text-[14px] font-medium text-[#212b36]">
          Email sent
        </span>
        <span className="text-[13px] text-[#637381]">
          Check your inbox to reset your password
        </span>
      </div>
    </div>
  </div>
)}

      <FormHeader
        heading="Sign in"
        subtitle="Sign up to start your chess training journey"
      />

      <SocialLoginButton provider="google" label="Sign in with Google" />

      <Divider />

      {/* Fields stack */}
      <div className="flex w-full flex-col items-center gap-[20px]">
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="example@mail.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
          />
        </FormGroup>

        {/* Forgot password link */}
        <div className="w-full text-right">
          <button
            type="button"
            onClick={handleForgotPassword}
            disabled={!email}
            className="text-[14px] font-normal leading-[22px] text-[#212b36] underline disabled:opacity-50"
          >
            Forgot password?
          </button>
        </div>

        <AuthButton>Sign in</AuthButton>

        <FormFooter
          text="New user?"
          linkText="Sign up"
          linkHref="/sign-up"
        />
      </div>
    </AuthLayout>
  );
}
