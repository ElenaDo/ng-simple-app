import { Component, OnInit } from '@angular/core';
import { BreweriesService } from './breweries.service';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private todosService: TodosService, private breweriesService: BreweriesService) {
    this.tasks = todosService.list()
  }
  // tasks: Array<string>;
  tasks: string[];
  breweries: any;

  title = 'ng-simple-app';
  newTask: string = '';
  
  ngOnInit(): void {
    this.fetchCocktails()
    this.fetchBreweries()
  }

  fetchCocktails() {
    this.todosService.getData().subscribe(cocktail => {
      console.log(cocktail)
  })
  }
  fetchBreweries() {
    this.breweriesService.getBreweries().subscribe(brewery => {
      console.log(brewery)
      this.breweries = brewery;
    })
  }

  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1)
  }
}
