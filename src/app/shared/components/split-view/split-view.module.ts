import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SplitViewComponent} from './split-view.component';
import {ViewComponent} from './view.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SplitViewComponent,
        ViewComponent
    ],
    declarations: [
        SplitViewComponent,
        ViewComponent
    ]
})
export class SplitViewModule {}
