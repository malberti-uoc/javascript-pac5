import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountryByName(alpha3Code: String): Observable<Country> {
    return this.http.get<Country>('https://restcountries.eu/rest/v2/alpha/' + alpha3Code);
  }
}
