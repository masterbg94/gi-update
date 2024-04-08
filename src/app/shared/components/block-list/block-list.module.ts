import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlockListComponent} from './block-list.component';
import {BlockListItemComponent} from './block-list-item.component';
import { RouterModule} from '@angular/router';
import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';
import {TranslateModule} from "@ngx-translate/core";
import {ArraySortPipe} from '../../pipes/filterArrayPipe';

@NgModule({
    imports: [
        CommonModule,
		RouterModule,
		NgBoxModule,
		TranslateModule
    ],
    exports: [
        BlockListComponent,
        BlockListItemComponent
    ],
    declarations: [
        BlockListComponent,
        BlockListItemComponent,
		ArraySortPipe
    ],
	providers: [
		NgBoxService
	]
})
export class BlockListModule {}
