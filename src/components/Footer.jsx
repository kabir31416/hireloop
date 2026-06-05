"use client";

import { Button, Input, Link } from "@heroui/react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="border-t border-white/10 bg-[#09090F]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold">
                <span className="text-sky-500">hire</span>
                <span className="text-orange-500">loop</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Connecting talented professionals with companies that
                value their skills and ambitions.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="rounded-full bg-white/5 p-3 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-white/5 p-3 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-white/5 p-3 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="rounded-full bg-white/5 p-3 text-gray-400 transition hover:bg-indigo-600 hover:text-white"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-white">
                Navigation
              </h3>

              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-gray-400">
                    Browse Jobs
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-400">
                    Companies
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-400">
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white">
                Resources
              </h3>

              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-gray-400">
                    Career Guide
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-400">
                    Resume Builder
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-400">
                    Interview Tips
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-gray-400">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-white">
                Stay Updated
              </h3>

              <p className="mt-4 text-sm text-gray-400">
                Get job alerts and career tips directly in your inbox.
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <Input
                  placeholder="Enter your email"
                  classNames={{
                    inputWrapper:
                      "bg-white/5 border border-white/10",
                  }}
                />

                <Button className="bg-indigo-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
            <p>
              © 2026 Hireloop. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="#" className="text-gray-500">
                Privacy Policy
              </Link>

              <Link href="#" className="text-gray-500">
                Terms of Service
              </Link>

              <Link href="#" className="text-gray-500">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}