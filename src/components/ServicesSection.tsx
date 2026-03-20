"use client";

import {
  Activity,
  ClipboardCheck,
  Gauge,
  Network,
  ShieldAlert,
  Snowflake,
  Wrench,
} from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { ServiceCard } from "./ui/ServiceCard";

const itpServices = [
  {
    icon: Activity,
    title: "Осмотр и диагностика",
    description:
      "Регулярная проверка всех компонентов ИТП и контроль параметров по режимным картам.",
  },
  {
    icon: Wrench,
    title: "Работа с оборудованием",
    description:
      "Очистка и промывка теплообменников, проверка насосов и запорной арматуры.",
  },
  {
    icon: Gauge,
    title: "Автоматика и КИП",
    description:
      "Настройка систем управления для эффективной работы и проверка контрольно-измерительных приборов.",
  },
  {
    icon: ClipboardCheck,
    title: "Документация",
    description:
      "Ведение регламентных журналов, заполнение технических карт и актов осмотра.",
  },
];

const buildingServices = [
  {
    icon: Network,
    title: "Инженерные сети",
    description:
      "Контроль электроснабжения, кабельных линий, заземления, систем водоснабжения и вентиляции.",
  },
  {
    icon: ShieldAlert,
    title: "Конструктивные элементы",
    description:
      "Текущие осмотры кровли, фасадов и фундаментов для сохранности и безопасной эксплуатации объекта.",
  },
  {
    icon: Snowflake,
    title: "Сезонная подготовка",
    description:
      "Подготовка здания и систем отопления к зимнему периоду с проверкой ключевых узлов.",
  },
  {
    icon: Activity,
    title: "Аварийное обслуживание 24/7",
    description:
      "Оперативное устранение неисправностей и круглосуточное реагирование сервисной бригады.",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
          Состав обслуживания
        </p>
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          Регламентные работы по ИТП и инженерным системам здания
        </h2>
      </div>

      <div className="mb-16">
        <h3 className="mb-3 text-2xl font-semibold text-dark">
          Что входит в обслуживание ИТП
        </h3>
        <p className="mb-6 max-w-4xl leading-7 text-dark/80">
          Регламентные работы проводятся для оптимизации теплопотребления и
          предотвращения аварий.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {itpServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <div id="building-systems">
        <h3 className="mb-3 text-2xl font-semibold text-dark">
          Обслуживание конструкций и систем здания
        </h3>
        <p className="mb-6 max-w-4xl leading-7 text-dark/80">
          Обеспечение санитарно-гигиенических норм и сохранности объекта.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {buildingServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
