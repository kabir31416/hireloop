"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { Mail, Lock, User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";



export default function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async (e) => {
  e.preventDefault();

  // Empty field check
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill all fields!");
    return;
  }

  // Password check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    // Better Auth Error
    if (error) {
      alert(error.message || "Sign up failed!");
      console.log(error);
      return;
    }

    // Success
    alert("Account created successfully!");
    console.log(data);


    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");


  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};


  return (
    <div className="min-h-screen bg-linear-to-br from-[#050510] via-[#0b0b1a] to-[#0a0a14] flex items-center justify-center px-4 py-12">

      <div className="grid w-full max-w-6xl lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

        {/* Left Side */}
        <div className="relative hidden lg:flex flex-col justify-center p-12 bg-white/5 backdrop-blur-2xl">

          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[120px]" />
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Join Us Today 🚀
              <br />
              Start Your Journey
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Create your account and explore thousands of career opportunities
              tailored for your skills.
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
              Sign Up
            </h2>

            <p className="mt-2 text-gray-400">
              Create your account to get started
            </p>

            <form onSubmit={handleSignUp} className="mt-6 space-y-6">

              <div className="mt-8 flex flex-col gap-5">

                <Input
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  startContent={<User size={18} />}
                  classNames={{
                    inputWrapper: "bg-white/5 border border-white/10",
                    input: "text-white placeholder:text-gray-500"
                  }}
                />

                <Input
                  label="Email"
                  type="email"
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
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startContent={<Lock size={18} />}
                  classNames={{
                    inputWrapper: "bg-white/5 border border-white/10",
                    input: "text-white placeholder:text-gray-500"
                  }}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  startContent={<Lock size={18} />}
                  classNames={{
                    inputWrapper: "bg-white/5 border border-white/10",
                    input: "text-white placeholder:text-gray-500"
                  }}
                />

                <Button type="submit" size="lg" className="w-full bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Create Account
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
              Already have an account?{" "}
              <Link href="/sign-in" className="text-violet-400 hover:text-violet-300">
                Sign In
              </Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}