import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { authInterceptor } from './sections/section-08/demos/03-interceptors-demo/auth-interceptor';
import {provideCssVarNamespacing} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXhr(),
    withInterceptors([authInterceptor])),
    //provideCssVarNamespacing("my-prefix")
  ],
};
