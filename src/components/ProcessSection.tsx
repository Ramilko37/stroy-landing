"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";

const steps = [
  {
    title: "Технический аудит объекта",
    description:
      "Проводим обследование инженерных систем и конструкций, фиксируем текущие риски и узкие места.",
  },
  {
    title: "План ТО и график работ",
    description:
      "Составляем регламент, определяем частоту осмотров и перечень обязательных профилактических мероприятий.",
  },
  {
    title: "Регулярное обслуживание",
    description:
      "Выполняем плановые осмотры, текущий ремонт и сезонную подготовку оборудования к нагрузкам.",
  },
  {
    title: "Отчетность и поддержка 24/7",
    description:
      "Предоставляем прозрачную отчетность и обеспечиваем оперативное реагирование на аварийные обращения.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
          Как мы работаем
        </p>
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          Понятный процесс обслуживания без простоев
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-primary/20 md:block" />
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative rounded-2xl border border-primary/10 bg-white p-6 pl-14 shadow-sm md:pl-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="absolute left-4 top-6 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-dark md:left-3">
                {index + 1}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-dark">{step.title}</h3>
              <p className="leading-7 text-dark/80">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
