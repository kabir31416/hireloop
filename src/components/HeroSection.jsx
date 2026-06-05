"use client";

import { Button, Input } from "@heroui/react";
import {
  Search,
  Briefcase,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#050510] pt-40 pb-32">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />

      <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute left-0 bottom-0 h-75 w-75 rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.03)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size[60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              AI-Powered Career Platform
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Find Your
              <span className="block bg-linear-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Dream Job
              </span>
              In Minutes
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Discover thousands of opportunities from top
              companies worldwide. Let AI match you with
              the perfect role.
            </p>

            {/* Search */}
            <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:flex-row">
              <Input
                placeholder="Job title, keyword..."
                startContent={<Search size={18} />}
                classNames={{
                  inputWrapper:
                    "bg-transparent shadow-none border-none",
                }}
              />

              <Button
                color="secondary"
                size="lg"
                className="bg-violet-600 px-8"
              >
                Search Jobs
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  50K+
                </h3>
                <p className="text-gray-400">
                  Active Jobs
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  12K+
                </h3>
                <p className="text-gray-400">
                  Companies
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  2M+
                </h3>
                <p className="text-gray-400">
                  Job Seekers
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            
            {/* Main Card */}
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-violet-500/20 p-4">
                  <Briefcase className="text-violet-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Senior UI/UX Designer
                  </h3>
                  <p className="text-sm text-gray-400">
                    Remote • Full Time
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex justify-between">
                  <span className="text-gray-400">
                    Match Score
                  </span>

                  <span className="text-green-400">
                    96%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[96%] rounded-full bg-linear-to-r from-violet-500 to-blue-500" />
                </div>
              </div>

              <Button
                className="mt-8 w-full bg-violet-600"
                color="secondary"
              >
                Apply Now
              </Button>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-8 top-10 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-green-400"
                />
                <div>
                  <p className="text-xs text-gray-400">
                    Location
                  </p>
                  <p className="text-sm text-white">
                    Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-10 bottom-16 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl">
              <p className="text-xs text-gray-400">
                Salary
              </p>

              <h4 className="text-xl font-bold text-green-400">
                $120k+
              </h4>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-full bg-violet-600/20 blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
}