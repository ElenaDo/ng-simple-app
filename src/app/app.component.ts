import { Component, OnInit } from '@angular/core';
import { BreweriesService } from './breweries.service';
import { Brewery } from './brewery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private breweriesService: BreweriesService) {
  }
  breweries: Brewery[] = [];

  title = 'ng-simple-app';
  searchInput: string = '';
  isFavourite: boolean = false;
  
  ngOnInit(): void {
    this.fetchBreweries()
  }

  fetchBreweries() {
    this.breweriesService.getBreweries().subscribe(breweries => {
      console.log(breweries)
      this.breweries = breweries;
    })
  }

  selectBrewery(id: string) {
    return this.breweries.find((brewery: Brewery)  => {
      if (brewery.id === id) brewery.favourite = !brewery.favourite
    })
  }
}
