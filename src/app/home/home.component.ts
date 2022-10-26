import { Component } from '@angular/core';
import { Continent, Service } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  continents: Continent[];

  constructor(service: Service) {
    this.continents = service.getContinents();
  }
}
