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
  instagram: "https://www.instagram.com/_bkmbusiness_rdc_/profilecard/?igsh=OGg5Z3d5MnR3OW9h",
  linkedin: "https://www.linkedin.com/company/bkm-business/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};