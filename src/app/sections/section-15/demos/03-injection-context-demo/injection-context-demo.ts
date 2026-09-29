import { Component, Injector, LOCALE_ID, inject, runInInjectionContext, signal } from '@angular/core';

@Component({
  selector: 'injection-context-demo',
  templateUrl: './injection-context-demo.html',
})
export class InjectionContextDemo {

  injector = inject(Injector);

  result = signal('');

  injectInHandler() {
    try {
      this.result.set(inject(LOCALE_ID));
    } catch (error) {
      this.result.set(this.firstSentence(error));
    }
  }

  injectInContext() {
    this.result.set(runInInjectionContext(this.injector, () => inject(LOCALE_ID)));
  }

  firstSentence(error: unknown): string {
    if (error instanceof Error) {
      return error.message.split('.')[0];
    }
    return String(error);
  }

}
