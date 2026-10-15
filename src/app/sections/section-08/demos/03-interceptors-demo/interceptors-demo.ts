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

  async request(skipAuth = false) {
    const context = new HttpContext().set(SKIP_AUTH, skipAuth);
    try {
      const profile = await firstValueFrom(
        this.http.get<Profile>('/api/profile', { context }));
      this.received.set(profile.authorization);
    } catch (error) {
      const { status, statusText } = error as HttpErrorResponse;
      this.received.set(`${status} ${statusText}`);
    }
  }

  logIn() {
    localStorage.setItem('token', 'abc123');
  }

  logOut() {
    localStorage.removeItem('token');
  }

}
