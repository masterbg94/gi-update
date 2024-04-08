import {
	Component, ElementRef, Input,
	ViewChild
} from '@angular/core';


@Component({

    selector: 'app-slider-item',
    templateUrl: './slider-item.component.html'
})
export class SliderItemComponent{

    @ViewChild('title') title: ElementRef | undefined;

    @ViewChild('subTitle') subTitle: ElementRef | undefined;

    @ViewChild('description') description: ElementRef | undefined;

    @Input('background') background = 'slider1.jpg';

    @ViewChild('button') button: ElementRef | undefined;

    @Input('link') link: string;

	@Input() show: boolean;

	@Input() hideTitleOnMobile: boolean;
	@Input() hideSubTitleOnMobile: boolean;
	@Input() hideDescriptionOnMobile: boolean;
	@Input() hideButtonOnMobile: boolean;

	constructor(){}


    getTitle(): string {

        return this.title.nativeElement.innerText;
    }

    getSubTitle(): string {

        return this.subTitle.nativeElement.innerText;
    }

    getDescription(): string {

        return this.description.nativeElement.innerText;
    }

    getButton(): string {
    	return this.button.nativeElement.innerText;
	}

	isTitleVisibleOnMobile() {
		return !this.hideTitleOnMobile;
	}

	isButtonVisibleOnMobile() {
		return !this.hideButtonOnMobile;
	}
}
