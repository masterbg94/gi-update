import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './pages/home/home.component';

import {SliderModule} from '../../shared/components/slider/slider.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';
import {SplitViewModule} from '../../shared/components/split-view/split-view.module';
import {VideoModule} from '../../shared/components/video/video.module';
import {WrapperModule} from '../../shared/components/wrapper/wrapper.module';
import {BlockListModule} from '../../shared/components/block-list/block-list.module';
import {FaqModule} from '../../shared/components/faq/faq.module';
import {MapModule} from '../../shared/components/map/map.module';
import {FactsModule} from '../../shared/components/facts/facts.module';
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
    	CommonModule,
        HomeRoutingModule,
	    TranslateModule,
        SliderModule,
        RibbonModule,
        SplitViewModule,
        VideoModule,
        WrapperModule,
        BlockListModule,
        FaqModule,
        MapModule,
		FactsModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
