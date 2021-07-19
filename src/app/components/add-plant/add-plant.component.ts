import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';
import { Subscription } from 'rxjs';
import { Plant } from '../../Plant'

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  plants: Plant[] = [];

  name: string;
  species: string;
  location: string;
  waterFrequency: number;
  waterDates: number[];
  date: Date;
  newDate: number;
  subscription: Subscription;
  newWaterDates: number[];

  constructor( private plantService: PlantService, private router: Router ) {}

  ngOnInit(): void {}

  onSubmit() {

    this.newDate = new Date(this.date).getTime();
    this.waterDates = [this.newDate];

    console.log(this.waterDates);
    console.log(typeof this.waterDates);

     const newPlant = {
      name: this.name,
      species: this.species,
      location: this.location,
      waterFrequency: this.waterFrequency,
      waterDates: this.waterDates,
    }

    this.plantService.addPlant(newPlant).subscribe((newPlant) =>(this.plants.push(newPlant)));

    this.router.navigate(['/main']);
  }

}
