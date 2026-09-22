import { Routes } from '@angular/router';

/**
 * A section is described once, here. Its `data` feeds the section page heading, the index
 * and the toolbar picker — adding a section means adding one route and one component.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sections/section-index/section-index').then((m) => m.SectionIndex),
  },
  {
    path: 's01',
    loadComponent: () => import('./sections/s01-intro/s01-intro').then((m) => m.S01Intro),
    data: {
      number: 1,
      title: 'Introduction to Angular, with Signals From the Beginning',
      summary: 'A first component, a first signal, and what happens when state is not in a signal.',
    },
  },
  { path: '**', redirectTo: '' },
];
