"use client";

import { Building2, Search, Siren, Zap } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { ServiceCard } from "./ui/ServiceCard";

const services = [
  {
    icon: Zap,
    title: "Инженерные системы",
    description:
      "Обслуживание сетей электро-, тепло-, водоснабжения, канализации, вентиляции, кондиционирования и лифтового хозяйства.",
  },
  {
    icon: Building2,
    title: "Конструктивные элементы",
    description:
      "Регулярный осмотр и ремонт фасадов, кровель, фундаментов и несущих стен для предотвращения разрушений.",
  },
  {
    icon: Search,
    title: "Системный мониторинг",
    description:
      "Сезонные осмотры, частичные проверки и внеплановые инспекции после аварийных ситуаций.",
  },
  {
    icon: Siren,
    title: "Аварийная служба 24/7",
    description:
      "Круглосуточное устранение неисправностей и оперативный выезд бригады для восстановления работы объекта.",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
          Что мы делаем
        </p>
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          Полный цикл технического обслуживания здания
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
