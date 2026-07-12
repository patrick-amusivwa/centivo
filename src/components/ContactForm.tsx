"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const inputClass =
  "w-full px-4 py-2.5 bg-white rounded-xl text-[15px] text-[#1d1d1f] border border-black/10 focus:outline-none focus:border-[#0071e3] transition-colors";

const labelClass = "block text-[13px] font-medium text-[#1d1d1f] mb-1.5";
const ease = [0.4, 0, 0.2, 1] as const;
const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};
const accessKey = "9a9cae0b-d066-44a8-b911-c319d11e42b0";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>(initialFormState);
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", accessKey);
      formData.append("from_email", "contact@mail.centivotechnology.co.ke");
      formData.append("subject", `New contact inquiry from ${form.name}`);
      formData.append("from_name", form.name);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send your message right now.");
      }

      setForm(initialFormState);
      setStatus("success");
      setFeedback("Thank you. Your message has been delivered successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setFeedback("");
    setForm(initialFormState);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
        className="flex flex-col items-center justify-center text-center py-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-[#0071e3]/15 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0071e3] shadow-lg shadow-[#0071e3]/20">
            <svg viewBox="0 0 52 52" className="h-10 w-10 text-white" fill="none">
              <motion.circle
                cx="26"
                cy="26"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease }}
              />
              <motion.path
                d="M15 27.5L23 35L38 17"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease }}
              />
            </svg>
          </div>
        </motion.div>

        <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">
          Message sent.
        </h3>
        <p className="text-[15px] text-[#6e6e73] mb-6 max-w-md leading-relaxed">
          {feedback}
        </p>
        <button
          onClick={resetForm}
          className="text-[15px] font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  const disabled = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {feedback ? (
        <div
          aria-live="polite"
          className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-[14px] text-rose-700"
        >
          {feedback}
        </div>
      ) : null}

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
