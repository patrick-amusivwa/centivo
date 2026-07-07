"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const cardEase = [0.4, 0, 0.2, 1] as [number, number, number, number];

const founders = [
  {
    initials: "SA",
    name: "Saulo Adorwa",
    role: "Co-Founder & Director",
    image: "/imagestouse/kevo enhanced.png",
    alt: "Saulo Adorwa",
  },
  {
    initials: "EO",
    name: "Erick Ovitah",
    role: "Co-Founder & Director",
    image: "/imagestouse/erick enhanced.png",
    alt: "Erick Ovitah",
  },
];

export default function AboutPage() {
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
            Nairobi · Kisumu · Eldoret
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07, ease: cardEase }}
            className="text-gradient text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight max-w-2xl"
          >
            Trusted ICT Partners in Kenya.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Our story
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-8">
              Founded on expertise. Built on results.
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-5">
              Centivo Technologies Ltd was established in early 2015 by{" "}
              <strong className="text-[#1d1d1f] font-semibold">
                Saulo Adorwa
              </strong>{" "}
              and{" "}
              <strong className="text-[#1d1d1f] font-semibold">
                Erick Ovitah
              </strong>
              . Together they bring 8 years of cumulative ICT experience — a
              unique synergy of technical expertise and deep industry knowledge.
            </p>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-5">
              We are an offshore IT services and web design company with offices
              in Nairobi (Moi Avenue) and Kisumu, with a third branch opening in
              Eldoret.
            </p>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed">
              Our work supports NGOs, government programs, schools, and private
              businesses with dependable ICT delivery across Kenya and beyond.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Founders
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {founders.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: cardEase,
                  }}
                  className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-xl shadow-black/5"
                >
                  <div className="relative h-72 overflow-hidden bg-[#dfe4ea]">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[32px] font-bold text-[#1d1d1f] leading-none mb-3">
                      {f.initials}
                    </p>
                    <p className="text-[17px] font-semibold text-[#1d1d1f]">
                      {f.name}
                    </p>
                    <p className="text-[15px] text-[#6e6e73] mt-1">{f.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "2015", label: "Founded" },
                { value: "3", label: "Offices" },
                { value: "50+", label: "Projects" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.06 + 0.12,
                    duration: 0.5,
                    ease: cardEase,
                  }}
                >
                  <p className="text-[32px] font-bold text-[#1d1d1f] leading-none">
                    {s.value}
                  </p>
                  <p className="text-[13px] text-[#6e6e73] mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              What drives us
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              Mission, vision and values.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                label: "Mission",
                body: "To become a worldwide premium ICT solution provider — delivering high-quality, timely, cost-effective services through teamwork and synergy with our stakeholders.",
              },
              {
                label: "Vision",
                body: "To continuously grow as a renowned global ICT company, recognised for quality, expertise and innovation across every market we serve.",
              },
              {
                label: "Values",
                body: "Learn from the past. Embrace the present. Innovate for the future. We are always ready to learn, implement and create new dimensions of technology.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: cardEase }}
                className="bg-white rounded-2xl p-8"
              >
                <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
                  {item.label}
                </p>
                <p className="text-[17px] text-[#6e6e73] leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-16">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Why Centivo
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              What sets us apart.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Quality first",
                body: "We assure our clients of the best services and delivery of quality products, every time.",
              },
              {
                title: "On time",
                body: "We pride ourselves on delivering projects on schedule without compromising on quality.",
              },
              {
                title: "Cost effective",
                body: "Premium ICT solutions designed to give maximum value for your investment.",
              },
              {
                title: "Expert team",
                body: "Qualified professionals with 8+ years of combined experience across all ICT disciplines.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: cardEase }}
                className="bg-[#f5f5f7] rounded-2xl p-8"
              >
                <p className="text-[17px] font-semibold text-[#1d1d1f] mb-3">
                  {item.title}
                </p>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Clients Carousel */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Partners &amp; Clients
            </p>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              Trusted by organizations across Kenya.
            </h2>
          </AnimatedSection>
          
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                { src: "/hp.png", alt: "HP Supplier 2020", w: 80 },
                { src: "/lenovo-300x100.png", alt: "Lenovo", w: 120 },
                { src: "/ict-authority.png", alt: "ICT Authority Kenya", w: 110 },
                { src: "/compasssion.png", alt: "Compassion International", w: 130 },
                { src: "/digischool logo.png", alt: "Digi School", w: 100 },
                { src: "/afra.png", alt: "AFRA", w: 70 },
                { src: "/national peace support training.png", alt: "National Peace Support Training", w: 100 },
                { src: "/friendschurch.png", alt: "Friends Church", w: 110 },
                { src: "/kariobangi.png", alt: "Kariobangi", w: 90 },
                { src: "/wasrebcolor.png", alt: "Wasreb", w: 100 },
                { src: "/maisha national aids control council.png", alt: "Maisha National AIDS Control Council", w: 120 },
                { src: "/carrefourcolor.png", alt: "Carrefour", w: 100 },
                { src: "/hp.png", alt: "HP Supplier 2020", w: 80 },
                { src: "/lenovo-300x100.png", alt: "Lenovo", w: 120 },
                { src: "/ict-authority.png", alt: "ICT Authority Kenya", w: 110 },
                { src: "/compasssion.png", alt: "Compassion International", w: 130 },
                { src: "/digischool logo.png", alt: "Digi School", w: 100 },
                { src: "/afra.png", alt: "AFRA", w: 70 },
                { src: "/national peace support training.png", alt: "National Peace Support Training", w: 100 },
                { src: "/Figure 3 friends church quarters yearly meeting.png", alt: "Figure 3 Friends Church", w: 110 },
              ].map((p, i) => (
                <div key={i} className="flex-shrink-0">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={60}
                    className="h-12 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <AnimatedSection direction="none">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-5">
              Ready to work with us?
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-relaxed mb-8 max-w-xl mx-auto">
              Get in touch and let&apos;s build something great together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-6 py-2.5 text-[15px] font-medium transition-colors"
            >
              Contact us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
