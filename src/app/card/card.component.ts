import { Component, Input, OnInit } from '@angular/core';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() brewery!: Brewery; 

}
