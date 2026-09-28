import { Component, inject } from '@angular/core';
import { AuthService } from './auth-service';

@Component({
  selector: 'auth-controls',
  templateUrl: './auth-controls.html',
})
export class AuthControls {

  auth = inject(AuthService);

  logIn() {
    this.auth.logIn();
  }

  logOut() {
    this.auth.logOut();
  }

}
