import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReserveApartmanComponent} from './reserve-apartman.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from '@angular/router';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
	imports: [
		CommonModule,
		TranslateModule,
		RouterModule,
    MatDialogModule
	],
	exports: [
		ReserveApartmanComponent,
	],
	declarations: [
		ReserveApartmanComponent,
	]
})
export class ReserveApartmanModule {}
