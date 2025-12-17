"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { StartProjectButton } from "components/ui/atoms/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      "Social Media Marketing",
      "Performance Marketing",
      "E-commerce Marketing",
      "Campaign Management",
      "SEO",
    ],
  },
  { name: "Studio", href: "/studio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isToggleBarOpen, setIsToggleBarOpen] = useState(false);

  const isActive = (href?: string) =>
    href
      ? href === "/"
        ? pathname === "/"
        : pathname.startsWith(href)
      : false;

  const toggleMenu = () => setIsToggleBarOpen((prev) => !prev);

  return (
    <header className="flex justify-between items-center px-4 xl:px-8 py-4 shadow-sm bg-secondary relative">
      <div className="block">
        <Image
          src="/assets/images/png/kathmandu-studio-logo-small.png"
          alt="Company Logo"
          width={200}
          height={20}
          priority
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-16 items-start">
        {links.map((link) => (
          <div key={link.name} className="relative group select-none">
            {link.dropdown ? (
              <span
                className={`text-xl cursor-pointer ${
                  isActive(link.href) ? "font-semibold" : "font-normal"
                }`}
              >
                {link.name}
              </span>
            ) : (
              <Link
                href={link.href || "/"}
                className={`text-xl ${
                  isActive(link.href) ? "font-semibold" : "font-normal"
                }`}
              >
                {link.name}
              </Link>
            )}

            {/* Desktop dropdown */}
            {link.dropdown && (
              <div className="absolute left-0 mt-2 w-72 bg-secondary shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                {link.dropdown.map((item) => {
                  const slug = item.toLowerCase().replace(/\s+/g, "-");
                  const href = `/services/${slug}`;
                  const isCurrent = pathname === href;

                  return (
                    <Link
                      key={item}
                      href={`/services/${slug}`}
                      className={`block px-4 py-2 hover:bg-gray-100 ${
                        isCurrent ? "pointer-events-none font-semibold" : ""
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="hidden md:flex">
        <StartProjectButton data={{ label: "Start a Project" }} />
      </div>

      {/* Hamburger Button */}
      <button
        className="flex flex-col gap-1 md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <FaBars size={24} />
      </button>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-secondary z-50 flex flex-col items-center pt-24 gap-10 text-xl transition-transform duration-300 md:hidden ${
          isToggleBarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-3xl font-semibold"
          aria-label="Close Menu"
        >
          <FaXmark size={24} />
        </button>

        {/* Mobile Links */}
        {links.map((link) => (
          <div key={link.name} className="w-full text-center">
            {link.dropdown ? (
              <>
                <span
                  className={`${
                    isActive(link.href) ? "font-semibold" : "font-normal"
                  }`}
                >
                  {link.name}
                </span>
                <div className="flex flex-col gap-3 text-base mt-2">
                  {link.dropdown.map((item) => {
                    const slug = item.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <Link
                        key={item}
                        href={`${link.href}/${slug}`}
                        className={`${
                          isActive(`${link.href}/${slug}`)
                            ? "font-semibold"
                            : "font-normal"
                        }`}
                        onClick={() => setIsToggleBarOpen(false)}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <Link
                href={link.href || "/"}
                onClick={() => setIsToggleBarOpen(false)}
                className={`${
                  isActive(link.href) ? "font-semibold" : "font-normal"
                }`}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}

        {/* Mobile CTA */}
        <div>
          <StartProjectButton data={{ label: "Start a Project" }} />
        </div>
      </div>
    </header>
  );
}
