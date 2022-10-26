import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  DxTabPanelModule,
  DxTreeViewModule,
  DxTemplateModule,
  DxListModule,
  DxTreeListModule,
  DxTabsModule,
} from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CountryComponent, SecondComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxTreeViewModule,
    DxTemplateModule,
    DxListModule,
    DxTreeListModule,
    DxTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
