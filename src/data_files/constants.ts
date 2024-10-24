

export const SITE = {
  title: "bkmbusiness",
  tagline: "Innovons ensemble pour votre croissance.",
  description:
    "Nous nous engageons à transformer les petites et moyennes entreprises ainsi que les projets innovants des particuliers en leur offrant des solutions de développement sur mesure.",
  description_short:
    "Nous apportons des solutions innovantes pour aider les petites et moyennes entreprises à se progresser.",
  url: "https://bkmbusiness.com",
  author: "bkmbusiness",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : bkmbusiness`,
  description:
    "Nous apportons des solutions innovantes pour aider les petites et moyennes entreprises à se progresser.",
};
