import {NgModule} from '@angular/core';
import {CommonModule, NgSwitch} from '@angular/common';
import {FaqComponent} from './faq.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		CommonModule,
		TranslateModule
	],
	declarations: [
		FaqComponent,

	],
	exports: [
		FaqComponent,
	],

	providers: [
		NgSwitch
	]
})
export class FaqModule {}
