"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { Mail, Lock } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#050510]">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[150px]" />

          <div className="relative z-10 max-w-lg px-10">
            <h1 className="text-6xl font-bold text-white">
              Welcome Back to Your Career Journey
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              Continue your journey and discover new
              career opportunities tailored for you.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">
                  50K+
                </h3>
                <p className="text-gray-400">
                  Active Jobs
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">
                  12K+
                </h3>
                <p className="text-gray-400">
                  Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            
            <h2 className="text-4xl font-bold text-white">
              Sign In
            </h2>

            <p className="mt-2 text-gray-400">
              Access your account
            </p>

            <div className="mt-8 space-y-5">
              <Input
                label="Email"
                placeholder="john@example.com"
                startContent={<Mail size={18} />}
              />

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                startContent={<Lock size={18} />}
              />

              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-violet-400"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                size="lg"
                className="w-full bg-violet-600"
              >
                Sign In
              </Button>

              <Button
                variant="bordered"
                size="lg"
                className="w-full border-white/10"
              >
                Continue with Google
              </Button>
            </div>

            <p className="mt-6 text-center text-gray-400">
              Dont have an account?{" "}
              <Link
                href="/signup"
                className="text-violet-400"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}