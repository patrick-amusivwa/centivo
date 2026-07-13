"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/programs", label: "Programs" },
  { href: "/tenders", label: "Tenders" },
];

// Throttle function to limit scroll event calls
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Set mounted to true after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check screen size for mobile view
  useEffect(() => {
    if (!mounted) return;

    const checkIsMobile = () => {
      const mobile = window.innerWidth < 1280;
      setIsMobile(mobile);
      if (!mobile) {
        setOpen(false);
      }
    };

    // Initial check
    checkIsMobile();

    // Resize listener
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [mounted]);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
      setShowBackToTop(currentScrollY > 300);
    };

    const throttledOnScroll = throttle(onScroll, 100);

    window.addEventListener("scroll", throttledOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledOnScroll);
  }, []);

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Also close mobile menu when navigating
    setOpen(false);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 liquid-glass-nav transition-transform duration-300 ease-out ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="max-w-full px-6 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setOpen(false)}>
            <img
              src="/centivo logo.png"
              alt="Centivo Technologies"
              className="w-[200px] sm:w-[260px] md:w-[300px] h-auto object-contain object-left"
              style={{ maxHeight: '70px', mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div className="flex items-center gap-6 ml-auto">
              {links.map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`liquid-glass-nav-link text-[14px] font-semibold tracking-[0.01em] ${
                      pathname === l.href
                        ? "is-active opacity-100"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="liquid-glass-btn liquid-glass-btn-primary ml-2 text-[14px] gap-2"
              >
                <PhoneIcon sx={{ fontSize: 18 }} />
                Contact
              </Link>
            </div>
          )}

          {/* Mobile toggle */}
          {isMobile && (
            <button
              onClick={() => setOpen((value) => !value)}
              className="liquid-glass-btn liquid-glass-btn-secondary text-[14px] gap-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              type="button"
            >
              {open ? <CloseIcon sx={{ fontSize: 20 }} /> : <MenuIcon sx={{ fontSize: 20 }} />}
              {open ? "Close" : "Menu"}
            </button>
          )}
        </nav>

        {/* Mobile menu */}
        {isMobile && (
          <div
            id="mobile-nav"
            className={`liquid-glass-panel mx-4 mt-2 rounded-[2rem] transition-all duration-200 ${
              open ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
            }`}
          >
          <div className="relative z-[1] max-w-[1400px] mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`liquid-glass-nav-link text-[15px] font-semibold ${pathname === l.href ? "is-active opacity-100" : "opacity-75"}`}
                >
                  {l.label}
                </Link>
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="liquid-glass-btn liquid-glass-btn-primary mt-2 text-[15px] gap-2"
            >
              <PhoneIcon sx={{ fontSize: 18 }} />
              Contact
            </Link>
          </div>
          </div>
        )}
      </header>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`liquid-glass-btn liquid-glass-btn-primary liquid-glass-btn-icon fixed bottom-8 right-8 z-40 text-white transition-all duration-200 ${
          showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
        type="button"
      >
        <ArrowUpwardIcon sx={{ fontSize: 24 }} />
      </button>
    </>
  );
}
