import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GarageService} from '../../services/garage.service';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  providers: [
    GarageService
  ]
})
export class NavMenuCompoenent implements OnInit {
  logo = '../../assets/img/loogo.png';

  navbarCollapsed;
  zatvori;

  activeLang = 'sr' || 'en' || 'ru';

  constructor(private service: TranslateService,
              private detetctChange: ChangeDetectorRef,
              public garageService: GarageService) {
  }

  ngOnInit() {
    this.navbarCollapsed = false;
  }

  clickGarage() {
    this.navbarCollapsed;
    this.garageService.isGarage = false;
  }


  IsGarage() {
    this.garageService.isGarage = false;
  }

  changeLang(lang): any {
    this.service.use(lang)
  }

  _changeDetection(): void {
    this.detetctChange.detectChanges();
  }


}
