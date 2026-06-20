"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const transition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

const services = [
  {
    title: "CCTV & Surveillance",
    desc: "IP cameras, NVR/DVR systems and remote monitoring for homes and enterprises.",
  },
  {
    title: "Server Infrastructure",
    desc: "Server room design, Windows Server installation and ongoing maintenance.",
  },
  {
    title: "Networking LAN / WAN",
    desc: "Structured cabling, switches and internet provision via Faiba and LTE.",
  },
  {
    title: "Web Design & Hosting",
    desc: "Responsive websites, domain management and managed hosting.",
  },
  {
    title: "Hardware & Software",
    desc: "Licensed OS installs, accounting software and computer repairs.",
  },
  {
    title: "Access Control",
    desc: "Biometric time-attendance, card readers and electronic door locks.",
  },
];

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const heroFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center bg-[#000000] overflow-hidden"
      >
        {/* Liquid glass blobs */}
        <motion.div
          style={{ y: blobY }}
          className="absolute inset-0 pointer-events-none select-none"
        >
          <div className="blob absolute -top-40 -right-40 w-[700px] h-[700px] bg-blue-600/20 blur-[120px]" />
          <div className="blob-b absolute -bottom-20 -left-40 w-[600px] h-[600px] bg-indigo-600/15 blur-[100px]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroFade }}
          className="relative w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24"
        >
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ ...transition, delay: 0 }}
            className="text-[#6e6e73] text-[15px] mb-6"
          >
            Nairobi · Kisumu · Eldoret
          </motion.p>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ ...transition, delay: 0.07 }}
            className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.04] tracking-[-0.02em] mb-8 max-w-4xl text-gradient"
          >
            Enterprise ICT
            <br />
            for Kenya.
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ ...transition, delay: 0.14 }}
            className="text-[#6e6e73] text-[19px] leading-relaxed max-w-xl mb-12"
          >
            Centivo Technologies delivers hardware infrastructure, software
            solutions, networking and surveillance — founded 2015 by Saulo
            Adorwa and Erick Ovitah.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/services"
              className="px-6 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full transition-colors duration-150"
            >
              Our services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              Contact us
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ ...transition, delay: 0.3 }}
            className="mt-24 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-10"
          >
            {[
              { n: "2015", l: "Founded" },
              { n: "8+", l: "Years experience" },
              { n: "3", l: "Offices" },
              { n: "50+", l: "Projects delivered" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-[2rem] font-bold text-white leading-none">
                  {s.n}
                </p>
                <p className="text-[#6e6e73] text-[13px] mt-2">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#6e6e73] text-[12px] font-semibold tracking-widest uppercase mb-4">
              Services
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-16 max-w-xl">
              Everything your business needs.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ...transition }}
                className="bg-white rounded-2xl p-8"
              >
                <p className="text-[17px] font-semibold text-[#1d1d1f] mb-2">
                  {s.title}
                </p>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="mt-8">
            <Link
              href="/services"
              className="text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              See all services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left">
            <p className="text-[#6e6e73] text-[12px] font-semibold tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-8">
              Founded in 2015.
              <br />
              Trusted across
              <br />
              East Africa.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-5">
              Centivo Technologies Ltd was founded by{" "}
              <span className="text-[#1d1d1f] font-medium">Saulo Adorwa</span>{" "}
              and{" "}
              <span className="text-[#1d1d1f] font-medium">Erick Ovitah</span> —
              combining 8 years of expertise in hardware, software and
              enterprise networking.
            </p>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed mb-10">
              Headquartered on Moi Avenue, Nairobi. Kisumu branch open. Eldoret
              coming soon.
            </p>
            <Link
              href="/about"
              className="text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              Our story
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Mission",
                  body: "Become a worldwide premium ICT solution provider through teamwork and exceptional deliverables.",
                },
                {
                  label: "Vision",
                  body: "Grow as a global ICT company recognised for quality, expertise and innovation.",
                },
                {
                  label: "Values",
                  body: "Learn from the past. Embrace the present. Innovate for the future.",
                },
                {
                  label: "Reach",
                  body: "Kenya-wide presence, expanding into East Africa and beyond.",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ...transition }}
                  className="bg-[#f5f5f7] rounded-2xl p-6"
                >
                  <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">
                    {c.label}
                  </p>
                  <p className="text-[15px] text-[#1d1d1f] leading-relaxed">
                    {c.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PARTNERS & CLIENTS */}
      <section className="bg-white py-20 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection>
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-10 text-center">
              Partners &amp; Clients
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { src: "/hp.png", alt: "HP Supplier 2020", w: 80 },
              { src: "/lenovo-300x100.png", alt: "Lenovo", w: 120 },
              { src: "/ict-authority.png", alt: "ICT Authority Kenya", w: 110 },
              {
                src: "/compasssion.png",
                alt: "Compassion International",
                w: 130,
              },
              { src: "/digischool logo.png", alt: "Digi School", w: 100 },
              { src: "/afra.png", alt: "AFRA", w: 70 },
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
                  className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <AnimatedSection
          className="max-w-[1400px] mx-auto px-6 text-center"
          direction="none"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] mb-5">
            Ready to get started?
          </h2>
          <p className="text-[#6e6e73] text-[19px] mb-3 max-w-md mx-auto">
            Reach out for a free consultation.
          </p>
          <p className="text-[#6e6e73] text-[15px] mb-10">
            info@centivotechnology.co.ke
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@centivotechnology.co.ke"
              className="px-6 py-2.5 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full transition-colors duration-150"
            >
              Send an email
            </a>
            <a
              href="tel:+254712834651"
              className="px-6 py-2.5 text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              +254 712 834 651
            </a>
            <a
              href="tel:+254729423175"
              className="px-6 py-2.5 text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              +254 729 423 175
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
