"use client";

import { useEffect, useState } from "react";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import {
  fallbackLandingContent,
  fetchLandingContent,
  isCmsRuntimeEnabled,
  type LandingContent,
} from "@/lib/landing-content";

export function HomeClient() {
  const [content, setContent] = useState<LandingContent>(fallbackLandingContent);

  useEffect(() => {
    let isMounted = true;

    if (!isCmsRuntimeEnabled()) {
      return () => {
        isMounted = false;
      };
    }

    fetchLandingContent().then((nextContent) => {
      if (isMounted) {
        setContent(nextContent);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    document.title = content.seoTitle;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content = content.seoDescription;
    }
  }, [content.seoDescription, content.seoTitle]);

  return (
    <div className="bg-background text-foreground">
      <Header content={content.header} />
      <main>
        <HeroSection content={content.hero} />
        <ServicesSection content={content.services} />
        <AdvantagesSection content={content.advantages} />
        <ProcessSection content={content.process} />
        <TrustSection content={content.trust} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
