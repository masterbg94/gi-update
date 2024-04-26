import {Component, Input, OnInit} from '@angular/core';
import {Apartman, BuildingModel} from '../../model/building.model';
import {ImagePreviewComponent} from "../image-preview/image-preview.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-reserve-apartman',
  templateUrl: './reserve-apartman.component.html',
  styleUrls: ['./reserve-apartman.component.scss'],
})

export class ReserveApartmanComponent implements OnInit {
  @Input() apartment: Apartman;
  @Input() activeBuilding: BuildingModel;
  @Input() activeFloor;
  text: string = "Duplex";

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.activeFloor = localStorage.getItem('activeFloorId');
    setTimeout(() => {
    }, 2000);
  }

  openDialog(slika: any): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      data: {slika: slika},
      backdropClass: 'modal-backdrop-class'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
