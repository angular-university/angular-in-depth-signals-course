import { DestroyRef, inject, signal } from '@angular/core';

export function ticker(ms: number) {
  const ticks = signal(0);
  const id = setInterval(() => ticks.update((current) => current + 1), ms);
  inject(DestroyRef).onDestroy(() => clearInterval(id));
  return ticks.asReadonly();
}
