import { Component } from '@angular/core';
import { JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'utility-pipes-demo',
  imports: [JsonPipe, SlicePipe, KeyValuePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './utility-pipes-demo.html',
})
export class UtilityPipesDemo {

  text = 'angular pipes';

  list = [1, 2, 3, 4, 5];

  data = { b: 2, a: 1 };

}
