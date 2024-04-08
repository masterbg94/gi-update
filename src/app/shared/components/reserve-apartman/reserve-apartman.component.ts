import {Component, Input, OnInit} from '@angular/core';

import {Apartman, BuildingModel} from '../../model/building.model';

@Component({

	selector: 'app-reserve-apartman',
	templateUrl: './reserve-apartman.component.html',
	styleUrls: ['./reserve-apartman.component.scss'],

})

export class ReserveApartmanComponent implements OnInit
{
	@Input() apartment: Apartman;
	@Input() activeBuilding: BuildingModel;

	@Input() activeFloor;

	text:string="Duplex";

	constructor() {

	}

	ngOnInit(): void
	{
		this.activeFloor = localStorage.getItem('activeFloorId');
    setTimeout(() => {
    },2000);
	}
}
