import { Component, input } from '@angular/core';

@Component({
  selector: 'item-count',
  templateUrl: './item-count.html',
})
export class ItemCount {

  items = input<string[]>([]);

}
