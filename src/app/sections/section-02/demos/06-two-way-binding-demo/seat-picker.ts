import { Component, model } from '@angular/core';

@Component({
  selector: 'seat-picker',
  templateUrl: './seat-picker.html',
  styleUrl: './seat-picker.scss',
})
export class SeatPicker {

  seats = model(1);

  addSeat() {
    this.seats.update((current) => current + 1);
  }

  removeSeat() {
    this.seats.update((current) => current - 1);
  }

}
