import {NgModule} from '@angular/core';

import {ContactComponent} from './pages/contact/contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {InfoCircleModule} from '../../shared/components/info-circle/info-circle.module';
import {ContactFormModule} from '../../shared/components/contact-form/contact-form.module';
import {FormsModule} from '@angular/forms';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';

import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		ContactRoutingModule,
		HeaderModule,
		ContainerModule,
		InfoCircleModule,
		ContactFormModule,
		FormsModule,
		RibbonModule,
		TranslateModule

	],
	declarations: [
		ContactComponent
	]
})
export class ContactModule {}
