import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

const message = {
  en,
  zh,
};

const language = (navigator.language || "en").toLocaleLowerCase(); // 获得浏览器语言
const i18n = createI18n({
  locale: localStorage.getItem("lang") || language.split("-")[0] || "en", // 先从缓存拿，没有就用浏览器语言
  fallbackLocale: "en", // 设置备用语言
  message,
});

export default {
  i18n,
};
