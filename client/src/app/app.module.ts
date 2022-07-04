import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PlanetTableComponent } from './planet-table/planet-table.component';
import {MatTableModule} from '@angular/material/table';
import { SinglePagePlanetComponent } from './single-page-planet/single-page-planet.component';
import { FilterPipe } from './pipes/filter.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import {MatSortModule} from '@angular/material/sort';




@NgModule({
  declarations: [AppComponent, PlanetCardComponent, PlanetListComponent, PlanetTableComponent, SinglePagePlanetComponent, FilterPipe, CreateDialogComponent, DeleteDialogComponent, EditDialogComponent, PopupDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
