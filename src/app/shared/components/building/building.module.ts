import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BuildingComponent} from './building.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		TranslateModule,
	],
	exports: [
		BuildingComponent,
		RouterModule
	],
	declarations: [
		BuildingComponent
	]
})
export class BuildingModule {}
