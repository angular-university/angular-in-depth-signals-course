import { Component, inject } from '@angular/core';
import { AuthService } from './auth-service';

@Component({
  selector: 'auth-status',
  templateUrl: './auth-status.html',
})
export class AuthStatus {

  auth = inject(AuthService);

}
