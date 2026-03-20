"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarClock, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";

const metrics = [
  {
    value: "24/7",
    label: "Аварийная поддержка объекта",
    detail: "Оперативное устранение неисправностей без простоев.",
  },
  {
    value: "ИТП",
    label: "Контроль по режимным картам",
    detail: "Стабильная работа узлов и контроль параметров теплоносителя.",
  },
  {
    value: "Экономия",
    label: "Оптимизация коммунальных затрат",
    detail: "Балансировка режимов для эффективного теплопотребления.",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#2a52981f,transparent_42%),radial-gradient(circle_at_bottom_left,#f59e0b12,transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(30,58,95,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,95,0.035)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute -top-28 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid min-h-[calc(94vh-5rem)] w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <motion.p
            className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-light"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Эксплуатация и ИТП
          </motion.p>
          <motion.h1
            className="mb-6 max-w-[14ch] text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.02em] text-dark [text-wrap:balance]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Техническое обслуживание зданий и ИТП
          </motion.h1>
          <motion.p
            className="mb-9 max-w-[52ch] text-[1.125rem] font-medium leading-[1.72] tracking-[-0.006em] text-dark/72"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Комплекс работ по поддержанию работоспособности инженерных систем,
            конструктивных элементов здания и обеспечению их безаварийной
            эксплуатации.
          </motion.p>
          <motion.div
            className="mb-7"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              href="#contacts"
              className="px-7 py-3.5 text-[0.98rem] tracking-[0.005em] shadow-[0_12px_26px_-16px_rgba(245,158,11,0.95)]"
            >
              Получить план обслуживания
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
          >
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 text-[0.92rem] leading-none tracking-[0.003em] text-dark/78">
              <BadgeCheck size={16} className="text-primary" />
              Аттестованный персонал
            </span>
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 text-[0.92rem] leading-none tracking-[0.003em] text-dark/78">
              <CalendarClock size={16} className="text-primary" />
              Регламентная отчетность
            </span>
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 text-[0.92rem] leading-none tracking-[0.003em] text-dark/78">
              <ShieldCheck size={16} className="text-primary" />
              Безопасная эксплуатация
            </span>
          </motion.div>
        </div>

        <motion.div
          className="rounded-3xl border border-primary/15 bg-white/85 p-6 shadow-[0_28px_60px_-42px_rgba(20,35,63,0.7)] backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-6 rounded-2xl border border-primary/10 bg-[linear-gradient(150deg,#1e3a5f_0%,#2a5298_100%)] p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/72">
              Контроль без простоев
            </p>
            <p className="mt-3 text-[1.18rem] font-semibold leading-[1.25] tracking-[-0.01em]">
              Паспорт обслуживания объекта
            </p>
            <p className="mt-2 text-[0.94rem] leading-[1.6] tracking-[0.002em] text-white/80">
              График работ, параметры ИТП, осмотры конструкций и аварийные
              регламенты в единой системе.
            </p>
          </div>

          <div className="grid gap-3">
            {metrics.map((item) => (
              <article
                key={item.value}
                className="rounded-2xl border border-primary/12 bg-white p-4 shadow-[0_10px_25px_-20px_rgba(30,58,95,0.55)]"
              >
                <p className="text-[2rem] font-bold leading-none tracking-[-0.02em] text-primary">
                  {item.value}
                </p>
                <p className="mt-1 text-[1.02rem] font-semibold leading-[1.35] tracking-[-0.005em] text-dark/92">
                  {item.label}
                </p>
                <p className="mt-1 text-[0.93rem] leading-[1.58] tracking-[0.002em] text-dark/66">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
