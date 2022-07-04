import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from '../models/planet-model';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

function getResponseArrayList(planetResponse: Planet) {

}

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planetInput: Planet;

  constructor() { }

  ngOnInit(): void {



  }



}
