"use client";

import React, { useState } from "react";

import { Briefcase, MapPin, DollarSign, Calendar, FileText, CheckCircle, Gift, PlusCircle } from "lucide-react";
import { createJobs } from "@/lib/actions/jobs";
import { toast } from "@heroui/react";
import { redirect } from "next/navigation";

export default function NewJob() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        jobTitle: "",
        jobCategory: "",
        jobType: "Full-time",
        minSalary: "",
        maxSalary: "",
        currency: "USD",
        location: "",
        isRemote: false,
        deadline: "",
        responsibilities: "",
        requirements: "",
        benefits: ""
    });

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        

        setLoading(true);

        const payload = {
            jobTitle: formData.jobTitle,
            jobCategory: formData.jobCategory,
            jobType: formData.jobType,
            minSalary: Number(formData.minSalary),
            maxSalary: Number(formData.maxSalary),
            currency: formData.currency,
            location: formData.isRemote ? "Remote" : formData.location,
            isRemote: formData.isRemote,
            deadline: formData.deadline,
            responsibilities: formData.responsibilities,
            requirements: formData.requirements,
            benefits: formData.benefits,
        };

        try {
            const res = await createJobs(payload);

            console.log("SUCCESS:", res);

            // reset form
            setFormData({
                jobTitle: "",
                jobCategory: "",
                jobType: "Full-time",
                minSalary: "",
                maxSalary: "",
                currency: "USD",
                location: "",
                isRemote: false,
                deadline: "",
                responsibilities: "",
                requirements: "",
                benefits: ""
            });

            redirect("/dashboard/recruiter")

        } catch (error) {
            console.error("CREATE JOB ERROR:", error);
            toast.error?.("Failed to create job");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen text-zinc-100 md: font-sans selection:bg-zinc-800">

            {/* Header Section */}
            <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Create a New Job Post
                </h1>
                <p className="text-sm text-zinc-400 mt-1">
                    Fill in the details below to find the perfect candidate for your role.
                </p>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex flex-col gap-6">

                {/* SECTION 1: Job Info */}
                <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-6 shadow-xl">
                    <div className="flex items-center gap-2 pb-3 border-b border-zinc-800/60">
                        <Briefcase className="w-5 h-5 text-zinc-400" />
                        <h2 className="text-lg font-medium tracking-tight">Job Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Job Title */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Job Title</label>
                            <input
                                required
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                placeholder="e.g. Senior Product Designer"
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                            />
                        </div>

                        {/* Job Category */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Job Category</label>
                            <select
                                required
                                name="jobCategory"
                                value={formData.jobCategory}
                                onChange={handleChange}
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-700 transition-colors appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="software-engineering">Software Engineering</option>
                                <option value="design">Design / UI/UX</option>
                                <option value="marketing">Marketing</option>
                                <option value="product-management">Product Management</option>
                                <option value="cybersecurity">Cybersecurity</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Job Type</label>
                            <select
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-700 transition-colors cursor-pointer"
                            >
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Remote">Remote</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        {/* Application Deadline */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" /> Application Deadline
                            </label>
                            <input
                                required
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-700 transition-colors cursor-pointer text-zinc-300"
                            />
                        </div>
                    </div>

                    {/* Salary Range & Currency */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#1e1e21]/40 p-4 rounded-xl border border-zinc-800/40">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <DollarSign className="w-3.5 h-3.5" /> Min Salary
                            </label>
                            <input
                                required
                                type="number"
                                name="minSalary"
                                value={formData.minSalary}
                                onChange={handleChange}
                                placeholder="e.g. 40000"
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <DollarSign className="w-3.5 h-3.5" /> Max Salary
                            </label>
                            <input
                                required
                                type="number"
                                name="maxSalary"
                                value={formData.maxSalary}
                                onChange={handleChange}
                                placeholder="e.g. 70000"
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Currency</label>
                            <select
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-700 transition-colors cursor-pointer"
                            >
                                <option value="USD">USD ($)</option>
                                <option value="BDT">BDT (৳)</option>
                                <option value="EUR">EUR (€)</option>
                                <option value="GBP">GBP (£)</option>
                            </select>
                        </div>
                    </div>

                    {/* Location & Remote Toggle */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                        <div className="flex-1 w-full flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" /> Location (City, Country)
                            </label>
                            <input
                                disabled={formData.isRemote}
                                required={!formData.isRemote}
                                type="text"
                                name="location"
                                value={formData.isRemote ? "" : formData.location}
                                onChange={handleChange}
                                placeholder={formData.isRemote ? "Remote selected" : "e.g. Dhaka, Bangladesh"}
                                className={`w-full border rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors ${formData.isRemote ? "bg-zinc-900/50 border-zinc-800/40 text-zinc-500 cursor-not-allowed" : "bg-[#1e1e21] border-zinc-800"
                                    }`}
                            />
                        </div>

                        {/* Remote Checkbox Switch */}
                        <label className="flex items-center gap-3 bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-2.5 cursor-pointer hover:border-zinc-700 transition-all select-none h-[46px]">
                            <input
                                type="checkbox"
                                name="isRemote"
                                checked={formData.isRemote}
                                onChange={handleChange}
                                className="w-4 h-4 rounded border-zinc-800 bg-zinc-900 text-zinc-100 accent-zinc-200 cursor-pointer"
                            />
                            <span className="text-sm font-medium text-zinc-300">Fully Remote Role</span>
                        </label>
                    </div>
                </div>

                {/* SECTION 2: Job Description */}
                <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-6 shadow-xl">
                    <div className="flex items-center gap-2 pb-3 border-b border-zinc-800/60">
                        <FileText className="w-5 h-5 text-zinc-400" />
                        <h2 className="text-lg font-medium tracking-tight">Job Details & Specifications</h2>
                    </div>

                    {/* Responsibilities */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-zinc-500" /> Key Responsibilities
                        </label>
                        <textarea
                            required
                            rows={5}
                            name="responsibilities"
                            value={formData.responsibilities}
                            onChange={handleChange}
                            placeholder="List core responsibilities (e.g. Develop and maintain web architectures, collaborate with UI/UX teams...)"
                            className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-y min-h-[100px]"
                        />
                    </div>

                    {/* Requirements */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5 text-zinc-500" /> Requirements & Qualifications
                        </label>
                        <textarea
                            required
                            rows={5}
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            placeholder="List required skills and experience (e.g. 3+ years of experience with React/Next.js, strong knowledge of Tailwind CSS...)"
                            className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-y min-h-[100px]"
                        />
                    </div>

                    {/* Benefits (Optional) */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                            <Gift className="w-3.5 h-3.5 text-zinc-500" /> Perks & Benefits <span className="text-[10px] text-zinc-500 lowercase ml-1">(optional)</span>
                        </label>
                        <textarea
                            rows={4}
                            name="benefits"
                            value={formData.benefits}
                            onChange={handleChange}
                            placeholder="What do you offer? (e.g. Health insurance, Performance bonus, Festive bonus twice a year...)"
                            className="w-full bg-[#1e1e21] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-y min-h-[80px]"
                        />
                    </div>
                </div>

                {/* Submit Actions Button */}
                <div className="flex justify-end items-center gap-4 mt-2">
                    <button
                        type="button"
                        className="px-5 py-2.5 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 transition-all active:scale-[0.98]"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-white transition-all active:scale-[0.98] shadow-lg shadow-white/5"
                    >
                        <PlusCircle className="w-4 h-4" />
                        <span>Publish Job Post</span>
                    </button>
                </div>

            </form>
        </div>
    );
}