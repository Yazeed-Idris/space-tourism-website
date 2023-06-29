import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  active: boolean = false;
  toggleActive() {
    this.active = !this.active;
  }
}
