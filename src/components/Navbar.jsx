"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
            <div className="mx-auto bg-black/40 backdrop-blur-xl p-2">
                <div className="flex h-16 items-center justify-between px-6">

                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-sky-500">hire</span>
                            <span className="text-orange-500">loop</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-10 bg-gray-900 rounded-2xl px-4 py-2">
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-right gap-10">
                            <Link
                                href="#"
                                className="text-sm text-gray-300 hover:text-white"
                            >
                                Browse Jobs
                            </Link>

                            <Link
                                href="#"
                                className="text-sm text-gray-300 hover:text-white"
                            >
                                Company
                            </Link>

                            <Link
                                href="#"
                                className="text-sm text-gray-300 hover:text-white"
                            >
                                Pricing
                            </Link>
                        </div>

                        <div>|</div>


                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-5">
                            <Link
                                href="#"
                                className="text-sm text-indigo-400 hover:text-indigo-300"
                            >
                                Sign In
                            </Link>

                            <Button
                                color="secondary"
                                radius="lg"
                                className="bg-indigo-600 px-6 text-white font-medium hover:bg-indigo-500"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="border-t border-white/10 px-6 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="text-gray-300">
                                Browse Jobs
                            </Link>

                            <Link href="#" className="text-gray-300">
                                Company
                            </Link>

                            <Link href="#" className="text-gray-300">
                                Pricing
                            </Link>

                            <Link href="#" className="text-indigo-400">
                                Sign In
                            </Link>

                            <Button
                                color="secondary"
                                radius="lg"
                                className="bg-indigo-600 text-white"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}