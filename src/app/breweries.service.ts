import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private http: HttpClient) { 

  }
  getBreweries() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
