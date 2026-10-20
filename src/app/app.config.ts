import {ApplicationConfig, DEFAULT_CURRENCY_CODE, inject, LOCALE_ID} from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { authInterceptor } from './sections/section-08/demos/03-interceptors-demo/auth-interceptor';
import {provideCssVarNamespacing} from '@angular/platform-browser';
import {GREETING, MESSAGE, PLUGINS} from './sections/section-10/demos/01-providers-demo/tokens';
import {Formatter, UppercaseFormatter} from './sections/section-10/demos/01-providers-demo/formatter';
import {LessonsStore} from './sections/section-10/demos/02-scoped-service-demo/lessons-store';

registerLocaleData(localeJa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXhr(),
    withInterceptors([authInterceptor])),
    { provide: GREETING, useValue: 'Hello' },
    { provide: Formatter, useClass: UppercaseFormatter },
    { provide: UppercaseFormatter, useExisting: Formatter },
    { provide: MESSAGE, useFactory: () => `${inject(GREETING)} from a factory` },
    { provide: PLUGINS, useValue: 'first', multi: true },
    { provide: PLUGINS, useValue: 'second', multi:  true},
    LessonsStore,
    //{ provide: LOCALE_ID, useValue: 'ja' },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'fullDate' } },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    //provideCssVarNamespacing("my-prefix")
  ],
};
