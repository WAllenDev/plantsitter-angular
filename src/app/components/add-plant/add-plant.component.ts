import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../Plant'

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  @Output() onAddPlant: EventEmitter<Plant> = new EventEmitter();

  name: string;
  species: string;
  location: string;
  waterFrequency: number;
  waterDates: number[];
  date: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    const newPlant = {
      name: this.name,
      species: this.species,
      location: this.location,
      waterFrequency: this.waterFrequency,
      waterDates: this.waterDates,
      date: this.date
    }

    this.onAddPlant.emit(newPlant);

  }

}
