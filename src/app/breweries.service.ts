import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private http: HttpClient) { 

  }
  getBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>('https://api.openbrewerydb.org/breweries');
  }
}
