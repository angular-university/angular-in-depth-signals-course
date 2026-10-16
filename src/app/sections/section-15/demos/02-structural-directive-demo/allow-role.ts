import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';
import { RoleService } from './role-service';

@Directive({
  selector: '[myAllowRole]',
})
export class AllowRole {

  template = inject(TemplateRef);

  container = inject(ViewContainerRef);

  roleService = inject(RoleService);

  myAllowRole = input('');

  render = effect(() => this.renderView(this.roleService.role() === this.myAllowRole()));

  renderView(allowed: boolean) {
    this.container.clear();
    if (!allowed) {
      return;
    }
    this.container.createEmbeddedView(this.template);
  }

}
