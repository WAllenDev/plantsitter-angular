import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service'
import { Plant } from 'src/app/Plant'

@Component({
  selector: 'app-plants-overview',
  templateUrl: './plants-overview.component.html',
  styleUrls: ['./plants-overview.component.scss']
})
export class PlantsOverviewComponent implements OnInit {

  plants: Plant[] = [];
  
  title: string = "Plants Overview";

  constructor( private plantService: PlantService ) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe( (plants) => this.plants = plants );
  }

}
