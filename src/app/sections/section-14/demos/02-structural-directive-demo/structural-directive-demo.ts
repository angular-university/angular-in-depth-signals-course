import { Component, inject } from '@angular/core';
import { AllowRole } from './allow-role';
import { RoleService } from './role-service';

@Component({
  selector: 'structural-directive-demo',
  imports: [AllowRole],
  templateUrl: './structural-directive-demo.html',
})
export class StructuralDirectiveDemo {

  roleService = inject(RoleService);

  setAdmin() {
    this.roleService.setRole('admin');
  }

  setViewer() {
    this.roleService.setRole('viewer');
  }

}
