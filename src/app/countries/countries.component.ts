import { ICountry } from './../country/country.component';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit {
  countries: ICountry[] = [];
  @Input() searchedCountry: string = '';
  async ngOnInit() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    data.forEach((country: any) => {
      this.countries.push({
        countryName: country.name.common,
        countryUrl: country.flags.png,
        population: country.population,
      });
    });
  }
}
