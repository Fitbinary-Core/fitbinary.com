"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  PersonStanding,
  Users,
  Trophy,
  Heart,
  Swords,
} from "lucide-react";

const industries = [
  {
    Icon: Dumbbell,
    name: "Gyms & Fitness Centers",
    desc: "Full-scale gym management from memberships to multi-branch operations.",
  },
  {
    Icon: PersonStanding,
    name: "Yoga & Pilates Studios",
    desc: "Class scheduling, instructor management, and member retention built in.",
  },
  {
    Icon: Users,
    name: "Personal Trainers",
    desc: "Manage clients, sessions, and progress tracking from one place.",
  },
  {
    Icon: Trophy,
    name: "Sports Academies",
    desc: "Enrollment, coaching staff, and performance tracking for academies of any size.",
  },
  {
    Icon: Heart,
    name: "Wellness Centers",
    desc: "Appointments, memberships, and inventory for modern wellness businesses.",
  },
  {
    Icon: Swords,
    name: "Martial Arts & MMA",
    desc: "Belt tracking, class scheduling, and member management for combat sports clubs.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-zinc-50 px-6 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-zinc-200 mb-4">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                Who we serve
              </span>
            </div>
            <h2 className="text-3xl lg:text-[2.75rem] font-black tracking-[-0.03em] text-zinc-900 leading-[1.08]">
              Built for every corner
              <br />
              <span className="text-zinc-400">of the fitness industry.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-[16px] leading-relaxed max-w-sm lg:text-right">
            Whether you run a single studio or a chain of locations, Fitbinary
            products are designed to scale with you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(({ Icon, name, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mb-4 group-hover:bg-zinc-200 transition-colors duration-300">
                <Icon className="w-5 h-5 text-zinc-600" />
              </div>
              <h3 className="text-[15px] font-bold text-zinc-900 mb-1.5 tracking-tight">
                {name}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
