import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor() { }
  @Output() newItemEvent = new EventEmitter();

  deleteTask(id: number) {
    this.newItemEvent.emit(id)
  }
  @Input() task = '';
  @Input() index = 0;
  
}
