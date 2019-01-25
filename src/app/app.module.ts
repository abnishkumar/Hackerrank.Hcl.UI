import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FlightSearchComponent } from './pages/flight-search/flight-search.component';
import { HotelSearchComponent } from './pages/hotel-search/hotel-search.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightSearchService } from './services/flight-search.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FlightSearchComponent,
    HotelSearchComponent,
    HolidaysComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
