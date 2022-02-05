import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BreweriesService } from '../breweries.service';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private breweriesService: BreweriesService) {
  }

  title = 'ng-simple-app';
  breweries: Brewery[] = [];
  searchInput: string = '';
  isFavourite: boolean = false;
  brewery: Brewery = {
    name: '',
    country: '',
    city: '',
    id: ''
  }
  
  ngOnInit(): void {
    this.fetchBreweries()
  }

  fetchBreweries() {
    this.breweriesService.getBreweries().subscribe(breweries => {
      console.log(breweries)
      this.breweries = breweries;
    })
  }

  getBrewery(id: string){
    const brewery = this.breweries.find(b => b.id === id)!;
    this.brewery = brewery;
  }

  selectBrewery(id: string) {
    return this.breweries.find((brewery: Brewery)  => {
      if (brewery.id === id) brewery.favourite = !brewery.favourite
    })
  }

}