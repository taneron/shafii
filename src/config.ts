import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://shafii-madhhab.de",
  author: "Ibn Abdullah",
  desc: "Fiqh gemäß den Methoden von Imām ash-Shāfi'ī und denjenigen, die ihm darin folgten.",
  title: "Shāfi'ī-Madhhab 🇵🇸",
  ogImage: "shafii-logo-big.png",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://facebook.com/gershafiimadhhab",
    linkTitle: `${SITE.title} auf Facebook`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/shafiimadhhab",
    linkTitle: `${SITE.title} auf Telegram`,
    active: true,
  },

];
