"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Open Source Builder",
  "Next.js Engineer",
  "Cloud-Native Developer",
  "UI Systems Builder",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingActive, setTypingActive] = useState(false);

  useEffect(() => {
    const start = window.setTimeout(() => setTypingActive(true), 900);
    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!typingActive) return;

    const current = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && text === current) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && text === "") {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 220);
    } else {
      const delta = isDeleting ? 34 : 68;
      timeout = window.setTimeout(() => {
        setText((currentText) =>
          isDeleting ? current.slice(0, currentText.length - 1) : current.slice(0, currentText.length + 1)
        );
      }, delta);
    }

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, typingActive]);

  const stats = [
    ["06+", "Projects Built", "text-dp-orange"],
    ["03+", "Open Source", "text-dp-orange"],
    ["08+", "Technologies", "text-dp-orange"],
    ["Live", "Available Now", "text-dp-teal"],
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-[2px] w-[22px] bg-dp-lime" />
            <div className="font-mono text-[11px] tracking-[0.38em] text-dp-lime">FULL-STACK DEVELOPER</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[52px] font-[700] leading-[0.95] text-dp-text-primary sm:text-[62px] lg:text-[78px]"
            style={{ letterSpacing: "-1px" }}
          >
            <span className="block text-white">Hi, I&apos;m</span>
            <span className="text-dp-orange">Sahil</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mt-5 min-h-[28px]"
          >
            <div className="font-mono text-[14px] text-dp-lime sm:text-[15px]">
              {text}
              <span className="ml-1 inline-block h-[16px] w-[8px] align-middle bg-dp-orange animate-pulse" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="mt-6 max-w-xl text-[14px] leading-8 text-dp-text-secondary sm:text-[15px]"
          >
            MCA student at DDU Nadiad. I build modern web apps and developer tools. Passionate about clean code and cloud-native solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-[10px] bg-dp-orange px-6 py-3 text-[14px] font-semibold text-black transition hover:bg-dp-orange-dark"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center rounded-[10px] border border-dp-border-secondary bg-transparent px-6 py-3 text-[14px] font-semibold text-white transition hover:border-dp-orange hover:text-dp-orange"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-[20px] border border-dp-border-primary bg-dp-bg-2"
        >
          <div className="flex items-center gap-3 border-b border-dp-border-primary px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <div className="font-mono text-[13px] text-dp-text-secondary">devpilot — profile.json</div>
          </div>

          <pre className="m-0 px-6 py-6 font-mono text-[13px] leading-[2.1] text-dp-text-secondary sm:px-7 sm:py-7">
            <div>
              <span className="text-dp-orange">~$</span> cat developer.json
            </div>
            <div className="text-dp-lime">{`{`}</div>
            <div>
              <span className="text-dp-amber">  &quot;name&quot;:</span> <span className="text-dp-rose">&quot;Sahil&quot;,</span>
            </div>
            <div>
              <span className="text-dp-amber">  &quot;role&quot;:</span> <span className="text-dp-rose">&quot;Full-Stack Developer&quot;,</span>
            </div>
            <div>
              <span className="text-dp-amber">  &quot;stack&quot;:</span> <span className="text-dp-rose">[&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;],</span>
            </div>
            <div>
              <span className="text-dp-amber">  &quot;education&quot;:</span> <span className="text-dp-rose">&quot;MCA @ DDU Nadiad&quot;,</span>
            </div>
            <div>
              <span className="text-dp-amber">  &quot;status&quot;:</span> <span className="text-dp-teal">&quot;Open to Work ✓&quot;</span>
            </div>
            <div className="text-dp-lime">{`}`}</div>
            <div className="mt-2">
              <span className="text-dp-orange">~$</span> <span className="inline-block h-[16px] w-[8px] align-middle bg-dp-orange animate-pulse" />
            </div>
          </pre>
        </motion.aside>
      </div>

      <div className="mt-14 grid grid-cols-1 border-t border-dp-border-primary sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label, valueClass]) => (
          <div key={label} className="border-b border-r border-dp-border-primary px-5 py-8 last:border-r-0 sm:last:border-r lg:border-b-0">
            <div className={`font-mono text-[34px] font-bold leading-none ${valueClass}`}>{value}</div>
            <div className="mt-2 font-mono text-[12px] uppercase tracking-[0.24em] text-dp-text-secondary">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}