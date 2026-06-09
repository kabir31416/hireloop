"use client";

import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.refresh();
                    router.push("/");
                },
            },
        });
    };

    const navLinks = [
        { name: "Browse Jobs", href: "#" },
        { name: "Company", href: "#" },
        { name: "Pricing", href: "#" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl sm:text-3xl font-bold">
                            <span className="text-sky-500">hire</span>
                            <span className="text-orange-500">loop</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-300 hover:text-white transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <>
                                <span className="text-sm text-gray-300">
                                    Hi, <span className="text-white font-medium">{user.name}</span>
                                </span>

                                <Button
                                    onClick={handleSignOut}
                                    variant="ghost"
                                    color="secondary"
                                    radius="lg"
                                >
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <Link href="/sign-in">
                                <Button
                                    variant="ghost"
                                    color="secondary"
                                    radius="lg"
                                >
                                    Sign In
                                </Button>
                            </Link>
                        )}

                        <Button
                            className="bg-indigo-600 text-white font-medium hover:bg-indigo-500"
                            radius="lg"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
                    <div className="px-4 py-4 space-y-4">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-gray-300 hover:text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-2 border-t border-white/10 flex flex-col gap-3">

                            {user ? (
                                <>
                                    <span className="text-gray-300 text-sm">
                                        Hi, <span className="text-white">{user.name}</span>
                                    </span>

                                    <Button
                                        onClick={handleSignOut}
                                        variant="ghost"
                                        color="secondary"
                                    >
                                        Sign Out
                                    </Button>
                                </>
                            ) : (
                                <Link href="/sign-in">
                                    <Button variant="ghost" color="secondary">
                                        Sign In
                                    </Button>
                                </Link>
                            )}

                            <Button className="bg-indigo-600 text-white">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}