import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/i18n/en.json";

export const resources = {
  en: { translation: en },
} as const;

export const init = async () =>
  i18next.use(initReactI18next).init({
    lng: "en",
    debug: process.env.NODE_ENV === "development",
    resources,
  });

export default { init };
