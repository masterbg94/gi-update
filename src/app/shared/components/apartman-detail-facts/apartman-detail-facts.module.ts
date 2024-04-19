import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApartmanDetailFactsComponent} from './apartman-detail-facts.component';
import {VideoModule} from '../video/video.module';
import {RouterModule} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
	imports: [
		CommonModule,
		VideoModule,
		RouterModule,
		TranslateModule

	],
	exports: [
		ApartmanDetailFactsComponent
	],
	declarations: [
		ApartmanDetailFactsComponent
	]
})
export class ApartmanDetailFactsModule {}
