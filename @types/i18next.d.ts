import "i18next";
import type common from "../public/locales/en/common.json";
import type home from "../public/locales/en/home.json";
import type works from "../public/locales/en/works.json";

interface I18nNamespaces {
  common: typeof common;
  home: typeof home;
  works: typeof works;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
