"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const ease = [0.4, 0, 0.2, 1] as const;

const contactBlocks = [
  {
    label: "Address",
    items: [
      { text: "Moi Avenue, Nairobi (HQ)", href: null },
      { text: "Kisumu Branch", href: null },
      { text: "Eldoret Branch (Coming Soon)", href: null },
    ],
  },
  {
    label: "Email",
    items: [
      {
        text: "info@centivotechnology.co.ke",
        href: "mailto:info@centivotechnology.co.ke",
      },
    ],
  },
  {
    label: "Phone",
    items: [
      { text: "0712 834 651", href: "tel:+254712834651" },
      { text: "0729 423 175", href: "tel:+254729423175" },
    ],
  },
  {
    label: "Business Hours",
    items: [
      { text: "Monday – Friday: 8:00 AM – 6:00 PM", href: null },
      { text: "Saturday: 9:00 AM – 4:00 PM", href: null },
    ],
  },
];

export default function ContactPage() {
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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="text-gradient text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight mb-6"
          >
            Get in touch.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease }}
            className="text-[17px] text-[#6e6e73] max-w-xl mx-auto leading-relaxed"
          >
            We respond to all inquiries within 24 hours on business days.
          </motion.p>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-5 gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-3">
                Let&apos;s talk
              </h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed mb-10">
                Whether you have a question about our services, want to request
                a quote, or need technical support — our team is ready to help.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-8">
              {contactBlocks.map((block, i) => (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                >
                  <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-2">
                    {block.label}
                  </p>
                  {block.items.map((item) =>
                    item.href ? (
                      <a
                        key={item.text}
                        href={item.href}
                        className="block text-[15px] text-[#0071e3] hover:text-[#0077ed] transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p key={item.text} className="text-[15px] text-[#1d1d1f]">
                        {item.text}
                      </p>
                    ),
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5, ease }}
            className="lg:col-span-3"
          >
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-2">
                Send us a message
              </h3>
              <p className="text-[15px] text-[#6e6e73] mb-8">
                We&apos;ll respond within 24 hours on business days.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#f5f5f7] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimatedSection>
            <p className="text-[12px] font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              Location
            </p>
            <h2 className="text-[32px] font-semibold text-[#1d1d1f] mb-10">
              Find us
            </h2>
          </AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            className="rounded-2xl overflow-hidden"
          >
            <iframe
              title="Centivo Technologies Location — Moi Avenue Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8165885591963!2d36.81999!3d-1.284167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d9e24b2cdb%3A0x7e0c5b2e1a3c1e7f!2sMoi%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          <p className="text-[13px] text-[#6e6e73] mt-4">
            Along Moi Avenue, Nairobi CBD
          </p>
        </div>
      </section>
    </>
  );
}
