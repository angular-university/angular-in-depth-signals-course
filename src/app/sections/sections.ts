/**
 * One entry per section that has a demo page. Drives the section index and the toolbar picker;
 * the matching lazy route lives in app.routes.ts.
 *
 * Section 1 has no demos — its page is a check that the setup worked, plus a repo tour.
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
    title: 'Course Introduction and Setup',
    summary: 'No demos here — check that your setup works, and see how the repo is organised.',
  },
  {
    number: 2,
    slug: 's02',
    title: 'Introduction to Angular, with Signals From the Beginning',
    summary: 'A first component, a first signal, and what happens when state is not in a signal.',
  },
];
