import { Component, OnInit } from '@angular/core';
import {Planet} from '../models/planet-model';
import {DataService} from '../services/data.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {CreateDialogComponent} from '../create-dialog/create-dialog.component';
import {Distance} from '../models/distance-model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planetList: Planet[] = [];
  distance: Distance[] = [];


  filterString: string = '';

  constructor(private service: DataService,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getAllPlanets();

  }

  getAllPlanets(){
    this.service.getPlanets().subscribe((dataResponse: Planet []) => {
      console.log(dataResponse);
      this.planetList = dataResponse;

    });
  }


  openDialogCreate(){
    this.dialog.open(CreateDialogComponent,{
      width: '500px'
    });
  }



}
