import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  constructor(private http: HttpClient) { }

  list() {
    return ['поесть и поспать', 'выучить немецкий'];
  }
  
  getData() {
    return this.http
      .get('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
  } 
}
