import { Component, model } from '@angular/core';

@Component({
  selector: 'seat-picker',
  templateUrl: './seat-picker.html',
})
export class SeatPicker {

  seats = model(1);

  addSeat() {
    this.seats.update((current) => current + 1);
  }

}
