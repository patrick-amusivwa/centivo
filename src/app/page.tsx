"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import RouterRoundedIcon from "@mui/icons-material/RouterRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

const HeroGSAP = dynamic(() => import("@/components/HeroGSAP"), { ssr: false });
const ScrollAnimations = dynamic(() => import("@/components/ScrollAnimations"), { ssr: false });

const services = [
  {
    title: "CCTV & Surveillance",
    desc: "IP cameras, NVR/DVR systems and remote monitoring for homes and enterprises.",
    icon: VideocamRoundedIcon,
  },
  {
    title: "Server Infrastructure",
    desc: "Server room design, Windows Server installation and ongoing maintenance.",
    icon: DnsRoundedIcon,
  },
  {
    title: "Networking LAN / WAN",
    desc: "Structured cabling, switches and internet provision via Faiba and LTE.",
    icon: RouterRoundedIcon,
  },
  {
    title: "Web Design & Hosting",
    desc: "Responsive websites, domain management and managed hosting.",
    icon: LanguageRoundedIcon,
  },
  {
    title: "Hardware & Software",
    desc: "Licensed OS installs, accounting software and computer repairs.",
    icon: ComputerRoundedIcon,
  },
  {
    title: "Access Control",
    desc: "Biometric time-attendance, card readers and electronic door locks.",
    icon: FingerprintRoundedIcon,
  },
];

const partnerLogos = [
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
];

export default function Home() {
  return (
    <>
      <ScrollAnimations />

      {/* HERO */}
      <HeroGSAP />

      {/* SERVICES */}
      <section className="services-section bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="services-label text-[#6e6e73] text-[12px] font-semibold tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="services-heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-16 max-w-xl">
            Everything your business needs.
          </h2>

          <div className="service-cards-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="service-card bg-white rounded-2xl p-8 overflow-hidden relative">
                <div className="service-card-line absolute top-0 left-0 right-0 h-[2px] bg-[#0071e3]" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0071e3]/8 text-[#0071e3]">
                  <s.icon sx={{ fontSize: 22 }} />
                </div>
                <p className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{s.title}</p>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="about-label text-[#6e6e73] text-[12px] font-semibold tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="about-heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight mb-8">
              Founded in 2015.
              <br />
              Trusted across
              <br />
              East Africa.
            </h2>
            <div className="about-body">
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
            </div>
            <Link
              href="/about"
              className="text-[#0071e3] hover:text-[#0077ed] text-[15px] font-medium transition-colors duration-150"
            >
              Our story →
            </Link>
          </div>

          <div className="stat-cards-grid grid grid-cols-2 gap-4">
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
            ].map((c) => (
              <div key={c.label} className="stat-card bg-[#f5f5f7] rounded-2xl p-6">
                <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">
                  {c.label}
                </p>
                <p className="text-[15px] text-[#1d1d1f] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="cta-heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] mb-5">
            Ready to get started?
          </h2>
          <p className="cta-sub text-[#6e6e73] text-[19px] mb-3 max-w-md mx-auto">
            Reach out for a free consultation.
          </p>
          <p className="cta-sub text-[#6e6e73] text-[15px] mb-10">
            info@centivotechnology.co.ke
          </p>
          <div className="cta-buttons flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@centivotechnology.co.ke"
              className="liquid-glass-btn liquid-glass-btn-primary text-[15px]"
            >
              <MailOutlineRoundedIcon sx={{ fontSize: 18 }} />
              Send an email
            </a>
            <a
              href="tel:+254712834651"
              className="liquid-glass-btn liquid-glass-btn-secondary text-[15px]"
            >
              <CallRoundedIcon sx={{ fontSize: 18 }} />
              +254 712 834 651
            </a>
            <a
              href="tel:+254729423175"
              className="liquid-glass-btn liquid-glass-btn-secondary text-[15px]"
            >
              <CallRoundedIcon sx={{ fontSize: 18 }} />
              +254 729 423 175
            </a>
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="partners-section bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Partners &amp; Clients
            </p>
            <h2 className="partners-heading text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight text-[#1d1d1f] leading-tight">
              Trusted by organizations across Kenya.
            </h2>
          </div>

          {/* Infinite scroll marquee — pure CSS, no Framer */}
          <div className="overflow-hidden">
            <div className="partners-track flex gap-16 w-max flex-nowrap">
              {[...partnerLogos, ...partnerLogos].map((p, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={60}
                    className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
