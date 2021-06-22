import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from 'src/app/Plant';


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  color: string = "green";
  text: string = "Water"
  
  @Input() plant: Plant;
  @Output() onWater: EventEmitter<Plant> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  waterNow(plant: Plant) {
    this.onWater.emit(plant);
  }

}
