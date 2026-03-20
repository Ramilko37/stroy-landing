"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const navItems = [
  { href: "#services", label: "ИТП" },
  { href: "#building-systems", label: "Системы здания" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-primary/10 bg-white/88 shadow-[0_12px_34px_-26px_rgba(20,35,63,0.7)] backdrop-blur-xl"
          : "border-primary/5 bg-white/72 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="inline-flex items-center gap-3 text-[1.62rem] font-semibold tracking-[-0.02em] text-primary"
        >
          <Image
            src="/logo-house.svg"
            alt="Логотип ТехЭксплуатация"
            width={44}
            height={36}
            className="h-9 w-11 object-contain"
            priority
          />
          <span className="hidden sm:inline [text-wrap:balance]">ТехЭксплуатация</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-[0.95rem] font-medium tracking-[0.004em] text-dark/78 transition-colors duration-200 hover:text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/70 after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+79939265028"
            className="inline-flex items-center gap-2 text-[1rem] font-semibold tracking-[0.003em] text-primary"
          >
            <Phone size={16} />
            8-993-926-50-28
          </a>
          <Button href="#contacts" className="px-6 py-3 text-[0.93rem] tracking-[0.005em]">
            Вызвать инженера
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Открыть меню"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 text-primary lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-primary/10 bg-white/96 px-4 pb-5 pt-4 shadow-[0_20px_36px_-34px_rgba(20,35,63,0.8)] backdrop-blur-xl lg:hidden">
          <nav className="mb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-lg px-2 text-[1rem] font-medium tracking-[0.003em] text-dark/85 transition-colors hover:bg-primary/5 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+79939265028"
            className="mb-3 inline-flex min-h-11 items-center gap-2 text-[1rem] font-semibold tracking-[0.003em] text-primary"
          >
            <Phone size={16} />
            8-993-926-50-28
          </a>
          <Button href="#contacts" className="w-full text-[0.94rem] tracking-[0.004em]">
            Вызвать инженера
          </Button>
        </div>
      ) : null}
    </header>
  );
}
