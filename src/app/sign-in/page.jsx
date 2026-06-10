"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { Mail, Lock } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignInPage() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/dashboard",
      });

      if (error) {
        console.log(error);
        alert(error.message || "Login failed!");
        return;
      }

      console.log("Login success:", data);
      alert("Login successful!");

    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050510] via-[#0b0b1a] to-[#0a0a14] flex items-center justify-center px-4 ">
      <div className="grid w-full max-w-6xl lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

        {/* Left Side */}
        <div className="relative hidden lg:flex flex-col justify-center p-12 bg-white/5 backdrop-blur-2xl">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[120px]" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Welcome Back
              <br />
              Continue Your Journey
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Discover opportunities tailored for your skills and grow your career
              with thousands of companies.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <h3 className="text-3xl font-bold text-white">50K+</h3>
                <p className="text-gray-400 text-sm">Active Jobs</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
                <h3 className="text-3xl font-bold text-white">12K+</h3>
                <p className="text-gray-400 text-sm">Companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 bg-black/30 backdrop-blur-xl">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">

            <h2 className="text-4xl font-bold text-white">
              Sign In
            </h2>

            <p className="mt-2 text-gray-400">
              Welcome back, please login to your account
            </p>

            <form onSubmit={handleSignIn} className="mt-8 space-y-6">
              <div className="mt-8 flex flex-col gap-5">

                <Input
                  label="Email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  startContent={<Mail size={18} />}
                  classNames={{
                    inputWrapper: "bg-white/5 border border-white/10",
                    input: "text-white placeholder:text-gray-500"
                  }}
                />

                <Input
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startContent={<Lock size={18} />}
                  classNames={{
                    inputWrapper: "bg-white/5 border border-white/10",
                    input: "text-white placeholder:text-gray-500"
                  }}
                />

                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-violet-400 hover:text-violet-300 transition"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  isLoading={loading}
                  className="w-full bg-linear-to-r from-violet-600 to-indigo-600 text-white"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                <Button
                  variant="bordered"
                  size="lg"
                  className="w-full border-white/10 text-white hover:bg-white/5 transition"
                >
                  Continue with Google
                </Button>

              </div>
            </form>

            <p className="mt-6 text-center text-gray-400 text-sm">
              Don’t have an account?{" "}
              <Link href="/sign-up" className="text-violet-400 hover:text-violet-300">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}