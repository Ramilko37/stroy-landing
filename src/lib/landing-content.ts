export type HeroChipIconKey = "badgeCheck" | "calendarClock" | "shieldCheck";

export type ServiceIconKey =
  | "activity"
  | "wrench"
  | "gauge"
  | "clipboardCheck"
  | "network"
  | "shieldAlert"
  | "snowflake";

export type AdvantageIconKey = "trendingDown" | "shieldCheck" | "badgeCheck";

export type LandingContent = {
  seoTitle: string;
  seoDescription: string;
  header: {
    brandName: string;
    menuAriaLabel: string;
    ctaLabel: string;
    phoneDisplay: string;
    phoneHref: string;
    navItems: Array<{ href: string; label: string }>;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    chips: Array<{ iconKey: HeroChipIconKey; text: string }>;
    spotlightBadge: string;
    spotlightTitle: string;
    spotlightDescription: string;
    metrics: Array<{ value: string; label: string; detail: string }>;
  };
  services: {
    badge: string;
    title: string;
    itpTitle: string;
    itpDescription: string;
    itpItems: Array<{ iconKey: ServiceIconKey; title: string; description: string }>;
    buildingTitle: string;
    buildingDescription: string;
    buildingItems: Array<{ iconKey: ServiceIconKey; title: string; description: string }>;
  };
  advantages: {
    badge: string;
    title: string;
    items: Array<{ iconKey: AdvantageIconKey; title: string; text: string }>;
  };
  process: {
    badge: string;
    title: string;
    steps: Array<{ title: string; description: string }>;
  };
  trust: {
    badge: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  footer: {
    badge: string;
    brandName: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phoneDisplay: string;
    phoneHref: string;
    emailLabel: string;
    email: string;
    emailHref: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneInputLabel: string;
    phonePlaceholder: string;
    submitButtonLabel: string;
    successMessage: string;
  };
};

export const fallbackLandingContent: LandingContent = {
  seoTitle: "ТехЭксплуатация | Техническое обслуживание зданий и ИТП",
  seoDescription:
    "Комплекс работ по поддержанию работоспособности инженерных систем, конструктивных элементов здания и обеспечению их безаварийной эксплуатации.",
  header: {
    brandName: "ТехЭксплуатация",
    menuAriaLabel: "Открыть меню",
    ctaLabel: "Вызвать инженера",
    phoneDisplay: "8-993-926-50-28",
    phoneHref: "tel:+79939265028",
    navItems: [
      { href: "#services", label: "ИТП" },
      { href: "#building-systems", label: "Системы здания" },
      { href: "#advantages", label: "Преимущества" },
      { href: "#contacts", label: "Контакты" },
    ],
  },
  hero: {
    badge: "Эксплуатация и ИТП",
    title: "Техническое обслуживание зданий и ИТП",
    description:
      "Комплекс работ по поддержанию работоспособности инженерных систем, конструктивных элементов здания и обеспечению их безаварийной эксплуатации.",
    primaryCtaLabel: "Получить план обслуживания",
    chips: [
      { iconKey: "badgeCheck", text: "Аттестованный персонал" },
      { iconKey: "calendarClock", text: "Регламентная отчетность" },
      { iconKey: "shieldCheck", text: "Безопасная эксплуатация" },
    ],
    spotlightBadge: "Контроль без простоев",
    spotlightTitle: "Паспорт обслуживания объекта",
    spotlightDescription:
      "График работ, параметры ИТП, осмотры конструкций и аварийные регламенты в единой системе.",
    metrics: [
      {
        value: "24/7",
        label: "Аварийная поддержка объекта",
        detail: "Оперативное устранение неисправностей без простоев.",
      },
      {
        value: "ИТП",
        label: "Контроль по режимным картам",
        detail: "Стабильная работа узлов и контроль параметров теплоносителя.",
      },
      {
        value: "Экономия",
        label: "Оптимизация коммунальных затрат",
        detail: "Балансировка режимов для эффективного теплопотребления.",
      },
    ],
  },
  services: {
    badge: "Состав обслуживания",
    title: "Регламентные работы по ИТП и инженерным системам здания",
    itpTitle: "Что входит в обслуживание ИТП",
    itpDescription:
      "Регламентные работы проводятся для оптимизации теплопотребления и предотвращения аварий.",
    itpItems: [
      {
        iconKey: "activity",
        title: "Осмотр и диагностика",
        description:
          "Регулярная проверка всех компонентов ИТП и контроль параметров по режимным картам.",
      },
      {
        iconKey: "wrench",
        title: "Работа с оборудованием",
        description:
          "Очистка и промывка теплообменников, проверка насосов и запорной арматуры.",
      },
      {
        iconKey: "gauge",
        title: "Автоматика и КИП",
        description:
          "Настройка систем управления для эффективной работы и проверка контрольно-измерительных приборов.",
      },
      {
        iconKey: "clipboardCheck",
        title: "Документация",
        description:
          "Ведение регламентных журналов, заполнение технических карт и актов осмотра.",
      },
    ],
    buildingTitle: "Обслуживание конструкций и систем здания",
    buildingDescription: "Обеспечение санитарно-гигиенических норм и сохранности объекта.",
    buildingItems: [
      {
        iconKey: "network",
        title: "Инженерные сети",
        description:
          "Контроль электроснабжения, кабельных линий, заземления, систем водоснабжения и вентиляции.",
      },
      {
        iconKey: "shieldAlert",
        title: "Конструктивные элементы",
        description:
          "Текущие осмотры кровли, фасадов и фундаментов для сохранности и безопасной эксплуатации объекта.",
      },
      {
        iconKey: "snowflake",
        title: "Сезонная подготовка",
        description:
          "Подготовка здания и систем отопления к зимнему периоду с проверкой ключевых узлов.",
      },
      {
        iconKey: "activity",
        title: "Аварийное обслуживание 24/7",
        description:
          "Оперативное устранение неисправностей и круглосуточное реагирование сервисной бригады.",
      },
    ],
  },
  advantages: {
    badge: "Преимущества для клиента",
    title: "Экономия, безопасность и прозрачный сервис",
    items: [
      {
        iconKey: "trendingDown",
        title: "Снижение затрат",
        text: "Оптимизация режимов работы ИТП позволяет экономить на коммунальных платежах.",
      },
      {
        iconKey: "shieldCheck",
        title: "Безопасность",
        text: "Предотвращение затоплений подвалов и выхода оборудования из строя.",
      },
      {
        iconKey: "badgeCheck",
        title: "Профессионализм",
        text: "Работы выполняются аттестованным персоналом с опытом эксплуатации инженерных систем.",
      },
    ],
  },
  process: {
    badge: "Как мы работаем",
    title: "Пошаговая организация обслуживания объекта",
    steps: [
      {
        title: "Первичный осмотр объекта",
        description:
          "Проводим диагностику инженерных систем и конструктивных элементов, фиксируем зоны риска.",
      },
      {
        title: "Согласование регламента",
        description:
          "Формируем график осмотров и перечень обязательных профилактических работ по ИТП и зданию.",
      },
      {
        title: "Плановое и сезонное обслуживание",
        description:
          "Выполняем регламентные работы, подготовку к зимнему периоду и текущее устранение замечаний.",
      },
      {
        title: "Документация и 24/7 поддержка",
        description:
          "Ведем журналы, акты и технические карты, обеспечивая оперативное реагирование на аварии.",
      },
    ],
  },
  trust: {
    badge: "Аварийная устойчивость и контроль",
    title: "Техническое состояние здания под контролем аттестованной команды",
    description:
      "Мы сопровождаем объект в формате единого сервиса: от режимных карт и регламентных работ до круглосуточной аварийной поддержки. Это снижает эксплуатационные риски и помогает держать расходы предсказуемыми.",
    buttonLabel: "Запросить коммерческое предложение",
  },
  footer: {
    badge: "Контакты",
    brandName: "ТехЭксплуатация",
    addressLabel: "Адрес",
    address: "Ступинский проезд, д. 1А",
    phoneLabel: "Телефон",
    phoneDisplay: "8-993-926-50-28",
    phoneHref: "tel:+79939265028",
    emailLabel: "Email",
    email: "info@tehexp.ru",
    emailHref: "mailto:info@tehexp.ru",
    formTitle: "Оставьте заявку на бесплатный первичный осмотр",
    nameLabel: "Ваше имя",
    namePlaceholder: "Иван Петров",
    phoneInputLabel: "Телефон",
    phonePlaceholder: "+7 (___) ___-__-__",
    submitButtonLabel: "Оставить заявку",
    successMessage: "Спасибо! Мы свяжемся с вами в течение 15 минут.",
  },
};

type LandingContentResponse = {
  data?: Partial<LandingContent>;
};

const cmsEndpointPath = "/api/public/landing-content";

function normalizeUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function toArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function mergeWithFallback(content?: Partial<LandingContent>): LandingContent {
  if (!content) {
    return fallbackLandingContent;
  }

  const headerNav = toArray<{ href?: string; label?: string }>(content.header?.navItems)
    .map((item) => ({
      href: isNonEmptyString(item.href) ? item.href : "#top",
      label: isNonEmptyString(item.label) ? item.label : "",
    }))
    .filter((item) => item.label);

  return {
    seoTitle: isNonEmptyString(content.seoTitle) ? content.seoTitle : fallbackLandingContent.seoTitle,
    seoDescription: isNonEmptyString(content.seoDescription)
      ? content.seoDescription
      : fallbackLandingContent.seoDescription,
    header: {
      brandName: isNonEmptyString(content.header?.brandName)
        ? content.header.brandName
        : fallbackLandingContent.header.brandName,
      menuAriaLabel: isNonEmptyString(content.header?.menuAriaLabel)
        ? content.header.menuAriaLabel
        : fallbackLandingContent.header.menuAriaLabel,
      ctaLabel: isNonEmptyString(content.header?.ctaLabel)
        ? content.header.ctaLabel
        : fallbackLandingContent.header.ctaLabel,
      phoneDisplay: isNonEmptyString(content.header?.phoneDisplay)
        ? content.header.phoneDisplay
        : fallbackLandingContent.header.phoneDisplay,
      phoneHref: isNonEmptyString(content.header?.phoneHref)
        ? content.header.phoneHref
        : fallbackLandingContent.header.phoneHref,
      navItems: headerNav.length > 0 ? headerNav : fallbackLandingContent.header.navItems,
    },
    hero: {
      badge: isNonEmptyString(content.hero?.badge)
        ? content.hero.badge
        : fallbackLandingContent.hero.badge,
      title: isNonEmptyString(content.hero?.title)
        ? content.hero.title
        : fallbackLandingContent.hero.title,
      description: isNonEmptyString(content.hero?.description)
        ? content.hero.description
        : fallbackLandingContent.hero.description,
      primaryCtaLabel: isNonEmptyString(content.hero?.primaryCtaLabel)
        ? content.hero.primaryCtaLabel
        : fallbackLandingContent.hero.primaryCtaLabel,
      chips:
        toArray<{ iconKey?: HeroChipIconKey; text?: string }>(content.hero?.chips)
          .map((chip) => ({
            iconKey: chip.iconKey ?? "badgeCheck",
            text: isNonEmptyString(chip.text) ? chip.text : "",
          }))
          .filter((chip) => chip.text).length > 0
          ? toArray<{ iconKey?: HeroChipIconKey; text?: string }>(content.hero?.chips)
              .map((chip) => ({
                iconKey: chip.iconKey ?? "badgeCheck",
                text: isNonEmptyString(chip.text) ? chip.text : "",
              }))
              .filter((chip) => chip.text)
          : fallbackLandingContent.hero.chips,
      spotlightBadge: isNonEmptyString(content.hero?.spotlightBadge)
        ? content.hero.spotlightBadge
        : fallbackLandingContent.hero.spotlightBadge,
      spotlightTitle: isNonEmptyString(content.hero?.spotlightTitle)
        ? content.hero.spotlightTitle
        : fallbackLandingContent.hero.spotlightTitle,
      spotlightDescription: isNonEmptyString(content.hero?.spotlightDescription)
        ? content.hero.spotlightDescription
        : fallbackLandingContent.hero.spotlightDescription,
      metrics:
        toArray<{ value?: string; label?: string; detail?: string }>(content.hero?.metrics)
          .map((metric) => ({
            value: isNonEmptyString(metric.value) ? metric.value : "",
            label: isNonEmptyString(metric.label) ? metric.label : "",
            detail: isNonEmptyString(metric.detail) ? metric.detail : "",
          }))
          .filter((metric) => metric.value && metric.label).length > 0
          ? toArray<{ value?: string; label?: string; detail?: string }>(content.hero?.metrics)
              .map((metric) => ({
                value: isNonEmptyString(metric.value) ? metric.value : "",
                label: isNonEmptyString(metric.label) ? metric.label : "",
                detail: isNonEmptyString(metric.detail) ? metric.detail : "",
              }))
              .filter((metric) => metric.value && metric.label)
          : fallbackLandingContent.hero.metrics,
    },
    services: {
      badge: isNonEmptyString(content.services?.badge)
        ? content.services.badge
        : fallbackLandingContent.services.badge,
      title: isNonEmptyString(content.services?.title)
        ? content.services.title
        : fallbackLandingContent.services.title,
      itpTitle: isNonEmptyString(content.services?.itpTitle)
        ? content.services.itpTitle
        : fallbackLandingContent.services.itpTitle,
      itpDescription: isNonEmptyString(content.services?.itpDescription)
        ? content.services.itpDescription
        : fallbackLandingContent.services.itpDescription,
      itpItems:
        toArray<{ iconKey?: ServiceIconKey; title?: string; description?: string }>(
          content.services?.itpItems,
        )
          .map((item) => ({
            iconKey: item.iconKey ?? "activity",
            title: isNonEmptyString(item.title) ? item.title : "",
            description: isNonEmptyString(item.description) ? item.description : "",
          }))
          .filter((item) => item.title && item.description).length > 0
          ? toArray<{ iconKey?: ServiceIconKey; title?: string; description?: string }>(
              content.services?.itpItems,
            )
              .map((item) => ({
                iconKey: item.iconKey ?? "activity",
                title: isNonEmptyString(item.title) ? item.title : "",
                description: isNonEmptyString(item.description) ? item.description : "",
              }))
              .filter((item) => item.title && item.description)
          : fallbackLandingContent.services.itpItems,
      buildingTitle: isNonEmptyString(content.services?.buildingTitle)
        ? content.services.buildingTitle
        : fallbackLandingContent.services.buildingTitle,
      buildingDescription: isNonEmptyString(content.services?.buildingDescription)
        ? content.services.buildingDescription
        : fallbackLandingContent.services.buildingDescription,
      buildingItems:
        toArray<{ iconKey?: ServiceIconKey; title?: string; description?: string }>(
          content.services?.buildingItems,
        )
          .map((item) => ({
            iconKey: item.iconKey ?? "activity",
            title: isNonEmptyString(item.title) ? item.title : "",
            description: isNonEmptyString(item.description) ? item.description : "",
          }))
          .filter((item) => item.title && item.description).length > 0
          ? toArray<{ iconKey?: ServiceIconKey; title?: string; description?: string }>(
              content.services?.buildingItems,
            )
              .map((item) => ({
                iconKey: item.iconKey ?? "activity",
                title: isNonEmptyString(item.title) ? item.title : "",
                description: isNonEmptyString(item.description) ? item.description : "",
              }))
              .filter((item) => item.title && item.description)
          : fallbackLandingContent.services.buildingItems,
    },
    advantages: {
      badge: isNonEmptyString(content.advantages?.badge)
        ? content.advantages.badge
        : fallbackLandingContent.advantages.badge,
      title: isNonEmptyString(content.advantages?.title)
        ? content.advantages.title
        : fallbackLandingContent.advantages.title,
      items:
        toArray<{ iconKey?: AdvantageIconKey; title?: string; text?: string }>(
          content.advantages?.items,
        )
          .map((item) => ({
            iconKey: item.iconKey ?? "badgeCheck",
            title: isNonEmptyString(item.title) ? item.title : "",
            text: isNonEmptyString(item.text) ? item.text : "",
          }))
          .filter((item) => item.title && item.text).length > 0
          ? toArray<{ iconKey?: AdvantageIconKey; title?: string; text?: string }>(
              content.advantages?.items,
            )
              .map((item) => ({
                iconKey: item.iconKey ?? "badgeCheck",
                title: isNonEmptyString(item.title) ? item.title : "",
                text: isNonEmptyString(item.text) ? item.text : "",
              }))
              .filter((item) => item.title && item.text)
          : fallbackLandingContent.advantages.items,
    },
    process: {
      badge: isNonEmptyString(content.process?.badge)
        ? content.process.badge
        : fallbackLandingContent.process.badge,
      title: isNonEmptyString(content.process?.title)
        ? content.process.title
        : fallbackLandingContent.process.title,
      steps:
        toArray<{ title?: string; description?: string }>(content.process?.steps)
          .map((step) => ({
            title: isNonEmptyString(step.title) ? step.title : "",
            description: isNonEmptyString(step.description) ? step.description : "",
          }))
          .filter((step) => step.title && step.description).length > 0
          ? toArray<{ title?: string; description?: string }>(content.process?.steps)
              .map((step) => ({
                title: isNonEmptyString(step.title) ? step.title : "",
                description: isNonEmptyString(step.description) ? step.description : "",
              }))
              .filter((step) => step.title && step.description)
          : fallbackLandingContent.process.steps,
    },
    trust: {
      badge: isNonEmptyString(content.trust?.badge)
        ? content.trust.badge
        : fallbackLandingContent.trust.badge,
      title: isNonEmptyString(content.trust?.title)
        ? content.trust.title
        : fallbackLandingContent.trust.title,
      description: isNonEmptyString(content.trust?.description)
        ? content.trust.description
        : fallbackLandingContent.trust.description,
      buttonLabel: isNonEmptyString(content.trust?.buttonLabel)
        ? content.trust.buttonLabel
        : fallbackLandingContent.trust.buttonLabel,
    },
    footer: {
      badge: isNonEmptyString(content.footer?.badge)
        ? content.footer.badge
        : fallbackLandingContent.footer.badge,
      brandName: isNonEmptyString(content.footer?.brandName)
        ? content.footer.brandName
        : fallbackLandingContent.footer.brandName,
      addressLabel: isNonEmptyString(content.footer?.addressLabel)
        ? content.footer.addressLabel
        : fallbackLandingContent.footer.addressLabel,
      address: isNonEmptyString(content.footer?.address)
        ? content.footer.address
        : fallbackLandingContent.footer.address,
      phoneLabel: isNonEmptyString(content.footer?.phoneLabel)
        ? content.footer.phoneLabel
        : fallbackLandingContent.footer.phoneLabel,
      phoneDisplay: isNonEmptyString(content.footer?.phoneDisplay)
        ? content.footer.phoneDisplay
        : fallbackLandingContent.footer.phoneDisplay,
      phoneHref: isNonEmptyString(content.footer?.phoneHref)
        ? content.footer.phoneHref
        : fallbackLandingContent.footer.phoneHref,
      emailLabel: isNonEmptyString(content.footer?.emailLabel)
        ? content.footer.emailLabel
        : fallbackLandingContent.footer.emailLabel,
      email: isNonEmptyString(content.footer?.email)
        ? content.footer.email
        : fallbackLandingContent.footer.email,
      emailHref: isNonEmptyString(content.footer?.emailHref)
        ? content.footer.emailHref
        : fallbackLandingContent.footer.emailHref,
      formTitle: isNonEmptyString(content.footer?.formTitle)
        ? content.footer.formTitle
        : fallbackLandingContent.footer.formTitle,
      nameLabel: isNonEmptyString(content.footer?.nameLabel)
        ? content.footer.nameLabel
        : fallbackLandingContent.footer.nameLabel,
      namePlaceholder: isNonEmptyString(content.footer?.namePlaceholder)
        ? content.footer.namePlaceholder
        : fallbackLandingContent.footer.namePlaceholder,
      phoneInputLabel: isNonEmptyString(content.footer?.phoneInputLabel)
        ? content.footer.phoneInputLabel
        : fallbackLandingContent.footer.phoneInputLabel,
      phonePlaceholder: isNonEmptyString(content.footer?.phonePlaceholder)
        ? content.footer.phonePlaceholder
        : fallbackLandingContent.footer.phonePlaceholder,
      submitButtonLabel: isNonEmptyString(content.footer?.submitButtonLabel)
        ? content.footer.submitButtonLabel
        : fallbackLandingContent.footer.submitButtonLabel,
      successMessage: isNonEmptyString(content.footer?.successMessage)
        ? content.footer.successMessage
        : fallbackLandingContent.footer.successMessage,
    },
  };
}

export function isCmsRuntimeEnabled(): boolean {
  const cmsUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!isNonEmptyString(cmsUrl)) {
    return false;
  }

  if (process.env.NODE_ENV === "development") {
    return true;
  }

  return process.env.NEXT_PUBLIC_ENABLE_CMS_IN_PROD === "true";
}

export async function fetchLandingContent(): Promise<LandingContent> {
  if (!isCmsRuntimeEnabled()) {
    return fallbackLandingContent;
  }

  const cmsUrl = normalizeUrl(process.env.NEXT_PUBLIC_STRAPI_URL as string);

  try {
    const response = await fetch(`${cmsUrl}${cmsEndpointPath}`, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as LandingContentResponse;
    return mergeWithFallback(payload.data);
  } catch (error) {
    console.warn("Falling back to local content. Failed to load Strapi content.", error);
    return fallbackLandingContent;
  }
}
