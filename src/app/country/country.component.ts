import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { City, Continent, Country, Service } from '../app.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  continents: Continent[];
  countryData: Country;
  citiesData: City[];

  constructor(service: Service, private route: ActivatedRoute) {
    this.continents = service.getContinents();
    this.countryData = this.continents[0].items[0];
    this.citiesData = this.countryData.cities;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')!;
      this.countryData =
        this.continents[+id.split('_')[0] - 1].items[+id.split('_')[1] - 1];
      this.citiesData = this.countryData.cities;
    });
  }
}
