import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BreweriesService } from '../breweries.service';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.css']
})
export class BreweryCardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweriesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBrewery();
  }

  brewery: Brewery = {
    name: '',
    country: '',
    city: '',
    id: '',
    brewery_type: '',
    created_at: ''
  }

  getBrewery(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.breweryService.getBrewery(id)
      .subscribe(brewery => {
        if(brewery) this.brewery = brewery;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
