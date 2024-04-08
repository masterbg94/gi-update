import { AfterViewInit, ChangeDetectorRef, EventEmitter, Injectable, OnChanges, OnDestroy, OnInit, Output, Directive } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {TranslateService} from 'ng2-translate';
import {Subscription} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Directive()
@Injectable()
export class TranslateServices implements OnInit{

	private subscription:Subscription;
	 langs = [
		'en-GB',
		'sr-SP',
		'ru-RU'
	];
	@Output() languageChange:EventEmitter<any> = new EventEmitter();
	constructor(private activatedRoute:ActivatedRoute,
				private translate:TranslateService)
	{
		this.translate.addLangs(this.langs);
	}
	changeLanguage(lang:any) {
		this.translate.use(lang);
	}
	ngOnInit()
	{
		this.subscription = this.activatedRoute.queryParams.subscribe(
			(param:any) => {
				let locale = param['locale'];
				if(locale !== undefined) {
					this.translate.use(locale);
				}
			}
		);

	}
}
