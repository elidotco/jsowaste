/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState, useEffect } from "react";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { Roboto_Condensed } from "next/font/google";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "In JSO waste", href: "/insiders" },
  { name: "Blog", href: "/blog" },
];

const roboto = Roboto_Condensed({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`w-[86%] xl:w-4/5 xl:h-24 lg:w-[90%] lg:left-[5%] bg-neutral-100 rounded-full left-[7%] xl:left-[10%] top-16 fixed py-2 shadow-md mx-auto flex items-center px-6 z-50 ${roboto.className}`}
      >
        <nav className="flex justify-between items-center w-full">
          <a href="/" className="flex items-center gap-x-2 h-full">
            <img src="/logo.png" alt="logo" className=" w-10 lg:w-14" />
            <h1 className="lg:text-2xl  text-xl text-green-950 font-condensed">
              JSO
            </h1>
          </a>

          <ul className="space-x-8 hidden xl:flex ml-10">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={` 
                   ${
                     isActive(link.href)
                       ? "text-black font-semibold border "
                       : "text-black hover:text-green-600 transition"
                   }
                  text-lg  px-5 py-3  rounded-full font-light`}
              >
                <a href={link.href} className={``}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-x-2 ">
            <a
              href="/contact"
              className="bg-green-500 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition hidden lg:inline-block"
            >
              Contact Us
            </a>

            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-2 rounded-full border border-neutral-500 hover:bg-gray-50 transition"
              aria-label="Toggle menu"
            >
              <Bars3CenterLeftIcon className="h-5 w-5 text-neutral-800" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-10" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-40 left-[5%] w-[90%] bg-white rounded-3xl shadow-xl z-50 xl:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col">
          <nav className="overflow-y-auto">
            <ul className="py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block px-6 py-4 text-base font-light hover:bg-green-50 hover:text-green-700 transition rounded-lg mx-3 ${
                      isActive(link.href)
                        ? "bg-green-100 text-green-700 font-semibold"
                        : ""
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 pt-8">
            <a
              href="/contact"
              className="block w-full text-center bg-green-500 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
