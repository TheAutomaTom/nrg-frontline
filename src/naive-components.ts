import {
  NConfigProvider,
  NLayoutHeader,
  NLayoutFooter,
  NButton,
  NInput,
  NSpace,
  NCard,
  darkTheme,
  zhCN,
  dateZhCN,
} from "naive-ui";
import { createTheme, inputDark } from "naive-ui";
// locale & dateLocale

export const naiveComponents = [
  { component: NConfigProvider, name: "n-config-provider" },
  { component: NLayoutHeader, name: "n-layoutHeader" },
  { component: NLayoutFooter, name: "n-layoutFooter" },
  { component: NInput, name: "n-input" },
  { component: NSpace, name: "n-space" },
  { component: NCard, name: "n-card" },
  { component: NButton, name: "n-button" },
];

export const naiveConfig = { theme: darkTheme, locale: zhCN, dateLocale: dateZhCN };
