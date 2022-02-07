import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
  constructor(private http: HttpClient) { 
    //
  }

  observable: BehaviorSubject<Brewery[]> = new BehaviorSubject([] as Brewery[]);
  breweries: Brewery[] = [];
  favouriteBreweries: string[] = ['10-barrel-brewing-co-bend-pub-bend', '10-barrel-brewing-co-san-diego'];
  
  updateBreweries(breweries: Brewery[]) {
    this.breweries = breweries.map(brewery => {
      return { ...brewery, favourite: this.favouriteBreweries.includes(brewery.id) } 
    });
    this.observable.next(this.breweries);
    return this.breweries;
  }

  getBreweries(): Observable<Brewery[]> {
    if (!this.breweries.length) {
      this.http.get<Brewery[]>('https://api.openbrewerydb.org/breweries').subscribe(result => {
        this.updateBreweries(result);
      });
    }

    return this.observable;
    
  }

  getBrewery(id: string): Observable<Brewery | undefined> {
      return this.getBreweries().pipe(map((breweries => breweries.find(b => b.id === id) )));
  }

  setFavourite(id: string, value: boolean) {
    if (value) {
      this.favouriteBreweries.push(id);
    } else  {
      const index = this.favouriteBreweries.findIndex(item => item === id);
      this.favouriteBreweries.splice(index, 1);
    } 
    this.updateBreweries(this.breweries);
  }
}
