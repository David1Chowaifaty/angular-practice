import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  searchCountry: string = '';
  handleSearch(msg: string) {
    this.searchCountry = msg;
  }
}
