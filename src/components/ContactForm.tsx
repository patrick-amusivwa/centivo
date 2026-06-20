"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success";

const inputClass =
  "w-full px-4 py-2.5 bg-white rounded-xl text-[15px] text-[#1d1d1f] border border-black/10 focus:outline-none focus:border-[#0071e3] transition-colors";

const labelClass = "block text-[13px] font-medium text-[#1d1d1f] mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="py-10">
        <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">
          Message sent.
        </h3>
        <p className="text-[15px] text-[#6e6e73] mb-8">
          We&apos;ll be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[15px] text-[#0071e3] hover:text-[#0077ed] transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  const disabled = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="John Kamau"
          disabled={disabled}
          className={`${inputClass}${disabled ? " opacity-50 cursor-not-allowed" : ""}`}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.co.ke"
          disabled={disabled}
          className={`${inputClass}${disabled ? " opacity-50 cursor-not-allowed" : ""}`}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="07XX XXX XXX"
          disabled={disabled}
          className={`${inputClass}${disabled ? " opacity-50 cursor-not-allowed" : ""}`}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          disabled={disabled}
          className={`${inputClass}${disabled ? " opacity-50 cursor-not-allowed" : ""}`}
        >
          <option value="">Select a service</option>
          <option>CCTV Installation</option>
          <option>Server Maintenance</option>
          <option>Networking LAN/WAN</option>
          <option>Web Design &amp; Hosting</option>
          <option>Accounting Software</option>
          <option>Access Control &amp; Biometric</option>
          <option>Solar Panel Installation</option>
          <option>Point of Sale Systems</option>
          <option>ICT Consultancy &amp; Training</option>
          <option>Internet Provision</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or inquiry."
          disabled={disabled}
          className={`${inputClass} resize-none${disabled ? " opacity-50 cursor-not-allowed" : ""}`}
        />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className={`w-full py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium rounded-full transition-colors${disabled ? " opacity-50 cursor-not-allowed" : ""}`}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
