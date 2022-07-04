import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Planet} from '../models/planet-model';
import {DataService} from '../services/data.service';
import {ActivatedRoute} from '@angular/router';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.scss']
})
export class PlanetTableComponent implements OnInit {
  @Input() planetTableInput: Planet;
  planetList: Planet[] = [];
  displayedColumns = ['id', 'planetName', 'planetColor', 'planetRadiusKM', 'distInMillionsKM.fromSun', 'distInMillionsKM.fromEarth'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: DataService,
              private route: ActivatedRoute) { }

  id: string;



  ngOnInit(): void {
    this.getAllPlanets();

    this.route.paramMap.subscribe(dataResponse => {
      this.id = dataResponse.get('id');

    });



  }

  getAllPlanets(){
    return this.service.getPlanets().subscribe((dataResponse) => {
      this.planetList = dataResponse;

    });
  }



}
