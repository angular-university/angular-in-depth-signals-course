import { Routes } from '@angular/router';

/**
 * The index lists every section that has demos. One lazy route per section below,
 * added as that section is built.
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
  },
  { path: '**', redirectTo: '' },
];
