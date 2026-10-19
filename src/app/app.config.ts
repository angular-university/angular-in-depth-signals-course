import {ApplicationConfig, inject} from '@angular/core';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { authInterceptor } from './sections/section-08/demos/03-interceptors-demo/auth-interceptor';
import {provideCssVarNamespacing} from '@angular/platform-browser';
import {GREETING, MESSAGE, PLUGINS} from './sections/section-10/demos/01-providers-demo/tokens';
import {Formatter, UppercaseFormatter} from './sections/section-10/demos/01-providers-demo/formatter';

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
    //provideCssVarNamespacing("my-prefix")
  ],
};
