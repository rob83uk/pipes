import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  selectedDate = '';
  ammount: number | undefined;
  height: number | undefined;
  miles: number | undefined;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.selectedDate = value;
  }

  onAmmountChange(value: string) {
    this.ammount = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
