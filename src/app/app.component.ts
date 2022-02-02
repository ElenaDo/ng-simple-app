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
  breweries: any;

  title = 'ng-simple-app';
  newTask: string = '';
  
  ngOnInit(): void {
    this.fetchBreweries()
  }
  fetchBreweries() {
    this.breweriesService.getBreweries().subscribe(brewery => {
      console.log(brewery)
      this.breweries = brewery;
    })
  }

  selectCard(id: string) {
    return this.breweries.find((brewery: Brewery)  => {
      if (brewery.id === id) brewery.selected = !brewery.selected
    })
  }
}
