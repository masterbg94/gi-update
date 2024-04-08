import {Component, Input} from '@angular/core';

import {RibbonStyle} from './ribbon-style';
import {ActivatedRoute} from '@angular/router';
import {BuildingModel} from '../../model/building.model';


@Component({

    selector: 'app-ribbon',
    templateUrl: './ribbon.component.html',
    styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent {

    @Input('style') style: RibbonStyle;

    @Input('building') building : BuildingModel;

}
