"use client";

import { motion } from "framer-motion";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
