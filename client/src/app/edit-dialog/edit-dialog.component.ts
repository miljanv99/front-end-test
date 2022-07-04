import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Planet} from '../models/planet-model';
import {PlanetCardComponent} from '../planet-card/planet-card.component';
import {PopupDialogComponent} from "../popup-dialog/popup-dialog.component";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

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
              @Inject(MAT_DIALOG_DATA) public data: Planet,
              private dialogRef: MatDialogRef<PlanetCardComponent>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    // @ts-ignore
    this.service.getSinglePlanet(this.data.id).subscribe((planetResponse: Planet) => {
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
  }



  openPopup(s: string, s1: string){
    this.dialog.open(PopupDialogComponent,{
      width: '500px',
      data: {id: this.PlanetId, planetName: this.PlanetName, description: this.PlanetDescription, planetRadiusKM: this.PlanetRadius, planetColor: this.PlanetColor,
        distInMillionsKMSun: this.PlanetDistSun, distInMillionsKMEarth: this.PlanetDistEarth, imageUrl: this.PlanetImgUrl }
    });
  }


}
