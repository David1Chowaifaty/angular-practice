import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  open: boolean = false;
  setOpen() {
    this.open = !this.open;
  }
}
