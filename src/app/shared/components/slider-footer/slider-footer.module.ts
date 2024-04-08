import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {RouterModule} from '@angular/router';
import {SliderFooterComponent} from './slider-footer.component';
import {SliderFooterItemComponent} from './slider-item-footer.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		TranslateModule
	],
	exports: [
		SliderFooterComponent,
		SliderFooterItemComponent
	],
	declarations: [
		SliderFooterComponent,
		SliderFooterItemComponent
	]
})
export class SliderFooterModule {}
