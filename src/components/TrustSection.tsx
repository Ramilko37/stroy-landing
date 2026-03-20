import { Button } from "./ui/Button";

export function TrustSection() {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(120deg,#1e3a5f_0%,#2a5298_65%,#1e3a5f_100%)]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
          Аварийная устойчивость и контроль
        </p>
        <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          Техническое состояние здания под контролем аттестованной команды
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-8 text-white/85">
          Мы сопровождаем объект в формате единого сервиса: от режимных карт и
          регламентных работ до круглосуточной аварийной поддержки. Это
          снижает эксплуатационные риски и помогает держать расходы
          предсказуемыми.
        </p>
        <Button href="#contacts" variant="outline">
          Запросить коммерческое предложение
        </Button>
      </div>
    </section>
  );
}
