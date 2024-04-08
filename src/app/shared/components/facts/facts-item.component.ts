import {Component, Input} from '@angular/core';

@Component({

	selector: 'app-facts-item',
	templateUrl: './facts-item.component.html',
	styleUrls: ['./facts-item.component.scss']
})
export class FactsItemComponent {

	@Input('title') title: string;
}
