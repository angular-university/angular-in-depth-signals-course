import { Component, inject, signal } from '@angular/core';
import { HttpClient, HttpContext, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SKIP_AUTH } from './auth-interceptor';

interface Profile {
  authorization: string;
}

@Component({
  selector: 'interceptors-demo',
  templateUrl: './interceptors-demo.html',
})
export class InterceptorsDemo {

  http = inject(HttpClient);

  received = signal('');

  request() {
    return this.send(new HttpContext());
  }

  requestSkipAuth() {
    return this.send(new HttpContext().set(SKIP_AUTH, true));
  }

  async send(context: HttpContext) {
    try {
      const profile = await firstValueFrom(this.http.get<Profile>('/api/profile', { context }));
      this.received.set(profile.authorization);
    } catch (error) {
      this.received.set(this.describe(error));
    }
  }

  describe(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return `${error.status} ${error.statusText}`;
    }
    return String(error);
  }

  logIn() {
    localStorage.setItem('token', 'abc123');
  }

  logOut() {
    localStorage.removeItem('token');
  }

}
