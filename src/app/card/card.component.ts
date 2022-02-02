import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() newItemEvent = new EventEmitter();
  @Input() brewery!: Brewery;

  select() {
    this.newItemEvent.emit(this.brewery.id)
  }

  

}
