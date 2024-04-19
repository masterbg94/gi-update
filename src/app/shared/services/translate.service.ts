import {EventEmitter, Injectable, OnInit, Output, Directive} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription, take} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Directive()
@Injectable()
export class TranslateServices implements OnInit {

  private subscription: Subscription;
  langs = [
    'en-GB',
    'sr-SP',
    'ru-RU'
  ];
  @Output() languageChange: EventEmitter<any> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute,
              private translate: TranslateService) {
    this.translate.addLangs(this.langs);
  }

  changeLanguage(lang: any) {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.pipe(take(1)).subscribe(
      (param: any) => {
        let locale = param['locale'];
        if (locale !== undefined) {
          this.translate.use(locale);
        }
      }
    );

  }
}
