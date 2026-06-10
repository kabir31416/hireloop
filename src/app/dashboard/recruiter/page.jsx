"use client";

import React from "react";
import { FileText, Users, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useSession } from "@/lib/auth-client";

export default function Dashboard() {

    const { data: session } = useSession();
    const user = session?.user;

    const stats = [
        { id: 1, title: "Total Job Posts", value: "48", icon: FileText, color: "text-zinc-400" },
        { id: 2, title: "Total Applicants", value: "1,284", icon: Users, color: "text-zinc-400" },
        { id: 3, title: "Active Jobs", value: "18", icon: Zap, color: "text-zinc-400" },
        { id: 4, title: "Jobs Closed", value: "32", icon: CheckCircle2, color: "text-zinc-400" },
    ];


    const applications = [
        {
            id: 1,
            name: "Julianne Moore",
            role: "Senior Product Designer",
            date: "Oct 24, 2023",
            experience: "6 years",
            status: "Interviewing",
            statusStyles: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        },
        {
            id: 2,
            name: "Robert Downey",
            role: "Backend Engineer",
            date: "Oct 23, 2023",
            experience: "4 years",
            status: "New",
            statusStyles: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
        },
        {
            id: 3,
            name: "Emma Stone",
            role: "Marketing Lead",
            date: "Oct 22, 2023",
            experience: "8 years",
            status: "Reviewing",
            statusStyles: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        },
        {
            id: 4,
            name: "Chris Pratt",
            role: "Product Manager",
            date: "Oct 21, 2023",
            experience: "5 years",
            status: "Rejected",
            statusStyles: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        },
    ];


    const companies = [
        { id: 1, name: "Google Inc.", industry: "Technology • Mountain View", activeJobs: 24, logo: "G" },
        { id: 2, name: "Meta Platforms", industry: "Social Media • Menlo Park", activeJobs: 18, logo: "M" },
        { id: 3, name: "Stripe", industry: "Fintech • San Francisco", activeJobs: 12, logo: "S" },
        { id: 4, name: "Tesla", industry: "Automotive • Austin", activeJobs: 31, logo: "T" },
    ];

    return (
        <div className="min-h-screen text-zinc-100  md: font-sans selection:bg-zinc-800">


            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Welcome back, {user.name}!
                </h1>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.id} className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-4">
                            <div className="p-2 w-10 h-10 bg-[#1e1e21] rounded-xl flex items-center justify-center border border-zinc-800/50">
                                <Icon className={`w-5 h-5 ${stat.color}`} />
                            </div>
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">{stat.title}</p>
                                <p className="text-2xl font-semibold mt-1 tracking-tight">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-medium tracking-tight">Recent Applications</h2>
                        <button className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-900">
                            View all
                        </button>
                    </div>

                    <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-zinc-800/80">
                                        <th className="text-zinc-400 p-4 text-xs font-medium uppercase tracking-wider">Candidate Name</th>
                                        <th className="text-zinc-400 p-4 text-xs font-medium uppercase tracking-wider">Role</th>
                                        <th className="text-zinc-400 p-4 text-xs font-medium uppercase tracking-wider">Date Applied</th>
                                        <th className="text-zinc-400 p-4 text-xs font-medium uppercase tracking-wider">Experience</th>
                                        <th className="text-zinc-400 p-4 text-xs font-medium uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800/40">
                                    {applications.map((app) => (
                                        <tr key={app.id} className="hover:bg-zinc-900/40 transition-colors group">
                                            <td className="p-4 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700/60 text-zinc-200 flex items-center justify-center text-xs font-semibold shrink-0">
                                                    {app.name.split(" ").map(n => n[0]).join("")}
                                                </div>
                                                <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{app.name}</span>
                                            </td>
                                            <td className="p-4 text-zinc-300 text-sm">{app.role}</td>
                                            <td className="p-4 text-zinc-400 text-sm">{app.date}</td>
                                            <td className="p-4 text-zinc-400 text-sm">{app.experience}</td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${app.statusStyles}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-medium tracking-tight">My Top Companies</h2>
                        <button className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-900">
                            View all
                        </button>
                    </div>

                    <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-4 flex flex-col gap-4 shadow-xl">
                        <div className="flex flex-col gap-3">
                            {companies.map((company) => (
                                <div
                                    key={company.id}
                                    className="flex items-center justify-between p-3 rounded-xl bg-[#1e1e21]/40 border border-transparent hover:border-zinc-800/60 hover:bg-[#1e1e21]/80 transition-all cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#222226] border border-zinc-800 flex items-center justify-center font-bold text-zinc-300 shadow-inner">
                                            {company.logo}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-zinc-200">{company.name}</h4>
                                            <p className="text-xs text-zinc-500">{company.industry}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-zinc-200">{company.activeJobs}</p>
                                        <p className="text-[10px] uppercase tracking-wider text-zinc-500">Active Jobs</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800/60 hover:text-white transition-all active:scale-[0.98]"
                        >
                            <span>View All Companies</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}