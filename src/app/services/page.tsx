"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

// ─── Hardware ────────────────────────────────────────────────────────────────
const hardware: {
  title: string;
  desc: string;
  details: string[];
  images: string[];
}[] = [
  {
    title: "Server Maintenance & Servicing",
    desc: "Complete server room design, hardware installation, preventive maintenance and performance monitoring for businesses of any size.",
    details: [
      "Server room design & setup",
      "Windows Server installation",
      "Preventive maintenance schedules",
      "Hardware diagnostics & repair",
    ],
    images: [
      "/imagestouse/Server maintenance and servicing.jpg",
      "/imagestouse/Server maintenance.jpg",
    ],
  },
  {
    title: "Networking LAN / WAN",
    desc: "Structured cabling and enterprise-grade networking — connecting your office, campus or multiple branches reliably.",
    details: [
      "LAN/WAN design & deployment",
      "Structured cabling",
      "Network switches & routers",
      "Wireless access points",
    ],
    images: ["/imagestouse/networking solution lan.jpg"],
  },
  {
    title: "CCTV & Surveillance",
    desc: "End-to-end surveillance for homes, offices and enterprises — with remote monitoring so you always know what's happening.",
    details: [
      "IP & analog camera installation",
      "NVR/DVR system setup",
      "Night vision & PTZ cameras",
      "Remote monitoring configuration",
    ],
    images: [
      "/imagestouse/CCTV camera installation Surveillance & Monitoring.jpg",
    ],
  },
  {
    title: "Computer Hardware",
    desc: "Professional laptop and desktop repair, hardware upgrades and data recovery. We keep your machines running.",
    details: [
      "Laptop & desktop repairs",
      "RAM, SSD & hardware upgrades",
      "Data recovery",
      "Preventive maintenance",
    ],
    images: [
      "/imagestouse/Computer Hardware Maintenance laptop desktops.jpg",
      "/imagestouse/laptops.jpeg",
      "/imagestouse/laptops1.jpeg",
      "/imagestouse/laptops2.jpeg",
    ],
  },
  {
    title: "Access Control & Biometric",
    desc: "Fingerprint scanners, card readers and electronic door locks — giving you full control over who enters your premises.",
    details: [
      "Fingerprint & face scanners",
      "Card-based access systems",
      "Electric door locks",
      "Turnstile gates",
    ],
    images: ["/imagestouse/Access control and biometric Hardware.jpg"],
  },
  {
    title: "Internet Provision",
    desc: "Reliable connectivity for homes and businesses via Faiba fiber or LTE. We also install boosters where signal is poor.",
    details: [
      "Faiba fiber connection",
      "LTE/4G solutions",
      "Starlink setup",
      "Network signal boosters",
    ],
    images: [
      "/imagestouse/Internet provision.jpg",
      "/imagestouse/starlink.jpeg",
    ],
  },
  {
    title: "Solar Panel Installation",
    desc: "Professional solar installation for households, small enterprises and medium entities across Kenya — including areas not covered by the national grid.",
    details: [
      "Household solar systems",
      "Small & medium enterprise installs",
      "Solar lamp supply (DP & GD models)",
      "After-sales maintenance",
    ],
    images: [
      "/imagestouse/solarinstalltion.jpeg",
      "/imagestouse/solarinstalltion2.jpeg",
      "/imagestouse/WhatsApp Image 2026-06-20 at 16.24.38.jpeg",
      "/imagestouse/WhatsApp Image 2026-06-20 at 16.24.39.jpeg",
    ],
  },
];

// ─── Software ─────────────────────────────────────────────────────────────────
const software: {
  title: string;
  desc: string;
  details: string[];
  image?: string;
}[] = [
  {
    title: "MS Windows & Office",
    desc: "Licensed Windows 8, 10 and Server installation, plus the full Microsoft Office suite — properly activated and configured.",
    details: [
      "Licensed OS installation",
      "Windows Server setup",
      "Microsoft Office suite",
      "Software activation & migration",
    ],
    image: "/MS Windows server office installation.png",
  },
  {
    title: "Accounting Software",
    desc: "We integrate Sage, QuickBooks and Tally — then train your team to use them confidently for day-to-day financial operations.",
    details: [
      "Sage installation & setup",
      "QuickBooks configuration",
      "Tally integration",
      "Staff training included",
    ],
    image: "/Accounting Software's.png",
  },
  {
    title: "Web Design & Hosting",
    desc: "Custom responsive websites designed to your brand, with managed domains and reliable hosting.",
    details: [
      "Custom website design",
      "Mobile-responsive layouts",
      "Domain & hosting management",
      "Ongoing support",
    ],
    image: "/imagestouse/Websites designed and Hosting.jpg",
  },
  {
    title: "Access Control Software",
    desc: "Time attendance and biometric registration software — accurate records for staff and student monitoring across all your sites.",
    details: [
      "Attendance tracking",
      "Biometric enrollment",
      "Reporting & analytics",
      "Multi-site support",
    ],
  },
  {
    title: "Point of Sale Systems",
    desc: "Customised POS software for retail, restaurants and hospitality — with inventory management and sales reporting built in.",
    details: [
      "Retail & restaurant POS",
      "Inventory management",
      "Sales reporting dashboards",
      "Custom integrations",
    ],
  },
  {
    title: "Cloud & Data Storage",
    desc: "Microsoft Exchange Server setup, cloud backup and data migration — so your business data is always safe and accessible.",
    details: [
      "Cloud backup solutions",
      "MS Exchange setup",
      "Data migration",
      "Security & compliance",
    ],
  },
];

function ImageMosaic({ images, alt }: { images: string[]; alt: string }) {
  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
      </div>
    );
  }
  // 3 or 4 images — one large + rest smaller
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src={images[0]}
          alt={`${alt} 1`}
          fill
          className="object-cover"
          sizes="33vw"
        />
      </div>
      <div className="flex flex-col gap-3">
        {images.slice(1, 3).map((src, i) => (
          <div
            key={i}
            className="relative flex-1 rounded-xl overflow-hidden"
            style={{ minHeight: 0 }}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 2}`}
              fill
              className="object-cover"
              sizes="15vw"
            />
          </div>
        ))}
      </div>
      {images.length === 4 && (
        <div className="col-span-3 relative aspect-[21/6] rounded-xl overflow-hidden">
          <Image
            src={images[3]}
            alt={`${alt} 4`}
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#000000] pt-40 pb-24 overflow-hidden">
        <div className="blob absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="blob-b absolute -bottom-20 -left-40 w-[600px] h-[600px] bg-indigo-600/15 blur-[100px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-[#6e6e73] text-[15px] mb-6"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07, ease }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.04] tracking-[-0.02em] text-gradient max-w-3xl"
          >
            Everything you need.
            <br />
            Under one roof.
          </motion.h1>
        </div>
      </section>

      {/* Hardware ──────────────────────────────────── */}
      <section className="bg-white py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-20">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">
              01 — Hardware
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-[#1d1d1f]">
              Infrastructure
            </h2>
          </AnimatedSection>

          <div className="space-y-28">
            {hardware.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Text */}
                <div>
                  <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-[#1d1d1f] mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2">
                    {svc.details.map((d) => (
                      <li
                        key={d}
                        className="text-[15px] text-[#6e6e73] flex items-start gap-2"
                      >
                        <span className="text-[#0071e3] mt-[3px] text-[10px]">
                          ●
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Images */}
                <div>
                  <ImageMosaic images={svc.images} alt={svc.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software ──────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-[100px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-20">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">
              02 — Software
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-tight text-[#1d1d1f]">
              Solutions
            </h2>
          </AnimatedSection>

          <div className="space-y-24">
            {software.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease }}
                className={
                  svc.image
                    ? `grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 0 ? "lg:[&>*:first-child]:order-2" : ""}`
                    : "max-w-2xl"
                }
              >
                {/* Text */}
                <div>
                  <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-[#1d1d1f] mb-4">
                    {svc.title}
                  </h3>
                  <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2">
                    {svc.details.map((d) => (
                      <li
                        key={d}
                        className="text-[15px] text-[#6e6e73] flex items-start gap-2"
                      >
                        <span className="text-[#0071e3] mt-[3px] text-[10px]">
                          ●
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image (if available) */}
                {svc.image && (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-[120px] border-t border-black/5">
        <AnimatedSection
          className="max-w-[1400px] mx-auto px-6 text-center"
          direction="none"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] mb-5">
            Need a custom solution?
          </h2>
          <p className="text-[#6e6e73] text-[19px] mb-10 max-w-lg mx-auto">
            Tell us your requirements and we&apos;ll design the right fit for
            your business.
          </p>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full transition-colors duration-150"
          >
            Request a quote
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
