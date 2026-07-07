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
  const [navVisible, setNavVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 1);
      
      // Show back to top button when scrolled down
      setShowBackToTop(currentScrollY > 300);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: navVisible ? 0 : -200 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 nav-glass"
      >
        <nav className="max-w-full px-6 lg:px-16 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-[280px] h-[95px] sm:w-[380px] sm:h-[130px]">
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
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {links.map((l) => (
              <motion.div key={l.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={l.href}
                  className={`text-[14px] font-semibold tracking-[0.01em] transition-all duration-150 text-black ${
                    pathname === l.href
                      ? "opacity-100"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="text-[14px] font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] px-5 py-2 rounded-full shadow-[0_10px_24px_rgba(0,113,227,0.24)] transition-all duration-150 ml-2"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[14px] font-semibold text-black hover:text-black transition-colors"
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
                  <motion.div key={l.href} whileHover={{ x: 4 }}>
                    <Link
                      href={l.href}
                      className={`py-2 text-[15px] font-semibold text-black ${pathname === l.href ? "opacity-100" : "opacity-70"}`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  className="mt-2 py-2 text-[15px] font-semibold text-[#0071e3]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full shadow-lg transition-colors duration-150"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}