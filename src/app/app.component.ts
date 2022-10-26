import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Continent, City, Country, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  continents: Continent[];

  tabs = [
    { text: 'home', route: 'home' },
    { text: 'second', route: 'second' },
  ];

  countryData: Country;

  citiesData: City[];

  tabPanelIndex: number;

  constructor(service: Service, private router: Router) {
    this.continents = service.getContinents();
    this.countryData = this.continents[0].items[0];
    this.citiesData = this.countryData.cities;
    this.tabPanelIndex = 0;
  }

  selectTab(e) {
    this.router.navigate([e.itemData.route]);
  }
}
