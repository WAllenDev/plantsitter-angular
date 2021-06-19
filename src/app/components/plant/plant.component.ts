import { Component, OnInit, Input } from '@angular/core';
import { Plant } from 'src/app/Plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  color: string = "green";
  
  @Input() plant: Plant;

  constructor() { }

  ngOnInit(): void {}

  waterNow() {
    console.log("Watered");
  }

}
