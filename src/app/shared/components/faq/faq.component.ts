import {Component, ViewChild} from '@angular/core';


@Component({

    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']

})
export class FaqComponent {
	active = 1;
	value = 1;
	@ViewChild('one') one;
	@ViewChild('two') two;


	setActive(item: number)
	{
		this.active = item;
		this.value = item;
	}

	onClicked(item: string) {
		this.one = item;
	}
}
