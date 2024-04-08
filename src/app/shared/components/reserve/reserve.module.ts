import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReserveComponent} from './reserve.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from '@angular/router';


@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule
	],
	exports: [
		ReserveComponent
	],
	declarations: [
		ReserveComponent
	]
})
export class ReserveModule {}
