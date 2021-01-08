import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
  { path: '', component: CountriesComponent},
  { path: 'alpha/:alpha3Code', component: CountryComponent},
  { path: '**', component: CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
