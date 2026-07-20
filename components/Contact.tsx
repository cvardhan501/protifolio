"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        window.setTimeout(() => setStatus("idle"), 3500);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus("idle");
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Get In Touch</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Let&apos;s Build Something <span className="text-gradient-gold">Great</span>
        </h2>
        <p className="mt-4 text-ink-muted">
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass col-span-3 rounded-3xl p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">Name</label>
              <input
                required
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="you@email.com"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold/50"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">Subject</label>
            <input
              value={form.subject}
              onChange={handleChange("subject")}
              placeholder="What's this about?"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold/50"
            />
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label className="text-xs font-medium uppercase tracking-wider text-ink-muted">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={handleChange("message")}
              placeholder="Tell me about your project..."
              className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold/50"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-soft px-6 py-3.5 text-sm font-semibold text-void shadow-gold-glow transition-transform hover:scale-[1.01] disabled:opacity-80 sm:w-auto"
          >
            {status === "idle" && (
              <>
                Send Message <Send size={16} />
              </>
            )}
            {status === "sending" && (
              <>
                Sending <Loader2 size={16} className="animate-spin" />
              </>
            )}
            {status === "sent" && (
              <>
                Message Sent <CheckCircle2 size={16} />
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass col-span-2 flex flex-col justify-between overflow-hidden rounded-3xl p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-xs text-ink-muted">Email</p>
                <p className="text-sm text-ink">cvardhan501@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-neon/10 text-neon-soft">
                <Phone size={16} />
              </span>
              <div>
                <p className="text-xs text-ink-muted">Phone</p>
                <p className="text-sm text-ink">+91 9483051598</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/10 text-gold">
                <MapPin size={16} />
              </span>
              <div>
                <p className="text-xs text-ink-muted">Location</p>
                <p className="text-sm text-ink">Bengaluru, India</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 h-40 overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 bg-radial-glow-gold" />
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-gold-glow" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-gold/40" />
            <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
              Bengaluru, Karnataka
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
