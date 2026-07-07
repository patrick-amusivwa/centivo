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
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-[400px] h-[160px]">
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
              className={`text-[14px] font-bold tracking-[0.01em] transition-colors duration-150 ${
                pathname === l.href
                  ? "text-black"
                  : "text-black hover:text-black"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[14px] font-bold text-white bg-[#0071e3] hover:bg-[#0077ed] px-4 py-1.5 rounded-full shadow-[0_10px_24px_rgba(0,113,227,0.24)] transition-colors duration-150"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[14px] font-bold text-black hover:text-black transition-colors"
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
            className="md:hidden border-t border-slate-200/80 bg-white/95"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`py-2 text-[15px] font-bold ${pathname === l.href ? "text-black" : "text-black"}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 py-2 text-[15px] font-bold text-[#0071e3]"
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