import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Brewery } from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {
  constructor(private http: HttpClient) { 
    //
  }

  breweries: Brewery[] = [];

  getBreweries(): Observable<Brewery[]> {
    return new Observable((observer) => {
      if (!this.breweries.length) {
        this.http.get<Brewery[]>('https://api.openbrewerydb.org/breweries').subscribe(result => {
          this.breweries = result;
          observer.next(result);
        });
      }
      observer.next(this.breweries);
    });

  }

  getBrewery(id: string): Observable<Brewery | undefined> {
      return this.getBreweries().pipe(map((breweries => breweries.find(b => b.id === id) )));
  }
}
