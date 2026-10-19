import { Component, Injector, inject, runInInjectionContext, signal } from '@angular/core';
import { GREETING } from '../01-providers-demo/tokens';

@Component({
  selector: 'injection-context-demo',
  templateUrl: './injection-context-demo.html',
})
export class InjectionContextDemo {

  injector = inject(Injector);

  message = inject(GREETING);

  greeting = signal('');

  constructor() {
    this.greeting.set(this.message);
  }

  injectWithoutContext() {
    try {
      const greeting = inject(GREETING);
      this.greeting.set(`Without context: ${greeting}`);
    } catch (error) {
      console.error(error);
      this.greeting.set('Error: not in an injection context');
    }
  }

  injectWithContext() {
    runInInjectionContext(this.injector, () => {
      const greeting = inject(GREETING);
      this.greeting.set(`With context: ${greeting}`);
    });
  }

}
