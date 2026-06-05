"use client";

import {
  Briefcase,
  Building2,
  Users,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: Building2,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Users,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70">
        <div className="h-full w-full bg-[radial-linear(circle,_rgba(255,255,255,0.6)_1px,_transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/40 blur-[120px]" />

      {/* Globe */}
      <div className="absolute left-1/2 top-32 h-[600px] w-[900px] -translate-x-1/2 overflow-hidden rounded-t-full border border-indigo-500/20 bg-linear-to-b from-slate-500/30 via-slate-800/20 to-black">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-light leading-relaxed text-white md:text-5xl">
            Assisting over{" "}
            <span className="font-medium text-white">
              15,000 job seekers
            </span>
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-black/80"
              >
                <Icon
                  size={18}
                  className="mb-10 text-gray-300"
                />

                <h3 className="text-5xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-4 text-sm text-gray-400">
                  {item.label}
                </p>

                <div className="mt-4 h-px w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}