"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
    >
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-dark">{title}</h3>
      <p className="leading-7 text-dark/80">{description}</p>
    </motion.article>
  );
}
