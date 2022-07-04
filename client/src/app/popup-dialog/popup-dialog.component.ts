import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Planet} from '../models/planet-model';
import {DataService} from '../services/data.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PlanetCardComponent} from '../planet-card/planet-card.component';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  @Output() changePlanet = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: Planet,
              private service: DataService,
              private dialogRef: MatDialogRef<PlanetCardComponent>) {
              this.changePlanet.emit();
  }

  ngOnInit(): void {
  }

  editPlanet(){
    this.service.editPlanet(this.data).subscribe((dataResponse: Planet[]) => {
      this.dialogRef.close(this.data);





    });
  }

}
