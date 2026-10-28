import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface Echo {
  header: string;
}

@Component({
  selector: 'xsrf-demo',
  templateUrl: './xsrf-demo.html',
})
export class XsrfDemo {

  http = inject(HttpClient);

  header = signal('');

  constructor() {
    // Only fetches the XSRF cookie, so the first POST already has a token to send
    this.http.get('/api/xsrf').subscribe();
  }

  async send() {
    const echo = await firstValueFrom(this.http.post<Echo>('/api/xsrf', {}));
    this.header.set(echo.header);
  }

}
