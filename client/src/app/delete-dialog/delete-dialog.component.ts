import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Planet} from '../models/planet-model';
import {DataService} from '../services/data.service';
import {PlanetCardComponent} from '../planet-card/planet-card.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private service: DataService,
              @Inject(MAT_DIALOG_DATA) public data: Planet,
              private router: Router,
              private dialogRef: MatDialogRef<PlanetCardComponent>) { }



  ngOnInit(): void {

  }

  deleteSelectedPlanet(){
    this.service.deletePlanet(this.data.id).subscribe((dataResponse: Planet[]) => {
      this.dialogRef.close(this.data);
      this.router.navigate(['']);

    });
  }

}
