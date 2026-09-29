import { Service, signal } from '@angular/core';

@Service()
export class RoleService {

  #role = signal('viewer');

  role = this.#role.asReadonly();

  setRole(role: string) {
    this.#role.set(role);
  }

}
