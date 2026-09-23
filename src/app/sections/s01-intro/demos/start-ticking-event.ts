/**
 * A plain DOM event name, not an Angular API. The single "Start ticking" button in
 * not-a-signal-demo dispatches it on `document`; the two counters below each listen for
 * it independently in ngOnInit. This is how one click starts two sibling components at
 * once without inputs, outputs, or queries — none of which this course has taught yet.
 */
export const START_TICKING_EVENT = 'demo:start-ticking';
