import { HttpContextToken, HttpHandlerFn, HttpRequest } from '@angular/common/http';

export const SKIP_AUTH = new HttpContextToken(() => false);

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const token = localStorage.getItem('token');
  if (!token || req.context.get(SKIP_AUTH)) {
    return next(req);
  }
  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
}
