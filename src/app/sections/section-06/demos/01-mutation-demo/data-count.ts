import { Component, input } from '@angular/core';

@Component({
  selector: 'data-count',
  templateUrl: './data-count.html',
})
export class DataCount {

  data = input({ count: 0 });

}
