import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  searchedCountry: string = '';
  @Output() searchClicked = new EventEmitter<string>();

  search() {
    this.searchClicked.emit(this.searchedCountry);
  }
}
