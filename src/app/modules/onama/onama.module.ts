import {NgModule} from '@angular/core';

import {HeaderModule} from '../../shared/components/header/header.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {InfoCircleModule} from '../../shared/components/info-circle/info-circle.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';

import {OnamaComponent} from './pages/onama.component';
import {OnamaRoutingModule} from './onama-routing.module';
import {FactsModule} from '../../shared/components/facts/facts.module';
import {WrapperModule} from '../../shared/components/wrapper/wrapper.module';
import {FaqModule} from '../../shared/components/faq/faq.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
	imports: [
		OnamaRoutingModule,
		TranslateModule,

		HeaderModule,
		ContainerModule,
		InfoCircleModule,
		RibbonModule,
		RibbonModule,
		FactsModule,
		WrapperModule,
		FaqModule

	],
	declarations: [
		OnamaComponent
	]
})
export class OnamaModule {}
