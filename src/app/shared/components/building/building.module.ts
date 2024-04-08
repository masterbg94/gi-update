import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';
import {SlimModule} from '../SlimScroll/slim.module';

import {BuildingComponent} from './building.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		SlimModule,
		NgBoxModule,
		TranslateModule,
    NgBoxModule
	],
	exports: [
		BuildingComponent,
		RouterModule
	],
	declarations: [
		BuildingComponent
	],
	providers: [
		NgBoxService
	]
})
export class BuildingModule {}
