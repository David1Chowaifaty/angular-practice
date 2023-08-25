import { Component, Input } from '@angular/core';
export interface ICountry {
  countryUrl: string;
  countryName: string;
  population: number;
  searchedCountry?: string;
}
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent implements ICountry {
  @Input() countryUrl: string = '';
  @Input() searchedCountry: string = '';
  @Input() countryName: string = '';
  @Input() population: number = 0;

  sendAlert(message: string) {
    console.log(message);
  }
}
