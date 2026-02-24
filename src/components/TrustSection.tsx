import { Button } from "./ui/Button";

export function TrustSection() {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(120deg,#1e3a5f_0%,#2a5298_65%,#1e3a5f_100%)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
          Доверьте здание профессионалам
        </p>
        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          Работы выполняет специализированная сертифицированная команда
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-8 text-white/85">
          Мы объединяем инженерный аудит, техническое обслуживание и ремонтные
          работы в единую систему управления эксплуатацией объекта. Это
          обеспечивает предсказуемость затрат, прозрачную отчетность и высокий
          уровень безопасности.
        </p>
        <Button href="#contacts" variant="outline">
          Заказать бесплатный аудит
        </Button>
      </div>
    </section>
  );
}
