import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FooterComponent} from './footer.component';
import {SliderFooterModule} from '../slider-footer/slider-footer.module';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
		SliderFooterModule,
		TranslateModule,
		RouterModule
    ],
    exports: [
        FooterComponent
    ],
    declarations: [
        FooterComponent
    ]
})
export class FooterModule {

}
