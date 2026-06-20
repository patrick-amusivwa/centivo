"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/programs", label: "Programs" },
  { href: "/tenders", label: "Tenders" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 nav-glass">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo container increased to match the footer dimensions */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[320px] h-[112px]">
            <Image
              src="/imagestouse/CENTIVO LOGO.png"
              alt="Centivo Technologies"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] transition-colors duration-150 ${
                pathname === l.href
                  ? "text-[#1d1d1f] font-medium"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[13px] font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] px-4 py-1.5 rounded-full transition-colors duration-150"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[13px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-glass border-t border-black/5"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`py-2 text-[15px] ${pathname === l.href ? "text-[#1d1d1f] font-medium" : "text-[#6e6e73]"}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 py-2 text-[15px] font-medium text-[#0071e3]"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}