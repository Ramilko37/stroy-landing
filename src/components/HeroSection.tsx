"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const metrics = [
  { value: "500+", label: "объектов на обслуживании" },
  { value: "24/7", label: "аварийная служба" },
  { value: "15 лет", label: "опыта в эксплуатации" },
];

export function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#2a52981a,transparent_45%),radial-gradient(circle_at_bottom_left,#f59e0b1f,transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,58,95,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,95,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-light"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Facility Management
          </motion.p>
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight text-dark md:text-5xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Профессиональное техническое обслуживание зданий и инженерных
            систем
          </motion.h1>
          <motion.p
            className="mb-8 max-w-xl text-lg leading-8 text-dark/80"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Комплексный мониторинг, плановый ремонт и аварийная поддержка
            24/7. Продлеваем срок службы вашего объекта и снижаем
            эксплуатационные расходы.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="#contacts">Получить коммерческое предложение</Button>
          </motion.div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary p-6 shadow-lg md:p-8"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={`${basePath}/hero-facility.webm`} type="video/webm" />
            <source src={`${basePath}/hero-facility.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-dark/80" />

          <div className="relative z-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/90">
            Ключевые показатели
            </p>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/25 bg-white/12 p-4 backdrop-blur-[2px]"
                >
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/85">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
