"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e: React.FormEvent) { e.preventDefault(); if (email) setSubscribed(true); }
  function handleSubmit(e: React.FormEvent) { e.preventDefault(); setSubmitted(true); }

  const inputNavy = "w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1D3A]/60 transition-colors";

  return (
    <footer>
      {/* Contact section — navy */}
      <div className="relative bg-[#0f2044] py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#DA1D3A]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-bold tracking-[0.3em] uppercase">Get in touch</p>
            </div>
            <h2 className="font-display text-[clamp(42px,6vw,72px)] uppercase leading-[0.9] text-white mb-8">
              Contact <span className="text-[#DA1D3A]">Us</span>
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: "✉", text: "hello@grittemplate.com", href: "mailto:hello@grittemplate.com" },
                { icon: "✆", text: "+1 (234) 567-890",       href: "tel:+1234567890" },
                { icon: "⊙", text: "123 Sports Ave, City, State 00000", href: "#" },
                { icon: "⏱", text: "Mon–Fri: 9am – 6pm",    href: "#" },
              ].map(({ icon, text, href }) => (
                <a key={text} href={href} className="flex items-center gap-4 text-white/55 hover:text-white transition-colors group">
                  <div className="w-10 h-10 border-2 border-white/10 flex items-center justify-center text-[#DA1D3A] group-hover:bg-[#DA1D3A] group-hover:border-[#DA1D3A] group-hover:text-white transition-all">
                    {icon}
                  </div>
                  <span className="text-sm">{text}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { name: "Instagram", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { name: "Twitter",   svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { name: "Facebook",  svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { name: "YouTube",   svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
              ].map(({ name, svg }) => (
                <a key={name} href="#" aria-label={name}
                  className="w-10 h-10 bg-white/5 border-2 border-white/15 flex items-center justify-center text-white/50 hover:bg-[#DA1D3A] hover:text-white hover:border-[#DA1D3A] transition-all">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            <h3 className="font-display text-2xl uppercase text-white mb-8 flex items-center gap-3">
              <span className="w-6 h-[3px] bg-[#DA1D3A] inline-block" /> Send a message
            </h3>
            {submitted ? (
              <div className="border-2 border-[#DA1D3A]/30 bg-[#DA1D3A]/5 p-10 text-center">
                <p className="font-display text-4xl uppercase text-[#DA1D3A] mb-2">Sent!</p>
                <p className="text-white/50 text-sm">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputNavy} />
                <input required type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputNavy} />
                <textarea required placeholder="Your Message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputNavy} resize-none`} />
                <button type="submit" className="bg-[#DA1D3A] text-white font-bold py-4 text-xs uppercase tracking-widest hover:bg-red-600 transition-colors">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom navy bar */}
      <div className="bg-[#0a1628] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Image
              src="/logo/logoWhite.png"
              alt="GritTemplate"
              width={120}
              height={32}
              style={{ objectFit: "contain", height: "28px", width: "auto" }}
              className="mb-4"
            />
            <p className="text-white/40 text-xs leading-relaxed">
              The city's leading sports & school registration experts since 2018.
            </p>
          </div>
          {[
            { title: "Services", links: ["Tournaments", "Leagues", "School Programs", "Elite Events"] },
            { title: "Company",  links: ["About", "Results", "Testimonials", "Contact"] },
            { title: "Newsletter", links: [] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-3 h-[2px] bg-[#DA1D3A] inline-block" /> {title}
              </h4>
              {links.length > 0 ? (
                <ul className="flex flex-col gap-2">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/40 text-sm hover:text-[#DA1D3A] transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                subscribed ? (
                  <p className="text-[#DA1D3A] text-xs font-bold uppercase">Subscribed! 🎉</p>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/5 border-2 border-white/10 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1D3A] transition-colors min-w-0"
                    />
                    <button type="submit" className="bg-[#DA1D3A] text-white text-xs font-bold px-3 py-2 hover:bg-red-600 transition-colors shrink-0">→</button>
                  </form>
                )
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-white/25 text-xs">© 2026 GritTemplate. All rights reserved.</span>
          <a href="#contact" className="text-[#DA1D3A] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
            Register Now →
          </a>
        </div>
      </div>
    </footer>
  );
}