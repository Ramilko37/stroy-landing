"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { LandingContent } from "@/lib/landing-content";

type FooterSectionContent = LandingContent["footer"];

type FooterProps = {
  content: FooterSectionContent;
};

export function Footer({ content }: FooterProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      return;
    }
    setIsSubmitted(true);
    setName("");
    setPhone("");
  };

  return (
    <footer id="contacts" className="bg-dark text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
            {content.badge}
          </p>
          <div className="mb-6 inline-flex items-center gap-3">
            <Image
              src={`${basePath}/logo-house.svg`}
              alt="Логотип ТехЭксплуатация"
              width={48}
              height={38}
              className="h-10 w-12 rounded-md bg-white/90 p-1 object-contain"
            />
            <h3 className="text-3xl font-bold">{content.brandName}</h3>
          </div>
          <ul className="space-y-3 text-white/85">
            <li>
              {content.addressLabel}: {content.address}
            </li>
            <li>
              {content.phoneLabel}:{" "}
              <a href={content.phoneHref} className="text-accent">
                {content.phoneDisplay}
              </a>
            </li>
            <li>
              {content.emailLabel}:{" "}
              <a href={content.emailHref} className="text-accent">
                {content.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
          <h4 className="mb-4 text-xl font-semibold">{content.formTitle}</h4>
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">{content.nameLabel}</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={content.namePlaceholder}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">
                {content.phoneInputLabel}
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={content.phonePlaceholder}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark transition hover:bg-[color:color-mix(in_oklab,var(--accent),black_10%)]"
            >
              {content.submitButtonLabel}
            </button>
            {isSubmitted ? (
              <p className="text-sm text-emerald-300">{content.successMessage}</p>
            ) : null}
          </form>
        </div>
      </div>
    </footer>
  );
}
