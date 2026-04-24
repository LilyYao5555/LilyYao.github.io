
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Ziying Research Notes",
  description: "记录临床、科研与成长中的思考",
head: [
  [
    "script",
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-WLTQW91H3Y",
    },
  ],
  [
    "script",
    {},
    `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WLTQW91H3Y');
    `,
  ],
],
  theme,
  
});