const fallback = require('../data/default-landing-content');

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

function pickString(value, defaultValue = '') {
  return typeof value === 'string' && value.trim() ? value : defaultValue;
}

function normalizeLandingContent(entry) {
  if (!entry || typeof entry !== 'object') {
    return fallback;
  }

  return {
    seoTitle: pickString(entry.seoTitle, fallback.seoTitle),
    seoDescription: pickString(entry.seoDescription, fallback.seoDescription),
    header: {
      brandName: pickString(entry.header?.brandName, fallback.header.brandName),
      menuAriaLabel: pickString(entry.header?.menuAriaLabel, fallback.header.menuAriaLabel),
      ctaLabel: pickString(entry.header?.ctaLabel, fallback.header.ctaLabel),
      phoneDisplay: pickString(entry.header?.phoneDisplay, fallback.header.phoneDisplay),
      phoneHref: pickString(entry.header?.phoneHref, fallback.header.phoneHref),
      navItems: toArray(entry.header?.navItems).map((item) => ({
        href: pickString(item?.href, '#top'),
        label: pickString(item?.label, ''),
      })),
    },
    hero: {
      badge: pickString(entry.hero?.badge, fallback.hero.badge),
      title: pickString(entry.hero?.title, fallback.hero.title),
      description: pickString(entry.hero?.description, fallback.hero.description),
      primaryCtaLabel: pickString(entry.hero?.primaryCtaLabel, fallback.hero.primaryCtaLabel),
      chips: toArray(entry.hero?.chips).map((chip) => ({
        iconKey: pickString(chip?.iconKey, 'badgeCheck'),
        text: pickString(chip?.text, ''),
      })),
      spotlightBadge: pickString(entry.hero?.spotlightBadge, fallback.hero.spotlightBadge),
      spotlightTitle: pickString(entry.hero?.spotlightTitle, fallback.hero.spotlightTitle),
      spotlightDescription: pickString(
        entry.hero?.spotlightDescription,
        fallback.hero.spotlightDescription,
      ),
      metrics: toArray(entry.hero?.metrics).map((metric) => ({
        value: pickString(metric?.value, ''),
        label: pickString(metric?.label, ''),
        detail: pickString(metric?.detail, ''),
      })),
    },
    services: {
      badge: pickString(entry.services?.badge, fallback.services.badge),
      title: pickString(entry.services?.title, fallback.services.title),
      itpTitle: pickString(entry.services?.itpTitle, fallback.services.itpTitle),
      itpDescription: pickString(entry.services?.itpDescription, fallback.services.itpDescription),
      itpItems: toArray(entry.services?.itpItems).map((item) => ({
        iconKey: pickString(item?.iconKey, 'activity'),
        title: pickString(item?.title, ''),
        description: pickString(item?.description, ''),
      })),
      buildingTitle: pickString(entry.services?.buildingTitle, fallback.services.buildingTitle),
      buildingDescription: pickString(
        entry.services?.buildingDescription,
        fallback.services.buildingDescription,
      ),
      buildingItems: toArray(entry.services?.buildingItems).map((item) => ({
        iconKey: pickString(item?.iconKey, 'activity'),
        title: pickString(item?.title, ''),
        description: pickString(item?.description, ''),
      })),
    },
    advantages: {
      badge: pickString(entry.advantages?.badge, fallback.advantages.badge),
      title: pickString(entry.advantages?.title, fallback.advantages.title),
      items: toArray(entry.advantages?.items).map((item) => ({
        iconKey: pickString(item?.iconKey, 'badgeCheck'),
        title: pickString(item?.title, ''),
        text: pickString(item?.text, ''),
      })),
    },
    process: {
      badge: pickString(entry.process?.badge, fallback.process.badge),
      title: pickString(entry.process?.title, fallback.process.title),
      steps: toArray(entry.process?.steps).map((step) => ({
        title: pickString(step?.title, ''),
        description: pickString(step?.description, ''),
      })),
    },
    trust: {
      badge: pickString(entry.trust?.badge, fallback.trust.badge),
      title: pickString(entry.trust?.title, fallback.trust.title),
      description: pickString(entry.trust?.description, fallback.trust.description),
      buttonLabel: pickString(entry.trust?.buttonLabel, fallback.trust.buttonLabel),
    },
    footer: {
      badge: pickString(entry.footer?.badge, fallback.footer.badge),
      brandName: pickString(entry.footer?.brandName, fallback.footer.brandName),
      addressLabel: pickString(entry.footer?.addressLabel, fallback.footer.addressLabel),
      address: pickString(entry.footer?.address, fallback.footer.address),
      phoneLabel: pickString(entry.footer?.phoneLabel, fallback.footer.phoneLabel),
      phoneDisplay: pickString(entry.footer?.phoneDisplay, fallback.footer.phoneDisplay),
      phoneHref: pickString(entry.footer?.phoneHref, fallback.footer.phoneHref),
      emailLabel: pickString(entry.footer?.emailLabel, fallback.footer.emailLabel),
      email: pickString(entry.footer?.email, fallback.footer.email),
      emailHref: pickString(entry.footer?.emailHref, fallback.footer.emailHref),
      formTitle: pickString(entry.footer?.formTitle, fallback.footer.formTitle),
      nameLabel: pickString(entry.footer?.nameLabel, fallback.footer.nameLabel),
      namePlaceholder: pickString(entry.footer?.namePlaceholder, fallback.footer.namePlaceholder),
      phoneInputLabel: pickString(
        entry.footer?.phoneInputLabel,
        fallback.footer.phoneInputLabel,
      ),
      phonePlaceholder: pickString(
        entry.footer?.phonePlaceholder,
        fallback.footer.phonePlaceholder,
      ),
      submitButtonLabel: pickString(
        entry.footer?.submitButtonLabel,
        fallback.footer.submitButtonLabel,
      ),
      successMessage: pickString(entry.footer?.successMessage, fallback.footer.successMessage),
    },
  };
}

module.exports = {
  normalizeLandingContent,
};
