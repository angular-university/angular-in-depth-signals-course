import { Component } from '@angular/core';
import { AuthStatus } from './auth-status';
import { AuthControls } from './auth-controls';

@Component({
  selector: 'stateful-service-demo',
  imports: [AuthStatus, AuthControls],
  templateUrl: './stateful-service-demo.html',
})
export class StatefulServiceDemo {

}
