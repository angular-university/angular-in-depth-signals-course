/**
 * One entry per section that has a demo page. Drives the section index and the toolbar picker;
 * the matching lazy route lives in app.routes.ts.
 *
 * Section 1 is setup only and has no demos of its own — the section index *is* its artifact.
 */
export interface SectionInfo {
  number: number;
  slug: string;
  title: string;
  summary: string;
}

export const SECTIONS: SectionInfo[] = [
  {
    number: 2,
    slug: 's02',
    title: 'Introduction to Angular, with Signals From the Beginning',
    summary: 'A first component, a first signal, and what happens when state is not in a signal.',
  },
];
