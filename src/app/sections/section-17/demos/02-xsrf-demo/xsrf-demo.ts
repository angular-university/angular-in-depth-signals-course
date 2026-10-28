import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user-service';

interface Echo {
  header: string;
}

@Component({
  selector: 'xsrf-demo',
  templateUrl: './xsrf-demo.html',
})
export class XsrfDemo {

  http = inject(HttpClient);

  userService = inject(UserService);

  header = signal('');

  constructor() {
    this.userService.load();
  }

  async send() {
    const echo = await firstValueFrom(this.http.post<Echo>('/api/xsrf', {}));
    this.header.set(echo.header);
  }

}
