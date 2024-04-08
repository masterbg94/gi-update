import {Component, OnInit} from '@angular/core';

@Component({
	moduleId:    module.id,
	templateUrl: './contact.component.html',
	styleUrls:   ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
	public show = true;
	img ='../../../assets/img/contactLeonardo.jpg';
	public map = true;
	screenWidth:number;

	ngOnInit()
	{
		this.screenWidth = window.innerWidth;

		if(this.screenWidth < 570){
			this.img = '';
		}
	}
}
