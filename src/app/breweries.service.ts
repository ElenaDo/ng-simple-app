import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private http: HttpClient) { 

  }

  breweries: Brewery[] = [];

  getBreweries(): Observable<Brewery[]> {
    const obs = this.http.get<Brewery[]>('https://api.openbrewerydb.org/breweries');
    obs.subscribe(breweries => this.breweries = breweries);
    return obs;
  }

  getBrewery(id: string): Observable<Brewery> {
    if (!this.breweries.length) this.getBreweries()
    const brewery = this.breweries.find(b => b.id === id)!;
    return of(brewery);
  }
}
