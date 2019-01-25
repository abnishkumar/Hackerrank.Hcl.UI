import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  url = AppSettings.API_FLIGHTSEARCH + "FlightSearch";

  constructor(private http: HttpClient) { }

  public getData(from: string, to: string, depart: string): Observable<object> {
    debugger;
    if(from==null || to==null) {
      return this.http.get(this.url);
    }
    const searchUrl=`${this.url}?From=${from}&To=${to}&DepartDate=${depart}`;
    return this.http.get(searchUrl);
  }
}
