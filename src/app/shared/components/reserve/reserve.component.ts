import {Component, Input, OnInit} from '@angular/core';

import {BuildingModel} from '../../model/building.model';

@Component({

  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})

export class ReserveComponent implements OnInit {


  @Input() activeBuilding: BuildingModel;

  constructor() {
  }

  ngOnInit() {

  }
}
