import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Plant } from '../Plant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private apiUrl = 'http://localhost:5000/plants';

  constructor( private http: HttpClient ) { }

  getPlants(): Observable<Plant[]>{
    return this.http.get<Plant[]>(this.apiUrl);
  }

  addPlant(plant: Plant): Observable<Plant>{
    return this.http.post<Plant>(this.apiUrl, plant, httpOptions);
  }
}
