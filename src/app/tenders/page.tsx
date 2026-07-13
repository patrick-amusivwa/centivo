"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const ease = [0.4, 0, 0.2, 1] as const;

const tenders = [
  {
    ref: "CTL-2026-001",
    title: "Supply and Installation of CCTV Surveillance Systems",
    category: "Hardware",
    deadline: "July 15, 2026",
    description:
      "Centivo Technologies invites qualified and registered vendors to submit proposals for supply and installation of CCTV surveillance systems for a client facility in Nairobi.",
    requirements: [
      "Business registration certificate",
      "Tax compliance certificate",
      "Company profile and past experience",
      "Technical proposal",
    ],
    status: "open",
  },
  {
    ref: "CTL-2026-002",
    title: "Supply of Computer Hardware — Laptops & Desktops",
    category: "Hardware Supply",
    deadline: "July 20, 2026",
    description:
      "Request for quotation for supply of branded laptops and desktop computers (minimum 20 units) for a government-linked project. Specifications to be provided upon request.",
    requirements: [
      "Authorized dealer certificate",
      "Product brochures and specifications",
      "Warranty documentation",
      "Financial capability proof",
    ],
    status: "open",
  },
  {
    ref: "CTL-2026-003",
    title: "Network Infrastructure Setup — LAN/WAN",
    category: "Networking",
    deadline: "August 1, 2026",
    description:
      "Invitation for proposals to design, supply and install a complete structured LAN/WAN network infrastructure for a multi-floor office building in the Nairobi CBD.",
    requirements: [
      "Networking certifications (CCNA/CCNP preferred)",
      "Company profile",
      "Technical proposal",
      "Site visit report",
    ],
    status: "open",
  },
  {
    ref: "CTL-2026-004",
    title: "Website Design & Development for Corporate Client",
    category: "Software",
    deadline: "June 30, 2026",
    description:
      "Centivo Technologies invites web development agencies and freelancers to submit proposals for designing and developing a corporate website for a client in the financial sector.",
    requirements: [
      "Portfolio of past work",
      "Technical proposal",
      "Timeline and cost estimate",
      "Support and maintenance plan",
    ],
    status: "closed",
  },
];

const steps = [
  {
    number: "01",
    title: "Read the Tender",
    description:
      "Review the tender requirements carefully and confirm you meet all the listed criteria before proceeding.",
  },
  {
    number: "02",
    title: "Prepare Documents",
    description:
      "Gather all required documents including your company profile, certifications, and technical proposal.",
  },
  {
    number: "03",
    title: "Submit by Email",
    description:
      "Email your complete application to info@centivotechnology.co.ke before the stated deadline.",
  },
];

export default function TendersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#000000] pt-40 pb-28 overflow-hidden">
        <div className="blob absolute -top-32 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="blob-b absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4"
          >
            Procurement
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="text-gradient text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight mb-6"
          >
            Tenders &amp; Opportunities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease }}
            className="text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-relaxed"
          >
            Centivo Technologies is committed to transparent and fair
            procurement. View current open tenders below.
          </motion.p>
        </div>
      </section>

      {/* Tenders list */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection>
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Current Tenders
            </p>
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] leading-tight mb-16">
              Open and recent opportunities
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            {tenders.map((tender, i) => (
              <motion.div
                key={tender.ref}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="bg-[#f5f5f7] rounded-2xl p-8"
              >
                <p className="text-[12px] text-[#6e6e73] mb-2">{tender.ref}</p>
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">
                  {tender.title}
                </h3>
                <div className="flex gap-4 mb-5">
                  <span className="text-[13px] text-[#6e6e73]">
                    {tender.category}
                  </span>
                  <span
                    className={`text-[13px] font-medium ${
                      tender.status === "open"
                        ? "text-[#1d1d1f]"
                        : "text-[#6e6e73]"
                    }`}
                  >
                    {tender.status === "open" ? "Open" : "Closed"}
                  </span>
                </div>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-6">
                  {tender.description}
                </p>
                <div className="mb-6">
                  <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">
                    Requirements
                  </p>
                  <ul className="space-y-2">
                    {tender.requirements.map((req) => (
                      <li
                        key={req}
                        className="text-[15px] text-[#1d1d1f] leading-snug"
                      >
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[13px] text-[#6e6e73] mb-5">
                  Submission deadline:{" "}
                  <span
                    className={`font-medium ${
                      tender.status === "closed"
                        ? "line-through"
                        : "text-[#1d1d1f]"
                    }`}
                  >
                    {tender.deadline}
                  </span>
                </p>
                {tender.status === "open" && (
                  <a
                    href={`mailto:info@centivotechnology.co.ke?subject=Expression of Interest — ${tender.ref}: ${tender.title}`}
                    className="text-[15px] text-[#0071e3] hover:text-[#0077ed] transition-colors"
                  >
                    Express interest
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection>
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Process
            </p>
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] leading-tight mb-16">
              How to apply
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease }}
                className="bg-white rounded-2xl p-8"
              >
                <p className="text-[40px] font-bold text-[#1d1d1f] leading-none mb-5">
                  {step.number}
                </p>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <AnimatedSection direction="none">
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] mb-4">
              Want to be notified of new tenders?
            </h2>
            <p className="text-[17px] text-[#6e6e73] mb-10 max-w-lg mx-auto leading-relaxed">
              Contact us and we will add you to our supplier list for future
              procurement opportunities.
            </p>
            <Link
              href="/contact"
              className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
            >
              Register interest
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
