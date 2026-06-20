import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            {/* Logo container increased to explicit pixel dimensions to ensure visibility */}
            <div className="relative w-[320px] h-[112px]">
              <Image
                src="/imagestouse/CENTIVO LOGO.png"
                alt="Centivo Technologies"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <p className="text-[13px] text-[#6e6e73] leading-relaxed">
            Kenya-based ICT company delivering hardware and software solutions
            since 2015.
          </p>
        </div>

        <div>
          <p className="text-[12px] font-semibold text-[#1d1d1f] tracking-widest uppercase mb-4">
            Company
          </p>
          <ul className="space-y-2.5">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Case Studies" },
              { href: "/programs", label: "Programs" },
              { href: "/tenders", label: "Tenders" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-150"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold text-[#1d1d1f] tracking-widest uppercase mb-4">
            Services
          </p>
          <ul className="space-y-2.5">
            {[
              "CCTV & Surveillance",
              "Networking LAN/WAN",
              "Server Infrastructure",
              "Web Design",
              "Access Control",
              "Solar Installation",
            ].map((s) => (
              <li key={s} className="text-[13px] text-[#6e6e73]">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold text-[#1d1d1f] tracking-widest uppercase mb-4">
            Contact
          </p>
          <ul className="space-y-2.5">
            <li className="text-[13px] text-[#6e6e73]">Moi Avenue, Nairobi</li>
            <li className="text-[13px] text-[#6e6e73]">Kisumu Branch</li>
            <li className="text-[13px] text-[#6e6e73]">
              Eldoret, Coming soon
            </li>
            <li>
              <a
                href="mailto:info@centivotechnology.co.ke"
                className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-150 break-all"
              >
                info@centivotechnology.co.ke
              </a>
            </li>
            <li>
              <a
                href="tel:+254712834651"
                className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-150"
              >
                0712 834 651
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[13px] text-[#6e6e73]">
            Copyright {new Date().getFullYear()} Centivo Technologies Ltd.
          </p>
          <p className="text-[13px] text-[#6e6e73]">
            Founded by Saulo Adorwa & Erick Ovitah
          </p>
        </div>
      </div>
    </footer>
  );
}