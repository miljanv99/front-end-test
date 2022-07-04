import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Planet} from '../models/planet-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private pageUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getPlanets(): Observable<Planet[]>{
    return this.http.get<Planet[]>(this.pageUrl);
  }

  getSinglePlanet(planetID: number): Observable<Planet[]>{
    return this.http.get<Planet[]>(this.pageUrl + '/' + planetID);
  }

  addPlanet(planet: Planet): Observable<Planet[]>{
    return this.http.post<Planet[]>(this.pageUrl, planet);
  }

  deletePlanet(planetID: number){
    return this.http.delete(this.pageUrl + '/' + planetID);
  }

  editPlanet(planet: Planet): Observable<Planet[]>{
    return this.http.put<Planet[]>(this.pageUrl + '/' + planet.id, planet);
  }
}
