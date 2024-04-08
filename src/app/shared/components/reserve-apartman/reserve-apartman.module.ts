import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReserveApartmanComponent} from './reserve-apartman.component';
import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from '@angular/router';


@NgModule({
	imports: [
		CommonModule,
		NgBoxModule,
		TranslateModule,
		RouterModule
	],
	exports: [
		ReserveApartmanComponent,
	],
	declarations: [
		ReserveApartmanComponent,
	],
	providers: [
		NgBoxService
	]
})
export class ReserveApartmanModule {}
