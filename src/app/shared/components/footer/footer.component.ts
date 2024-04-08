import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {TranslateServices} from '../../services/translate.service';

@Component({

    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
	providers:[
		TranslateServices
	]
})
export class FooterComponent {}
