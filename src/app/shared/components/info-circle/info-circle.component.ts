import {Component} from '@angular/core';

@Component({

	selector: 'app-info-circle',
	templateUrl: './info-circle.component.html',
	styleUrls: ['./info-circle.component.scss']
})
export class InfoCircleComponent {
	public circles = [
		{
			icon: 'map-marker',
			description: 'Kraljev Trg bb, 31315 Zlatibor'
		},
		{
			icon: 'phone',
			description: '+381 (0) 63 313 444, +381 (0) 63 665 555',
		},
		{
			icon:  'envelope',
			description: 'goldinvestnekretnine@gmail.com'
		}
	];
}
