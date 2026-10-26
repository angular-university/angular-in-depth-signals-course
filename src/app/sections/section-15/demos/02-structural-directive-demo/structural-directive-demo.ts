import { Component, inject } from '@angular/core';
import { AllowRole } from './allow-role';
import { UserProfile } from './user-profile';

@Component({
  selector: 'structural-directive-demo',
  imports: [AllowRole],
  templateUrl: './structural-directive-demo.html',
})
export class StructuralDirectiveDemo {

  userProfile = inject(UserProfile);

  setAdmin() {
    this.userProfile.setRole('admin');
  }

  setViewer() {
    this.userProfile.setRole('viewer');
  }

}
