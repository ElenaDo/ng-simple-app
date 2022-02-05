import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Brewery } from '../brewery';

@Component({
  selector: 'brewery-list-item',
  templateUrl: './brewery-list-item.component.html',
  styleUrls: ['./brewery-list-item.component.css']
})
export class BreweryListItem implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter();
  @Input() brewery!: Brewery;

  select() {
    this.newItemEvent.emit(this.brewery.id)
  }

}
