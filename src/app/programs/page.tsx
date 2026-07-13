"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const ease = [0.4, 0, 0.2, 1] as const;

const solarCards = [
  {
    title: "Household systems",
    desc: "Residential solar installations sized for home electricity needs.",
  },
  {
    title: "Small enterprise",
    desc: "Systems for shops, clinics and small offices with reliable output.",
  },
  {
    title: "Medium entities",
    desc: "Larger installations for schools, churches and medium businesses.",
  },
  {
    title: "Solar lamps",
    desc: "Rechargeable DP and GD lamps supplied across the county on request.",
  },
];

const posCards = [
  {
    title: "Retail POS",
    desc: "Comprehensive systems for stores, supermarkets and boutiques.",
  },
  {
    title: "Restaurant POS",
    desc: "Table management and order tracking for hospitality businesses.",
  },
  {
    title: "Inventory management",
    desc: "Real-time stock tracking with automated reorder alerts.",
  },
  {
    title: "Sales reporting",
    desc: "Dashboards and detailed reports to drive business decisions.",
  },
];

const trainingCards = [
  {
    title: "Network installation",
    desc: "Design, cabling and configuration training for IT staff.",
  },
  {
    title: "Cloud storage",
    desc: "Cloud backup, storage and Microsoft Azure fundamentals.",
  },
  {
    title: "Finance & accounting",
    desc: "QuickBooks, Sage and Tally training for finance teams.",
  },
  {
    title: "Microsoft Exchange",
    desc: "Exchange Server setup, administration and end-user training.",
  },
  {
    title: "Cybersecurity",
    desc: "Security best practices for employees and administrators.",
  },
  {
    title: "Hardware maintenance",
    desc: "Hands-on hardware troubleshooting and repair training.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#000000] pt-40 pb-28 overflow-hidden">
        <div className="blob absolute -top-32 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="blob-b absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4"
          >
            Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="text-gradient text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight mb-6 max-w-2xl"
          >
            Beyond core ICT.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease }}
            className="text-[17px] text-[#6e6e73] max-w-xl leading-relaxed"
          >
            Solar installation, point-of-sale systems, and ICT consultancy —
            expanding what technology can do for your business.
          </motion.p>
        </div>
      </section>

      {/* Solar */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Intro */}
          <AnimatedSection className="mb-16">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              01 — Solar
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-6">
              Solar Panel Installation
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <div>
                <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-5">
                  With national grid coverage gaps across the county, Centivo is
                  among the few companies that performs professional solar
                  installation at household, small enterprise and medium entity
                  level.
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-8">
                  We also supply rechargeable solar lamps — DP and GD models —
                  to areas without grid power, supporting children&apos;s
                  evening studies and household use.
                </p>
                <a
                  href="mailto:info@centivotechnology.co.ke?subject=Solar Installation Inquiry"
                  className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
                >
                  Enquire about solar
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {solarCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease }}
                    className="bg-[#f5f5f7] rounded-2xl p-6"
                  >
                    <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">
                      {card.title}
                    </p>
                    <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Solar photo gallery */}
          <AnimatedSection className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* Large feature image */}
              <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src="/imagestouse/solarinstalltion.jpeg"
                  alt="Solar installation"
                  fill
                  className="object-cover"
                  sizes="66vw"
                />
              </div>
              {/* Side image */}
              <div className="relative aspect-[16/9] md:aspect-auto rounded-2xl overflow-hidden">
                <Image
                  src="/imagestouse/solarinstalltion2.jpeg"
                  alt="Solar installation 2"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              {/* Bottom row */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/imagestouse/solarinstalltion5.jpeg"
                  alt="Solar installation 3"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/imagestouse/WhatsApp Image 2026-06-20 at 16.24.38.jpeg"
                  alt="Solar installation 4"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/imagestouse/WhatsApp Image 2026-06-20 at 16.24.39.jpeg"
                  alt="Solar installation 5"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* POS */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              {posCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                  className="bg-white rounded-2xl p-6"
                >
                  <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">
                    {card.title}
                  </p>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              02 — Point of Sale
            </p>
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] leading-tight mb-6">
              POS Supply &amp; Installation
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-[1.8] mb-5">
              We carry out large-scale rollouts of POS software solutions, fully
              customised to each client&apos;s needs — from single-store retail
              to multi-branch operations.
            </p>
            <p className="text-[17px] text-[#6e6e73] leading-[1.8] mb-8">
              Our POS installations include staff training, ongoing technical
              support and seamless integration with existing business
              infrastructure.
            </p>
            <Link
              href="/contact"
              className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
            >
              Get a POS quote
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultancy */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              03 — Consultancy
            </p>
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] leading-tight mb-6">
              ICT Consultancy &amp; Training
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-[1.8] mb-5">
              Based on our skills and expertise, Centivo offers consultancy and
              hands-on training across a wide range of ICT products and
              platforms.
            </p>
            <p className="text-[17px] text-[#6e6e73] leading-[1.8] mb-8">
              Topics include network-based installation, cloud-based data
              storage, Microsoft Exchange Server and finance and accounting
              software.
            </p>
            <Link
              href="/contact"
              className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
            >
              Book a consultation
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {trainingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                  className="bg-[#f5f5f7] rounded-2xl p-6"
                >
                  <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">
                    {card.title}
                  </p>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <AnimatedSection direction="none">
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] mb-4">
              Interested in any of these programs?
            </h2>
            <p className="text-[17px] text-[#6e6e73] mb-10 max-w-lg mx-auto leading-relaxed">
              Drop us a message and we will get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
            >
              Contact us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
