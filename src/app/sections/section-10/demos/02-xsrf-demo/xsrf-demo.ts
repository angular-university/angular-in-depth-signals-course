import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface Echo {
  token: string | null;
}

@Component({
  selector: 'xsrf-demo',
  templateUrl: './xsrf-demo.html',
})
export class XsrfDemo {

  http = inject(HttpClient);

  received = signal('');

  async send() {
    const echo = await firstValueFrom(this.http.post<Echo>('/api/xsrf', {}));
    this.received.set(String(echo.token));
  }

}
