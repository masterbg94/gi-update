import { Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({

	selector: 'app-slider-footer-item',
	templateUrl: './slider-item-footer.component.html'
})
export class SliderFooterItemComponent{

	@ViewChild('description') description: ElementRef;
	@ViewChild('name') name: ElementRef;

	@Input('profile') profile;

	constructor(){
	}


	getDescription(): string {

		return this.description.nativeElement.innerText;

	}

	getName(): string {
		return this.name.nativeElement.innerText;
	}
}
