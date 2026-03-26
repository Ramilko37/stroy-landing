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
import { LandingContent, ServiceIconKey } from "@/lib/landing-content";
import { SectionWrapper } from "./ui/SectionWrapper";
import { ServiceCard } from "./ui/ServiceCard";

const iconMap: Record<ServiceIconKey, typeof Activity> = {
  activity: Activity,
  wrench: Wrench,
  gauge: Gauge,
  clipboardCheck: ClipboardCheck,
  network: Network,
  shieldAlert: ShieldAlert,
  snowflake: Snowflake,
};

type ServicesSectionContent = LandingContent["services"];

type ServicesSectionProps = {
  content: ServicesSectionContent;
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <SectionWrapper
      id="services"
      className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
          {content.badge}
        </p>
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          {content.title}
        </h2>
      </div>

      <div className="mb-16">
        <h3 className="mb-3 text-2xl font-semibold text-dark">{content.itpTitle}</h3>
        <p className="mb-6 max-w-4xl leading-7 text-dark/80">
          {content.itpDescription}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.itpItems.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={iconMap[service.iconKey] ?? Activity}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <div id="building-systems">
        <h3 className="mb-3 text-2xl font-semibold text-dark">{content.buildingTitle}</h3>
        <p className="mb-6 max-w-4xl leading-7 text-dark/80">{content.buildingDescription}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.buildingItems.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={iconMap[service.iconKey] ?? Activity}
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
