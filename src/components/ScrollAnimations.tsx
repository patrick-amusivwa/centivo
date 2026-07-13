"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useGSAP(() => {
    // ── SERVICES SECTION ──────────────────────────────────────────
    // Label + heading slide up
    gsap.from(".services-label", {
      scrollTrigger: { trigger: ".services-section", start: "top 82%" },
      y: 30, opacity: 0, duration: 0.7, ease: "power3.out",
    });
    gsap.from(".services-heading", {
      scrollTrigger: { trigger: ".services-section", start: "top 78%" },
      y: 50, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.1,
    });

    // Each service card — staggered clip-path reveal upward
    gsap.from(".service-card", {
      scrollTrigger: { trigger: ".service-cards-grid", start: "top 80%" },
      y: 60,
      opacity: 0,
      scale: 0.96,
      duration: 0.75,
      stagger: { each: 0.1, from: "start" },
      ease: "power3.out",
    });

    // Horizontal line wipe on each service card border
    gsap.from(".service-card-line", {
      scrollTrigger: { trigger: ".service-cards-grid", start: "top 80%" },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      stagger: 0.08,
      ease: "expo.out",
    });

    // ── ABOUT SECTION ─────────────────────────────────────────────
    gsap.from(".about-label", {
      scrollTrigger: { trigger: ".about-section", start: "top 80%" },
      y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
    });

    // Heading — each word slides up
    gsap.from(".about-heading", {
      scrollTrigger: { trigger: ".about-section", start: "top 76%" },
      y: 70, opacity: 0, duration: 1.1, ease: "power4.out", delay: 0.1,
    });

    gsap.from(".about-body p", {
      scrollTrigger: { trigger: ".about-body", start: "top 82%" },
      y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
    });

    // Stat cards — pop in with scale
    gsap.from(".stat-card", {
      scrollTrigger: { trigger: ".stat-cards-grid", start: "top 82%" },
      scale: 0.88,
      opacity: 0,
      y: 30,
      duration: 0.65,
      stagger: { each: 0.1, from: "start" },
      ease: "back.out(1.6)",
    });

    // ── CTA SECTION ───────────────────────────────────────────────
    gsap.from(".cta-heading", {
      scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
      y: 60, opacity: 0, duration: 1, ease: "power4.out",
    });
    gsap.from(".cta-sub", {
      scrollTrigger: { trigger: ".cta-section", start: "top 78%" },
      y: 30, opacity: 0, duration: 0.7, delay: 0.2, ease: "power3.out",
    });
    gsap.from(".cta-buttons a", {
      scrollTrigger: { trigger: ".cta-section", start: "top 78%" },
      y: 20, opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.35, ease: "power2.out",
    });

    // ── PARTNERS SECTION ──────────────────────────────────────────
    gsap.from(".partners-heading", {
      scrollTrigger: { trigger: ".partners-section", start: "top 82%" },
      y: 50, opacity: 0, duration: 0.9, ease: "power4.out",
    });

  });

  return null; // purely behavioral
}
