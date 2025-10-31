import {
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutFooter,
  NButton,
  NInput,
  NSpace,
  NCard,
  darkTheme,
  zhCN,
  dateZhCN,
  NScrollbar,
} from "naive-ui";

export const naiveComponents = [
  { component: NConfigProvider, name: "n-config-provider" },
  { component: NLayout, name: "n-layout" },
  { component: NLayoutContent, name: "n-layout-content" },
  { component: NLayoutHeader, name: "n-layout-header" },
  { component: NLayoutFooter, name: "n-layout-footer" },
  { component: NInput, name: "n-input" },
  { component: NSpace, name: "n-space" },
  { component: NCard, name: "n-card" },
  { component: NButton, name: "n-button" },
  { component: NScrollbar, name: "n-n-scrollbar" },
];

export const naiveConfig = { theme: darkTheme, locale: zhCN, dateLocale: dateZhCN };
