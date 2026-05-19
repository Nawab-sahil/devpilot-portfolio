"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Mail, MapPin, MessageSquareText, Send, Smartphone, Github, Linkedin, Code } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/common/SectionHeader";

import SkillGroup from "@/components/skills/SkillGroup";
import Timeline from "@/components/common/Timeline";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { skills, timeline, profile } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="pb-20">
      <div id="home" className="scroll-mt-[72px]">
        <Hero />
      </div>

      <section id="projects" className="mx-auto scroll-mt-[72px] max-w-7xl border-t border-dp-border-primary px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[11px] font-semibold tracking-[0.32em] text-dp-orange">{String.fromCharCode(47, 47)} PROJECTS</span>
          <div className="h-px flex-1 bg-dp-border-primary" />
          <span className="font-mono text-[11px] text-dp-text-dark">06 total</span>
        </div>
        <ProjectGrid compact showFooterCta />
      </section>

      <section id="about" className="mx-auto scroll-mt-[72px] max-w-7xl border-t border-dp-border-primary px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="mb-9 flex items-center gap-4">
          <span className="font-mono text-[11px] font-semibold tracking-[0.32em] text-dp-orange">{String.fromCharCode(47, 47)} ABOUT</span>
          <div className="h-px flex-1 bg-dp-border-primary" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[18px] border border-dp-border-secondary bg-dp-bg-2 p-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dp-orange text-4xl font-bold text-black">S</div>
            <h3 className="mt-5 text-center text-3xl font-semibold text-dp-text-primary">{profile.name}</h3>
            <p className="mt-2 text-center text-sm text-dp-text-secondary">{profile.subheadline}</p>

            <div className="mt-4 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-dp-lime">
              {profile.headline}
            </div>

            <p className="mt-4 text-sm leading-7 text-dp-text-secondary">
              {profile.summary}
            </p>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-3 rounded-xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-text-secondary">
                <MapPin size={16} className="text-dp-amber" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-text-secondary">
                <GraduationCap size={16} className="text-dp-orange" />
                MCA 2025–2027 · BCA 2022–2025
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-sm text-dp-teal">
                <BriefcaseBusiness size={16} className="text-dp-teal" />
                WordPress · PHP · Java · SEO
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <span key={item} className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-dp-text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-7 pt-1">
            {timeline.map((item) => (
              <div key={item.year} className="grid grid-cols-[18px_1fr] gap-4">
                <div className="relative flex justify-center">
                  <span className="mt-1.5 h-3 w-3 rounded-full bg-dp-orange" />
                  <span className="absolute top-5 h-[42px] w-px bg-dp-border-primary" />
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-dp-orange">{item.year}</div>
                  <h4 className="mt-1 text-3xl font-medium text-dp-text-primary">{item.title}</h4>
                  <p className="mt-1 text-sm text-dp-text-secondary">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto scroll-mt-[72px] max-w-7xl border-t border-dp-border-primary px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader label="SKILLS" title="2x2 capability map" count="04 GROUPS" />
        <SkillGroup categories={skills} />
      </section>

      

      <section id="contact" className="mx-auto scroll-mt-[72px] max-w-7xl border-t border-dp-border-primary px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader label="CONTACT" title="Build something search-friendly" count="LET&apos;S TALK" />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.form
            className="dp-panel rounded-[24px] p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm text-dp-text-secondary">Name</span>
                <motion.input whileFocus={{ scale: 1.01 }} className="w-full rounded-lg border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-dp-text-primary outline-none ring-0 placeholder:text-dp-text-dark focus:border-dp-orange" placeholder="Your name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm text-dp-text-secondary">Email</span>
                <motion.input whileFocus={{ scale: 1.01 }} className="w-full rounded-lg border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-dp-text-primary outline-none ring-0 placeholder:text-dp-text-dark focus:border-dp-orange" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-sm text-dp-text-secondary">Message</span>
              <motion.textarea whileFocus={{ scale: 1.01 }} className="min-h-40 w-full rounded-lg border border-dp-border-secondary bg-dp-bg-3 px-4 py-3 text-dp-text-primary outline-none ring-0 placeholder:text-dp-text-dark focus:border-dp-orange" placeholder="Let&apos;s build something together..." />
            </label>

            <motion.button
              type="submit"
              className="mt-6 w-full rounded-xl border border-dp-border-secondary bg-dp-bg-2 px-5 py-3 text-sm font-semibold text-dp-text-primary transition-colors hover:border-dp-lime hover:text-dp-lime"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.aside
            className="space-y-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div whileHover={{ scale: 1.01 }} className="dp-panel rounded-[24px] p-6">
              <div className="font-mono text-[11px] tracking-[0.34em] text-dp-text-secondary">REACH OUT</div>
              <h2 className="mt-3 text-2xl font-semibold text-dp-text-primary">Build. Rank. Convert.</h2>
              <div className="mt-4 space-y-3 text-sm text-dp-text-secondary">
                <motion.div whileHover={{ scale: 1.01 }} className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3"><Mail size={16} className="text-dp-lime" /> SEO-friendly web apps, taxi brands, and client sites</motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3">
                  <Linkedin size={16} className="text-dp-teal" />
                  <a href="https://www.linkedin.com/in/sahil-nawab" target="_blank" rel="noreferrer" className="text-dp-text-secondary hover:text-dp-text-primary">linkedin.com/in/sahil-nawab</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3">
                  <Github size={16} className="text-dp-amber" />
                  <a href="https://github.com/Nawab-sahil/" target="_blank" rel="noreferrer" className="text-dp-text-secondary hover:text-dp-text-primary">github.com/Nawab-sahil</a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="flex items-center gap-3 rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-4 py-3">
                  <Code size={16} className="text-dp-lime" />
                  <a href="https://leetcode.com/u/nawabsahil/" target="_blank" rel="noreferrer" className="text-dp-text-secondary hover:text-dp-text-primary">leetcode.com/u/nawabsahil</a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="dp-panel rounded-[24px] p-5 border-dp-teal/30">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-3 w-3 rounded-full bg-dp-teal" />
                <div>
                  <div className="font-mono text-sm font-semibold text-dp-teal">Open to Work</div>
                  <div className="mt-1 text-sm text-dp-text-secondary">Available for WordPress, PHP, Java, ASP.NET, SEO, and DevOps-focused client work.</div>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      <motion.div
        className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="relative overflow-hidden rounded-[20px] border border-dp-border-secondary bg-dp-bg-2 px-6 py-10">
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-dp-orange via-dp-amber to-dp-lime" />
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-dp-bg-3 px-3 py-1 text-sm text-dp-teal mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-dp-teal" /> Available for work
            </div>
            <h3 className="text-3xl font-semibold text-dp-text-primary">Let&apos;s build something great.</h3>
            <p className="mt-2 text-sm text-dp-text-secondary">Remote roles · Freelance · SEO-first client work · Product builds</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <motion.a whileHover={{ scale: 1.03 }} href="#contact" className="rounded-xl border border-dp-border-secondary bg-dp-bg-2 px-6 py-2 font-mono text-sm font-semibold text-dp-text-primary transition-colors hover:border-dp-lime hover:text-dp-lime">Get In Touch</motion.a>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-xl border border-dp-border-secondary bg-dp-bg-2 px-6 py-2 font-mono text-sm font-semibold text-dp-text-primary transition-colors hover:border-dp-lime hover:text-dp-lime">
                <Link href="/resume">View Resume</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
