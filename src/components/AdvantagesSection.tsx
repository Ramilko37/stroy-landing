"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, TrendingDown } from "lucide-react";
import { AdvantageIconKey, LandingContent } from "@/lib/landing-content";
import { SectionWrapper } from "./ui/SectionWrapper";

const iconMap: Record<AdvantageIconKey, typeof BadgeCheck> = {
  trendingDown: TrendingDown,
  shieldCheck: ShieldCheck,
  badgeCheck: BadgeCheck,
};

type AdvantagesSectionContent = LandingContent["advantages"];

type AdvantagesSectionProps = {
  content: AdvantagesSectionContent;
};

export function AdvantagesSection({ content }: AdvantagesSectionProps) {
  return (
    <SectionWrapper id="advantages" className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
            {content.badge}
          </p>
          <h2 className="text-3xl font-bold text-dark md:text-4xl">{content.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = iconMap[item.iconKey] ?? BadgeCheck;

            return (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-dark">{item.title}</h3>
              <p className="text-sm leading-7 text-dark/80">{item.text}</p>
            </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
