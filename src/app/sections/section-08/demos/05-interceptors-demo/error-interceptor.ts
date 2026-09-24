import { HttpContextToken, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { signal } from '@angular/core';
import { tap } from 'rxjs';

export const SKIP_ERROR_COUNT = new HttpContextToken(() => false);

export const errorCount = signal(0);

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  if (req.context.get(SKIP_ERROR_COUNT)) {
    return next(req);
  }
  return next(req).pipe(tap({ error: () => countError() }));
}

function countError() {
  errorCount.update((count) => count + 1);
}
