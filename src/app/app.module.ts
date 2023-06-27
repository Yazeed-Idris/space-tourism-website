import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { TechnologyComponent } from './technology/technology.component';
import { CrewComponent } from './crew/crew.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinationComponent,
    TechnologyComponent,
    CrewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
