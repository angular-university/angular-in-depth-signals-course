import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors, withXhr } from '@angular/common/http';
import { errorInterceptor } from './sections/section-08/demos/03-interceptors-demo/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withXhr(), withInterceptors([errorInterceptor]))],
};
