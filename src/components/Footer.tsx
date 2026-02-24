"use client";

import { FormEvent, useState } from "react";

export function Footer() {
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
            Контакты
          </p>
          <h3 className="mb-6 text-3xl font-bold">ТехЭксплуатация</h3>
          <ul className="space-y-3 text-white/85">
            <li>Адрес: г. Москва, Пресненская наб., 8</li>
            <li>
              Телефон:{" "}
              <a href="tel:+78001234567" className="text-accent">
                +7 (800) 123-45-67
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:info@tehexp.ru" className="text-accent">
                info@tehexp.ru
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
          <h4 className="mb-4 text-xl font-semibold">
            Оставьте заявку на бесплатный первичный осмотр
          </h4>
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">Ваше имя</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Иван Петров"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/70">Телефон</span>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45 focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark transition hover:bg-[color:color-mix(in_oklab,var(--accent),black_10%)]"
            >
              Оставить заявку
            </button>
            {isSubmitted ? (
              <p className="text-sm text-emerald-300">
                Спасибо! Мы свяжемся с вами в течение 15 минут.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </footer>
  );
}
