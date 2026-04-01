import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "我的栏目",
      icon: "table-columns",
      expanded: true,
      children: [
        { text: "关于我", icon: "user", link: "intro" },
        { text: "研究笔记", icon: "book-open", link: "notes/" },
        { text: "论文与项目", icon: "flask", link: "research/" },
        { text: "临床笔记", icon: "stethoscope", link: "clinical/" },
      ],
    },
  ],

  "/notes/": [
    "",
    {
      text: "研究笔记",
      icon: "book-open",
      expanded: true,
      children: [
        { text: "文献阅读", icon: "book", link: "literature/" },
        { text: "Meta分析方法", icon: "chart-line", link: "meta-analysis/" },
        { text: "医学统计与R", icon: "chart-column", link: "statistics-r/" },
        { text: "医学写作", icon: "pen-to-square", link: "medical-writing/" },
        { text: "影像与研究设计", icon: "microscope", link: "imaging-research/" },
      ],
    },
  ],

  "/research/": [
    "",
    {
      text: "论文与项目",
      icon: "flask",
      expanded: true,
      children: [
        { text: "已发表论文", icon: "file-lines", link: "publications/" },
        { text: "在投与在研", icon: "hourglass-half", link: "ongoing/" },
        { text: "学术汇报", icon: "person-chalkboard", link: "presentations/" },
        { text: "数据与图表", icon: "chart-pie", link: "figures-data/" },
      ],
    },
  ],

  "/clinical/": [
    "",
    {
      text: "临床笔记",
      icon: "stethoscope",
      expanded: true,
      children: [
        { text: "病例思路", icon: "notes-medical", link: "cases/" },
        { text: "MDT学习", icon: "user-doctor", link: "mdt/" },
        { text: "指南与共识", icon: "clipboard-list", link: "guidelines/" },
        { text: "外科基础", icon: "syringe", link: "surgery-basics/" },
      ],
    },
  ],
});