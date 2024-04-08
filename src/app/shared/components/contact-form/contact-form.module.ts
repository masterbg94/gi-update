import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TranslateModule} from "@ngx-translate/core";

import {ContactFormComponent} from './contact-form.component';







@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule


	],
	exports: [
		ContactFormComponent
	],
	declarations: [
		ContactFormComponent
	]
})
export class ContactFormModule{}
