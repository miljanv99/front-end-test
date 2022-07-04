import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Planet} from '../models/planet-model';
import {PlanetCardComponent} from '../planet-card/planet-card.component';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
    planet: Planet;

    distancesSun: number;
    distancesEarth: number;




  constructor(private service: DataService,
              @Inject(MAT_DIALOG_DATA)public data: Planet,
              private dialogRef: MatDialogRef<PlanetCardComponent>) {
              this.planet = new Planet();
  }





  ngOnInit(): void {
  }



  CreateNewPlanet(){
    this.service.addPlanet(this.planet).subscribe((DataResponse: Planet[]) => {
      this.dialogRef.close(this.planet);
      this.distancesSun = this.planet.distInMillionsKM.fromSun;
      this.distancesEarth = this.planet.distInMillionsKM.fromEarth;






    });
  }

}
