import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Ziying Research Notes",
  description: "记录临床、科研与成长中的思考",

  theme,
});