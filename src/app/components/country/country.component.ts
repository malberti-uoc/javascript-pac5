import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: Country;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('alpha3Code');
    console.log('identifier -->', identifier);

    this.countriesService.getCountryByName(identifier).subscribe((country) => {

      if(!country) {
        return this.router.navigateByUrl('/');
      }

      this.country = country;
      console.log('Country -->', this.country);
    });
  }

}
