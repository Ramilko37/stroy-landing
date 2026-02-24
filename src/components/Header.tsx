"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#about", label: "О нас" },
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
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled
          ? "border-primary/10 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="text-xl font-bold tracking-tight text-primary">
          ТехЭксплуатация
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dark/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+78001234567"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone size={16} />
            +7 (800) 123-45-67
          </a>
          <Button href="#contacts">Вызвать инженера</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Открыть меню"
          className="inline-flex rounded-lg border border-primary/20 p-2 text-primary lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-primary/10 bg-white px-4 py-4 shadow-sm lg:hidden">
          <nav className="mb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-dark/85"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+78001234567"
            className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone size={16} />
            +7 (800) 123-45-67
          </a>
          <Button href="#contacts" className="w-full">
            Вызвать инженера
          </Button>
        </div>
      ) : null}
    </header>
  );
}
