import { Router } from '@angular/router';

/** Attached to a section's route as `data`, so a section is described in exactly one place. */
export interface SectionData {
  number: number;
  title: string;
  summary: string;
}

export interface SectionLink extends SectionData {
  slug: string;
}

/** Every route carrying section data, in route order. Drives the index and the toolbar picker. */
export function sectionLinks(router: Router): SectionLink[] {
  return router.config
    .filter((route) => route.data?.['number'] !== undefined)
    .map((route) => ({ slug: route.path ?? '', ...(route.data as unknown as SectionData) }));
}
