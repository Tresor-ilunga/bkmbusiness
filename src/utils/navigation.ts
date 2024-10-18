// An array of links for navigation bar
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "À propos", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
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
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};