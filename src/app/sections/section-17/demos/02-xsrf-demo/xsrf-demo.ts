import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'xsrf-demo',
  templateUrl: './xsrf-demo.html',
})
export class XsrfDemo {

  http = inject(HttpClient);

  httpClientStatus = signal('');

  fetchStatus = signal('');

  async sendWithHttpClient() {
    try {
      await firstValueFrom(this.http.post('/api/xsrf', {}, { responseType: 'text' }));
      this.httpClientStatus.set('200 OK');
    } catch (error) {
      const response = error as HttpErrorResponse;
      this.httpClientStatus.set(`${response.status} ${response.statusText}`);
    }
  }

  async sendWithFetch() {
    const response = await fetch('/api/xsrf', { method: 'POST' });
    this.fetchStatus.set(`${response.status} ${response.statusText}`);
  }

}
