import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListItem } from './brewery-list-item/brewery-list-item.component';
import { searchFilterPipe } from './brewery-filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreweryCardComponent } from './brewery-card/brewery-card.component'

@NgModule({
  declarations: [
    AppComponent,
    BreweryListItem,
    searchFilterPipe,
    DashboardComponent,
    BreweryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
