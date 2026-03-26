import { Button } from "./ui/Button";
import { LandingContent } from "@/lib/landing-content";

type TrustSectionContent = LandingContent["trust"];

type TrustSectionProps = {
  content: TrustSectionContent;
};

export function TrustSection({ content }: TrustSectionProps) {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(120deg,#1e3a5f_0%,#2a5298_65%,#1e3a5f_100%)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
          {content.badge}
        </p>
        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          {content.title}
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-8 text-white/85">
          {content.description}
        </p>
        <Button href="#contacts" variant="outline">{content.buttonLabel}</Button>
      </div>
    </section>
  );
}
