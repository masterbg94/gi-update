import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactsComponent} from './facts.component';
import {FactsItemComponent} from './facts-item.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
	imports: [
		CommonModule,
		TranslateModule
	],
	exports: [
		FactsComponent,
		FactsItemComponent

	],
	declarations: [
		FactsComponent,
		FactsItemComponent
	]
})
export class FactsModule {}
