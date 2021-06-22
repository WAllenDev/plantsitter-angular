import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  addText: string = "Add Plant";
  currentTime: Date = new Date();

  constructor( private plantService: PlantService, private router: Router ) { }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe( (plants) => this.plants = plants );
  }

  onAddPlant() {
    this.router.navigate(['/add']);
  }

}
