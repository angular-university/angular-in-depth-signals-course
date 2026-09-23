import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'temperature',
  templateUrl: './temperature.html',
})
export class Temperature {

  celsius = input.required<number>();

  fahrenheit = computed(() => (this.celsius() * 9) / 5 + 32);

}
