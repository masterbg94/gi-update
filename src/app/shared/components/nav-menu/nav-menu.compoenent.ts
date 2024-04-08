import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { GarageService } from '../../services/garage.service';
import {TranslateServices} from '../../services/translate.service';


@Component({
	selector: 'app-nav-menu',
	templateUrl: './nav-menu.component.html',
	styleUrls: ['./nav-menu.component.scss'],
	providers: [
		TranslateServices,
    GarageService
	]
})
export class NavMenuCompoenent implements OnInit{
	logo = '../../assets/img/loogo.png';

	navbarCollapsed;
	zatvori;

	activeLang ='sr' || 'en' || 'ru';

	constructor(private service: TranslateServices,
              private detetctChange:ChangeDetectorRef,
              public garageService: GarageService) {}

	ngOnInit(){
		this.navbarCollapsed = false;
	}

	clickGarage() {
    this.navbarCollapsed;
	  this.garageService.isGarage = false;
  }


	IsGarage() {
	  this.garageService.isGarage = false;
  }

	  changeLang(lang):any
	{
		this.service.changeLanguage(lang);
	}

	_changeDetection():void{
		this.detetctChange.detectChanges();
	}



}
