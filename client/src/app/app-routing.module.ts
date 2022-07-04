import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanetListComponent} from './planet-list/planet-list.component';
import {SinglePagePlanetComponent} from './single-page-planet/single-page-planet.component';


const routes: Routes = [
  {path: '', component: PlanetListComponent},
  {path: 'planet/:id', component: SinglePagePlanetComponent},
  {path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
