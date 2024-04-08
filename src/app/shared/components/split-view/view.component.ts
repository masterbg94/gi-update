import {Component, Input, ViewEncapsulation} from '@angular/core';

import {ViewStyle} from './view-style';

@Component({

    selector: 'app-split-view-item',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ViewComponent {

    @Input('style') style: ViewStyle;
}
