import { Component, input, model } from '@angular/core';
import { DemoInfo } from '../demo.model';

@Component({
  selector: 'demo-picker',
  templateUrl: './demo-picker.html',
  styleUrl: './demo-picker.scss',
})
export class DemoPicker {

  demos = input.required<DemoInfo[]>();

  selected = model.required<string>();

  protected onChange(event: Event) {
    this.selected.set((event.target as HTMLSelectElement).value);
  }

}
