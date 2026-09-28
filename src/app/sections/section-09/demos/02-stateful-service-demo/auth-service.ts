import { Service, computed, signal } from '@angular/core';

@Service()
export class AuthService {

  #token = signal<string | undefined>(undefined);

  token = this.#token.asReadonly();

  loggedIn = computed(() => this.#token() !== undefined);

  logIn() {
    this.#token.set('abc123');
  }

  logOut() {
    this.#token.set(undefined);
  }

}
