import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'fragile-value',
  templateUrl: './fragile-value.html',
})
export class FragileValue {

  count = input(0);

  checked = computed(() => this.check(this.count()));

  check(count: number) {
    if (count > 3) {
      throw new Error('Count is above 3');
    }
    return count;
  }

}
