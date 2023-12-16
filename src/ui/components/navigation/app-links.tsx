import { AppLinks, FooterLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/projets",
    type: "internal",
  },
  {
    label: "Coders Monkeys",
    baseUrl: "/codersMonkeys",
    type: "internal",
  },
  {
    label: "Formations",
    baseUrl: "https://www.youtube.com/@remotemonkey",
    type: "external",
  },
];

const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
    type: "internal",
  },
];

const footerInformationsLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "À propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];

const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com/@remotemonkey",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "Linkedin",
    baseUrl: "https://fr.linkedin.com/",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Slack",
    baseUrl: "https://slack.com/intl/fr-ma/",
    type: "external",
    icon: RiSlackFill,
  },
];

const footerLinks: FooterLinks[] = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationsLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];

export { footerLinks, footerSocialNetworksLinks };
