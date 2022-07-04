import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../models/planet-model';
import {DataService} from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {EditDialogComponent} from "../edit-dialog/edit-dialog.component";

@Component({
  selector: 'app-single-page-planet',
  templateUrl: './single-page-planet.component.html',
  styleUrls: ['./single-page-planet.component.scss']
})
export class SinglePagePlanetComponent implements OnInit {
  id: string;
  PlanetId: number;
  PlanetImg: string;
  PlanetName: string;
  PlanetDescription: string;
  PlanetRadius: number;
  PlanetColor: string;
  PlanetDistSun: number;
  PlanetDistEarth: number;
  PlanetImgUrl: string;



  constructor(private service: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(dataResponse => {
      this.id = dataResponse.get('id');
      // @ts-ignore
      this.service.getSinglePlanet(this.id).subscribe((planetResponse: Planet) => {
        this.PlanetId = planetResponse.id;
        this.PlanetImg = planetResponse.imageUrl;
        this.PlanetName = planetResponse.planetName;
        this.PlanetDescription = planetResponse.description;
        this.PlanetRadius = planetResponse.planetRadiusKM;
        this.PlanetColor = planetResponse.planetColor;
        this.PlanetDistSun = planetResponse.distInMillionsKM.fromSun;
        this.PlanetDistEarth = planetResponse.distInMillionsKM.fromEarth;
        this.PlanetImgUrl = planetResponse.imageUrl;



      });

    });


  }
  openDialogDelete(){
    this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {id: this.id, planetName: this.PlanetName}
    });

    console.log(this.route);
  }

  openDialogEdit(){
    this.dialog.open(EditDialogComponent,{
      width: '500px',
      data: {id: this.id, planetName: this.PlanetName, description: this.PlanetDescription, planetRadiusKM: this.PlanetRadius, planetColor: this.PlanetColor,
              distInMillionsKMSun: this.PlanetDistSun, distInMillionsKMEarth: this.PlanetDistEarth, imageUrl: this.PlanetImgUrl}
    });
  }





}
