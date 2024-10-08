
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "About", url: "/fr/about" },
  { name: "Services", url: "/fr/services" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Entreprise",
    links: [
      { name: "Services", url: "/services" },
      { name: "À propos", url: "/about" },
      { name: "Nous contactez", url: "/contact" },
    ],
  },
  {
    section: "Ressources",
    links: [
      { name: "Réservez un un rendez-vous", url: "#" },
      { name: "F.A.Q", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};