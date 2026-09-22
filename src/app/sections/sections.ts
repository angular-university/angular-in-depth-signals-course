/**
 * One entry per section that has a demo page. Drives the section index and the toolbar picker;
 * the matching lazy route lives in app.routes.ts.
 *
 * Section 0 is installation only and has no page — the course starts at Section 1.
 */
export interface SectionInfo {
  number: number;
  slug: string;
  title: string;
  summary: string;
}

export const SECTIONS: SectionInfo[] = [
  {
    number: 1,
    slug: 's01',
    title: 'Introduction to Angular, with Signals From the Beginning',
    summary: 'A first component, a first signal, and what happens when state is not in a signal.',
  },
];
