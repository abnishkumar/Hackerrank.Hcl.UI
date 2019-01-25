import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './pages/flight-search/flight-search.component';
import { HotelSearchComponent } from './pages/hotel-search/hotel-search.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';

const routes: Routes = [
 
  {
    path: "flight-search",
    component: FlightSearchComponent,
  },
  {
    path: "hotel-search",
    component: HotelSearchComponent,
  },
  {
    path: "holidays",
    component: HolidaysComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo:"/flight-search"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
