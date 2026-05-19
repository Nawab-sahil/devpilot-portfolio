"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "MERN Stack Developer",
  "Next.js Engineer",
  "Cloud Learner",
  "Open Source Builder",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingActive, setTypingActive] = useState(false);

  useEffect(() => {
    // start typing after initial 1200ms
    const start = setTimeout(() => setTypingActive(true), 1200);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!typingActive) return;

    const current = roles[roleIndex];
    let timeout: number;

    if (!isDeleting && text === current) {
      // pause at full text
      timeout = window.setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && text === "") {
      // move to next role
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 300);
    } else {
      const delta = isDeleting ? 38 : 75;
      timeout = window.setTimeout(() => {
        setText((t) =>
          isDeleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, typingActive]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-[52px] px-7 pb-[44px] items-center">
      {/* Left: copy */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mb-4 flex items-center gap-3"
        >
          <div className="w-[20px] h-[2px] bg-dp-lime" />
          <div className="font-mono text-[10px] text-dp-lime">FULL-STACK DEVELOPER</div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[40px] font-[700] leading-[1.1] text-dp-text-primary"
          style={{ fontFamily: "var(--font-space-grotesk)", letterSpacing: "-1px" }}
        >
          <span className="mr-2 text-white">Hi, I&apos;m</span>
          <span className="text-dp-orange"> Sahil</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="mt-4"
        >
          <div className="font-mono text-[13px] text-dp-lime">{text}<span className="inline-block w-[8px] h-[16px] align-middle bg-dp-orange ml-1 animate-pulse" /></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.45 }}
          className="mt-6 text-[13px] text-dp-text-secondary max-w-xl"
        >
          MCA student at DDU Nadiad. I build modern web apps with a focus on performance,
          accessibility, and delightful developer experience. I enjoy shipping components
          and contributing to open-source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.45 }}
          className="mt-6 flex items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center bg-dp-orange text-black text-[12px] font-semibold px-5 py-2 rounded-[6px]"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex items-center border border-dp-lime text-dp-lime text-[12px] px-5 py-2 rounded-[6px] hover:bg-dp-lime/10"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Right: terminal */}
      <motion.aside
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-dp-bg-2 border border-dp-border-primary rounded-[12px] p-4"
      >
        {/* window bar */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <div className="text-[12px] text-dp-text-secondary font-mono">devpilot — profile.json</div>
        </div>

        <pre className="font-mono text-[11px] leading-[1.9] text-dp-text-secondary m-0">
          <div>
            <span className="text-dp-orange">~$</span>{" "}
            <span className="text-dp-text-secondary">cat </span>
            <span className="text-dp-text-primary">developer.json</span>
          </div>
          <div className="text-dp-lime">{`{`}</div>
          <div>
            <span className="text-dp-amber">&quot;name&quot;:</span>{" "}
            <span className="text-dp-rose">&quot;Sahil&quot;,</span>
          </div>
          <div>
            <span className="text-dp-amber">&quot;role&quot;:</span>{" "}
            <span className="text-dp-rose">&quot;Full-Stack Developer&quot;,</span>
          </div>
          <div>
            <span className="text-dp-amber">&quot;stack&quot;:</span>{" "}
            <span className="text-dp-rose">[&quot;React&quot;,&quot;Node.js&quot;,&quot;MongoDB&quot;],</span>
          </div>
          <div>
            <span className="text-dp-amber">&quot;education&quot;:</span>{" "}
            <span className="text-dp-rose">&quot;MCA @ DDU Nadiad&quot;,</span>
          </div>
          <div>
            <span className="text-dp-amber">&quot;status&quot;:</span>{" "}
            <span className="text-dp-teal">&quot;Open to Work ✓&quot;</span>
          </div>
          <div className="text-dp-lime">{`}`}</div>
          <div className="mt-2">
            <span className="text-dp-orange">~$</span>{" "}
            <span className="inline-block w-[8px] h-[16px] bg-dp-orange ml-1 animate-pulse align-middle" />
          </div>
        </pre>
      </motion.aside>
    </section>
  );
}
