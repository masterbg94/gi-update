import {Component, Input, OnInit} from '@angular/core';

@Component({

	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
	@Input() img = '';
	@Input() public show = false;
	@Input() public map = false;
	@Input() hideOnMobile: boolean;

	isTitleVisibleOnMobile() {
		return !this.hideOnMobile;
	}

	ngOnInit(){

	}

}
