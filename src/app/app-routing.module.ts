import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryCardComponent } from './brewery-card/brewery-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'brewery/:id', component: BreweryCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
