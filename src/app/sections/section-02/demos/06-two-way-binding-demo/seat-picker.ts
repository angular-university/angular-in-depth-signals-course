import { Component, model } from '@angular/core';

@Component({
  selector: 'seat-picker',
  templateUrl: './seat-picker.html',
  styleUrl: './seat-picker.scss',
})
export class SeatPicker {

  seats = model(1);

  change(delta: number) {
    this.seats.update((current) => Math.max(1, current + delta));
  }

}
