"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const cardEase = [0.4, 0, 0.2, 1] as [number, number, number, number];

const projects = [
  {
    tag: "Software & Hardware",
    title: "Hands of Care and Hope International",
    desc: "Full software and hardware integration for this international humanitarian organization, including LAN setup, internet connectivity and complete hardware supply.",
    scope: [
      "LAN network design and deployment",
      "Internet connectivity setup",
      "Hardware supply and installation",
      "Software integration",
    ],
  },
  {
    tag: "Server Room",
    title: "German Cooperation Kenya",
    desc: "Server room design and installation, complete LAN infrastructure setup and supply of computers for the German Cooperation Kenya office.",
    scope: [
      "Server room setup and installation",
      "LAN infrastructure design",
      "Computer supply and configuration",
      "Structured cabling",
    ],
  },
  {
    tag: "Government",
    title: "Government Digital Tablets — Digi School",
    desc: "Nationwide deployment of government digital tablets in primary schools under the Digi School initiative, equipping Kenya's students for the digital era.",
    scope: [
      "Tablet deployment and configuration",
      "School network setup",
      "Teacher training",
      "Technical support",
    ],
  },
  {
    tag: "NGO Services",
    title: "Compassion International CDCs",
    desc: "Comprehensive ICT services for Compassion International's child development centers across multiple locations in Kenya.",
    scope: [
      "ICT infrastructure setup",
      "Computer hardware maintenance",
      "Software installation",
      "Network connectivity",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#000000] pt-40 pb-28 overflow-hidden">
        <div className="blob absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-600/20 blur-[120px]" />
        <div className="blob-b absolute -bottom-20 -left-40 w-[600px] h-[600px] bg-indigo-600/15 blur-[100px]" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: cardEase }}
            className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4"
          >
            Our work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07, ease: cardEase }}
            className="text-gradient text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight max-w-2xl"
          >
            Projects &amp; Case Studies.
          </motion.h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: cardEase }}
                className="bg-[#f5f5f7] rounded-2xl p-8"
              >
                <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
                  {p.tag}
                </p>
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  {p.title}
                </h3>
                <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
                  {p.desc}
                </p>
                <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">
                  Scope
                </p>
                <ul className="space-y-1">
                  {p.scope.map((s) => (
                    <li
                      key={s}
                      className="text-[15px] text-[#6e6e73] leading-relaxed"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & clients */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-14">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Partners &amp; Clients
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              Trusted by organizations across Kenya.
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap items-center gap-10 md:gap-16">
            {[
              { src: "/hp.png", alt: "HP Supplier 2020", w: 90 },
              { src: "/lenovo-300x100.png", alt: "Lenovo", w: 130 },
              { src: "/ict-authority.png", alt: "ICT Authority Kenya", w: 120 },
              {
                src: "/compasssion.png",
                alt: "Compassion International",
                w: 140,
              },
              { src: "/digischool logo.png", alt: "Digi School", w: 110 },
              { src: "/afra.png", alt: "AFRA", w: 80 },
            ].map((p, i) => (
              <motion.div
                key={p.alt}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={60}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <AnimatedSection direction="none">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-5">
              Have a project in mind?
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-8 max-w-xl mx-auto">
              Share your requirements with us and we&apos;ll deliver exceptional
              results.
            </p>
            <Link
              href="/contact"
              className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
            >
              Start a project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
