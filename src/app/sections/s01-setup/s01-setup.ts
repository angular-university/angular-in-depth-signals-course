import { Component, VERSION, signal } from '@angular/core';

type BackendState = 'idle' | 'checking' | 'ok' | 'error';

/**
 * Section 1 has no demos — it is setup. This page is the check that the setup worked,
 * plus a tour of how the repository is organised.
 *
 * It calls the backend directly, which is the one deliberate exception to "only Section 8
 * talks to the API": the whole point of the page is to verify the student's local
 * environment, so it is not a demo meant to be lifted anywhere.
 */
@Component({
  selector: 's01-setup',
  templateUrl: './s01-setup.html',
  styleUrl: './s01-setup.scss',
})
export class S01Setup {

  protected readonly angularVersion = VERSION.full;

  protected readonly zoneless = typeof (globalThis as Record<string, unknown>)['Zone'] === 'undefined';

  protected backend = signal<BackendState>('idle');

  protected courseCount = signal(0);

  protected backendError = signal('');

  protected async checkBackend() {
    this.backend.set('checking');

    try {
      const response = await fetch('/api/courses');

      if (!response.ok) {
        throw new Error(`The server answered with HTTP ${response.status}`);
      }

      const courses = await response.json();

      this.courseCount.set(courses.length);
      this.backend.set('ok');
    } catch (error) {
      this.backendError.set(error instanceof Error ? error.message : String(error));
      this.backend.set('error');
    }
  }

}
