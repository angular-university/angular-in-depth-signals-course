import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SKIP_ERROR_COUNT, errorCount } from './error-interceptor';

@Component({
  selector: 'interceptors-demo',
  templateUrl: './interceptors-demo.html',
})
export class InterceptorsDemo {

  http = inject(HttpClient);

  caught = signal(0);

  counted = errorCount;

  request() {
    return this.send(new HttpContext());
  }

  requestSkipped() {
    return this.send(new HttpContext().set(SKIP_ERROR_COUNT, true));
  }

  async send(context: HttpContext) {
    try {
      await firstValueFrom(this.http.get('/api/courses/99', { context }));
    } catch {
      this.caught.update((count) => count + 1);
    }
  }

}
