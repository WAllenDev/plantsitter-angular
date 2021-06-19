import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { Plant } from '../Plant';

const httpOptions = {
  header: new HttpHeaders({
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
}
