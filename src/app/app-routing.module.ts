import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DestinationComponent} from "./destination/destination.component";
import {CrewComponent} from "./crew/crew.component";
import {TechnologyComponent} from "./technology/technology.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'crew', component: CrewComponent},
  { path: 'technology', component: TechnologyComponent},
]
@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule {}
