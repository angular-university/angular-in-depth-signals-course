import { registerLocaleData } from '@angular/common';
import { loadTranslations } from '@angular/localize';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const localeData = {
  fr: () => import('@angular/common/locales/fr'),
};

start().catch((err) => console.error(err));

async function start() {
  const locale = new URLSearchParams(location.search).get('locale');

  if (locale) {
    await loadLocale(locale);
  }

  await bootstrapApplication(App, appConfig);
}

async function loadLocale(locale: string) {
  const response = await fetch(`i18n/messages.${locale}.json`);
  const file = await response.json();
  loadTranslations(file.translations);
  $localize.locale = locale;

  const data = await importLocaleData(locale);
  registerLocaleData(data.default);
}

function importLocaleData(locale: string) {
  if (!(locale in localeData)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return localeData[locale as keyof typeof localeData]();
}

